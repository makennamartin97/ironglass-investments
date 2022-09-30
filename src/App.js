
import './App.css';
import React,{useState, useEffect,Suspense} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import MembersPage from './components/MembersPage';
import Main from './components/Main';
import Calendly from './components/Calendly';
import Events from './components/Events.js';
import Profile from './components/Profile.js';
import LoginContext from './contexts/LoginContext';
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from './components/Dashboard.js';
import { APP_STATIC_PATH } from './Routes2';

//will need to redo/optimize routing system bc i set it up a way for no login to be needed

function App(props) {
  const [loginpage, setloginpage] = useState(false)
  const [dashpage, setdashpage] = useState(false)


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <LoginContext.Provider value={{loginpage, setloginpage, dashpage, setdashpage}}>
      <Router>
        <div className="App">
         
          <Routes>
            <Route path={APP_STATIC_PATH.Main} element={<Main/>}/>
            <Route path={APP_STATIC_PATH.Calendly} element={<Calendly/>}/>
            <Route path={APP_STATIC_PATH.Dashboard} element={<Dashboard/>}/>
            <Route path={APP_STATIC_PATH.Profile} element={<Profile/>}/>
            <Route path={APP_STATIC_PATH.Members} element={<MembersPage/>}/>
            <Route path={APP_STATIC_PATH.Events} element={<Events/>}/>
          </Routes>
    </div>
    </Router>
    </LoginContext.Provider>
  );
}

export default App;
