import React from "react";
import toplyar from "../assets/images/png/blast-toplyar.png";
import bottomlyar from "../assets/images/png/blast-bottomlyar.png";
import Commonbtn from "../common/Commonbtn";
const Blast = () => {
  return (
    <>
      <section>
        <img className=" w-100" src={toplyar} alt="blasttoplyar" />
        <div className="container    mt-105">
          <h2 className=" ff-TitlingGothic fw-700 text-48 lh-57 text-center mb-0 color-black">
            Blast The Grime and Bring Back The Prime
          </h2>
          <p className=" mt-3 ff-acuminreg text-16 lh-24 mb-0 fw-400 color-black op-70 text-center">
            Rest easy knowing that our approach is tailored to protect and
            enhance your vehicle. We don’t clean; we care. Every treatment is a{" "}
            <span className=" d-block">
              {" "}
              promise that your vehicle will not only look its best but also
              receive the care it needs for a longer, healthier life on the
              road.{" "}
            </span>
          </p>
          <p className=" ff-acuminbold mt-3 fw-700 text-16 lh-19 mb-0 color-black text-center">
            Ready For a Transformation? Get an Instant Quote
          </p>
          <div className="  d-flex justify-content-center pt-40">
            <Commonbtn text="Get Instant Quote" />
          </div>
        </div>
        <img className=" w-100" src={bottomlyar} alt="blastbottomlyar" />
      </section>
    </>
  );
};

export default Blast;
