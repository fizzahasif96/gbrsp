import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
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
 
//   React.useEffect(() => {   
//     return function() {    
//     }
// }, []);

  function handleStateMethod(newStateValue){
    setState(newStateValue);
  }
  
  return (
    <>
    <div className='main-app'>
      <SideBar handleClick = {handleStateMethod} />
      <MainContent name = {state.headingName} url = {state.url} content = {state.content} />
    </div>     
    
    </>
  );
}

export default App;
