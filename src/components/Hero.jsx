
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-badge">
          <Sparkles size={16} />
          Learn Skills for the AI Era
        </span>

        <h1>
          Build Your Future
          <br />
          with <span>Artificial Intelligence</span>
        </h1>

        <p>
          Learn practical AI, automation and digital
          skills through hands-on projects designed
          for students and young professionals.
        </p>

        <div className="hero-buttons">
          <a href="#courses" className="primary-btn">
            Explore Courses <ArrowRight size={18} />
          </a>

          <a href="#register" className="secondary-btn">
            Register Interest
          </a>
        </div>

        <div className="hero-features">
          <span>✓ Beginner Friendly</span>
          <span>✓ Hands-on Projects</span>
          <span>✓ Practical AI Tools</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
