import React from "react";
import { images } from "../../constants";
import "./Chef.css";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            cumque. Suscipit pariatur repudiandae soluta qui quam quia, esse eaque magnam
          facilis est quas quidem ipsum placeat incidunt, ullam non aut.
          </p>
        </div>

      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
