import React from "react";
import backgorund_video from "../assets/bg_vid.mp4";
import styles from "../styles/Background.module.css"

function Background() {
  return (
    <div className={styles.bg_vid_ctr}>
      <video src={backgorund_video}
      className={styles.bg_vid}
      autoPlay 
      loop 
      muted 
      playsInline>Your browser does not support the video tag.</video>
    </div>
  );
}

export default Background;
