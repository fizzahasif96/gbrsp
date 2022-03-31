import React, { useState } from "react";
import { MDBDataTableV5 } from 'mdbreact';
import { BeneficiariesData } from './BeneficiariesData';

const SyncBeneficiaries = () => {
  const [datatable, setDatatable] = React.useState(BeneficiariesData);
  const [checkbox1, setCheckbox1] = React.useState([]);
  const [selectedBeneficiaries, setSelectedBeneficiaries] = useState([]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  const setAllCheckBox = (e) => {
    let newMaleCount = 0;
    let newFemaleCount = 0;
    if(e[0].checked){
      setSelectedBeneficiaries(e);
      e.forEach((item) => {
        if(item.gender == "male"){
          newMaleCount = newMaleCount + 1;
         // 
        }
        else {
        // 
        newFemaleCount = newFemaleCount + 1;
        }
      })
      setMaleCount(newMaleCount)
      setFemaleCount(newFemaleCount)
    }
    else{
      setSelectedBeneficiaries([]);
      setMaleCount(0);
      setFemaleCount(0);
    }
    
  }
  const setCheckBox = (e) => {
    if(e.checked){
      const newSelectedBeneficiary = {
        id: new Date().getTime().toString(),
        name: e.name,
        gender: e.gender,
        cnic: e.cnic,
      };
  
      const newSelectedBeneficiaries = [...selectedBeneficiaries, newSelectedBeneficiary];
      setSelectedBeneficiaries(newSelectedBeneficiaries);
      if(e.gender == "male"){
        setMaleCount(maleCount + 1)
      }
      else {
        setFemaleCount(femaleCount + 1)
      }
      
    }
    else {
      const newSelectedBeneficiaries = [...selectedBeneficiaries];
        const index = selectedBeneficiaries.findIndex(x => x.cnic === e.cnic);
        newSelectedBeneficiaries.splice(index, 1);
        setSelectedBeneficiaries(newSelectedBeneficiaries);
        if(e.gender == "male"){
          setMaleCount(maleCount - 1)
        }
        else {
          setFemaleCount(femaleCount - 1)
        }
    }
  };
  return (
    <div className='panel'>
      <div className='panel-content-container left-panel-width'>
        <div className="panel-tab-heading">
          <div className="row col-12 mt-2">
            <div className="col-md-6 col-sm-12 text-left male-count">Male: {maleCount}</div>
            <div className="col-md-6 col-sm-12 p-0 text-right female-count">Female: {femaleCount}</div>
          </div>
        </div>
        <div className="table-responsive selected-beneficiaries-table">
          <table className="table text-nowrap">
            <tbody className="selected-beneficiaries-tbody">
              {selectedBeneficiaries.map(function (selectedBeneficiary, index) {
                return (
                  <tr key={index}>
                    <td>
                      <p className="name">{selectedBeneficiary.name}</p>
                      <p className="cnic">{selectedBeneficiary.cnic}</p>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className='panel-content-container right-panel-width'>
        <div className="table-responsive selected-beneficiaries-table">
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            checkbox
            headCheckboxID='id6'
            bodyCheckboxID='checkboxes6'
            getValueCheckBox={(e) => {
              setCheckBox(e);
            }}
            getValueAllCheckBoxes={(e) => {
              setAllCheckBox(e);
            }}
            multipleCheckboxes
          />
        </div>
      </div>
    </div>
  )
}

export default SyncBeneficiaries