import React, { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import { useNavigate } from "react-router-dom";
import { getData } from "../utils/storageHelper";
const Studentlist = () => {
  const [selectedstud, setSelectedstud] = useState(null);
  const [studentlist, setStudentlist] = useState([]);
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const allStudent = getData();
    setStudentlist(allStudent);
  }, []
  );

  function addstudent() {
    //setShow(true);
    navigate("/student-add")
  }

  const openEditForm = (s) => {
    setSelectedstud(s);
    setEditShow(true);
  };


  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Enrollment number</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
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