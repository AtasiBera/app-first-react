import React from "react";
export default function EditStudent({setStudentlist,
  studentlist,
  selectedstud,
  setSelectedstud,
   hideEditForm}) 
   {
  const updateStudent = () => {
    studentlist.map((student, index) => {
      if (student.id === selectedstud.id) {
        setStudentlist((currentdata) => {
          currentdata[index] = selectedstud;
          return [...currentdata];
        });
      } else {
        alert("Can't Update");
      }
    });
  
  };
  const closeEditForm = () => {
    hideEditForm(false);
    selectedstud.name("");
    selectedstud.phone("");
  };
  return (
    <div>
      <span>
        <input
          type="text"
          placeholder="NAME"
          value={selectedstud.name}
          onChange={(e) => {
            setSelectedstud((currentlist) => {
              return { ...currentlist, ...{ name: e.target.value } };
            });
          }}
        />
        <input
          type="text"
          placeholder="PHONE"
          value={selectedstud.phone}
          onChange={(e) => {
            setSelectedstud((currentlist) => {
              return { ...currentlist, ...{ phone: e.target.value } };
            });
          }}
        />
      </span>
      <br />
      <button onClick={updateStudent}>UPDATE</button>
      <button
        type="button"
        className="btn btn-danger"
        style={{ marginLeft: "5px" }}
        onClick={closeEditForm}
      >
        Close
      </button>
    </div>
  );
}