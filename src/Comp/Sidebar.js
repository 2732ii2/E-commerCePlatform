import React from 'react'
import { useSelector } from 'react-redux';

export default function Sidebar() {

    var value=useSelector(state=>state.width);
    console.log(value);
  return <div style={{marginLeft:`-${value}%`,transition:"all .5s ease-in-out"}} id="sidebar"></div>;
}
