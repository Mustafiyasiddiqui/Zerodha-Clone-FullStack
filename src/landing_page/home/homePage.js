import React from "react";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

import Pricing from "./pricing";

import Hero from "./Hero";
import Awards from "./Awards";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
