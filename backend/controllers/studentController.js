
const fs = require('fs').promises;
const path = require('path');

const readStudentData = async () => {
  const filePath = path.join(__dirname, '..', 'data', 'students.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

const searchStudents = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || query.length < 3) {
      return res
        .status(400)
        .json({ message: 'Query must be at least 3 characters long' });
    }

    const students = await readStudentData();
    const filteredStudents = students
      .filter((student) =>
        student.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);

    res.json(filteredStudents);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { searchStudents };
