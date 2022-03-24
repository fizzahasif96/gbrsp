import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import Select from 'react-select';
import { VscAdd } from 'react-icons/vsc'
import { MdDelete } from 'react-icons/md'

const Address = ({ title, addressType }) => {
  const [addressData, setAddressData] = useState({});
  const provinceCatalog = [
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Balochistan', label: 'Balochistan' },
    { value: 'GB', label: 'Gilgit Baltistan' },
    { value: 'Kpk', label: 'Khyber Pakhtun khawa' },
    { value: 'Sindh', label: 'Sindh' },
  ];
  const divisionCatalog = [
    { value: 'Division1', label: 'Division 1' },
    { value: 'Division2', label: 'Division 2' }
  ];
  const districtCatalog = [
    { value: 'District1', label: 'District 1' },
    { value: 'District2', label: 'District 2' }
  ];
  const subDivisionCatalog = [
    { value: 'SubDivision1', label: 'Sub Division 1' },
    { value: 'SubDivision2', label: 'Sub Division 2' }
  ];
  const tehsilCatalog = [
    { value: 'tehsil1', label: 'Tehsil 1' },
    { value: 'tehsil2', label: 'Tehsil 2' }
  ];
  const unionCouncilCatalog = [
    { value: 'uc1', label: 'Union Council 1' },
    { value: 'uc2', label: 'Union Council 2' }
  ];
  const villageCatalog = [
    { value: 'village1', label: 'Village 1' },
    { value: 'village2', label: 'Village 2' }
  ];
  const subVillageCatalog = [
    { value: 'subVillage1', label: 'Sub Village 1' },
    { value: 'subVillage2', label: 'Sub Village 2' }
  ];
  const [rowIndex, setRowIndex] = useState(0);
  const GetAddress = () => {
    addressType.push(addressData);
    setRowIndex(rowIndex + 1);
  }


  // useEffect(() => {

  // },[addressType]);

  const addressRows = addressType.map((address) =>
    <tr>
      <td>{address.province.label}</td>
      <td>{address.division.label}</td>
      <td>{address.subDivision.label}</td>
      <td>{address.district.label}</td>
      <td>{address.tehsil.label}</td>
      <td>{address.unionCouncil.label}</td>
      <td>{address.village.label}</td>
      <td>{address.subVillage.label}</td>
      <td>{address.address}</td>
      <td><MdDelete
      //onClick={() => deleteItem(rowIndex)}
      /></td>
    </tr>
  );
  return (
    <>
      <Form.Label>{title}</Form.Label>
      <div className="card attachments-table-div">
        <div className="table-responsive" id="attachment-table">
          <table className="table text-nowrap attachments-table">
            <thead>
              <tr>
                <th>Province</th>
                <th>Division</th>
                <th>District</th>
                <th>Sub Division</th>
                <th>Tehsil</th>
                <th>Union Council</th>
                <th>Village</th>
                <th>Sub Village</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
              <tr>
                <th>
                  <Select
                    name="province"
                    placeholder="Province"
                    onChange={(e) =>
                      setAddressData({ ...addressData, province: e })
                    }
                    options={provinceCatalog}
                  />
                </th>
                <th>
                  <Select
                    name="division"
                    placeholder="Division"
                    onChange={(e) =>
                      setAddressData({ ...addressData, division: e })
                    }
                    options={divisionCatalog}
                  />
                </th>
                <th>
                  <Select
                    name="district"
                    placeholder="District"
                    onChange={(e) =>
                      setAddressData({ ...addressData, district: e })
                    }
                    options={districtCatalog}
                  />
                </th>
                <th>
                  <Select
                    name="subDivision"
                    placeholder="Sub Division"
                    onChange={(e) =>
                      setAddressData({ ...addressData, subDivision: e })
                    }
                    options={subDivisionCatalog}
                  />
                </th>
                <th>
                  <Select
                    name="tehsil"
                    placeholder="Tehsil"
                    onChange={(e) =>
                      setAddressData({ ...addressData, tehsil: e })
                    }
                    options={tehsilCatalog}
                  />
                </th>
                <th>
                  <Select
                    name="unionCouncil"
                    placeholder="Union Council"
                    onChange={(e) =>
                      setAddressData({ ...addressData, unionCouncil: e })
                    }
                    options={unionCouncilCatalog}
                  />
                </th>
                <th>
                  <Select
                    name="village"
                    placeholder="Village"
                    onChange={(e) =>
                      setAddressData({ ...addressData, village: e })
                    }
                    options={villageCatalog}
                  />
                </th>
                <th>
                  <Select
                    name="subVillage"
                    placeholder="Sub Village"
                    onChange={(e) =>
                      setAddressData({ ...addressData, subVillage: e })
                    }
                    options={subVillageCatalog}
                  />
                </th>
                <th>
                  <Form.Control
                    name="address"
                    type="text"
                    placeholder="Address"
                    onChange={(event) =>
                      setAddressData({ ...addressData, address: event.target.value })
                    }>
                  </Form.Control>
                </th>
                <th>
                  <button type="button" className="add-occupation btn-circle btn-sm" onClick={GetAddress}><VscAdd /></button>
                </th>
              </tr>
            </thead>
            <tbody className="dependent-tbody">
              {addressRows}
            </tbody>
          </table>
        </div>
      </div>
    </>

  )
}

export default Address