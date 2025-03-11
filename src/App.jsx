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

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/service/:id" element={<PageWrapper><ServiceDetails /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/project" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/project/:id" element={<PageWrapper><ProjectDetails /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/projects/:id" element={<PageWrapper><ProjectDetails /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/admin/*" element={<PageWrapper><Admin /></PageWrapper>} />
          <Route path="/*" element={<PageWrapper><Error /></PageWrapper>} />
        </Routes>
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
