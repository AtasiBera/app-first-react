import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData, setData } from "../utils/storageHelper";
export default function EditStudent() {
  //1) to get data from state we use useLocation()
  //const location = useLoaction();
  //location.state

  //2) to get value from search param we use useSearchParams()
  //const [searchParams, setSearchParams] = useSearchParams()
  //searchParams.get("id")

  //3)to get th data from path variavle or param we use useparams()
  //console.log(params.id);
  //NOTE: The path name set in route like this path:""/student-edit/:id"

  const [selectedstud, setSelectedstud] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    getStud(params.id);
  }, []);

  const getStud = (studentId) => {
    const allStudent = getData();
    const student = allStudent.find((s) => s.id == studentId);
    setSelectedstud(student);
  }

  const updateStudent = () => {
    let isUpdate = false;
    const studentlist = getData();
    studentlist.map((student, index) => {
      if (student.id === selectedstud.id) {
        studentlist[index] = selectedstud;
        isUpdate = true;
        setData(studentlist);
      }
    });
    if (isUpdate) {
      alert("Upadte success");
    } else {
      alert("Upadte success");
    }
    closeEditForm();
  }

  const closeEditForm = () => {
    navigate("/")
  }

  return (
    <>
      {selectedstud ?
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
        :
        <div>No Student found</div>}
    </>

  );
}