import React from "react";

export default function AddStudent({ handleAddSubmit }) {
  return (
    <form onSubmit={handleAddSubmit}>
      <input type="text" name="first_name" placeholder="First Name" required />
      <input type="text" name="last_name" placeholder="Last Name" required />
      <input type="number" name="age" placeholder="Age" required />
      <input type="text" name="address" placeholder="Address" required />
      <input type="text" name="grade" placeholder="Grade" required />
      <input type="text" name="major" placeholder="Major" required />
      <button type="submit">Add Student</button>
    </form>
  );
}
