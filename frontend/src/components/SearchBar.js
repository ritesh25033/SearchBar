
import { useState } from "react"
import { useDebounce } from "../hooks/useDebounce"
import { searchStudents } from "../services/api"
import StudentDetails from "./StudentDetails"
import "./SearchBar.css"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const debouncedSearch = useDebounce(async (searchQuery) => {
    if (searchQuery.length < 3) {
      setResults([])
      return
    }

    setLoading(true)
    setError(null)
    try {
      const data = await searchStudents(searchQuery)
      setResults(data)
    } catch (error) {
      setError("Failed to fetch students. Please try again.")
      console.error("Error fetching students:", error)
    } finally {
      setLoading(false)
    }
  }, 300)

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    debouncedSearch(value)
  }

  const handleSelectStudent = (student) => {
    setSelectedStudent(student)
    setQuery("")
    setResults([])
  }

  const highlightMatch = (text, query) => {
    if (!query) return text
    const regex = new RegExp(`(${query})`, "gi")
    return text.split(regex).map((part, index) => (regex.test(part) ? <mark key={index}>{part}</mark> : part))
  }

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a student..."
        className="search-input"
      />
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((student) => (
            <li key={student.rollNumber} onClick={() => handleSelectStudent(student)}>
              {highlightMatch(student.name, query)}
            </li>
          ))}
        </ul>
      )}
      {selectedStudent && <StudentDetails student={selectedStudent} />}
    </div>
  )
}

export default SearchBar

