import React from 'react'
import Header from '../Header';
import Categories from '../Categories';
import { useNavigate } from 'react-router-dom';
import { collec_list } from '../Contents/Lists';
export default function Collection(user) {
  var navi=useNavigate();
  return (
    <div>
      <Header user={user} />
      <Categories />
      <div
        style={{
          width: "100%",
          height: "82vh",
          display: "flex",
          flexDirection:"column",
          overflowY: "scroll",
        }}
      >
        <div id="first_slit_acc">
          <div id="fsc_ins">
            <div id="fcs_acc"> Collections</div>
            <div onClick={() => navi("/")} id="fcs_home">
              Home
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight:"100%",
            // background: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            // overflowY: "scroll",
          }}
        >
          {collec_list.map((e, i) => {
            return (
              <div
                style={{
                  width: "30%",
                  minWidth: "250px",
                  height: "47%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px",
                  marginBottom: "25px",
                  cursor: "pointer",
                  // border: "1px solid black",
                  maxHeight: "50%",
                  objectFit: "contain",
                }}
              >
                <img
                  
                  src={e.img}
                  style={{
                    width: "100%",
                    height: "88%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    background: "rgb(118, 118, 118,.1)",
                    color: "rgb(118, 118, 118)",
                    width: "auto",
                    height: "12%",
                    display: "flex",
                    // borderBottom: "1px solid black",
                    justifyContent: "center",
                    alignItems: "center",
                    letterSpacing: "1px",
                  }}
                >
                  {e.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
