import React from "react";
import preloaderAnimation from "../assets/preloader_animation.webp";
import styles from "../styles/Preloader.module.css";
import { motion } from 'framer-motion';
import logo from "../assets/zen_wordmark.svg";

function Preloader({ isLoading }) {
  return (
<motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? 'all' : 'none'
      }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#000',
        zIndex: 9999,
      }}
    >
    <div className={styles.preloader_section}>
      <div className={styles.preloader_ctr}>
        <img
          className={styles.preloader_animation}
          src={preloaderAnimation}
          alt="loading..."
        />
        {/* <img className={styles.logo} src={logo} alt="Zen Voyager" /> */}
        <span className={styles.tags}>Loading your experience</span>
      </div>
    </div>
    <div className="loading-bar-container" style={{ 
        width: '200px', 
        height: '4px', 
        backgroundColor: '#333', 
        marginTop: '20px',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <motion.div 
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: isLoading ? ['0%', '100%'] : '100%' }}
          transition={{ 
            duration: 2,
            repeat: isLoading ? Infinity : 0,
            ease: "easeInOut"
          }}
          style={{ 
            height: '100%', 
            backgroundColor: '#fff',
          }}
        />
      </div>
    </motion.div>
  );
}

export default Preloader;
