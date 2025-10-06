import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { AwardsSection } from '@/components/awards-section'
import { ContactSection } from '@/components/contact-section'
import { CustomCursor } from '@/components/custom-cursor'
import { SalInit } from '@/components/sal-init'

export default function Home() {
  return (
    <div className="custom-cursor">
      <SalInit />
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AwardsSection />
        <ContactSection />
      </main>
    </div>
  )
}
