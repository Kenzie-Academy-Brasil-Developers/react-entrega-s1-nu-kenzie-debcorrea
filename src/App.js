import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Landing from "./pages/landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
