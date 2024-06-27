import React from "react";
import Commonbtn from "../common/Commonbtn";
import logo from "../assets/images/svg/mailing-svg.svg"
const Mailing = () => {
  return (
    <>
      <section>
        <div className="container ">
          <div className=" d-flex justify-content-center">
            <div className="Mailing_box  position-relative">
              <img src={logo} alt="mailinglogo" />
              <h2 className=" ff-TitlingGothic fw-700 text-48 lh-57 text-center text-white">
                Join Our Mailing List
              </h2>
              <p className="   mt-2 ff-acuminreg text-16 lh-24 text-center mb-0 text-white opacity-75">
                Get news, videos and deals straight to your inbox.
              </p>
              <div className="   pt-4 d-flex flex-column  align-items-center">
                <form className="email_box d-flex flex-sm-row flex-column gap-sm-0 gap-4  align-items-center justify-content-between">
                  <input
                    className=" border-0 email_input"
                    type="email"
                    placeholder="Enter your email address "
                    required
                  />
                  <Commonbtn text="Subscribe" />
                </form>
                <div>
                  <p className="  mt-4 ff-acuminreg fw-400 text-14 lh-14 text-white ">
                    <span className="op-70">
                      I consent to receive emails & confirm I have read the
                    </span>{" "}
                    <span className=" fw-700 opacity-100 text-white">
                      privacy policy.
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.2976252929807!2d75.71978737411818!3d29.155900560124394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233d0d797efb7%3A0x90a59576018cca5f!2sRadial%20Code!5e0!3m2!1sen!2sin!4v1718177221313!5m2!1sen!2sin"
          width="100%"
          height="456"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Mailing;
