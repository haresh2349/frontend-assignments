import React from "react";
import "./App.css";
import List from "./Problem1/List";
import JoinUs from "./Problem2/JoinUs";
import Login from "./Problem2/Login";
import Search from "./Problem2/Search";
import Home from "./Problem2/Home";
import Settings from "./Problem2/Settings";
import ContactUs from "./Problem2/ContactUs";
import Help from "./Problem2/Help";
import Downloads from "./Problem2/Downloads";
import Common from "./Problem2Part2/Common";

function App() {
  return (
    <>
      <h1>Problem1</h1>
      <div className="mobile">
        <List />
      </div>
      <h1>Problem2 Part:1</h1>
      <div className="buttons">
        <JoinUs />
        <Settings />
        <Login />
        <ContactUs />
        <Search />
        <Help />
        <Home />
        <Downloads />
      </div>
      <h1>Problem2 Part:2</h1>
      <div className="common">
        <Common cls="btn" bg="#1d99c8" heading="JOIN US" />
        <Common cls="btn" bg="#709dab" heading="SETTINGS" />
        <Common cls="btn" bg="#f79324" heading="LOGIN" />
        <Common cls="btn" bg="#9f3734" heading="CONTACT US" />
        <Common cls="btn" bg="#6ca044" heading="SEARCH" />
        <Common cls="btn" bg="#524d86" heading="HELP" />
        <Common cls="btn" bg="#db4483" heading="HOME" />
        <Common cls="btn" bg="#9b7e30" heading="DOWNLOADS" />
      </div>
    </>
  );
}

export default App;
