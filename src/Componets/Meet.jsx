import React from "react";
import teamimg from "../assets/images/png/meet-img.png";
import ellipes from "../assets/images/png/meet-ellipes.png";
 import bottomlyar  from "../assets/images/png/meet-bottom-lyar.png"
const Meet = () => {
  return (
    <>
      <section>
      
        <div className=" container d-flex justify-content-center">
          <div className="meet_section pt-87">
            <div className="row">
              <div className="col-lg-6 col-12 position-relative d-flex justify-content-center">
                <img className=" d-xl-block d-none" src={ellipes} alt="meetellipes" />
                <img src={teamimg} alt="teamimg" />
              </div>
              <div className="col-lg-6 col-12 d-flex  flex-column justify-content-center">
                <p className=" mb-0 ff-TitlingGothic fw-700 text-48 lh-57  color-black">
                  Meet The Team
                </p>
                <p className="   mt-10 ff-acuminbold text-18 lh-21 mb-0 color-black">
                  Oxfordshire's Dry Ice Car Cleaning Specialists
                </p>
                <p className=" mt-3 ff-acuminreg fw-400 text-16 lh-24 mb-0  color-black op-70">
                  We’re shaking up the car cleaning scene with Dry Ice Blasting.
                  From our buzzing unit in Oxfordshire, we're not just a team -
                  we’re a Crew of car enthusiasts, expert restorers, and skilled
                  mechanics united by our love for cars. We treat every car like
                  it’s our own, driven by a philosophy that doing the right
                  thing for your ride is the only way to go. When you hand over
                  your keys to us, you're entrusting your pride and joy to
                  fellow car lovers who understand that every car deserves
                  precision care and a touch of cool.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className=" w-100" src={bottomlyar} alt="meetbottomlyar" />
      </section>
    </>
  );
};

export default Meet;
