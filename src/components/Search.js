import React from "react";
import FunctionServices from "./FunctionServices";
import { faSearch, faHeadphones } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  return (
    <div className="md:flex block  justify-between w-11/12 lg:w-10/12 mx-auto pt-6">
      <div className="md:w-3/4 pr-3 mt-10 ">
        <h1 className="font-bold uppercase text-xl">
          Luxury included vacations for two people
        </h1>
        <p className="text-sm my-3">
          Come experience the very pinnacle of luxury Caribbean all-inclusive
          vacations for couples at BEACHES Resorts. Our luxury beach resorts,
          set along the most gorgeous tropical settings and exquisite beaches in
          Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
          Curaçao, feature unlimited gourmet dining, unique bars serving premium
          liquors and wines, and every land and water sport, including
          complimentary green fees at our golf resorts and certified scuba
          diving at most resorts. If you are planning a wedding, BEACHES is the
          leader in Caribbean destination weddings and honeymoon packages.
        </p>
        <div className="flex items-center justify-between pt-10 pb-5">
          <FunctionServices
            icon={faSearch}
            title={"Leading Service"}
            text={"All inclusive company for 20 years in-a-row"}
          />
          <FunctionServices
            icon={faHeadphones}
            title={"Automated bookings"}
            text={"All inclusive company for 20 years in-a-row"}
          />
        </div>
      </div>
      <div className="md:w-2/4 ">
        <div className="border border-solid border-black py-4 px-3 text-center ">
          <h2 className="uppercase ">Get an addiction 10% off</h2>
          <h2 className="uppercase my-2">12 hours left</h2>
          <button className="btn text-black w-10/12 mx-auto uppercase text-white py-3">
            Book now and safe
          </button>
        </div>
        <form className="w-full ">
          <div className=" w-full pt-4 overflow-hidden ">
            <label for="places">Destinations</label>
            <br />
            <select
              id="places"
              name="places"
              className="border border-solid border-black  py-2 w-full rounded-md selectField"
            >
              <option value="grand antigua">Grand Antigua</option>
              <option value="key west">Key West</option>
              <option value="bora bora">Bora Bora</option>
              <option value="maldives">Maldives</option>
              <option value="cozulmel">Cozulmel</option>
            </select>
          </div>
          <div className="pt-4">
            <label for="check-in">Check-in</label>
            <input type="date" id="check-in" name="check-in" className="border border-solid border-black  py-2 w-full rounded-md"/>
          </div>
          <div className="pt-4">
            <label for="check-out">Check-out</label>
            <input type="date" id="check-out" name="check-out" className="border border-solid border-black  py-2 w-full rounded-md"/>
          </div>
          <button className="primarybtn text-white w-full py-3 rounded-md my-5 cursor-pointer">Rates and Availabilites</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
