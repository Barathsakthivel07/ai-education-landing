
import { BrainCircuit } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <BrainCircuit size={28} />
        <span>AI Skill Academy</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#benefits">Why Us</a>
      </div>

      <a href="#register" className="nav-cta">
        Enroll Now
      </a>
    </nav>
  );
}

export default Navbar;
