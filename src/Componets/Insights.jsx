import React from "react";
import { Newscard } from "../common/Helper";
import Commonbtn from "../common/Commonbtn";
const Insights = () => {
  return (
    <>
      <section>
        <div className="container pt-50">
          <h2 className=" ff-TitlingGothic mb-0 fw-700 text-48 lh-57  color-black text-center">
            Latest News & Insights
          </h2>
          <p className="  ff-acuminreg fw-400 text-16 lh-24 mb-0 color-black op-70 text-center mt-3">
            Uncover the latest insights and innovation in car care.
          </p>

          <div className="row  pt_50">
            {Newscard.map((data, index) => (
              <>
                <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4 d-flex justify-content-center ">
                  <div className="new_card">
                    <img className=" w-100" src={data.img} alt="cardimg" />
                    <div className="pl-10">
                      <p className=" ff-acuminbold fw-600 text-16 pt-20 lh-24 color-black opacity-75">
                        {data.date}
                      </p>
                      <p className=" ff-acuminbold text-16 lh-24 mb-0 color-black mt-10">
                        {data.phera}
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </>
            ))}
          </div>
          <div className=" d-flex justify-content-center pt-40">
            {" "}
            <Commonbtn text="More Blogs" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
