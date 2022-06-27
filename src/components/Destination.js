import React from "react";
import borabora from "../assets/borabora.jpg";
import maldives from "../assets/maldives.jpg";
import keywest from "../assets/keywest.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";

const Destination = () => {
  return (
    <div className="w-full text-center my-10">
      <h1 className="font-bold text-3xl mb-4	">All-Inclusive Resorts</h1>
      <p className="mb-5">On the Caribean's Best Beaches</p>
      <div className="lg:grid grid-cols-2 gap-2 w-11/12 lg:w-10/12 mx-auto">
        <img src={borabora} className="mb-3 lg:mb-0"/>
        <div className="lg:grid grid-cols-2 gap-2 ">
          <img src={maldives} className="mb-3 lg:mb-0" />
          <img src={maldives2} className="mb-3 lg:mb-0" />
          <img src={maldives3} className="mb-3 lg:mb-0" />
          <img src={keywest} className="mb-3 lg:mb-0" />
        </div> 
      </div>
    </div>
  );
};

export default Destination;
