import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";
import PastEvents from "./pages/PastEvents";
import About from "./pages/About";
import VenueFAQ from "./pages/VenueFAQ";
import Society from "./pages/Society";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/register" element={<Register />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/venue" element={<VenueFAQ />} />
        </Route>
        {/* Society page is a separate site — its own header/footer, not the event's Layout */}
        <Route path="/society" element={<Society />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);