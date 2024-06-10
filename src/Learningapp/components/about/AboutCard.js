// import React from "react"
// import Heading from "../heading/Heading";
// import "./about.css"
// import { homeAbout } from "../../../dummydata"

// const AboutCard = () => {
//   return (
//     <>

//          <div className='container flexSB'>
//           <div>
//           <div className='left row'>
//             <img src='./images/about.webp' alt='' />
//           </div>
//           </div>

//           <div>
//           <div className='right row'>
//             <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
//             <div className='items'>
// {homeAbout.map((val) => {
//   return (
//     <div className='item flexSB'>
//       <div className='img'>
//         <img src={val.cover} alt='' />
//       </div>
//       <div className='text'>
//         <h2>{val.title}</h2>
//         <p>{val.desc}</p>
//       </div>
//     </div>
//   )
// })}
//             </div>
//           </div>
//           </div>
//         </div>

//       {/* <Awrapper /> */}
//     </>
//   )
// }

// export default AboutCard

/////////////////////////////////////////////////////////

import React from "react";
import Heading from "../heading/Heading";
import "./about.css";
import { homeAbout } from "../../../dummydata";

const AboutCard = () => {
  return (
    <div className="explanation">
      <div className="picArea">
        <img src="./images/about.webp" alt="" className="girlLaptop"/>
      </div>
      <div className="description">
      <Heading title='Benefits About Online Learning Expertise' />
        <div className="items">
        {homeAbout.map((val) => {
          return (
            <div className="cardsArea">
              <div className="item">
              <div className="descImage">
                <img src={val.cover} alt="" className="descImg"/>
              </div>
              <div>
                <h2>{val.title}</h2>
                <p>{val.desc}</p>
              </div>
            </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
