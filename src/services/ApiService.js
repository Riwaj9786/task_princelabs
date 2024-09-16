import axios from "axios";

// Base URL for the API
const baseURL = "http://127.0.0.1:8025/student/";

// Get all students
export function getstudent() {
  return axios
    .get(baseURL)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching students:", error.response || error);
      throw error;
    });
}

// Add a new student
export function addstudent(data) {
  return axios
    .post(baseURL, data)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error adding student:", error.response || error);
      throw error;
    });
}

// Edit an existing student
export function editstudent(id, student) {
  return axios
    .put(`${baseURL}${id}/`, {
      first_name: student.get("first_name"),
      last_name: student.get("last_name"),
      age: student.get("age"),
      address: student.get("address"),
      grade: student.get("grade"),
      major: student.get("major"),
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(
        `Error updating student with ID ${id}:`,
        error.response || error
      );
      throw error;
    });
}

// Delete a student
export function deletestudent(id) {
  return axios
    .delete(`${baseURL}${id}/`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(
        `Error deleting student with ID ${id}:`,
        error.response || error
      );
      throw error;
    });
}
