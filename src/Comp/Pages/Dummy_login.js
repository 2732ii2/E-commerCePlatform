import React from "react";
import Header from "../Header";
import Categories from "../Categories";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
export default function Dummy() {
  var navi = useNavigate();
  var li_log = ["Email", "Password"];
  return (
    <div id="p_log_reg">
      <Header />
      <Categories />
      <div id="div_log">
        <div id="first_slit_acc">
          <div id="fsc_ins">
            <div id="fcs_acc"> Account</div>
            <div onClick={() => navi("/")} id="fcs_home">
              Home
            </div>
          </div>
        </div>

        <div id="mlc">
                Thanks for login


        </div>


      </div>

      <Sidebar />
    </div>
  );
}
