// import Spline from '@splinetool/react-spline';
import showreel from "../assets/Showreel.mp4";
import styles from "../styles/Scene.module.css";
import { useEffect, useRef } from "react";

export default function Scene() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 30) {
        video.currentTime = 5; // Restart from 5s when it reaches 30s
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    // Ensure video starts from 5s when loaded
    const handleLoadedMetadata = () => {
      video.currentTime = 5;
      video.play();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <section className={styles.threedbg}>
      <video
        className={styles.showreel}
        ref={videoRef}
        src={showreel}
        muted
        playsInline
        loop={false} // We handle looping manually
        autoPlay
      />
    </section>
  );
}

/*
return (
    <section className={styles.threedbg}>
      <div className={styles.mask}></div>
    <Spline scene="https://prod.spline.design/xJcnRnnq3u-oC2t9/scene.splinecode" />
    </section>
  );
*/
