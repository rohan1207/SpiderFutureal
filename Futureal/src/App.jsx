import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUS";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
