import "./index.css";
import { HomePage } from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar title="e-stroi.kz" sx={{ mb: 2 }} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
