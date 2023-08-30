import React from 'react'
import "./Contentstyle.css";
import "./Third.css";
import FirstDiv from './FirstDiv';
import SecondDiv from "./SecondDiv";
import Third from './Third';
export default function Content() {
  return (
    <div id="maincontent">
      <FirstDiv />
      <SecondDiv />
      <Third />
    </div>
  );
}
