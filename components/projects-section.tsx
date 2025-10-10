"use client";

import Atropos from "atropos/react";
import "atropos/css";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "ML-RSA UROP Research",
    period: "Sep 2025 – Present",
    description:
      "Conducted cutting-edge research on RSA semiprime factorization using neural networks, implementing 4 distinct architectures: Binary LSTM, Enhanced Transformers, Dual-Loss LSTM, and GANs. Achieved 10-39% improvement over foundational works.",
    tech: ["PyTorch", "Transformers", "LSTM", "GAN", "AWS SageMaker"],
    highlights: [
      "Pioneered first Transformers application to RSA factorization",
      "Engineered 125-dimensional mathematical feature vectors",
      "Architected scalable AWS SageMaker training pipeline",
    ],
    link: "https://github.com/AureliusNguyen/ML-RSA",
  },
  {
    title: "Brain Tumor Classification",
    period: "Oct 2024 – Nov 2024",
    description:
      "Developed end-to-end deep learning models achieving up to 99% accuracy using transfer learning with Xception, ResNet, and EfficientNet. Created saliency maps and deployed with Streamlit.",
    tech: ["TensorFlow", "Streamlit", "Gemini", "Plotly"],
    highlights: [
      "99% accuracy on test set",
      "NLP pipeline with Gemini-Flash for predictions analysis",
      "Real-time inference with Streamlit deployment",
    ],
    link: "https://github.com/AureliusNguyen/E2E-Brain-tumor-classification",
  },
  {
    title: "Customer Churn Prediction",
    period: "Sep 2024 – Oct 2024",
    description:
      "Built end-to-end ML model leveraging XGBoost, RandomForest, Voting, Stacking, and SMOTE, increasing prediction accuracy by 15% and recall by 20%. Deployed on Render for real-time inference.",
    tech: ["Scikit-learn", "XGBoost", "Streamlit", "Groq", "Render"],
    highlights: [
      "15% accuracy improvement, 20% recall boost",
      "Personalized evaluation using llama-3.2b",
      "Deployed with seamless updates and minimal downtime",
    ],
    link: "https://github.com/AureliusNguyen/Churn-ML",
  },
  {
    title: "Violet - Discord Clone",
    period: "Nov 2024 – Dec 2024",
    description:
      "Full-stack Discord clone with live video chat and messaging, using Next.js for SSR and Shadcn for responsive UI. Integrated WebSocket for real-time communication and Clerk for MFA.",
    tech: ["Next.js", "WebSocket", "Clerk", "Convex", "Shadcn", "Groq"],
    highlights: [
      "Real-time video chat and messaging",
      "Optimized for high concurrent user loads",
      "Chat moderation using llama-guard",
    ],
    link: "https://github.com/AureliusNguyen/Violet",
  },
  {
    title: "Nanao-chan AI Chatbot",
    period: "Dec 2024 – Jan 2025",
    description:
      "AI chatbot capable of answering questions from external websites using Puppeteer for dynamic scraping and Cheerio for HTML parsing. Implemented caching with Upstash Redis.",
    tech: ["Next.js", "Redis", "Upstash", "Groq API", "Puppeteer", "Cheerio"],
    highlights: [
      "Response times reduced to 3 seconds",
      "RAG pipeline for summarizing web pages",
      "50% engagement improvement",
    ],
    link: "https://nanao-chan.vercel.app/",
  },
  {
    title: "Flashcard Generator",
    period: "May 2024 – Jun 2024",
    description:
      "Built a web app to generate interactive flashcards from text descriptions, leveraging Groq API’s llama-3.2 for question generation and summarization within the timeframe of 3 seconds maximum. Implemented Supabase for storing user data and flashcards, enabling a persistent, user-friendly experience. Hosted the app on Vercel, ensuring continuous deployment with minimal downtime.",
    tech: ["Next.js", "Groq", "Supabase", "Langchain", "OpenAI"],
    highlights: [
      "Efficient storage with Supabase",
      "3 second response time",
      "User-friendly experience",
    ],
    link: "https://ai-flashcard-one.vercel.app/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div
          data-sal="slide-up"
          data-sal-duration="600"
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A selection of my work in machine learning, AI engineering, and
            full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              data-sal="zoom-in"
              data-sal-duration="600"
              data-sal-delay={index * 100}
              className="block h-full group"
            >
              <Atropos
                className="atropos-project"
                shadow={false}
                highlight={false}
              >
                <Card className="relative p-8 bg-card border-primary/20 group-hover:border-primary/50 transition-all duration-300 overflow-hidden h-full cursor-pointer">
                  <div className="relative z-10">
                    <div className="mb-4" data-atropos-offset="5">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p
                      className="text-sm text-muted-foreground mb-4"
                      data-atropos-offset="3"
                    >
                      {project.period}
                    </p>

                    <p
                      className="text-muted-foreground mb-6 leading-relaxed"
                      data-atropos-offset="2"
                    >
                      {project.description}
                    </p>

                    <div className="mb-6" data-atropos-offset="4">
                      <h4 className="text-sm font-semibold text-primary mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="flex flex-wrap gap-2"
                      data-atropos-offset="6"
                    >
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Atropos>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
