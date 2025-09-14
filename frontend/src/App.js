import React, { useState } from 'react';
import StudentSearch from './StudentSearch';
import StudentDetails from './StudentDetails';

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
  };

  const handleBackToSearch = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Information System</h1>
      {selectedStudent ? (
        <StudentDetails student={selectedStudent} onBack={handleBackToSearch} />
      ) : (
        <StudentSearch onStudentSelect={handleStudentSelect} />
      )}
    </div>
  );
}

export default App;