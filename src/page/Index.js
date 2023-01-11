import React, { useState, useEffect } from "react";
import HeroSlider from "../components/hero-slider/HeroSlider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Beg from "../components/products/Beg";
import Others from "../components/products/Others";
import CompanyProfile from "../components/company-proflle/CompanyProfile";
import Video from "../components/video/Video";
import NewArrivals from "../components/new-arrivals/NewArrivals";

export default function Index({ children }) {
  const [first, setfirst] = useState("");

  return (
    <div>
      <Header></Header>
      <HeroSlider></HeroSlider>
      <CompanyProfile></CompanyProfile>
      <Beg></Beg>
      <NewArrivals></NewArrivals>
      <Beg></Beg>
      <Others></Others>
      <Video></Video>
      <Footer></Footer>
    </div>
  );
}
