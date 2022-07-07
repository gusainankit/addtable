import React, { useState } from "react";
import "./table.css";
import Remove from "./remove";
import Form from "./Form ";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Table() {
  const [showAddModal, setShowAddModal] = useState(false);
  const[openRemove,setOpenRemove]=useState(false)
  const [data, setData] = useState([]);;


  const showHideModal = () => {
    setShowAddModal(true);
  }

  

  const addData = (newData) => {
    const existedData = [...data];
    existedData.push(newData);
    setData(existedData);
  }

  return (
    <div className="table-container">
      <div className="add" >
        <div>
          <h1 className="student-table">Students</h1>
        </div>
        <div>
          <button className="add-btn" onClick={showHideModal}>+ Add</button>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <th>No.</th>
            <th>Student</th>
            <th>Class</th>
            <th>Result</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>

          {data && data.map((item,i) => {
            return(
              <tr  key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.clas}th</td>
                <td>{item.result}</td>
                <td>{item.score}/100</td>
                <td>{item.grade}</td>
                <td><FontAwesomeIcon icon={faEdit} className="icon" />
                  <span><FontAwesomeIcon icon={faTrash}
                  className="icon" /></span>
                </td>
              </tr>
            )
          })}


        </tbody>
      </table>

      {openRemove && <Remove setOpenRemove={setOpenRemove}/>}
      {showAddModal && <Form showHideModal={setShowAddModal} dataManupulation={addData} />}
    
    </div>
  )

}
export default Table