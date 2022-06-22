import React, { Component } from "react";
import "./About.css";
import pic from "../assets/pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={pic}
              width="20"
              height="10"
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Uyen Tran</div>
            <div className="brief_description">
              Hi, my name is Uyen Tran. In Fall 2022, I will be junior study
              Computer Science at University of Nevada, Las Vegas. Few facts
              about me are: I can speak Vietnamese I have 4 dogs. 2 of them are
              Shih Tzu and 2 of them are Huskies. What I love to do during my
              free time are drawing, painting, playing video games. I'm a big
              fan of playstation console and can't wait for new-gen games. For
              the last semester, I was an TA for Computer Science 1 in my
              school. So I really hope to improve my skills through this course.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
