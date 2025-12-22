import { useState } from "react";

function Testpage() {
  const [students, setstudents] = useState(["Gokul", "Mouz"]);
  const [newStudent, setNewStudent] = useState("");

  // ADD STUDENT
  const addstudent = () => {
    if (newStudent !== "") {
      setstudents([...students, newStudent]);
      setNewStudent("");
    } else {
      alert("Name enter pannunga");
    }
  };

  // DELETE STUDENT
  const deletestudent = (indexToRemove) => {
    setstudents(
      students.filter((value, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <h3>Total Students: {students.length}</h3>

      <input
        type="text"
        placeholder="Enter student name"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
      />

      <button onClick={addstudent}>Add</button>

      {students.map((value, index) => (
        <p key={index}>
          {index} - {value}
          <button onClick={() => deletestudent(index)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default Testpage;
