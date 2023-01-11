/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import MiddleBar from "./middle-bar/MiddleBar";
import { NavBar } from "./navbar/Navbar";
import { TopBar } from "./topbar/TopBar";

export default function Header({ data, children }) {
  return (
    <div className="z-50">
      <TopBar></TopBar>
      <MiddleBar></MiddleBar>
      <NavBar></NavBar>
    </div>
  );
}
