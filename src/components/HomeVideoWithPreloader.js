import React, { useEffect, useRef, useState } from "react";
import "./HomeVideoWithPreloader.css";

const HomeVideoWithPreloader = () => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true); // preloader state

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Wait until video can play through
      video.oncanplaythrough = () => {
        setLoading(false); // hide preloader
        video.play().catch((error) => {
          console.log("Autoplay blocked, trying again:", error);
        });
      };
    }
  }, []);

  return (
    <div className="video-wrapper">
      {/* Preloader */}
      {loading && (
        <div className="preloader">
          <img
            src="/path_to_greenwasty_image.png"
            alt="Loading..."
            className="preloader-img"
          />
          <div className="spinner"></div>
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        id="homeVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Optional overlay content */}
      <div className="content-overlay">
        <h1>Welcome to Wasty Besty</h1>
        <p>Turn Green Waste into Everyday Wonders</p>
      </div>
    </div>
  );
};

export default HomeVideoWithPreloader;
