import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Routes, Route } from "react-router-dom";
import ProjectIndex from './components/Project/ProjectIndex';
import ProjectCreate from './components/Project/ProjectCreate';
import TargetIndex from './components/Target/TargetIndex';
import TargetCreate from './components/Target/TargetCreate';
import ActivityIndex from './components/Activity/ActivityIndex';
import ActivityReview from './components/Activity/ActivityReview';
import ActivityCreate from './components/Activity/ActivityCreate';
import BeneficiaryIndex from './components/Beneficiary/BeneficiaryIndex';
import BeneficiaryCreate from './components/Beneficiary/BeneficiaryCreate';
import BeneficiaryReview from './components/Beneficiary/BeneficiaryReview';
import UserManagementIndex from './components/UserManagement/UserManagementIndex';
import UserManagementCreate from './components/UserManagement/UserManagementCreate';
import UserManagementReview from './components/UserManagement/UserManagementReview';
import DefinitionIndex from './components/Definitions/DefinitionIndex';
import MainContent from './components/MainContent';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [state, setState] = React.useState(
    {
      headingName : "Dashboard",
      url : "Home / Dashboard",
      content : <Dashboard/>
    }
  );
 
  function handleStateMethod(newStateValue){
    setState(newStateValue);
  }
  
  return (
    
    <>
    <div className='main-app'>
      <SideBar handleClick = {handleStateMethod} />
      <MainContent name = {state.headingName} url = {state.url} content = {state.content} />
    </div>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="project-index" element={<ProjectIndex />} />
        <Route path="project-create" element={<ProjectCreate />} />
        <Route path="target-index" element={<TargetIndex />} />
        <Route path="target-create" element={<TargetCreate />} />
        <Route path="beneficiary-index" element={<BeneficiaryIndex />} />
        <Route path="beneficiary-create" element={<BeneficiaryCreate />} />
        <Route path="beneficiary-review" element={<BeneficiaryReview />} />
        <Route path="activity-index" element={<ActivityIndex />} />
        <Route path="activity-create" element={<ActivityCreate />} />
        <Route path="activity-review" element={<ActivityReview />} />
        <Route path="definition-index" element={<DefinitionIndex />} />
        <Route path="user-index" element={<UserManagementIndex />} />
        <Route path="user-create" element={<UserManagementCreate />} />
        <Route path="user-review" element={<UserManagementReview />} />
      </Routes>
    </>
  );
}

export default App;
