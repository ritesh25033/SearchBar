// const API_URL = "http://localhost:5000/api"

const API_URL= "https://searchbar-3xns.onrender.com/api"

export const searchStudents = async (query) => {
  const response = await fetch(`${API_URL}/students?query=${query}`)
  if (!response.ok) {
    throw new Error("Failed to fetch students")
  }
  return response.json()
}

