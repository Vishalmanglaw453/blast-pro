import React from "react";
import top_lyar from "../assets/images/png/top-layer.webp";
import blasting from "../assets/images/png/blasting-img.png";
import dry from "../assets/images/png/dry-img.png";
import bottomlyar from "../assets/images/png/blast-bottom-layer.webp"
const Understanding = () => {
  return (
    <>
      <section className=" Understanding_bg_color position-relative">
        <img className=" w-100" src={top_lyar} alt="top_lyar" />
        <div className="container   pt-lg-0  pt-4 ">
          <h2 className=" ff-TitlingGothic fw-700 lh-57 text-48 text-center mb-0 text-white">
            Understanding Dry Ice Blasting
          </h2>

          <div className="row pt-137 pb-271">
            <div className="col-md-6 col-12 d-flex flex-column justify-content-center ">
              <p className=" ff-acuminbold text-24 lh-36 mb-0 text-white">
                What is Dry Ice Blasting?
              </p>
              <p className=" Understanding_text  ff-acuminreg text-18 lh-27 mb-0 text-white">
                Dry ice blasting is an innovative cleaning technology that uses
                solid CO2 (carbon dioxide) pellets. These pellets are propelled
                at high speeds to clean surfaces. Unlike traditional cleaning
                methods, this process does not involve water or abrasive
                materials, making it incredibly safe and effective for delicate
                areas like engine bays, undercarriages, and even car interiors.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img src={blasting} alt="blasting" />
            </div>
          </div>
          <div className="row pb-158">
            <div className="col-md-6 col-12 order-md-1 order-2">
              <img src={dry} alt="dry" />
            </div>
            <div className="col-md-6 col-12 order-md-2 order-1 d-flex flex-column justify-content-center ">
              <p className=" ff-acuminbold text-24 lh-36 mb-0 text-white">
                How Does Dry Ice Blasting Work?
              </p>
              <p className="Understanding_text  ff-acuminreg text-18 lh-27 mb-0 text-white">
                The process begins with the dry ice pellets being accelerated in
                a jet of compressed air, similar to sandblasting but with a
                crucial difference. Upon contact with the surface, the dry ice
                pellets undergo sublimation - they turn directly from solid to
                gas without becoming liquid. This reaction creates a
                micro-explosion on the surface, lifting dirt and contaminants
                away.
              </p>
            </div>
          </div>
        </div>
        <img className=" w-100" src={bottomlyar} alt="bottomlyar" />
      </section>
    </>
  );
};

export default Understanding;
