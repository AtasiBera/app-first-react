import React, { useState } from "react";
import { setData,getData } from "../utils/storageHelper";
import { Navigate, useNavigate } from "react-router-dom";

export default function AddStudent({ setStudentlist, hideForm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate =useNavigate()
  function addNewstudent() {
  const newStudent = { name, phone };
  //   //setStudentlist((currentlist) => {
  //     newStudent["id"] = currentlist.length + 1;
  //     currentlist.push(newStudent);
  //     return [...currentlist];
  //   });
  //   hideForm(false);
  const allStudent = getData();
  newStudent["id"] = allStudent.length +1;
  allStudent.push(newStudent);
  setData(allStudent);
  closeStudentForm();
   }
  const closeStudentForm = () => {
    // // hideForm(false);
    // setName("");
    // setPhone("");
    navigate("/");
  }
  return (
    <div>
      <span>
        <input
          type="text"
          placeholder="NAME"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="PHONE"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </span>
      <br />
      <button onClick={addNewstudent}>SUBMIT</button>
      <button
        type="button"
        className="btn btn-danger"
        style={{ marginLeft: "5px" }}
        onClick={closeStudentForm}
      >
        Close
      </button>
    </div>
  );
}