import React, { useState } from 'react'
import freedellogo from "../Images/free-shipping.png";
import banner3 from "../Images/sub-banner-3.webp";
import StarIcon from "@mui/icons-material/Star";
import banner4 from "../Images/sub-banner-4.webp";
import banner5 from "../Images/sub-banner-5.webp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./SecoondDiv.css";
import watch from "../Images/watch_banner.webp";
import { li1,li2 } from './Lists';




import Item from './Item';

export default function SecondDiv() {
  var [shift_mar,setmargin]=useState(0);
  var li_=["Electronics","Fashion"];
  
  var list_1 = [
    { ban: banner3, name: "S22 Samsung Smart phone",price:250.00 },
    { ban: banner4,name:"Armhair Mad by Shopstic" ,price : 190.00},
    { ban: banner5,name:"Noise Wireless Headphones",price :129.00 },
  ];
  return (
    <div id="sec_con">
      <div id="free_del">
        <div id="firstfree">
          <img
            src={freedellogo}
            style={{ width: "40%", height: "70%", objectFit: "contain" }}
          />
          <h2 id="h_2_f">FREE SHIPPING</h2>
        </div>
        <div id="secondfree">
          Free delivery Now on your first order and over $200
        </div>
        <div id="thirdfree">-ONLY $200*</div>
      </div>
      <div id="threedivs">
        {list_1.map((e, i) => {
          return (
            <div id="samethrees" key={i}>
              <img id="img_" src={e.ban} />
              <div id="sthrecontent">
                <h2 id="_h_2"> {e.name}</h2>
                <h6 id="_h_6"> $ {e.price}.00</h6>
                <p id="_p_">SHOP NOW</p>
              </div>
            </div>
          );
        })}
      </div>
      <div id="lists">
        <div id="list_divison">
          <div id="li">
            {li_.map((e, i) => {
              // color: rgb(78, 76, 76, 0.8);
              if (i === 0) {
                return (
                  <div
                    id="inside_li"
                    onClick={() => setmargin(0)}
                    style={{
                      color:
                        `${shift_mar}` == 0 ? "black" : "rgb(78, 76, 76, 0.8)",
                    }}
                    key={i}
                  >
                    {e}
                  </div>
                );
              } else {
                return (
                  <div
                    id="inside_li"
                    onClick={() => setmargin(1076)}
                    style={{
                      color:
                        `${shift_mar}` >= 1076
                          ? "black"
                          : "rgb(78, 76, 76, 0.8)",
                    }}
                    key={i}
                  >
                    {e}
                  </div>
                );
              }
            })}
          </div>
          <div id="li_btns">
            <button
              onClick={() =>
                shift_mar ? setmargin(shift_mar - 269) : setmargin(0)
              }
              id="li_btn"
            >
              <ArrowBackIosIcon />
            </button>
            <button
              onClick={() => {
                if (shift_mar < 1883) {
                  setmargin(shift_mar + 269);
                } else {
                  setmargin(0);
                }
              }}
              id="li_btn"
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div id="items">
          {li1.map((e, i) => {
            if (i === 0) {
              return <Item key={i} props={e} index={i} styles={shift_mar} />;
            } else {
              return <Item key={i} props={e} index={i} />;
            }
          })}
        </div>
      </div>

      {/* here it's of list starting of different watch transform */}

      <div id="watch">
        <img
          src={watch}
          id="watch_img"
          style={{ width: "99%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* end of watc */}
      <div id="list1">
        <div id="list_divison">
          <div id="li">
            <div
              id="inside_li"
              style={{
                color: "black",
              }}
            >
              Latest Products
            </div>
          </div>
        </div>
        <div id="items">
          {li2.map((e, i) => {
            
              return <Item key={i} props={e} index={i} />;
            
          })}
        </div>
      </div>
    </div>
  );
}
