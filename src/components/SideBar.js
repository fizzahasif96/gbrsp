import React from 'react'
import Logo from './gbrsp-logo-white-text.png';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'
import {RiDashboard2Fill} from 'react-icons/ri'
import {Link } from "react-router-dom";
import ProjectIndex from './Project/ProjectIndex';
import ProjectCreate from './Project/ProjectCreate';
import TargetIndex from './Target/TargetIndex';
import TargetCreate from './Target/TargetCreate';
import ActivityIndex from './Activity/ActivityIndex';
import ActivityReview from './Activity/ActivityReview';
import ActivityCreate from './Activity/ActivityCreate';
import BeneficiaryIndex from './Beneficiary/BeneficiaryIndex';
import BeneficiaryCreate from './Beneficiary/BeneficiaryCreate';
import BeneficiaryReview from './Beneficiary/BeneficiaryReview';
import UserManagementIndex from './UserManagement/UserManagementIndex';
import UserManagementCreate from './UserManagement/UserManagementCreate';
import UserManagementReview from './UserManagement/UserManagementReview';
import DefinitionIndex from './Definitions/DefinitionIndex';
import Dashboard from './Dashboard/Dashboard';

const SideBar = (props) => {
  function handleStateForProject(headingName,url, content){
    var data = {
      headingName : headingName,
      url : url,
      content : content
    };
   return props.handleClick(data);    
  }
  
  return (
    <div className='sidebar'>
        <img className='img-fluid' src={Logo} width="120" height="90" alt=""/>
        <div>
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem onClick={() => handleStateForProject("Dashboard","Home / Dashboard", <Dashboard/>)} icon={<RiDashboard2Fill/>}><Link to="/"> Dashboard</Link></MenuItem>
            <SubMenu icon={<RiDashboard2Fill/>} title="Projects">
              <MenuItem onClick={() => handleStateForProject("Project","Project / Index", <ProjectIndex/>)}><Link to="project-index">View Projects</Link></MenuItem>
              <MenuItem onClick={() => handleStateForProject("Project","Project / Create", <ProjectCreate/>)}><Link to="project-create">Add Projects</Link></MenuItem>
            </SubMenu>
            <SubMenu icon={<RiDashboard2Fill/>} title="Target">
              <MenuItem onClick={() => handleStateForProject("Target","Target / Index", <TargetIndex/>)}><Link to="target-index">View Target</Link></MenuItem>
              <MenuItem onClick={() => handleStateForProject("Target","Target / Create", <TargetCreate/>)}><Link to="target-create">Add Target</Link></MenuItem>
            </SubMenu>
            <SubMenu icon={<RiDashboard2Fill/>} title="Beneficiaries">
              <MenuItem onClick={() => handleStateForProject("Beneficiaries","Beneficiaries / Index", <BeneficiaryIndex/>)}><Link to="beneficiary-index">View Beneficiary</Link></MenuItem>
              <MenuItem onClick={() => handleStateForProject("Beneficiaries","Beneficiaries / Create", <BeneficiaryCreate/>)}><Link to="beneficiary-create">Add Beneficiary</Link></MenuItem>
              <MenuItem onClick={() => handleStateForProject("Beneficiaries","Beneficiaries / Review", <BeneficiaryReview/>)}><Link to="beneficiary-index">Review Beneficiary</Link></MenuItem>
            </SubMenu>
            <SubMenu icon={<RiDashboard2Fill/>} title="Project Activity">
              <MenuItem onClick={() => handleStateForProject("Activity","Activity / Index", <ActivityIndex/>)}><Link to="activity-index">View Activity</Link></MenuItem>
              <MenuItem onClick={() => handleStateForProject("Activity","Activity / Create", <ActivityCreate/>)}><Link to="activity-create">Add Activity</Link></MenuItem>
              <MenuItem onClick={() => handleStateForProject("Activity","Activity / Review", <ActivityReview/>)}><Link to="activity-review">Review Activity</Link></MenuItem>
            </SubMenu>
            <MenuItem onClick={() => handleStateForProject("Definition","Definition / Index", <DefinitionIndex/>)} icon={<RiDashboard2Fill/>}><Link to="definitions-index">Definitions</Link></MenuItem>
            <SubMenu icon={<RiDashboard2Fill/>} title="Settings">
            <MenuItem> User Management</MenuItem>
              <MenuItem onClick={() => handleStateForProject("User Management","User Management / Index", <UserManagementIndex/>)}><Link to="user-index">View User</Link></MenuItem>
              <MenuItem onClick={() => handleStateForProject("User Management","User Management / Create", <UserManagementCreate/>)}><Link to="user-create">Add User</Link></MenuItem>
              <MenuItem onClick={() => handleStateForProject("User Management","User Management / Review", <UserManagementReview/>)}><Link to="user-review">Review User</Link></MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>;
        </div>
    </div>
  )
}

export default SideBar