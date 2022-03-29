import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import Select from 'react-select';
import { VscAdd } from 'react-icons/vsc'
import { MdDelete } from 'react-icons/md'

const Address = (props) => {
  const [addressData, setAddressData] = useState({});
  const [addresses, setAddresses] = useState([]);
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
  const GetAddress = () => {
    const newAddress = {
      id : new Date().getTime().toString(),
      province : addressData.province.label,
      division : addressData.division.label,
      district : addressData.district.label,
      subDivision : addressData.subDivision.label,
      tehsil : addressData.tehsil.label,
      unionCouncil: addressData.unionCouncil.label,
      village: addressData.village.label,
      subVillage: addressData.subVillage.label,
      address: addressData.address
    };
    const newAddresses = [...addresses, newAddress];
    setAddresses(newAddresses);
  }

  //  useEffect(() => {
  //   props.setFormData({ ...props.formData, [props.addressType]: addresses })
  // }, [addresses])

  if(addresses.length > 0){
    console.log(props.formData);
  }
  const handleDelete = (addressId) => {
    const newAddresses = [...addresses];
    const index = addresses.findIndex(x => x.id === addressId);
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  }

  return (
    <>
      <Form.Label>{props.title}</Form.Label>
      <div className="card attachments-table-div">
        <div className="table-responsive table-responsive-scrollbar-x" id="attachment-table">
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
              {addresses.map(function (address, index) {
                return (
                  <tr key={index} >
                    <td>{address.province}</td>
                    <td>{address.division}</td>
                    <td>{address.district}</td>
                    <td>{address.subDivision}</td>
                    <td>{address.tehsil}</td>
                    <td>{address.unionCouncil}</td>
                    <td>{address.village}</td>
                    <td>{address.subVillage}</td>
                    <td>{address.address}</td>
                    <td><MdDelete
                      onClick={() => handleDelete(address.id)}
                    /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>

  )
}

export default Address