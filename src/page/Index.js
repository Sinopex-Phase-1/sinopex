import React, { useContext, useEffect, useState } from "react";
import HeroSlider from "../components/hero-slider/HeroSlider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Beg from "../components/products/Beg";
import Beg2 from "../components/products/Beg2";
import Others from "../components/products/Others";
import CompanyProfile from "../components/company-proflle/CompanyProfile";
import Video from "../components/video/Video";
import NewArrivals from "../components/new-arrivals/NewArrivals";
import Support from "../components/support/Support";

export default function Index({ children }) {
  return (
    <div className="relative">
      <Header></Header>
      <HeroSlider></HeroSlider>
      <CompanyProfile></CompanyProfile>
      <Support></Support>
      <Beg></Beg>
      <NewArrivals></NewArrivals>
      <Beg2></Beg2>
      <Others></Others>
      <Video></Video>
      <Footer></Footer>
    </div>
  );
}
