import React, { useState } from 'react'
import logo from "../logo.webp";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { clickhandler, ChangeHandler } from "./AllHandlers";
import { useNavigate } from 'react-router-dom';
export default function Header({user}) {
    console.log(user.user);
    var navi=useNavigate();
    var [sugges_state,setstate]=useState({
        display:"none",
        height:"0"
    })
    var [value,setvalue]=useState("");
  return (
    <div className="header">
      <div id="insidedev">
        <img
          src={logo}
          style={{ width: "20%", height: "100%", objectFit: "contain" }}
        />
        <div id="search_div">
          <div id="inside_se">
            <input
              style={{
                border: "2px solid #E5E5E5",
                outline: "none",
                width: "75%",
                height: "55%",
                fontWeight: 450,
                fontFamily: "'Dancing Script', cursive",
                letterSpacing: "1px",
                marginRight: "10px",
                borderRadius: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
              onChange={(e) => {
                ChangeHandler(e, sugges_state, setstate, setvalue);
              }}
              placeholder="Search"
            />
            <button onClick={clickhandler} id="search_btn">
              Search
            </button>
          </div>
          <div
            style={{
              display: `${sugges_state.display}`,
              minHeight: `${sugges_state.height}`,
            }}
            id="suggestion"
          >
            Search Result : {value}
          </div>
        </div>
        <div id="log_carts">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navi("/login")}
            id="log_reg"
          >
            {" "}
            {user.user ? "My Account" : "Login / Reg"}{" "}
          </div>
          <div id="user">
            <PersonIcon />
          </div>
          <div id="carts">
            <div id="same">
              <LayersIcon id="icons" />
              <p id="p">0</p>
            </div>
            <div id="same">
              <FavoriteBorderIcon id="icons" />
              <p id="p">0</p>
            </div>
            <div id="same">
              <RemoveShoppingCartIcon id="icons" />
              <p id="p">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
