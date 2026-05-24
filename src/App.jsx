import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import SocialFloat from "./components/SocialFloat";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <SocialFloat />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
