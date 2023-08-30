import React, { useState } from 'react'
import {MouseEnter, MouseLeave, specialcase} from "./AllHandlers";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from 'react-redux';
import {inside_,outside} from "./Redux/Action";
import { link_s } from './Contents/Lists';
import { useNavigate } from 'react-router-dom';
export default function Categories() {
  var [dis_items,setdisplay]=useState({
    display:"none",
    width:"70%"
  })
  var navi=useNavigate();
  var [checkerstate,setchecker]=useState(1);
  console.log("checker state",checkerstate);
  var list1=["Casual Wear","Jean & T-shirts","Crepe T-shirts","Kids Clothes","Sneaker Shoes"];
  var list2 = [
    "Electronicx",
    " X-box Controller",
    "Smart Tablet",
    "Leather Watch",
    "Headphones"
  ];
  var list3 = [
    "Women Jewellary",
    "Rolling Daimong",
    "Engament Ring",
    "Stone Jewellery",
    "Women Bracelet",
  ];


  var selector=useSelector(state=>state.width);
  var dispatch=useDispatch();
  return (
    <div
      onMouseLeave={() => specialcase(dis_items, setdisplay)}
      id="categories"
    >
      <div id="main_cat">
        {link_s.map((e, i) => {
          var main = e;
          if (e === "Cataglog" || e === "Outwears") {
            return (
              <div
                onMouseEnter={(e) => MouseEnter(e, dis_items, setdisplay, main)}
                onMouseLeave={(e) =>
                  MouseLeave(e, dis_items, setdisplay, main, checkerstate)
                }
                id="special_links"
                key={i}
              >
                {e} <KeyboardArrowDownIcon />
              </div>
            );
          } else {
            return (
              <div
                onMouseEnter={() => specialcase(dis_items, setdisplay)}
                onClick={()=>{
                  if(e!="Home"){
                    navi(`/${e}`);
                  }
                  else{
                    navi("/");
                  }
                }}
                id="sim_links"
                key={i}
              >
                {e}
              </div>
            );
          }
        })}
      </div>
      <div
        style={{
          display: `${dis_items.display}`,
          width: `${dis_items.width}`,
        }}
        id="open_bar"
        onMouseEnter={() => {
          setchecker(0);
          setdisplay({
            ...dis_items,
            display: "flex",
          });
        }}
        onMouseLeave={() => {
          setchecker(1);
          setdisplay({
            ...dis_items,
            display: "none",
          });
        }}
      >
        <div id="opdiv">
          {list1.map((e, i) => {
            if (i === 0) {
              return (
                <div key={i} id="insop1">
                  {e}{" "}
                </div>
              );
            } else {
              return (
                <div key={i} id="insop">
                  {e}{" "}
                </div>
              );
            }
          })}
        </div>
        <div id="opdiv">
          {" "}
          {list2.map((e, i) => {
            if (i === 0) {
              return (
                <div key={i} id="insop1">
                  {e}{" "}
                </div>
              );
            } else {
              return (
                <div key={i} id="insop">
                  {e}{" "}
                </div>
              );
            }
          })}
        </div>
        <div id="opdiv">
          {list3.map((e, i) => {
            if (i === 0) {
              return (
                <div key={i} id="insop1">
                  {e}{" "}
                </div>
              );
            } else {
              return (
                <div key={i} id="insop">
                  {e}{" "}
                </div>
              );
            }
          })}
        </div>
      </div>
      <div
        onClick={() => {
          // console.log("hello");
          if (parseInt(selector) === 20) {
            // console.log("true");
            dispatch(outside);
          } else {
            // console.log("false");
            dispatch(inside_);
          }
        }}
        id="menu_icon_bar"
      >
        <MenuIcon /> <p id="men_u"> Menu</p>
      </div>
    </div>
  );
}
