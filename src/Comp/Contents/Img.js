import React from 'react'
import "./Third.css";
export function Img(props) {
    var {src,transale,div}=(props);
    console.log(src,transale,props,div);
    var c=1;
    if (div===1){
        c=transale.one;
    }
    else{
        c=transale.two;
    }
  return (
    <>
      <img
        src={src}
        style={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
          objectFit: "cover",
          transform: `scale(${c})`,
          transition: "all .5s ease-in",
        }}
      />
    </>
  );
}


export  function AbsoluteFirst({props}) {
    var {h2,h1}=props;
    console.log(h2,h1);
  return (
    <div id="absfirst">
      <h3 style={{}}>{h2}</h3>
      <h1 style={{ marginTop: "-.5%",height:"64px",overflow:"hidden",fontSize:"1.7rem" }}>{h1}</h1>
      <button
        style={{
          marginTop: "3%",
          width: "50%",
          height: "20%",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "7px",
          
        }}
        // onClick={()=>alert("hello")}
      >
        SHOP NOW
      </button>
    </div>
  );
}
