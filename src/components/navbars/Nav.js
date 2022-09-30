import React, {useState,useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../../images/navlogo.png'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import Routes2 from '../../Routes2.js'

const Nav = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      



    return(
      
        <div className="navbar navbar-admin lg:justify-between">
          <div className="pr-0 w-screen justify-between lg:w-auto">
            {/* hidden menu dropdown for mobile only */}
            <div className="dropdown btn p-0 lg:invisible bg-black text-[#34b2fd]">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/calendly">Schedule a Meeting</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/members">Members</a></li>
                    <li><a href="/profile">Settings</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
            {/* igi logo */}
             <img src={logo} alt="..."className="w-14" />
          </div>
          {/* navbar row of buttons only on desktop */}
          <ul className="menu menu-horizontal p-0 hidden lg:flex">
            <li><a href="/dashboard" className='btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron'>Dashboard</a></li>
            <li><a href="/calendly" className='btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron'>Schedule a Meeting</a></li>
            <li><a href="/events" className='btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron'>Events</a></li>
            <li><a href="/members" className='btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron'>Members</a></li>
            {/* user profile settings and logout dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 w-52">
                <li><a className="orbitron" href="/profile">Settings</a></li>
                <li><a className="orbitron" href="/">Logout</a></li>
              </ul>
            </div>
          </ul>
        </div>

    )
}

export default Nav