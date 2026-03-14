import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <Routes>
        <Route path="/todo-react" element={<Home />} />
        <Route path="/todo-react/task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
