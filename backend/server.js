const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3002;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// *****************************************************************************
// IMPORTANT: Replace the placeholder values below with your actual
// PostgreSQL database connection details.
// *****************************************************************************
const pool = new Pool({
  user: 'your_username',      // e.g., 'postgres'
  host: 'localhost',
  database: 'studentdetails',
  password: 'your_password',
  port: 5432,
});

// API endpoint to search for students by name
app.get('/api/students', async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  try {
    const result = await pool.query(
      'SELECT sno, name, admission_number, dept FROM students_informations WHERE name ILIKE $1',
      [`%${name}%`]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint to get details for a specific student by admission_number
app.get('/api/students/:admission_number', async (req, res) => {
  const { admission_number } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM students_informations WHERE admission_number = $1',
      [admission_number]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
