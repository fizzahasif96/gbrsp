import './App.css';
import SideBar from './components/SideBar';
import { Routes, Route } from "react-router-dom";
import ProjectIndex from './components/Project/ProjectIndex';
import ProjectCreate from './components/Project/ProjectCreate';
import MainContent from './components/MainContent';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
    <div className='main-app'>
      <SideBar />
      <MainContent name="Dashboard" url="Home / Dashboard" content={<Dashboard/>} />
    </div>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="project-index" element={<ProjectIndex />} />
        <Route path="project-create" element={<ProjectCreate />} />
      </Routes>
    </>
  );
}

export default App;
