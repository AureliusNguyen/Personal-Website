"use client";

import { useEffect, useRef } from "react";
import { Card } from "./ui/card";
import "devicon/devicon.min.css";
import { SiOpenai, SiNvidia } from "react-icons/si";
import { FaLink } from "react-icons/fa";

interface Skill {
  name: string;
  icon: string | React.ComponentType<{ className?: string }>;
  isReactIcon?: boolean;
}

const skills = {
  languages: [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "C", icon: "devicon-c-plain colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Go", icon: "devicon-go-plain colored" },
    { name: "Rust", icon: "devicon-rust-plain" },
    { name: "Hack", icon: "devicon-php-plain colored" },
    { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
    { name: "R", icon: "devicon-r-plain colored" },
    { name: "OCaml", icon: "devicon-ocaml-plain colored" },
    { name: "LaTeX", icon: "devicon-latex-original" },
  ],
  technologies: [
    { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
    { name: "PyTorch", icon: "devicon-pytorch-original colored" },
    { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
    { name: "PySpark", icon: "devicon-apachespark-original colored" },
    { name: "Apache Kafka", icon: "devicon-apachekafka-original" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "CUDA", icon: SiNvidia, isReactIcon: true },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    { name: "Langchain", icon: FaLink, isReactIcon: true },
    { name: "OpenAI", icon: SiOpenai, isReactIcon: true },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Terraform", icon: "devicon-terraform-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "Kali Linux", icon: "devicon-kalilinux-original colored" },
  ],
};

const allSkills = [...skills.languages, ...skills.technologies];

export function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 2.0;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef2.current;
    if (!scrollContainer) return;

    let scrollPosition = scrollContainer.scrollWidth / 2;
    const scrollSpeed = -2.0;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition <= 0) {
        scrollPosition = scrollContainer.scrollWidth / 2;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div
          data-sal="slide-up"
          data-sal-duration="600"
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
          <p className="text-muted-foreground mt-6">
            Languages and Technologies I've worked with
          </p>
        </div>

        <div
          data-sal="fade"
          data-sal-duration="600"
          className="relative rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, #1a0a0a 0%, #2d0f0f 25%, #1f0505 50%, #180808 75%, #1a0a0a 100%)",
          }}
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="relative flex gap-6 overflow-x-hidden py-16 z-20"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicate items for infinite scroll */}
            {[...allSkills, ...allSkills].map((skill, index) => {
              const Icon =
                "isReactIcon" in skill && skill.isReactIcon
                  ? (skill.icon as React.ComponentType<{ className?: string }>)
                  : null;
              const isEven = index % 2 === 0;
              const borderColor = isEven
                ? "border-primary hover:border-[#1a1a1a]"
                : "border-[black] hover:border-primary";
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 px-6 py-3 bg-black/40 backdrop-blur-sm rounded-full border-[3px] ${borderColor} transition-all duration-300 group min-w-[150px] min-h-[45px] flex items-center justify-center`}
                >
                  <div className="flex items-center justify-center gap-3 whitespace-nowrap h-full">
                    {Icon ? (
                      <Icon className="text-xl transition-transform" />
                    ) : (
                      <i
                        className={`${
                          skill.icon as string
                        } text-xl transition-transform`}
                      ></i>
                    )}
                    <span className="text-base font-semibold group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Second carousel - scrolling right */}
        <div
          data-sal="fade"
          data-sal-duration="600"
          className="relative rounded-2xl mt-6"
          style={{
            background:
              "linear-gradient(135deg, #1a0a0a 0%, #2d0f0f 25%, #1f0505 50%, #180808 75%, #1a0a0a 100%)",
          }}
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />

          {/* Scrolling container */}
          <div
            ref={scrollRef2}
            className="relative flex gap-6 overflow-x-hidden py-16 z-20"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicate items for infinite scroll */}
            {[...allSkills, ...allSkills].map((skill, index) => {
              const Icon =
                "isReactIcon" in skill && skill.isReactIcon
                  ? (skill.icon as React.ComponentType<{ className?: string }>)
                  : null;
              const isEven = index % 2 === 0;
              const borderColor = isEven
                ? "border-primary hover:border-[#1a1a1a]"
                : "border-[black] hover:border-primary";
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 px-6 py-3 bg-black/40 backdrop-blur-sm rounded-full border-[3px] ${borderColor} transition-all duration-300 group min-w-[150px] min-h-[45px] flex items-center justify-center`}
                >
                  <div className="flex items-center justify-center gap-3 whitespace-nowrap h-full">
                    {Icon ? (
                      <Icon className="text-xl transition-transform" />
                    ) : (
                      <i
                        className={`${
                          skill.icon as string
                        } text-xl transition-transform`}
                      ></i>
                    )}
                    <span className="text-base font-semibold group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Categorized skills grid */}
        <div
          data-sal="slide-up"
          data-sal-duration="600"
          data-sal-delay="200"
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <Card className="p-8 bg-card border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-primary">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm hover:bg-primary/20 transition-colors flex items-center gap-2"
                >
                  <i className={`${lang.icon} text-base`}></i>
                  {lang.name}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-card border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.technologies.map((tech, index) => {
                const Icon = tech.isReactIcon
                  ? (tech.icon as React.ComponentType<{ className?: string }>)
                  : null;
                return (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm hover:bg-primary/20 transition-colors flex items-center gap-2"
                  >
                    {tech.isReactIcon && Icon ? (
                      <Icon className="text-base" />
                    ) : (
                      <i className={`${tech.icon} text-base`}></i>
                    )}
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
