"use client";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string[];
  budget: string;
  message: string;
}

const projectTypes = [
  "Mobile App",
  "Website Design",
  "Branding",
  "Web Development",
  "SEO",
  "Growth Strategy",
  "Digital Marketing",
  "Analytics",
];

const budgetRanges = [
  "$1k - $5k",
  "$5k - $10k",
  "$10k - $20k",
  "$20k - $50k",
  ">$50k",
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: [],
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleProjectTypeToggle = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: prev.projectType.includes(type)
        ? prev.projectType.filter((t) => t !== type)
        : [...prev.projectType, type],
    }));
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-4">
          <span className="text-muted-foreground">Say Hi!</span> and tell me
          <br /> about your idea
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Have a nice works? Reach out and let&apos;s chat.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Hello..."
              className="w-full p-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Where can I reply?"
              className="w-full p-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Company Input */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              placeholder="Your company or website?"
              className="w-full p-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>

          {/* Project Type Selection */}
          <div>
            <label className="block text-sm font-medium mb-3">
              What&apos;s in your mind?
            </label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleProjectTypeToggle(type)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    formData.projectType.includes(type)
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent hover:bg-accent/80"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div>
            <label className="block text-sm font-medium mb-3">
              How much your budget range?
            </label>
            <div className="flex flex-wrap gap-2">
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setFormData({ ...formData, budget: range })}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    formData.budget === range
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent hover:bg-accent/80"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="I want to build some..."
              className="w-full p-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Submit <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
