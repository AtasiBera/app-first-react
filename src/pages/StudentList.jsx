
import React, { useState } from "react";


export default function StudentList() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [studentlist, setStudentlist] = useState([]);
  const [show, setShow] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedStudent, setselectedStudent] = useState(null);

  const studentAdd = () => {
    
    const newStudent = { name, phone }

    setStudentlist((currentdata) => {
      newStudent["id"] = currentdata.length + 1;
      currentdata.push(newStudent);
      return [...currentdata];
    });
    closeStudentForm();
  }

  const displayStudentForm = () => {
    setShow(true);
  }

  const displayEditForm = (student) => {
    setselectedStudent(student);
    setShowEditForm(true);
  }
  const closeStudentForm = () => {
    setShow(false);
    setName("");
    setPhone("");
  }
  const closeEditFrom = () => {
    setShowEditForm(false);
    //selectedStudent.name ("");
    //selectedStudent.phone("");

  }

  const updateStudent = () => {
    studentlist.map((student, index) => {
      if (student.id === selectedStudent.id) {
        setStudentlist((currentdata) => {
          currentdata[index] = selectedStudent;
          return [...currentdata];
        });
      } else {
        alert("Can't Update");
      }
    });
  }

  return (
    <div>
      <div className="container">
        <h3>My State</h3>
        <h6>{name}</h6>
        <h6>{phone}</h6>
        <h6>{JSON.stringify(studentlist)}</h6>
        <h6>{show}</h6>
        <h3>List Of Student</h3>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">E No</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentlist.map((student, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td><button onClick={() => displayEditForm(student)}>Edit</button></td>
              </tr>

            })}

          </tbody>
        </table>
        {!show ?
          <div className="student-form my-3">
            <div className="row">
              <div className="col mb-2">
                <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  aria-label="Enter Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <div className="col mb-2">
                  <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone"
                    aria-label="Enter Phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }} />
                </div>
              </div>
              <button type="button" className="btn btn-success" onClick={studentAdd}>Submit</button>
              <button type="button" className="btn btn-danger" style={{ marginLeft: "5px" }} onClick={closeStudentForm}>Close</button>
            </div>
          </div>
          : <button type="button" className="btn btn-success" onClick={displayStudentForm}>Add</button>

        }

        {
          showEditForm ? (
            <div className="student-form my-3">
              <div className="row">
                <div className="col mb-2">
                  <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                  <span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      aria-label="Enter Name"
                      value={selectedStudent.name}
                      onChange={(e) => {
                        setselectedStudent((currentdata) => {
                          currentdata.name = e.target.value
                          return { ...currentdata }
                        });
                      }}
                    />
                 
                    <div className="col mb-2">
                    <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone"
                      aria-label="Enter Phone"
                      value={selectedStudent.phone}
                      onChange={(e) => {
                        setselectedStudent((currentdata) => {
                          currentdata.phone = e.target.value
                          return { ...currentdata }
                        });
                      }}
                    />  
                  </div>
                  </span>
                </div>
                <button type="button" className="btn btn-success" onClick={updateStudent}>submit</button>
                <button type="button" className="btn btn-danger" style={{ marginLeft: "5px" }} onClick={closeEditFrom}>Close</button>
              </div>
            </div>

          ) : null
        }
      </div>
    </div>

  )
}
