import React from "react";
import { Calllogo, Loction, Massagebox, Refreshlogo } from "../common/Icons";
import Commonbtn from "../common/Commonbtn";
import Navbaar from "../common/Navbaar";

const Hero = () => {
  return (
    <>
      <header className="hero_bg_img">
        <div className=" container d-lg-flex d-none justify-content-center pt-14">
          <div className=" top_texts flex-wrap  d-flex  justify-content-between justify-content-center align-items-center">
            <div className=" d-flex  align-items-center gap-10">
              <Loction />
              <p className=" mb-0 text-white op-70 ff-acuminbold fw-normal text-16 lh-24  ">
                Crawley Mill Industrial Estate, Witney, Oxfordshire{" "}
              </p>
            </div>
            <div className=" d-flex  align-items-center gap-10">
              <Massagebox />
              <p className=" mb-0 text-white op-70 ff-acuminbold fw-normal text-16 lh-24  ">
                book@dryiceblastingpro.co.uk
              </p>
            </div>
            <div className=" d-flex  align-items-center gap-10">
              <Calllogo />
              <p className=" mb-0 text-white op-70 ff-acuminbold fw-normal text-16 lh-24  ">
                01865123456
              </p>
            </div>
            <div className=" d-flex  align-items-center gap-10">
              <Refreshlogo />
              <p className=" mb-0 text-white op-70 ff-acuminbold fw-normal text-16 lh-24  ">
                Mon - Fri: 9am to 5pm
              </p>
            </div>
          </div>
        </div>
        <Navbaar />

        <div className="container pb-231 pt-87">
          <h1 className=" mb-0 ff-TitlingGothic fw-700  text-96 lh-115 text-white text-center">
            Automotive Dry <span className=" d-block">Ice Cleaning</span>
          </h1>
          <p className=" ff-acuminbold text-20 lh-30 mb-0 text-white text-center mt-3">
            Discover the ultimate clean for your machine.
            <span className=" d-sm-block">
              No chemicals, no abrasives and no drama.
            </span>
          </p>
          <div className=" d-flex  flex-column align-items-center pt-40">
            <Commonbtn text="Get Instant Quote" />
            <div className="Abrasive_box mt-39 d-flex justify-content-center ">
              <div className=" d-flex flex-wrap align-items-center gap-28">
                <div className=" d-flex align-items-center gap-12">
                  <div className="right_svg_box d-flex justify-content-center align-items-center">
                    <svg
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.8L5.66667 10L15 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className=" ff-acuminreg text-16 fw-700 lh-24 mb-0 text-white">
                    Non-Abrasive
                  </p>
                </div>
                <div className=" d-flex align-items-center gap-12">
                  <div className="right_svg_box d-flex justify-content-center align-items-center">
                    <svg
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.8L5.66667 10L15 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className=" ff-acuminreg text-16 fw-700 lh-24 mb-0 text-white">
                    Non-Abrasive
                  </p>
                </div>
                <div className=" d-flex align-items-center gap-12">
                  <div className="right_svg_box d-flex justify-content-center align-items-center">
                    <svg
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.8L5.66667 10L15 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className=" ff-acuminreg text-16 fw-700 lh-24 mb-0 text-white">
                    Non-Abrasive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
