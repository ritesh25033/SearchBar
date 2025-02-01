import SearchBar from "../components/SearchBar"
import "./HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Student Search</h1>
        <SearchBar />
      </div>
    </div>
  )
}

export default HomePage

