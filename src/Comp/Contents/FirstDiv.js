import React, { useState } from 'react'
import banner1 from "../main-banner-1.webp";
import banner2 from "../main-banner-2.webp";
import img1 from "../Images/cat-1.jpg";
import img2 from "../Images/cat-2.jpg";
import img3 from "../Images/cat-3.jpg";
import img4 from "../Images/cat-4.jpg";
import img5 from "../Images/cat-5.jpg";
import img6 from "../Images/cat-6.webp";
import img7 from "../Images/cat-7.jpg";

import subBanner1 from "../sub-banner-1.jpg";
import subBanner2 from "../sub-banner-2.jpg";


export default function FirstDiv() {
  var list_ = [{img:img1,name:"Smart Tablet"},{img: img2,name:"Crepe T-shirt"},{img:img3,name:"lether watch"},{img: img4,name:"Rolling Diamond"},{img:img5,name:"Wooden Chair"},{img: img6,name:"Sneakers Shoes"},{img:img7,name:"Lavish Purse"}];
  var [margins,setmargin]=useState({
    mar:0,
    color:"white"
  });
  var clicked=0;
  function settimeoutfunction ()
  {
     setTimeout(() => {
       if (!margins.mar) {
         setmargin({
           ...margins,
           mar: 100,
           color: "#ff5252",
         });
       } else {
         setmargin({
           ...margins,
           mar: 0,
           color: "white",
         });
       }
     }, 4000);
  }
  if(!clicked){
    // settimeoutfunction();
  }
  else{
    console.log("stopped");
  }
  return (
    <div id="first_con">
      <div id="topfirst">
        <div id="img_div">
          <div style={{ marginLeft: `-${margins.mar}%` }} id="divbanners">
            <img id="banners" src={banner1} />
            <div id="lines">
              <h3 id="mainbnrh3">Big Saving days Sale</h3>
              <h1 id="mnbnrh1">Women Solid Round Green T-Shirt</h1>
              <h4 id="mnbnh4">
                Starting at Only <span id="sp"> $59.00 </span>
              </h4>
              <button id="bnrbtn">SHOP NOW</button>
            </div>
          </div>
          <div id="divbanners">
            <img src={banner2} id="banners" />
            <div id="lines">
              <h3 id="mainbnrh3">Big Saving days Sale</h3>
              <h1 id="mnbnrh1">Buy Modern Chair In Black Color</h1>
              <h4 id="mnbnh4">
                Starting at Only <span id="sp"> $99.00 </span>
              </h4>
              <button id="bnrbtn">SHOP NOW</button>
            </div>
          </div>

          <div id="buttons_div">
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                background:
                  `${margins.color}` === "white" ? "#ff5252" : "white",
              }}
              onClick={(e) =>
                
                {
                  // clicked=1;
                  setmargin({
                    ...margins,
                    mar: 0,
                    color: "white",
                  });
                }
              }
            >
              {" "}
            </div>
            <div
              onClick={(e) =>
                {
                  // clicked=1;
                  setmargin({
                    ...margins,
                    mar: 100,
                    color: "#ff5252",
                  });
                }
              }
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                background: `${margins.color}`,
              }}
            ></div>
          </div>
        </div>
        <div id="t_img_div">
          <div id="same_t_div">
            <img src={subBanner1} style={{ width: "100%", height: "100%" }} />
            <div id="subbancontent">
              <h1 id="h_1">Samsung Gear VR camera</h1>
              <h3 id="h_3">$129.00</h3>
              <p id="para">SHOP NOW</p>
            </div>
          </div>
          <div id="same_t_div1">
            <img src={subBanner2} style={{ width: "100%", height: "100%" }} />
            <div id="subbancontent1">
              <h1 id="h_1">Marcel Dinning Room Chair</h1>
              <h3 id="h_3">$145.00</h3>
              <p id="para1">SHOP NOW</p>
            </div>
          </div>
        </div>
      </div>
      <div id="firstdiv_bottom">
        {list_.map((e, i) => {
          return (
            <div key={i} id="caticons">
              <img
                src={`${e.img}`}
                style={{ width: "100%", height: "80%", objectFit: "contain" }}
              />
              <div
                style={{
                  overflow: "hidden",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                {e.name}{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
