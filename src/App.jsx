import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import zen from "/zen.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetails from "./pages/ProjectDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Admin from "./pages/Admin";
import Preloader from "./components/Preloader";
import { useEffect, useState, useRef } from "react";

// Import the video directly to preload it
import showreel from "./assets/Showreel.mp4";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const videoLoaded = useRef(false);
  
  useEffect(() => {
    // Create a function to preload video
    const preloadVideo = () => {
      const video = document.createElement('video');
      
      // Event handlers for successful loading
      video.onloadeddata = () => {
        console.log("Showreel video data loaded");
        videoLoaded.current = true;
        setLoading(false);
      };
      
      // Event handler for errors
      video.onerror = (e) => {
        console.error("Error loading Showreel video:", e);
        // If video fails to load, still hide preloader after a short delay
        setTimeout(() => setLoading(false), 1000);
      };
      
      // Set timeout as a fallback in case video takes too long
      const timeoutId = setTimeout(() => {
        console.log("Showreel video load timeout reached");
        setLoading(false);
      }, 10000); // 10-second timeout
      
      // Clean up timeout if video loads successfully
      video.onloadeddata = () => {
        clearTimeout(timeoutId);
        console.log("Showreel video loaded successfully");
        videoLoaded.current = true;
        setLoading(false);
      };
      
      // Start loading - use the imported video path
      video.src = showreel;
      video.load();
    };
    
    // Only preload video if we're on the home page
    if (location.pathname === "/" || location.pathname === "/home") {
      preloadVideo();
    } else {
      // For other pages, don't show preloader
      setLoading(false);
    }
    
    return () => {
      // Clean up
      videoLoaded.current = false;
    };
  }, [location.pathname]);

  // Create a global variable to share the preloaded state
  if (typeof window !== 'undefined') {
    window.showreelPreloaded = videoLoaded.current;
  }

  return (
    <>
      <Preloader isLoading={loading} />
      {!loading && <Navbar />}
      <AnimatePresence mode="wait">
        {!loading && (
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home videoLoaded={videoLoaded.current} />
                </PageWrapper>
              }
            />
            <Route
              path="/home"
              element={
                <PageWrapper>
                  <Home videoLoaded={videoLoaded.current} />
                </PageWrapper>
              }
            />
            <Route
              path="/service/:id"
              element={
                <PageWrapper>
                  <ServiceDetails />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/project"
              element={
                <PageWrapper>
                  <Projects />
                </PageWrapper>
              }
            />
            <Route
              path="/project/:id"
              element={
                <PageWrapper>
                  <ProjectDetails />
                </PageWrapper>
              }
            />
            <Route
              path="/projects"
              element={
                <PageWrapper>
                  <Projects />
                </PageWrapper>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <PageWrapper>
                  <ProjectDetails />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path="/admin/*"
              element={
                <PageWrapper>
                  <Admin />
                </PageWrapper>
              }
            />
            <Route
              path="/*"
              element={
                <PageWrapper>
                  <Error />
                </PageWrapper>
              }
            />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
}

// Animation Wrapper Component
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;