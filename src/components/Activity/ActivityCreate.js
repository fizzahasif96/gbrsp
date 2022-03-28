import React, { useState } from "react";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HiArrowSmRight, HiArrowSmLeft} from 'react-icons/hi';
import ActivityDetails from "./ActivityDetails";
import MeansOfVerifications from "./MeansOfVerifications";
import SyncBeneficiaries from "./SyncBeneficiaries";

const ActivityCreate = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      activity: "",
      project: {},
      target : {},
      activities: [],
      thematicAreas: [],
      outputIndicators: [],
      outcomeIndicators: [],
      sections: [],
      sdgs: [],
      startDate: "",
      endDate: "",
      subVillage: {},
      month : "",
      amount : "",
      attendanceSheets: [],
      tors : [],
      pictures : [],
      actionPlans : [],
      otherAttachments : [],
      comments : "",
      syncBeneficiaries : [],
    });
  
    const FormTitles = ["Activity Details", "Means Of Verifications", "Sync Beneficiaries"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <ActivityDetails formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <MeansOfVerifications formData={formData} setFormData={setFormData} />;
      } else {
        return <SyncBeneficiaries formData={formData} setFormData={setFormData} />;
      }
    };
  
    return (
      <div className="card wizard-form">
        <div className="form">
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "50%" : page === 1 ? "75%" : "100%" }}
          ></div>
          <h6 className="progress-bar-heading">{FormTitles[page]}</h6>
        </div>
        <div className="form-container">
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

export default ActivityCreate