
import { useState } from "react";
import { Send, CheckCircle, Mail } from "lucide-react";

const courses = [
  "AI & Generative AI",
  "AI Automation & Agents",
  "Python for AI",
  "AI Chatbot Development"
];

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo only: no data is sent to a server.
    console.log("Demo form submitted");
    setSubmitted(true);
  };

  return (
    <section className="registration" id="register">
      <div className="registration-container">
        <div className="registration-info">
          <span className="section-tag">
            START YOUR JOURNEY
          </span>

          <h2>Ready to Build Your AI Skills?</h2>

          <p>
            Register your interest in our practical
            AI and digital-skills programmes.
            Our team can help you explore the
            right learning path.
          </p>

          <div className="registration-benefits">
            <p>✓ Beginner-friendly learning paths</p>
            <p>✓ Practical projects</p>
            <p>✓ AI tools and automation skills</p>
            <p>✓ Enquiry and course guidance</p>
          </div>

          <div className="contact-info">
            <Mail size={20} />
            <span>Contact details available on request</span>
          </div>
        </div>

        <div className="registration-card">
          {submitted ? (
            <div className="success-message" role="status">
              <CheckCircle size={55} />
              <h3>Form Demo Completed!</h3>
              <p>
                Your details passed the form checks.
                This prototype does not send or
                store registrations.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    course: "",
                    message: ""
                  });
                }}
              >
                Submit Another Demo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3>Register Your Interest</h3>
              <p>Fill in your details to get started</p>

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="course">Preferred Course *</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a course</option>

                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Your Learning Goals (Optional)
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us what you want to learn..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                <Send size={18} />
                Submit Enquiry
              </button>

              <p className="form-note">
                Prototype only — information is not
                transmitted or saved.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Registration;
