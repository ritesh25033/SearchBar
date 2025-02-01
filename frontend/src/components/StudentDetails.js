import "./StudentDetails.css"

const StudentDetails = ({ student }) => {
  return (
    <div className="student-details">
      <h2>{student.name}</h2>
      <p>Class: {student.class}</p>
      <p>Roll Number: {student.rollNumber}</p>
    </div>
  )
}

export default StudentDetails

