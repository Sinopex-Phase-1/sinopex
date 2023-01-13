import React, { useState } from "react";
import HeroSlider from "../components/hero-slider/HeroSlider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Beg from "../components/products/Beg";
import Others from "../components/products/Others";
import CompanyProfile from "../components/company-proflle/CompanyProfile";
import Video from "../components/video/Video";
import NewArrivals from "../components/new-arrivals/NewArrivals";

export default function Index({ children }) {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
