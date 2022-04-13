import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";
import Wedding from "./Wedding";
import Footer from "./Footer";
import Main from "./Main";
import AboutMe from "./AboutMe";
import SpecialOccasions from "./SpecialOccasions";
import DayHairAndMakeup from "./DayHairAndMakeup.js";
import LoyaltyAndGiftCard from "./LoyaltyAndGiftCard.js";
import Lessons from "./Lessons.js";
import BrowThreadingAndTinting from "./BrowThreadingAndTinting.js";
import Portfolio from "./Portfolio.js";
import FaqPage from "./FaqPage";
import "./styles/Main.css";
import PageNotFound from "./PageNotFound";
import ImgTag from "./ImgTag";

export default function Home() {
  return (
    <>
    <Header />
   {/* <ImgTag category ="bridal" imgLink="bridal1.jpg" alt="coming soon" className="bg-img" /> */}
   {/* <img src="/api/bridal/bridal1.jpg" alt="MMMMMMM" /> */}

   {/* <img src="bridal/bridal1.jpg" alt="MY IMAGES" /> */}
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/bridal" element={<Wedding />} />
        <Route path="/dayhairandmakeup" element={<DayHairAndMakeup />} />
        <Route path="/specialoccasions" element={<SpecialOccasions />} />
        <Route
          path="/browthreadingandtinting"
          element={<BrowThreadingAndTinting />}
        />
        <Route path="/loyaltyandgiftcard" element={<LoyaltyAndGiftCard />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
    <Footer />
  </>
  );
}
