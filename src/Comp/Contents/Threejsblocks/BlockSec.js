import React from 'react'

export default function BlockSec({src}) {
    // console.log(src);
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        border: "1px solid rgba(0,0,0,.3)",
        // boxShadow: "0 11px 22px -10px black",
      }}
    >
      <div id="topsec_n">
        <div id="user_1">
          <img
            src={src.src}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div id="names_">
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            {src.name}
          </div>
          <div
            style={{
              fontSize: "1.1rem",
              fontWeight: 400,
              letterSpacing: "1px",
            }}
          >
            {src.position}
          </div>
        </div>
      </div>
      <div id="botsec_n">{src.para}</div>
    </div>
  );
}
