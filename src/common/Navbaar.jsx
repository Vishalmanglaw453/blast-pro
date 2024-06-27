import React from "react";
import logo from "../assets/images/svg/navlogo.svg";
 import { useState } from "react";
import Commonbtn from "./Commonbtn";
const Navbaar = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
    <div className=" pt-14">
      <div className="nav_box mx-auto">
        <div className="container">
          <div className=" d-flex justify-content-between align-items-center">
           <div> <img src={logo} alt="logo" /></div>
            <ul
              className={`${
                nav  ? "start-0" : "start_100"
              } mb-0 ps-0   d-flex  gap-3  mobile_view `}
            >
              <li>
                <a href="" className=" ff-acuminbold fw-700 text-16 lh-19 grey">
                  Home
                </a>
              </li>
              <li>
                <a href="" className=" ff-acuminbold fw-700 text-16 lh-19 grey">
                  About us
                </a>
              </li>
              <li>
                <a href="" className=" ff-acuminbold fw-700 text-16 lh-19 grey">
                  Services
                </a>
              </li>
              <li>
                <a href="" className=" ff-acuminbold fw-700 text-16 lh-19 grey">
                  Pricing
                </a>
              </li>
              <li>
                <a href="" className=" ff-acuminbold fw-700 text-16 lh-19 grey">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className=" ff-acuminbold fw-700 text-16 lh-19 grey">
                  Contact us
                </a>
              </li>
              <li className=" d-sm-none d-block"> <Commonbtn  text="Call Us" /></li>
            </ul>
            <div className=" d-none d-sm-block">
                <Commonbtn  text="Call Us" />
            </div>

            <div
              onClick={show}
              className="menu d-block d-lg-none position-relative  z-3"
            >
              <span></span>
              <span className="my-2"></span>
              <span></span>
            </div>
          </div>
        </div>
      </div></div>
    </>
  );
};

export default Navbaar;
