import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import Home from "@/routes/Home";
import ProductsList from "@/routes/ProductsList";
import ProductDetail from "@/routes/ProductDetail";
import About from "@/routes/About";
import Contact from "@/routes/Contact";
import Cooperation from "@/routes/Cooperation";
import NotFound from "@/routes/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  const { pathname } = useLocation();
  const isCooperation = pathname.startsWith("/cooperation");

  return (
    <>
      <ScrollToTop />
      {!isCooperation && <ScrollProgress />}
      <div className="flex min-h-full flex-col">
        {!isCooperation && <Header />}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cooperation" element={<Cooperation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {!isCooperation && <Footer />}
      </div>
    </>
  );
}
