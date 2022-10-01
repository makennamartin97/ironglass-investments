import React, {useState,useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Myparticle from './Particless.js';
import AdminNav from "./navbars/Nav";


function Events() {
    // const members = [{firstname: 'Makenna',lastname:'Martin'},{firstname: 'Jake',lastname:'Hitzges'},{firstname: 'Dardan',lastname:'Bela'},{firstname: 'Osaze',lastname:'Moore'}]
    // const events = [{event: 'IGB Party',date:'09/20/22', time: '8:00pm EST', img: '../event1.jpg'},{event: 'Four Loko Event',date:'12/02/22',time: '8:00pm EST',img: '../event2.jpg'}]


      return (
        <div className='section'>
            <Myparticle/>
            <AdminNav/>
            <div class="text-center h-24 text-3xl lg:text-left header">
                <h1 data-aos="fade-right" data-aos-duration="2500" className="lg:ml-20 lg:mt-8 text-[#9ca3af] orbitron underline decoration-[#34b2fd] underline-offset-8">Events</h1>
            </div>
      
            {/* <div className="events">
                <h2>Events</h2>
                <div className="row" id="events-section">
                {
                    events.map((e, i) => (
                        <div className="event-item" key={i}>
                            <img className="eventimg" src={e.img} alt="event"/>
                            <h1>{e.event}</h1>
                            <h3>{e.date}</h3>
                            <h3>{e.time}</h3>
                        </div>
                    ))
                }
                </div>
                <h2>Members</h2>
                {
                    members.map((m, i) => (
                        <div id="members-section" key={i}>
                            <h3>{m.firstname +' '+ m.lastname}</h3>
                        </div>
                    ))
                }
            </div> */}
        </div>
      );
}

export default Events;