import React from "react";
import "../styles/sections/Testimonials.scss";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="container">
        <div className="head">
          <Title content="Testimonials" color="blue" lineCenter={true} />
          <p>See what our clients are saying about us.</p>
        </div>
        <div className="testimonials">
          <Testimonial
            name="Trushit Vyas"
            content="The best on the net! Software development saved my business. I use
        Software development often. I am really satisfied with my Software
        Development."
            description="Co-Founder"
          />
          <Testimonial
            content="Mobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication."
            name="Kishan H. Sheth"
            description="Founder & CEO"
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            name="Romit Gandhi"
            description="Founder"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
