import React from "react";
import Carousel from "../components/Carousel";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Selects from "../components/Selects";
const HomePage = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
};

export default HomePage;
