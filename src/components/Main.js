import React,{useContext,useEffect} from 'react';
import Myparticle from './Particless.js';
import LoginContext from '../contexts/LoginContext';
import Login from './Login.js';
import AuthNav from './navbars/NavbarAuth';
import { useLocation, Route,Router, Routes,Redirect } from "react-router-dom";
import Routes2 from "../Routes2.js";
import logo from '../images/navlogo.png'



//main page for login

function Main() {

  // state for whether to show login or title page
    const {loginpage, setloginpage} = useContext(LoginContext);

    async function showLogin(){
      if(loginpage){
        setloginpage(false)
      }else{
        setloginpage(true)
      }
      console.log(loginpage,'show login card')
    }
  
    useEffect(() => {

    }, [loginpage]);



  
    return (
        <div className='mainpage'>
          <Myparticle/>
          <AuthNav/>
          <div className='section'>
            {loginpage ? (<Login/>) : (
            <div className='text flex flex-col content-between'>
              <div className='flex flex-row text-center md:place-content-start min-w-full md:p-9'>
                <p class="glitch"><span aria-hidden="true"></span>BYTE THE GLASS</p>
              </div>
              <div className='flex flex-row min-w-full text-center md:place-content-end md:p-9'>
                <p className="glitch"><span aria-hidden="true"></span>BUILD THE FUTURE</p>
              </div>
            </div>
            )} 
          </div>

          {/* about us page  */}
          <div className='section' id="about">
            <div className='ml-9'>
              <p class="glitch"><span aria-hidden="true"></span>ABOUT US</p>
            </div>
          </div>
          
          {/* meet the team page  */}
          <div className='section' id="team">
            <div className='ml-9'>
              <p class="glitch"><span aria-hidden="true"></span>Meet the Team</p>
            </div>
          </div>
          
        </div>
    );
  }
  
  export default Main;