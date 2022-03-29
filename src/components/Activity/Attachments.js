import React, { useState, useRef } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-date-picker/dist/DatePicker.css'
import { MdDelete } from 'react-icons/md'

const Attachments = ({ title,attachmentsType,formData, setFormData }) => {
    const [files, setFiles] = useState([]);

    const fileInput = useRef(null)
  
      const handleClick = () => {
          fileInput.current.click()
      }
  
      const handleDelete = (fileId) => {
        const newFiles = [...files];
        const index = files.findIndex(x => x.id === fileId);
        newFiles.splice(index, 1);
        setFiles(newFiles);
      }
      const handleFileChange = event => {
          const newFile = {
            id: new Date().getTime().toString(),
            name: event.target.files[0].name,
            type:  event.target.files[0].name.split(".")[1],
            uploadDate: event.target.files[0].lastModifiedDate.toDateString(),
            file: event.target.files[0].name
  
          };
          debugger;
          const newFiles = [...files, newFile];
          setFiles(newFiles);
      }
  return (
    <><Form.Label>{title}</Form.Label>
    <div className="card attachments-table-div">
      <div className="table-responsive" id="attachment-table">
        <table className="table text-nowrap attachments-table">
          <thead>
            <tr>
              <th>File</th>
              <th>Type</th>
              <th>Upload Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="attachment-tbody">
          {files.map(function (file, index) {
              return (
                <tr key={index}>
                  <td>{file.name}</td>
                  <td>{file.type}</td>
                  <td>{file.uploadDate}</td>
                  <td><MdDelete
                  onClick={() => handleDelete(file.id)}
                  /></td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                <div className="row">
                  <div className="col text-center">
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e)}
                        ref={fileInput}
                        className="hidden"
                      />
                    <button onClick={() => handleClick()} type="button" className="btn btn-link">Upload Document</button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div></>
  )
}

export default Attachments