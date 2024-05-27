import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import About from "../../pages/AboutUs";
import Services from "../../pages/Services";
import Product from "../../pages/Products";
import Contact from "../../pages/Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";

const DisplayBody = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default DisplayBody;
