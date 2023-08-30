import React from "react";
import Header from "../Header";
import Categories from "../Categories";
import Content from "../Contents/Content";
import Sidebar from "../Sidebar";

export default function Home(user) {
  console.log(user);
  return (
    <div id="home">
      <Header user={user} />
      <Categories />
      <Content />
      <Sidebar />
    </div>
  );
}
