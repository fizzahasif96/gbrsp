import React from 'react'
import Logo from './gbrsp-logo-white-text.png';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'
import {RiDashboard2Fill} from 'react-icons/ri'
import {Link } from "react-router-dom";


const SideBar = () => {
  return (
    <div className='sidebar'>
        <img className='img-fluid' src={Logo} width="120" height="90" alt=""/>
        <div>
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem icon={<RiDashboard2Fill/>}><Link to="/"> Dashboard</Link></MenuItem>
            <SubMenu icon={<RiDashboard2Fill/>} title="Projects">
              <MenuItem><Link to="project-index">View Projects</Link></MenuItem>
              <MenuItem><Link to="project-create">Add Projects</Link></MenuItem>
            </SubMenu>
            <SubMenu icon={<RiDashboard2Fill/>} title="Target">
              <MenuItem><a href='/Target/Index'>View Target</a></MenuItem>
              <MenuItem><a href='/Target/Create'>Add Target</a></MenuItem>
            </SubMenu>
            <SubMenu icon={<RiDashboard2Fill/>} title="Beneficiaries">
              <MenuItem><a href='/Beneficiary/Index'>View Beneficiary</a></MenuItem>
              <MenuItem><a href='/Beneficiary/Create'>Add Beneficiary</a></MenuItem>
              <MenuItem><a href='/Beneficiary/Index'>Review Beneficiary</a></MenuItem>
            </SubMenu>
            <SubMenu icon={<RiDashboard2Fill/>} title="Project Activity">
              <MenuItem><a href='/Activity/Index'>View Activity</a></MenuItem>
              <MenuItem><a href='/Activity/Create'>Add Activity</a></MenuItem>
              <MenuItem><a href='/Activity/Index'>Review Activity</a></MenuItem>
            </SubMenu>
            <MenuItem icon={<RiDashboard2Fill/>}><a href='/Definitions/Index'>Definitions</a></MenuItem>
            <SubMenu icon={<RiDashboard2Fill/>} title="Settings">
            <MenuItem> User Management</MenuItem>
              <MenuItem><a href='/User/Index'>View User</a></MenuItem>
              <MenuItem><a href='/User/Create'>Add User</a></MenuItem>
              <MenuItem><a href='/User/Index'>Review User</a></MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>;
        </div>
    </div>
  )
}

export default SideBar