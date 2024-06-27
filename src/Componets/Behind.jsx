import React from "react";
import toplyar from "../assets/images/png/behind-top-lyar.png";
import bigimg from "../assets/images/png/behind-img.png";
import Commonbtn from "../common/Commonbtn"
import bottomlyar from "../assets/images/png/bottom-layer_behind_scene.webp"
const Behind = () => {
  return (
    <>
      <section className=" behind_bg_img">
        <img className=" w-100" src={toplyar} alt="behindlyar" />
        <div className="container   pt-38 pb-34">
          <h2 className=" ff-TitlingGothic fw-700 text-48 lh-57 mb-0 text-white text-center">
            Behind the Scenes
            <span className=" d-block">Dry Ice Blasting a Car</span>
          </h2>
          <p className="   pt-14  mb-0 ff-acuminreg fw-400 text-16 lh-24 text-center text-white">
            From the initial setup to the final sweep, discover how we elevate
            car cleaning to an{" "}
       
            <span className=" d-lg-block">
              art form, delivering immaculate results every time.
            </span>
          </p>
          <div className=" d-flex justify-content-center pt-50">
            <img src={bigimg} alt="behindbigimg" />
          </div>
          <p className=" mt-39   pt-14  mb-0 ff-acuminbold fw-700 text-16 lh-24 text-center text-white">
            Discover a cleaner, fresher, and more beautiful car, inside and out,
            with our advanced dry ice blasting services.
          </p>
         <div className=" d-flex justify-content-center pt-20"><Commonbtn text="Get Instant Quote"/></div> 
        </div>
        <img className=" w-100" src={bottomlyar} alt="behindbottomlyar" />
      </section>
    </>
  );
};

export default Behind;
