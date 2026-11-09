
import {
  BrainCircuit,
  Bot,
  Workflow,
  Code2,
  ArrowRight
} from "lucide-react";

const courses = [
  {
    title: "AI & Generative AI",
    description:
      "Learn ChatGPT, prompting, LLM fundamentals and real-world AI applications.",
    level: "Beginner",
    duration: "4 Weeks",
    icon: BrainCircuit
  },
  {
    title: "AI Automation & Agents",
    description:
      "Build automated workflows using n8n, Make and modern AI tools.",
    level: "Intermediate",
    duration: "6 Weeks",
    icon: Workflow
  },
  {
    title: "Python for AI",
    description:
      "Master Python fundamentals and build practical AI-powered projects.",
    level: "Beginner",
    duration: "6 Weeks",
    icon: Code2
  },
  {
    title: "AI Chatbot Development",
    description:
      "Create intelligent chatbots using APIs, React and AI integrations.",
    level: "Intermediate",
    duration: "5 Weeks",
    icon: Bot
  }
];

function Courses() {
  return (
    <section className="courses" id="courses">
      <span className="section-tag">OUR PROGRAMMES</span>
      <h2>Explore Our AI Courses</h2>
      <p>Practical learning designed for real-world skills</p>

      <div className="course-grid">
        {courses.map((course) => {
          const Icon = course.icon;

          return (
            <article className="course-card" key={course.title}>
              <div className="course-icon">
                <Icon size={30} />
              </div>

              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <div className="course-meta">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>

              <a href="#register" className="course-link">
                Register Interest <ArrowRight size={17} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Courses;
