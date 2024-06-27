import React from "react";

import {
  Footercalllogo,
  Footeremail,
  Footerloction,
  Footerrefresh,
  Instagram,
  Tiktok,
  Youtube,
} from "../common/Icons";
import logo from "../assets/images/svg/navlogo.svg";
import insta from "../assets/images/svg/insta.svg";
import tiktok from "../assets/images/svg/tiktok.svg";
import youtube from "../assets/images/svg/youtube.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container d-flex justify-content-center">
          <div className="flex-wrap w-100 pt-38  d-flex  justify-content-between justify-content-center align-items-center">
            <div className=" d-flex  align-items-center gap-10">
              <Footerloction />
              <p className=" mb-0 text-white op-70  ff-acuminreg fw-normal text-16 lh-24  ">
                Crawley Mill Industrial Estate, Witney, Oxfordshire{" "}
              </p>
            </div>
            <div className=" d-flex  align-items-center gap-10">
              <Footeremail />
              <p className=" mb-0 text-white op-70  ff-acuminreg fw-normal text-16 lh-24  ">
                book@dryiceblastingpro.co.uk
              </p>
            </div>
            <div className=" d-flex  align-items-center gap-10">
              <Footercalllogo />
              <p className=" mb-0 text-white op-70  ff-acuminreg fw-normal text-16 lh-24  ">
                01865123456
              </p>
            </div>
            <div className=" d-flex  align-items-center gap-10">
              <Footerrefresh />
              <p className=" mb-0 text-white op-70  ff-acuminreg fw-normal text-16 lh-24  ">
                Mon - Fri: 9am to 5pm
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-57">
          <div className="row">
            <div className="col-lg-4 col-sm-6  col-12 order-1">
              <img src={logo} alt="logo" />
              <p className=" ff-acuminreg fw-400 text-16 lh-25 mb-0 text-white op-70 footer_text1">
                IceBlastPro is Oxfordshire's Dry Ice Car Cleaning specialists.
                Removing dirt and grime in hard to reach areas with a
                non-abrasive Dry Ice Blasting technique that requires no
                chemicals and leaves no mess.
              </p>
            </div>
            <div className="col-lg-3 col-6 order-2 d-flex justify-content-sm-center">
              <ul className=" d-flex flex-column  gap-12">
                <li className=" mb-1 text-white ff-acuminbold fw-700 text-18 lh-27">
                  Quick Link
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-acuminreg fw-400 text-16 lh-25 text-white op-70 mb-0"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-acuminreg fw-400 text-16 lh-25 text-white op-70 mb-0"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-acuminreg fw-400 text-16 lh-25 text-white op-70 mb-0"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-acuminreg fw-400 text-16 lh-25 text-white op-70 mb-0"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-acuminreg fw-400 text-16 lh-25 text-white op-70 mb-0"
                  >
                    FAQ’s
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-acuminreg fw-400 text-16 lh-25 text-white op-70 mb-0"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 col-12  order-sm-3 order-4">
              <ul className=" d-flex flex-column  gap-12">
                <li className=" mb-1 text-white ff-acuminbold fw-700 text-18 lh-27">
                  Legal Information
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-acuminreg fw-400 text-16 lh-25 text-white op-70 mb-0"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-acuminreg fw-400 text-16 lh-25 text-white op-70 mb-0"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 order-sm-4 order-3 d-flex justify-content-lg-start justify-content-sm-center ">
              <ul className=" d-flex flex-column  gap-12">
                <li className=" mb-1 text-white ff-acuminbold fw-700 text-18 lh-27">
                  Follow us
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className=" ff-acuminreg footer_svg_text  d-flex align-items-center gap-12 fw-400 text-16 lh-25 text-white  mb-0"
                  >
                    <div className=" footer_svg_box d-flex justify-content-center  align-items-center">
                      {" "}
                      <Instagram />
                    </div>
                    <span className=" op-70">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/foryou?lang=en"
                    className=" ff-acuminreg footer_svg_text  d-flex align-items-center gap-12 fw-400 text-16 lh-25 text-white  mb-0"
                  >
                    <div className="footer_svg_box d-flex justify-content-center  align-items-center">
                      <Tiktok />
                    </div>
                    <span className=" op-70">Tiktok</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    className=" ff-acuminreg footer_svg_text  d-flex align-items-center gap-12 fw-400 text-16 lh-25 text-white  mb-0"
                  >
                    <div className="footer_svg_box d-flex justify-content-center  align-items-center ">
                      <Youtube />
                    </div>
                    <span className=" op-70">YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className=" mb-0 ff-acuminreg fw-400 text-14 lh-14 text-white op-70 text-center  pt-48">Copyright©{new Date().getFullYear()}(IceBlastPro) All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
