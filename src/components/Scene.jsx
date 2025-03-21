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

    // Check if video was preloaded globally
    const wasPreloaded = typeof window !== 'undefined' && window.showreelPreloaded;
    
    // Function to handle video initialization
    const initializeVideo = () => {
      video.currentTime = 5;
      video.play().catch(err => {
        console.error("Error playing video:", err);
        // You might want to add fallback behavior here
      });
    };

    if (wasPreloaded) {
      // If video was preloaded, initialize immediately
      console.log("Using preloaded showreel");
      initializeVideo();
    } else {
      // Otherwise wait for metadata to load
      video.addEventListener("loadedmetadata", initializeVideo);
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", initializeVideo);
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
      />
    </section>
  );
}