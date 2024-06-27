import React from "react";

const Commonbtn = (props) => {
  return (
    <>
      <button className="  ff-acuminbold  fw-700 text-16 lh-19  commonbtn text-white">
        {props.text}
      </button>
    </>
  );
};

export default Commonbtn;
