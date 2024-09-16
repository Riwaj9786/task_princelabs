import React, { useState, useEffect } from "react";
import {
  getstudent,
  addstudent,
  editstudent,
  deletestudent,
} from "../services/ApiService";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showEditStudentForm, setShowEditStudentForm] = useState(false);
  const [selectedEditData, setSelectedEditData] = useState(null);

  useEffect(() => {
    let mount = true;
    getstudent().then((res) => {
      if (mount) {
        setStudents(res.students || res);
      }
    });
    return () => (mount = false);
  }, []);

  const handleAddSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(e.target); // Create FormData from form
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      age: formData.get("age"),
      address: formData.get("address"),
      grade: formData.get("grade"),
      major: formData.get("major"),
    };

    addstudent(data)
      .then((res) => {
        setStudents((prevStudents) => [...prevStudents, res]);
        setShowAddStudentForm(false); // Hide the add form after successful addition
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  const handleEditBtn = (student) => {
    console.log("Student selected for editing:", student);
    setSelectedEditData(student);
    setShowEditStudentForm(true);
    setShowAddStudentForm(false);
  };

  const handleEditSubmit = (formData, id) => {
    editstudent(id, formData)
      .then((res) => {
        // Directly update students with new data
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student.student_id === id ? res : student
          )
        );
        setShowEditStudentForm(false); // Close the edit form
      })
      .catch((error) => {
        console.error("Error during edit submit:", error);
      });
  };

  const handleDelete = (id) => {
    console.log("Deleting student with ID:", id);
    deletestudent(id)
      .then(() => {
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.student_id !== id)
        );
      })
      .catch((error) => {
        console.error(`Error deleting student with ID ${id}:`, error);
      });
  };

  return (
    <div>
      <h3>STUDENT LIST</h3>
      <table border={"2px"} cellPadding={"10px"}>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Address</td>
            <td>Grade</td>
            <td>Major</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(students) &&
            students.map((student) => (
              <tr key={student.student_id}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
                <td>{student.grade}</td>
                <td>{student.major}</td>
                <td>
                  <button onClick={() => handleEditBtn(student)}>Edit</button>
                  <button onClick={() => handleDelete(student.student_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          setShowAddStudentForm(true);
          setShowEditStudentForm(false);
        }}
      >
        Add New Student
      </button>
      {showAddStudentForm && <AddStudent handleAddSubmit={handleAddSubmit} />}
      {showEditStudentForm && (
        <EditStudent
          handleEditSubmit={handleEditSubmit}
          selectedEditData={selectedEditData}
        />
      )}
    </div>
  );
}
