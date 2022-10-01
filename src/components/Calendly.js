import React from "react";
import { InlineWidget } from "react-calendly";
// import './Dashboard.css';
import arrow from '../images/arrow3.png'
import Nav from "./navbars/Nav";
import Myparticle from './Particless.js';


function Calendly() {



      return (
  
        <div className='section'>
            <Myparticle/>
            <Nav/>
            <div class="text-center text-3xl lg:text-left header">
              <h1 data-aos="fade-right" data-aos-duration="2500" className="lg:ml-20 lg:mt-8 text-[#9ca3af] orbitron underline decoration-[#34b2fd] underline-offset-8">Schedule a Meeting</h1>
            </div>
          
            <InlineWidget url="https://calendly.com/makennamartin97" id='widget'/>
            
        </div>
      );
}

export default Calendly;