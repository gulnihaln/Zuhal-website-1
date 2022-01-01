import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";
import Wedding from "./Wedding";
import Footer from "./Footer";
import Main from "./Main";
import AboutMe from "./AboutMe";
import EveningHairAndMakeup from "./EveningHairAndMakeup";
import DailyHairAndMakeup from "./DailyHairAndMakeup.js";
import LoyaltyAndGiftCard from "./LoyaltyAndGiftCard.js";
import Lessons from "./Lessons.js";
import BrowThreadingAndTinting from "./BrowThreadingAndTinting.js";
import Portfolio from "./Portfolio.js";
import FaqPage from "./FaqPage";
import "./styles/Main.css";

export default function Home() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/bridal" element={<Wedding />} />
          <Route path="/dayhairandmakeup" element={<DayHairAndMakeup />} />
          <Route
            path="/eveninghairandmakeup"
            element={<EveningHairAndMakeup />}
          />
          <Route
            path="/browthreadingandtinting"
            element={<BrowThreadingAndTinting />}
          />

          <Route path="/loyaltyandgiftcard" element={<LoyaltyAndGiftCard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
