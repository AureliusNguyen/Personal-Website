import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { AwardsSection } from '@/components/awards-section'
import { ContactSection } from '@/components/contact-section'
import { ManifestoSection } from '@/components/manifesto-section'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        {/* Breathing room between pinned sections */}
        <div aria-hidden className="h-[25vh]" />
        <ManifestoSection />
        <div aria-hidden className="h-[35vh]" />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AwardsSection />
        <ContactSection />
      </main>
    </>
  )
}
