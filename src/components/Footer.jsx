
import { BrainCircuit } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>
            <BrainCircuit size={24} />
            AI Skill Academy
          </h3>

          <p>
            Empowering the next generation with
            practical AI and digital skills.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#benefits">Why Us</a>
          <a href="#register">Register</a>
        </div>

        <div>
          <h4>Get Started</h4>
          <a href="#register">Register Interest</a>
          <a href="#register">Enquire About Courses</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AI Skill Academy.
          Concept prototype for internship assignment.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
