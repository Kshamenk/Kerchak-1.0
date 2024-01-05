import React from "react";
import { Link } from "react-router-dom";
import LandingImage from "../../Img/cannabis_strain_focus_shiva_shanti_banner-2-1024x540.jpg";
import "./LandingPage.css";
import { Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <div className="landingpage_container">
      <Typography
        style={{
          letterSpacing: "2px",
          fontSize: "3rem",
          fontFamily: "Arial, sans-serif",
          wordBreak: "break-word",
          textShadow: "2px 2px 4px rgba(200, 255, 0, 0.9s)",
        }}
        color="whitesmoke"
        marginBottom="300px"
        position="absolute"
        variant="h2"
        className="landingpage_container"
      >
        Welcome to the Kerchak experience.
      </Typography>
      <Typography
        style={{
          letterSpacing: "2px",
          fontSize: "2rem",
          fontFamily: "Arial, sans-serif",
          wordBreak: "break-word",
          textShadow: "2px 2px 4px rgba(200, 255, 0, 0.9s)",
        }}
        color="whitesmoke"
        marginBottom="160px"
        position="absolute"
        variant="h6"
        className="landingpage_container"
      >
        Ready?
      </Typography>
      <img src={LandingImage} alt="Landingpageimg" className="landing_image" />
      <Link to="/home" className="link_button">
        Start now!
      </Link>
    </div>
  );
};

export default LandingPage;
