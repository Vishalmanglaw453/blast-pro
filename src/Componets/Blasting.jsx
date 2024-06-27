import React from "react";
import car1 from "../assets/images/svg/blast-car-1.svg";
import car2 from "../assets/images/svg/blast-car-2.svg";
import car3 from "../assets/images/svg/blast-car-3.svg";
import car4 from "../assets/images/svg/blast-car-4.svg";
import blast from "../assets/images/png/blasting_img.png";

const Blasting = () => {
  return (
    <>
      <section>
        <div className="container pt-5">
          <h2 className=" ff-TitlingGothic fw-700 text-48 lh-57 text-center mb-0 color-black">
            Why Choose Dry Ice Blasting for Your Car?
          </h2>
          <div className="row pt-5">
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-cente align-items-center align-items-lg-start">
              <div className=" d-flex gap-12">
                <img src={car1} alt="car1" />
                <div className="effective">
                  <p className="  ff-acuminbold fw-700 text-16 lh-24 mb-0 color-black">
                    Effective Cleaning
                  </p>
                  <p className=" ff-acuminreg mt-1  text-16 lh-24 mb-0 color-black op-70 ">
                    The sublimation process effectively removes dirt, oil, and
                    grime, even in hard-to-reach areas.
                  </p>
                </div>
              </div>
              <div className=" pt-28 d-flex gap-12">
                <img src={car2} alt="car2" />
                <div className="effective">
                  <p className="  ff-acuminbold fw-700 text-16 lh-24 mb-0 color-black">
                    Non-Abrasive
                  </p>
                  <p className=" ff-acuminreg mt-1  text-16 lh-24 mb-0 color-black op-70 ">
                    Unlike sandblasting or chemical cleaning, dry ice blasting
                    won’t damage your car’s components or paint.
                  </p>
                </div>
              </div>
              <div className=" pt-28 d-flex gap-12">
                <img src={car3} alt="car3" />
                <div className="effective">
                  <p className="  ff-acuminbold fw-700 text-16 lh-24 mb-0 color-black">
                    No Residue
                  </p>
                  <p className=" ff-acuminreg mt-1  text-16 lh-24 mb-0 color-black op-70 ">
                    Since dry ice sublimates, there’s no residual waste to clean
                    up, making it an environmentally friendly option.
                  </p>
                </div>
              </div>
              <div className=" pt-28 d-flex gap-12">
                <img src={car4} alt="car4" />
                <div className="effective">
                  <p className="  ff-acuminbold fw-700 text-16 lh-24 mb-0 color-black">
                    Safe for Various Materials
                  </p>
                  <p className=" ff-acuminreg mt-1  text-16 lh-24 mb-0 color-black op-70 ">
                    It’s safe for use on metals, plastics, rubbers, fabrics and
                    more, ensuring comprehensive cleaning without damage.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center justify-content-lg-start mt-lg-0 mt-4">
              <img src={blast} alt="blast" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blasting;
