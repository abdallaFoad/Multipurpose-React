import React from "react";
import About from "../sections/About";
import Blogs from "../sections/Blogs";
import Footer from "../sections/Footer";
import ScrollTop from "../sections/ScrollTop";
import Starter from "../sections/Starter";
import Testimonials from "../sections/Testimonials";
import Why from "../sections/Why";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Map from "../components/Map";

const Home = () => {
  return (
    <motion.div initial="hidden" animate="show">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Starter />
              <About />
              <Why />
              <Testimonials />
              <Blogs />
              <Footer />
              <ScrollTop />
            </>
          }
        />
        <Route
          path="/map"
          element={
            <>
              {" "}
              <Starter /> <Map /> <Footer />
            </>
          }
        />
      </Routes>
    </motion.div>
  );
};

export default Home;
