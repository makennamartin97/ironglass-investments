import React from "react";
import g3 from '../images/gallery3.jpeg'
import g8 from '../images/gallery8.jpeg'
import g4 from '../images/gallery4.jpeg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


function PastEvents() {
    // const members = [{firstname: 'Makenna',lastname:'Martin', bio: 'gn vfenivhnehir vnirnvehir vwnrvininrwvhr nciwrncvrw', img: '../makenna.png'},{firstname: 'Jake',lastname:'Hitzges', bio: 'gn vfenivhnehir vnirnvehir vwnrvininrwvhr nciwrncvrw', img: '../jake.jpg'},{firstname: 'Dardan',lastname:'Bela', bio: 'gn vfenivhnehir vnirnvehir vwnrvininrwvhr nciwrncvrw', img: '../dardan.jpg'},{firstname: 'Osaze',lastname:'Moore', bio: 'gn vfenivhnehir vnirnvehir vwnrvininrwvhr nciwrncvrw', img: '../osaze.jpg'}]
    // const events = [{event: 'IGB Party',date:'09/20/22', time: '8:00pm EST', img: '../event1.jpg'},{event: 'Four Loko Event',date:'12/02/22',time: '8:00pm EST',img: '../event2.jpg'}]


      return (
        <div className="pastevents">
                
      <Carousel

  showDots={true}
  responsive={responsive}
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  className="caro-row flex place-items-center md:ml-4 2xl:ml-24"
>
<div className="carousel-item col card glass mb-8 mt-8 ml-4 mr-2 md:w-64 xl:w-80 lg:h-5/6">
<figure className="frame max-height-96"><img src={g3} alt="..."/></figure>
    <div className="event-info text-center p-3 lg:h-24 grid grid-col content-end">
        <h1>Solana Miami | Miami, FL</h1>
        {/* <button className="rsvp-button"><a href="https://www.eventbrite.com/e/test-igi-event-tickets-407620763677">RSVP</a></button> */}
    </div>
</div>
<div className="carousel-item col card glass mb-8 mt-8 ml-4 mr-2 md:w-64 xl:w-80 lg:h-5/6" >
<figure className="frame max-height-96 "><img src={g8} alt="..."/></figure>
    <div className="event-info text-center p-3 lg:h-24 grid grid-col content-end">
        <h1>NFT Event | Miami, FL</h1>
    </div>
</div>

  <div className="carousel-item col card glass mb-8 mt-8 ml-4 mr-2 md:w-64 xl:w-80 lg:h-5/6">
  <figure className="frame max-height-96"><img src={g4} alt="..."/></figure>
    <div className="event-info text-center p-3 lg:h-24 grid grid-col content-end">
        <h1>eMerge Americas | Miami, FL</h1>
    </div>
    
</div>

</Carousel>
        </div>

      );
}

export default PastEvents;