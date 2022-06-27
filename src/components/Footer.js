import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
const Footer = () => {
  return (
    <div className="pb-10">
      <div className="md:flex items-center justify-between mx-auto w-11/12 lg:w-10/12 bg-slate-400 pt-10 pb-5 ">
        <h2 className="uppercase font-bold text-3xl z-30 text-slate-100 ">
          Beaches.
        </h2>
        <ul className="flex items-center ">
          <li className="pl-3 text-cyan-600">FaceBook</li>
          <li className="pl-3 text-cyan-600">Twitter</li>
          <li className="pl-3 text-cyan-600">Instagram</li>
          <li className="pl-3 text-cyan-600">Pinterest</li>
        </ul>
      </div>
      <div className="md:flex items-center justify-between mx-auto w-11/12 lg:w-10/12 bg-slate-400">
      <ul className="flex items-center ">
          <li className="pr-3 text-cyan-600">About</li>
          <li className="pr-3 text-cyan-600">Parnerships</li>
          <li className="pr-3 text-cyan-600">Careers</li>
          <li className="pr-3 text-cyan-600">Newrooms</li>
          <li className="pr-3 text-cyan-600">Advertising</li>

        </ul>
        <ul className="flex items-center ">
          <li className="pl-3 text-cyan-600">Home</li>
          <li className="pl-3 text-cyan-600">Destinations</li>
          <li className="pl-3 text-cyan-600">Travel</li>
          <li className="pl-3 text-cyan-600">Views</li>
          <li className="pl-3 text-cyan-600">Books</li>

        </ul>
      </div>
    </div>
  );
};

export default Footer;
