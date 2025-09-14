import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentSearch = ({ onStudentSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        handleSearch(searchTerm);
      } else {
        setResults([]);
        setError('');
      }
    }, 300); // 300ms delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearch = async (searchTerm) => {
    setError('');
    try {
      const response = await axios.get(`http://localhost:3002/api/students?name=${searchTerm}`);
      setResults(response.data);
      if (response.data.length === 0) {
        setError('No students found.');
      }
    } catch (err) {
      setError('Error fetching data from the server.');
      console.error(err);
    }
  };

  const handleSelect = async (admissionNumber) => {
    try {
      const response = await axios.get(`http://localhost:3002/api/students/${admissionNumber}`);
      onStudentSelect(response.data);
    } catch (err) {
      setError('Error fetching student details.');
      console.error(err);
    }
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Start typing a student name to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {results.length > 0 && (
        <ul className="list-group">
          {results.map((student) => (
            <li
              key={student.sno}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(student.admission_number)}
              style={{ cursor: 'pointer' }}
            >
              <h5>{student.name}</h5>
              <p className="mb-1">
                Admission No: {student.admission_number} | Department: {student.dept}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentSearch;