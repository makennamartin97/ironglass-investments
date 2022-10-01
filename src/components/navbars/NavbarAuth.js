import React,{useState, useEffect,useContext} from 'react';
import logo from '../../images/navlogo.png'
import LoginContext from '../../contexts/LoginContext';
import {Link} from "react-router-dom";


function NavbarAuth(){
    const {loginpage, setloginpage} = useContext(LoginContext);
    const [navbg,setNavbg] = useState(false)

    async function showLogin(){
      if(loginpage){
        setloginpage(false)
      }else{
        setloginpage(true)
      }
    }
    
    useEffect(() => {
    }, [loginpage]);

    // function for the navbar to darken on scroll
    const changeNav = ()=>{
      if(window.scrollY >= 80){
        setNavbg(true)
      }else{
        setNavbg(false)
      }
    }

    window.addEventListener('scroll',changeNav)


    return (

      <div className={navbg ? "navbar bg-base-100 navbar-auth active lg:justify-between" : "navbar bg-base-100 navbar-auth lg:justify-between" }>
        <div className="p-7 w-screen justify-between lg:w-auto">
          <Link to="/">
            <img src={logo} alt="..."className="w-48" />
          </Link>

          <div className="dropdown dropdown-left btn p-0 lg:invisible ml-6 lg:ml-0 bg-black text-[#34b2fd]">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-black">
              <Link className="btn mr-3 text-blue2 bg-black" to="/#about" >About Us</Link>
              <Link className="btn mr-3 text-blue2 bg-black" to="/#team" >Our Team</Link>
              {loginpage ? (<div className='btn mr-3 text-blue2 bg-black' onClick={showLogin}>Go Back</div>) : (<div className={navbg ?  "btn mr-3 text-black blue2":"btn mr-3 bg-black text-blue2" } onClick={showLogin}>Investor Login</div>)}
            </ul>
          </div>
        </div>

        <ul className="menu menu-horizontal p-0 hidden lg:flex">
          <a className={navbg ?  "btn mr-3 text-black blue2 orbitron":"btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron" }  href="/#about" >About Us</a>
          <a className={navbg ?  "btn mr-3 text-black blue2 orbitron":"btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron" } href="/#team" >Our Team</a>
          {loginpage ? (<div className='btn mr-3 bg-black blue2' onClick={showLogin}>Go Back</div>) : (<div className={navbg ?  "btn mr-3 text-black blue2 orbitron":"btn mr-3 bg-black text-blue2 blue2-border hover-item-sm orbitron" } onClick={showLogin}>Investor Login</div>)}
        </ul>
            
      </div>
          

    )
}
export default NavbarAuth