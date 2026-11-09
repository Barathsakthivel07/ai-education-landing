
import {
  BookOpen,
  Laptop,
  Rocket,
  Lightbulb
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Beginner Friendly",
    description:
      "Learn AI concepts step by step without needing advanced technical knowledge."
  },
  {
    icon: Laptop,
    title: "Hands-on Projects",
    description:
      "Practice your skills by building useful AI applications and workflows."
  },
  {
    icon: Rocket,
    title: "Career-Focused Skills",
    description:
      "Explore practical digital skills relevant to modern workplaces."
  },
  {
    icon: Lightbulb,
    title: "Learn by Doing",
    description:
      "Turn real-world problems into practical AI-powered solutions."
  }
];

function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <span className="section-tag">WHY LEARN WITH US</span>

      <h2>Learn Skills That Matter</h2>

      <p>
        Practical AI education for students and
        young professionals
      </p>

      <div className="benefits-grid">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div className="benefit-card" key={benefit.title}>
              <div className="benefit-icon">
                <Icon size={28} />
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Benefits;
