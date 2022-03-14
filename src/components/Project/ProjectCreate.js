import React, { useState } from "react";
import './style.css'
import ProjectDetails from "./ProjectDetails";
import Attachments from "./Attachments";
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HiArrowSmRight, HiArrowSmLeft} from 'react-icons/hi';

const ProjectCreate = () => {
  

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      name: "",
      budget: "",
      donors: "",
      implementingPartners: "",
      cbos: "",
      startDate: "",
      endDate: "",
      projectDirectors: "",
      merlOfficers : "",
      status : "",
      remarks: "",
      attachments : ""
    });
  
    const FormTitles = ["Project Details", "Status & Attachments"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <ProjectDetails formData={formData} setFormData={setFormData} />;
      // } else if (page === 1) {
      //   return <PersonalInfo formData={formData} setFormData={setFormData} />;
      } else {
        return <Attachments formData={formData} setFormData={setFormData} />;
      }
    };
  
    return (
      <div className="card wizard-form">
        <div className="form">
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "50%" : "100%" }}
          ></div>
          <h6 className="progress-bar-heading">{FormTitles[page]}</h6>
        </div>
        <div className="form-container">
          {/* <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div> */}
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
            className="previous-btn"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
             <HiArrowSmLeft/>Previous
            </button>
            <button
            className="next-btn"
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
             {page === FormTitles.length - 1 ? "Submit" : "Next"} <HiArrowSmRight/> 
            </button>
          </div>
        </div>
      </div>
      </div>
      
    );
}

export default ProjectCreate