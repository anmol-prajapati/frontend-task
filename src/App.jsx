import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Generator from "./Generator";
import Translator from "./Translator";
import Navbar from "./Navbar";  // 👈 IMPORTANT

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* 👈 YAHI PE HONA CHAHIYE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/translator" element={<Translator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;