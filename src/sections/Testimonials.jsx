import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

export default function Testimonials() {
  const [element, controls] = useScroll();

  return (
    <div className="testimonials-container" id="testimonial" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Testimonials" color="blue" lineCenter={true} />
          <p>See what our clients are saying about us.</p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
            content="Et aliquam officiis 33 doloremque cupiditate eos enim voluptas cum voluptate libero in beatae totam qui facere asperiores. Ut ipsum placeat est voluptas sunt 33 ullam fugiat ab quisquam accusantium est voluptatum cumque non consequatur libero id nihil cumque."
            name="Jean Jaune"
            designation="Co-Founder of PizzaJoint"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Et aliquam officiis 33 doloremque cupiditate eos enim voluptas cum voluptate libero in beatae totam qui facere asperiores. Ut ipsum placeat est voluptas sunt 33 ullam fugiat ab quisquam accusantium est voluptatum cumque non consequatur libero id nihil cumque."
            name="George Clark"
            designation="Founder & CEO of Panopticon"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Et aliquam officiis 33 doloremque cupiditate eos enim voluptas cum voluptate libero in beatae totam qui facere asperiores. Ut ipsum placeat est voluptas sunt 33 ullam fugiat ab quisquam accusantium est voluptatum cumque non consequatur libero id nihil cumque."
            name="Romit Gandhi"
            designation="Founder of MangaOnline"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}
