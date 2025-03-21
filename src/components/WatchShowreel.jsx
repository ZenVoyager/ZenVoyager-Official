import { useEffect, useState } from "react";
import styles from "../styles/WatchShowreel.module.css"; // Import the CSS file
import showreel from "../assets/Showreel.mp4";
import { Clapperboard } from "lucide-react";
import { X } from "lucide-react";

const ShowreelButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle closing the modal when Esc key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Showreel Open Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={styles.showreel_button}
      >
        <Clapperboard className={styles.reel_icon} color="white" size="18" />
      </button>

      {/* Pop-up (Modal) */}
      {isOpen && (
        <div className={styles.showreel_popup}>
          <div className={styles.showreel_popup_content}>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className={styles.close_button}
            >
              <X size={32}/>
            </button>

            {/* Showreel Video */}
            <video
              src={showreel}
              //   muted
              controls
              playsInline
              loop
              autoPlay
              className={styles.showreel_video}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShowreelButton;
