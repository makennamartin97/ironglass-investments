import React, {useState,useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../../images/navlogo2.png'
import {Link} from "react-router-dom";
import Routes2 from '../../Routes2.js'

const Nav = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      



    return(
      
        <div className="navbar navbar-admin lg:justify-between">
          <div className="pr-0 w-screen justify-between lg:w-auto">
            {/* igi logo */}
            <Link to="/dashboard">
             <img src={logo} alt="..."className="w-32" />
            </Link>
             {/* hidden menu dropdown for mobile only */}
            <div className="dropdown dropdown-left btn p-0 lg:invisible bg-black text-[#34b2fd]">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-black">
                    <li><Link className="btn mr-3 text-blue2 bg-black" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="btn mr-3 text-blue2 bg-black" to="/calendly">Calendly</Link></li>
                    <li><Link className="btn mr-3 text-blue2 bg-black" to="/events">Events</Link></li>
                    <li><Link className="btn mr-3 text-blue2 bg-black" to="/members">Members</Link></li>
                    <li><Link className="btn mr-3 text-blue2 bg-black" to="/profile">Settings</Link></li>
                    <li><Link className="btn mr-3 text-blue2 bg-black" to="/">Logout</Link></li>
                </ul>
            </div>
          </div>
          {/* navbar row of buttons only on desktop */}
          <ul className="menu menu-horizontal p-0 hidden lg:flex">
            <li><Link to="/dashboard" className='btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron'>Dashboard</Link></li>
            <li><Link to="/calendly" className='btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron'>Schedule a Meeting</Link></li>
            <li><Link to="/events" className='btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron'>Events</Link></li>
            <li><Link to="/members" className='btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron'>Members</Link></li>
            {/* user profile settings and logout dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#9ca3af] w-52">
                <li><Link className="orbitron active:bg-black" to="/profile">Settings</Link></li>
                <li><Link className="orbitron active:bg-black" to="/">Logout</Link></li>
              </ul>
            </div>
          </ul>
        </div>

    )
}

export default Nav