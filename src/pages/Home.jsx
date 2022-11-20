import React from "react";
import About from "../sections/About";
import Blogs from "../sections/Blogs";
import Footer from "../sections/Footer";
import ScrollTop from "../sections/ScrollTop";
import Starter from "../sections/Starter";
import Testimonials from "../sections/Testimonials";
import Why from "../sections/Why";
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.div initial='hidden' animate='show'>
      <Starter />
      <About />
      <Why />
      <Testimonials />
      <Blogs />
      <Footer />
      <ScrollTop />
    </motion.div>
  );
};

export default Home;
