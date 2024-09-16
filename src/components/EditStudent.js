import React, { useState, useEffect } from "react";

export default function EditStudent({ handleEditSubmit, selectedEditData }) {
  const [student, setStudent] = useState(selectedEditData || {});

  useEffect(() => {
    console.log("Selected Edit Data:", selectedEditData); // Check if student data is coming correctly
    setStudent(selectedEditData);
  }, [selectedEditData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(student).forEach((key) => {
      formData.append(key, student[key]);
    });
    console.log("Student ID in handleSubmit:", student.student_id); // Debug student_id here
    handleEditSubmit(formData, student.student_id); // Pass student_id for editing
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        value={student.first_name || ""}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="last_name"
        value={student.last_name || ""}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="number"
        name="age"
        value={student.age || ""}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="text"
        name="address"
        value={student.address || ""}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="grade"
        value={student.grade || ""}
        onChange={handleChange}
        placeholder="Grade"
      />
      <input
        type="text"
        name="major"
        value={student.major || ""}
        onChange={handleChange}
        placeholder="Major"
      />
      <button type="submit">Save</button>
    </form>
  );
}
