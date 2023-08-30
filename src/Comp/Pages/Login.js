import React, { useState } from 'react'
import Header from '../Header';
import Categories from '../Categories';
import {signInWithEmailAndPassword,signOut} from "firebase/auth";
import {auth} from "../../Firebase/Firebase";
import "./login.css";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
export default function Login(user) {
    var navi=useNavigate();
    var li_log=["Email","Password"];
    var [states, setstates] = useState({
      Email: "",
      Password:""
    });
    // console.log("states of Login",states);

    


    


  return (
    <div id="p_log_reg">
      <Header user={user} />
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
          {user.user.displayName ? (
            <>
              Hello {user.user.displayName} Welcome to your Store 👋
              <button
                onClick={async () => {
                  var data = await signOut(auth);
                  console.log(data);
                  navi("/");

                  setTimeout(() => {
                    window.location.reload();
                    // alert("signOut");
                  }, 1);
                }}
              >
                {" "}
                logout{" "}
              </button>
            </>
          ) : (
            <div id="ins_mlc">
              <h1 id="h1_mlc">Login to your account</h1>
              {li_log.map((e, i) => {
                return (
                  <input
                    id="inp_mlc"
                    name={e}
                    type={e == "Password" ? "password" : "text"}
                    onChange={(e) => {
                      setstates({
                        ...states,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder={e}
                    key={i}
                  />
                );
              })}
              <button
                onClick={async () => {
                  // console.log(states);

                  var a = Object.keys(states);
                  var c = a.filter((e, i) => {
                    if (!states[e]) {
                      return e;
                    }
                  });
                  if (c.length) {
                    alert("Fill the details");
                  } else {
                    try {
                      var data = await signInWithEmailAndPassword(
                        auth,
                        states.Email,
                        states.Password
                      );
                      console.log(data);
                      navi("/");
                    } catch (e) {
                      console.log(e.message);
                      alert(e.message);
                    }
                  }
                }}
                id="mlc_btn"
              >
                Sign In
              </button>
              <p onClick={() => navi("/register")} id="mlc_p">
                No account yet ? Create an account
              </p>
            </div>
          )}
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
