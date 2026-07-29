import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Nav, ScrollToTop } from "@/components/site";
import Home from "@/pages/Home";
import Rugby from "@/pages/Rugby";
import Soccer from "@/pages/Soccer";
import OtherSports from "@/pages/OtherSports";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rugby" element={<Rugby />} />
          <Route path="/soccer" element={<Soccer />} />
          <Route path="/other-sports" element={<OtherSports />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
