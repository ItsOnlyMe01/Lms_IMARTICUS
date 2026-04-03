import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand">Lms assignment</span>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
