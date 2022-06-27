import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch

  } from "@fortawesome/free-solid-svg-icons";
  import beachVid from "../assets/beachVid.mp4";
const Hero = () => {
  return (
    <div className=" h-screen w-full top-0">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full overlay">
        <video
          className="w-full h-full object-cover"
          src={beachVid}
          autoPlay
          loop
          muted
        />
      </div>

      <div className=" absolute w-full h-full top-0 left-0 bottom-0 right-0">
        <div className="text-white font-bold flex flex-col items-center justify-center h-full w-100 hero-text">
          <h1 className="text-3xl capitalize text-white mb-3">First class travel</h1>
          <h4 className="text-2xl capitalize tracking-wide ">Top 1% Location Worldwide</h4>
          <div className="flex items-center md:w-6/12 w-11/12  justify-between p-3 mt-4 bg-white rounded-md text-black w-full">
            <input placeholder="Search Destinations" type="text"  className="bg-transparent	border-none outline-none text-black px-2 py-3"/>
            <FontAwesomeIcon icon={faSearch} className="searchIcon p-4 rounded-md cursor-pointer"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
