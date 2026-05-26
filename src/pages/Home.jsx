import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Pricing from "../components/Pricing";
import Benefits from "../components/Benefits";
import Process from "../components/Process";
import CtaContact from "../components/CtaContact";
import Footer from "../components/Footer";
import QuickActions from "../components/QuickActions";

const Home = () => {
  return (
    <main data-testid="home-page">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <Benefits />
      <Process />
      <CtaContact />
      <Footer />
      <QuickActions />
    </main>
  );
};

export default Home;
