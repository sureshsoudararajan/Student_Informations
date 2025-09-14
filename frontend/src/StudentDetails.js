import React from 'react';

const StudentDetails = ({ student, onBack }) => {
  if (!student) {
    return null;
  }

  // A helper function to render a detail row, so we don't repeat the same markup
  const renderDetail = (label, value) => (
    <div className="row mb-2">
      <div className="col-sm-4">
        <strong>{label}</strong>
      </div>
      <div className="col-sm-8">{value || 'N/A'}</div>
    </div>
  );

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h3>{student.name}</h3>
        <button className="btn btn-secondary" onClick={onBack}>
          Back to Search
        </button>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            {renderDetail('Admission Number', student.admission_number)}
            {renderDetail('Date of Admission', student.date ? new Date(student.date).toLocaleDateString() : 'N/A')}
            {renderDetail('Email', student.mailid)}
            {renderDetail('Type of Admission', student.type_of_admission)}
            {renderDetail('Gender', student.gender)}
            {renderDetail('Department', student.dept)}
            {renderDetail('Date of Birth', student.dob ? new Date(student.dob).toLocaleDateString() : 'N/A')}
            {renderDetail('Community', student.community)}
            {renderDetail('Phone Number', student.phone_number)}
            {renderDetail('Medium', student.medium)}
            {renderDetail('Board of Study', student.board_of_study)}
          </div>
          <div className="col-md-6">
            {renderDetail("Father's Name", student.father_name)}
            {renderDetail("Father's Occupation", student.father_occupation)}
            {renderDetail("Mother's Name", student.mother_name)}
            {renderDetail("Mother's Occupation", student.mother_occupation)}
            {renderDetail('Hostel', student.hostel)}
            {renderDetail('College Bus', student.college_bus)}
          </div>
        </div>
        <hr />
        <h4>Address</h4>
        <p>
          {student.address1}, {student.address2}, {student.address3}<br />
          {student.district}, {student.state} - {student.pincode}
        </p>
        <hr />
        <h4>Academic Details</h4>
        <div className="row">
            <div className="col-md-6">
                {renderDetail('10th School', student.ten_school)}
                {renderDetail('10th Mark', student.ten_mark)}
                {renderDetail('12th School', student.twelth_scholl)}
                {renderDetail('12th Mark', student.twelth_mark)}
            </div>
            <div className="col-md-6">
                {renderDetail('Maths Mark', student.maths)}
                {renderDetail('Physics Mark', student.physics)}
                {renderDetail('Chemistry Mark', student.chemistry)}
                {renderDetail('Cut-off Mark', student.cut_off)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
