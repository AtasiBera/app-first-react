import React, { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import { useNavigate } from "react-router-dom";
import { getData } from "../utils/storageHelper";
const Studentlist = () => {

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
    //send data using navigate state
    //setShow(true);
    navigate("/student-add")
  }

  const openEditForm = (s) => {
    //send data with query param
   //send data using navigate state
   //navigate("/student-edit",{state:{id:s}});
 //send data in query string or search param
  // navigate(`/student-edit?id=${s}`);

  //3)send data in path variable or param
//NOTE:need to set path name in route like this path:"/student-edit/:id"
  navigate(`/student-edit/${s}`);

   // setSelectedstud(s);
   // setEditShow(true);
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
                  <td><button onClick={() => openEditForm(s.id)}>EDIT</button></td>
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