
import React, { useState } from "react";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HiArrowSmRight, HiArrowSmLeft} from 'react-icons/hi';
import BeneficiayDetails from "./BeneficiayDetails";
import FamilyDetails from "./FamilyDetails";
import OccupationAndAddress from "./OccupationAndAddress";

const BeneficiaryCreate = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      name: "",
      gender: "",
      selectAgeDOB: "",
      dob: "",
      placeOfBirth: "",
      education: "",
      contactNo: "",
      cnic: "",
      cnicExpiryDate : "",
      vulnerabilities : "",
      image: "",
      averageFamilyEarning : "",
      noOfPeopleEarning : "",
      targetGroups : "",
      fatherName : "",
      fatherCnic : "",
      motherName : "",
      motherCnic : "",
      spouseName : "",
      spouseCnic : "",
      nextToKin : "",
      relationshipWithBeneficiary : "",
      nextToKinCnic : "",
      dependents : [],
      occupations : [],
      permanentAddress : [],
      residentialAddress : [],
      officialAddress : []
    });
  
    const FormTitles = ["Beneficiary Details", "Family Details", "Occupation & Address"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <BeneficiayDetails formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <FamilyDetails formData={formData} setFormData={setFormData} />;
      } else {
        return <OccupationAndAddress formData={formData} setFormData={setFormData} />;
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

export default BeneficiaryCreate