'use client'

import { Card } from './ui/card'
import { Badge } from './ui/badge'

export function AboutSection() {
  const expertise = [
    'Machine Learning',
    'MLOps on AWS',
    'Federated & Distributed Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Generative Adversarial Networks',
    'Diffusion Models',
    'AI Engineering',
    "Geometric Deep Learning",
    "Agentic Systems",
  ]

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div data-sal="slide-up" data-sal-duration="600" className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            data-sal="slide-right"
            data-sal-duration="600"
            className="glass3d p-8 bg-card border-primary/20 hover:border-primary/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">
                Integrated Bachelor and Master of Science
              </h4>
              <p className="text-muted-foreground">Computer Science</p>
              <p className="text-sm text-muted-foreground">
                University of Minnesota, Twin Cities
              </p>
              <p className="text-sm text-muted-foreground">
                GPA: 3.8/4.0 • Expected May 2027
              </p>
            </div>

            <div className="mt-6 space-y-2">
              <h4 className="text-lg font-semibold text-primary/90">Relevant Coursework</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cryptography, MLOps AWS Specialization, Deep Learning, TensorFlow Developer,
                Generative Adversarial Networks, Algorithms & Data Structures, Data Engineering,
                Event-Driven Architecture, Cybersecurity
              </p>
            </div>
          </Card>

          <Card
            data-sal="slide-left"
            data-sal-duration="600"
            className="glass3d p-8 bg-card border-primary/20 hover:border-primary/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Experience</h3>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">Software Engineering AI Intern</h4>
              <p className="text-muted-foreground">Headstarter AI</p>
              <p className="text-sm text-muted-foreground">June 2024 – October 2024</p>
            </div>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Built 14+ machine learning, AI-engineering, and full-stack applications in
                  fast-paced team environments
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Engineered NLP pipeline with multi-agents, few-shot prompting, and RAG,
                  boosting response quality by 200%
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Mentored by engineers from Amazon, Google, Two Sigma, Figma, Capital One, and
                  Stanford
                </span>
              </li>
            </ul>
          </Card>
        </div>

        <div data-sal="fade" data-sal-duration="600" data-sal-delay="200" className="mt-12">
          <Card className="p-8 bg-card border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {expertise.map((skill, index) => (
                <Badge
                  key={index}
                  data-sal="zoom-in"
                  data-sal-duration="400"
                  data-sal-delay={index * 50}
                  className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
