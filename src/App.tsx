import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
