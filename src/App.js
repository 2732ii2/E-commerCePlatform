import "./App.css";
import Header from "./Comp/Header";
import Categories from "./Comp/Categories";
import Content from "./Comp/Contents/Content";
import { Provider } from "react-redux";
import store from "./Comp/Redux/Store";
import Sidebar from "./Comp/Sidebar";
import { link_s } from "./Comp/Contents/Lists";
import Home from "./Comp/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Comp/Pages/Login";

import { auth } from "./Firebase/Firebase";
import Register from "./Comp/Pages/Register";
import { useEffect, useState } from "react";
import Dummy from "./Comp/Pages/Dummy_login";
import Collection from "./Comp/Pages/Collection";
import Blog from "./Comp/Pages/Blog";
import WoodenChair from "./Comp/Pages/WoodenChair";
import Contact from "./Comp/Pages/Contact";
function App() {
  const [user,setuser]=useState("");
  console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        setuser(user);
      }
    });
  }, []);
  return (
    <Provider store={store}>
      {" "}
      <div className="App">
        <Routes>
          {/* <Route  path='/'  element=(< <Home />)/> */}
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login user={user} />} />
          <Route path="/register" element={<Register user={user} />} />
          {
            link_s.map((e,i)=>{
              var main=e.toLowerCase();
              console.log(main);
              if (i!==0){
                return (
                  <Route
                    path={`/${main}`}
                    element={
                      main.includes("collection") ? (
                        <Collection user={user} />
                      ) : main.includes("blog") ? (
                        <Blog />
                      ) : main.includes("contact") ? (
                        <Contact user={user} />
                      ) : main.includes("wooden") ? (
                        <WoodenChair user={user} />
                      ) : (
                        <Home user={user} />
                      )
                    }
                  />
                );
              }
            })
          }
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
