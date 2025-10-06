'use client'

import { Card } from './ui/card'
import { Button } from './ui/button'
import { Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div data-sal="slide-up" data-sal-duration="600" className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            data-sal="slide-right"
            data-sal-duration="600"
            className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="mailto:nguy5272@umn.edu"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">nguy5272@umn.edu</p>
                </div>
              </a>

              <a
                href="tel:+16125581395"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">(612) 558-1395</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Minneapolis, MN</p>
                </div>
              </div>
            </div>
          </Card>

          <Card
            data-sal="slide-left"
            data-sal-duration="600"
            className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h3>
            <p className="text-muted-foreground mb-6">
              Follow me on social media and check out my work on GitHub.
            </p>
            <div className="space-y-4">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start gap-3 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              >
                <a
                  href="https://github.com/AureliusNguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  <span>My GitHub</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full justify-start gap-3 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              >
                <a
                  href="https://linkedin.com/in/aurelius-nguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                  <span>My LinkedIn</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full mt-6 bg-primary hover:bg-primary/90"
              >
                <a href="mailto:nguy5272@umn.edu">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div
          data-sal="fade"
          data-sal-duration="600"
          data-sal-delay="300"
          className="mt-16 text-center text-muted-foreground"
        >
          <p className="mb-2">
            Built with <span className="text-primary">Next.js</span>,{' '}
            <span className="text-primary">TypeScript</span>, and{' '}
            <span className="text-primary">Tailwind CSS</span>
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Aurelius Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
