import React, { useState } from "react";
import Aboutme from "./../pages/Aboutme.js";
import Portfolio from "./../pages/Portfolio.js";
import Resume from "./../pages/Resume.js";
import Contact from "./../pages/Contact.js";
import Navbars from "../Navbars"


export default function MenuBar() {
  const [_Target, _setTarget] = useState(<Aboutme />);
  const [activeItem, setActiveItem] = useState("aboutme");

  function navBar(event) {
    const _targetPage = event.target.name;
    if (_targetPage === "aboutme") {
      _setTarget(<Aboutme />);
      setActiveItem("aboutme")
    }
    if (_targetPage === "portfolio") {
      _setTarget(<Portfolio />);
      setActiveItem("portfolio")
    }
    if (_targetPage === "resume") {
      _setTarget(<Resume />);
      setActiveItem("resume")
    }

    if (_targetPage === "contact") {
      _setTarget(<Contact />);
      setActiveItem("contact")
    }
  }
  return (
    <>
    <Navbars Navbar={navBar} activeItem={activeItem}/>
    {_Target}
  </>
  );
}
