import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="relative">
      <nav className="flex items-center justify-between  h-24 absolute bg-transparent text-white w-full	">
        <h2 className="uppercase font-bold text-3xl z-30 text-slate-100 pl-5">
          Beaches.
        </h2>
        <ul className="flex items-center justify-between md:flex hidden z-30 ">
          <li className="pr-5 font-bold hover:text-emerald-900">
            <Link to="/" className="text-white hover:text-emerald-900 ">
              Home
            </Link>
          </li>
          <li className="pr-5 font-bold ">
            <Link
              to="/destination"
              className="text-white hover:text-emerald-900"
            >
              Destination
            </Link>
          </li>
          <li className="pr-5 font-bold ">
            <Link to="/travel" className="text-white hover:text-emerald-900">
              Travel
            </Link>
          </li>
          <li className="pr-5 font-bold ">
            <Link to="/view" className="text-white hover:text-emerald-900">
              Views
            </Link>
          </li>
          <li className="pr-5 font-bold ">
            <Link to="/book" className="text-white hover:text-emerald-900">
              Book
            </Link>
          </li>
        </ul>
        <div className="md:flex hidden z-30 ">
          <FontAwesomeIcon icon={faSearch} className="mr-3" />
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="md:hidden w-24 text-center z-30 text-white">
          <FontAwesomeIcon
            className="text-2xl"
            icon={openMenu ? faX : faBars}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
        <div
          className={`${
            openMenu ? "block openMenu" : "hidden"
          } fixed top-0 left-0 right-0  h-[70%] z-20 bg-white `}
        >
          <ul className="flex flex-col items-center  w-11/12 mx-auto mt-36">
            <li className=" hover:border-emerald-900 hover:border-b-2 border-b-2 border-solid border-black w-full pl-2 py-3">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:border-emerald-900 hover:border-b-2 border-b-2 border-solid border-black w-full pl-2 py-3">
              <Link to="/destination">Destination</Link>
            </li>
            <li className=" hover:border-emerald-900 hover:border-b-2 border-b-2 border-solid border-black w-full pl-2 py-3">
              <Link to="/travel">Travel</Link>
            </li>
            <li className=" hover:border-emerald-900 hover:border-b-2 border-b-2 border-solid border-black w-full pl-2 py-3">
              <Link to="/view">Views</Link>
            </li>
            <li className=" hover:border-emerald-900 hover:border-b-2 border-b-2 border-solid border-black w-full pl-2 py-3">
              <Link to="/book">Book</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
