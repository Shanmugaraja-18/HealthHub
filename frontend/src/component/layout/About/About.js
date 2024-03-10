import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="data:image/jpeg;base64,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"
              alt="Founder"
            />
            <Typography>HealthHub</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            Welcome to HealthHub, your premier destination for top-notch healthcare products and fitness essentials. At 
            HealthHub, we believe in empowering individuals to take charge of their well-being, 
            offering a curated selection of high-quality products designed to elevate your health and fitness journey.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
