import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import ForBusiness from "./pages/ForBusiness";
import ForStartup from "./pages/ForStartup";
import HomeLayout from "./layout/HomeLayout/HomeLayout";
import About from "./pages/About";
import PrivicyPolicy from "./pages/PrivicyPolicy";
import Refund from "./pages/Refund";
import TermsAndUse from "./pages/TermsAndUse";
import PricingForm from "./pages/PricingForm";
import InfoZone from "./pages/InfoZone";


function App() {
  // useEffect(() => {
  //   const aos_init = () => {
  //     AOS.init({
  //       once: true,
  //       duration: 1000,
  //       easing: "ease-out-cubic",
  //     });
  //   };

  //   window.addEventListener("load", () => {
  //     aos_init();
  //   });
  // }, []);
  useEffect(() => {
    AOS.init(
      {
           once: true,
         duration: 1000,
           easing: "ease-out-cubic",
          }
    );
    AOS.refresh();
  }, []);
  useDocTitle("Cybertron");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Home />} />

              <Route path="privicy_policy" element={<PrivicyPolicy />} />
              <Route path="refund_policy" element={<Refund />} />
              <Route path="terms_and_conditions" element={<TermsAndUse />} />
              <Route path="about_us" element={<About />} />

              <Route path="contact" element={<Contact />} />
              <Route path="for-business" element={<ForBusiness />} />
              <Route path="for-startup" element={<ForStartup />} />
              <Route path="pricing" element={<PricingForm/>}/>
              <Route path="info_zone" element={<InfoZone/>}/>
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
