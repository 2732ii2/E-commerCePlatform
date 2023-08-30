import React, { useState } from 'react'
import subbanner from "../Images/cms-banner-3.webp";
import subbanner1 from "../Images/cms-banner-4.webp";
import {AbsoluteFirst, Img} from './Img';
import user1 from "../Images/user1.webp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { l__st } from './Lists';

import BlockSec from './Threejsblocks/BlockSec';

export default function Third() {
    var [margl,setmargl]=useState(0);
    console.log(margl);
    var [translate,settranslate]=useState({
        one:1,
        two:1
    })
    var l_ist = [
      {
        h2: "20 Days Return Product",
        h1: "Mobile Shope-Smart Watch T55",
      },
      {
        h2: "Save Upto 30% Off",
        h1: "Decorations Design Lamp Light",
      },
    ];
    // console.log(translate);
  return (
    <div id="third">
      <div id="sec_first">
        <div
          onMouseEnter={() =>
            settranslate({
              ...translate,
              one: 1.1,
            })
          }
          onMouseLeave={() =>
            settranslate({
              ...translate,
              one: 1,
            })
          }
          id="sec_left"
        >
          <Img src={subbanner} transale={translate} div={1} />
          <AbsoluteFirst props={l_ist[0]} />
        </div>
        <div
          onMouseEnter={() =>
            settranslate({
              ...translate,
              two: 1.1,
            })
          }
          onMouseLeave={() =>
            settranslate({
              ...translate,
              two: 1,
            })
          }
          id="sec_right"
        >
          <Img src={subbanner1} transale={translate} div={2} />
          <AbsoluteFirst props={l_ist[1]} />
        </div>
      </div>

      <div id="section_sec">
       <div id='upperslide'>
        <h1>What are Client Says</h1>
        <button id='upslidebtn' onClick={()=>{
          if (margl<=1635 && margl>0){
            
              setmargl(margl-545);
            
          }
          else if (margl=== -1635){
            if (margl!==1635){
              setmargl(1635);
            }
            
          }
          else if (!margl || margl < 0) {
              setmargl(margl - 545);
            }
        }}  >
          
          <ArrowForwardIosIcon />
        </button>
       </div>
        <div id="insisection_sec">
          {l__st.map((e, i) => {
            if(i===0){
              return (
                <div
                  key={i}
                  style={{
                    marginLeft: `${margl}px`,
                    transition: `${margl}` != 1635 ? "all .5s" : "none",
                  }}
                  id="secsec_same"
                >
                  <BlockSec src={e} />

                </div>
              );
            }
            else{
              return (
                <div key={i} id="secsec_same">
                  <BlockSec src={e} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
