import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from '../../Firebase/Firebase';
// export default function Register() {
//   return (
//     <div>Register</div>
//   )
// }



import Header from '../Header';
import Categories from '../Categories';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
export default function Register(user) {
    console.log("this is an :", user.user);
    var navi=useNavigate();
    var li_log=["Firstname","Lastname","Email","Password"];
    var [states, setstates] = useState({
      Firstname: "",
      Lastname:"",
      Email:"",
      Password:""
    });
    // console.log(states);
  return (
    <div id="p_log_reg">
      <Header user={user} />
      <Categories />
      <div id="div_log">
        <div id="first_slit_acc">
          <div id="fsc_ins">
            <div id="fcs_acc">Create Account</div>
            <div onClick={() => navi("/")} id="fcs_home">
              Home
            </div>
          </div>
        </div>

        <div id="mlc">
          {user.user.displayName ? (
            <>
              Hello {user.user.displayName} Welcome to your Store 👋 
              <button onClick={async() => {
                var data=await signOut(auth);
                console.log(data);
                navi("/");

                setTimeout(() => {
                  window.location.reload();
                  // alert("signOut");
                }, 1);
              }}> logout </button>
            </>
          ) : (
            <div id="ins_mlc">
              <h1 id="h1_mlc">Create Account</h1>
              {li_log.map((e, i) => {
                return (
                  <input
                    name={e}
                    onChange={(e) => {
                      setstates({
                        ...states,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    id="inp_mlc"
                    type={e == "Password" ? "password" : "text"}
                    placeholder={e}
                    key={i}
                  />
                );
              })}

              <button
                onClick={async () => {
                  console.log(states);
                  var a = Object.keys(states);
                  console.log(a);
                  var c = a.filter((e, i) => {
                    if (!states[e]) {
                      return e;
                    }
                  });
                  if (c.length !== 0) {
                    alert("Fill the details");
                  } else {
                    console.log("all is good");
                    var username = states.Firstname + " " + states.Lastname;
                    var data;
                    try {
                      data = await createUserWithEmailAndPassword(
                        auth,
                        states.Email,
                        states.Password
                      );
                      await updateProfile(data.user, {
                        displayName: username,
                      });
                      console.log(data);
                      setTimeout(() => {
                        navi("/register");
                      }, 100);
                    } catch (e) {
                      console.log(e.message);
                      alert(e.message);
                    }
                  }
                }}
                id="mlc_btn"
              >
                CREATE
              </button>
              <p
                onClick={() => {
                  navi("/");
                }}
                id="mlc_p"
              >
                Return To Store{" "}
              </p>
            </div>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
