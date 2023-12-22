import React, { useState } from "react";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
const Studentlist = () => {
  const [selectedstud, setSelectedstud] = useState(null);
  const [studentlist, setStudentlist] = useState([]);
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  function addstudent() {
    setShow(true);
  }

  const openEditForm = (s) => {
    setSelectedstud(s);
    setEditShow(true);
  };


  return (
    <div>
      <div>
        <table>
          <tr>
            <th>Enrollment number</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
          {studentlist.map((s, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{s.name}</td>
                <td>{s.phone}</td>
                <td><button onClick={() => openEditForm(s)}>EDIT</button></td>
              </tr>
            );
          })}
        </table>
      </div>
      {!show ? (
        <button onClick={addstudent}>ADD</button>
      ) : (
        <AddStudent setStudentlist={setStudentlist} hideForm={setShow} />
      )}

      {editShow ? (
        <EditStudent
          studentlist={studentlist}
          setStudentlist={setStudentlist}
          selectedstud={selectedstud}
          setSelectedstud={setSelectedstud}
          hideEditForm={setEditShow}
        />
      ) : null}
    </div>
  );
};

export default Studentlist;