'use client'

import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Trophy, Award, Target } from 'lucide-react'

const achievements = [
  {
    title: 'UROP Award Recipient',
    category: 'Research',
    icon: Award,
  },
  {
    title: 'Top 20/1500 Headstarter Hackathon',
    category: 'Hackathon',
    icon: Trophy,
  },
  {
    title: 'Top 1 IUCTF',
    category: 'CTF',
    icon: Target,
  },
  {
    title: 'Top 4 UMNACMCTF',
    category: 'CTF',
    icon: Target,
  },
  {
    title: 'Top 18/927 K17CTF',
    category: 'CTF',
    icon: Target,
  },
  {
    title: 'Top 19/671 OlympicsCTF',
    category: 'CTF',
    icon: Target,
  },
  {
    title: 'Top 30/848 BitsCTF2025',
    category: 'CTF',
    icon: Target,
  },
  {
    title: 'Top 27/550 WannaGameCTF',
    category: 'CTF',
    icon: Target,
  },
  {
    title: 'Top 35/537 ECTF',
    category: 'CTF',
    icon: Target,
  },
  {
    title: 'Top 106/1400 IrisCTF2024',
    category: 'CTF',
    icon: Target,
  },
  {
    title: 'UMN Global Excellence Scholarship',
    category: 'Academic',
    icon: Award,
  },
  {
    title: 'Rank 150 on CryptoHack',
    category: 'Security',
    icon: Trophy,
  },
]

export function AwardsSection() {
  return (
    <section id="awards" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div data-sal="slide-up" data-sal-duration="600" className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Awards & Achievements
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
          <p className="text-muted-foreground mt-6">
            Recognition for excellence in CTF competitions, hackathons, and research
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card
                key={index}
                data-sal="zoom-in"
                data-sal-duration="500"
                data-sal-delay={index * 50}
                className="glass3d p-6 bg-card border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">
                    {achievement.category}
                  </Badge>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Competitive Programming Section */}
        <div
          data-sal="slide-up"
          data-sal-duration="600"
          data-sal-delay="300"
          className="mt-16"
        >
          <Card className="p-8 bg-card border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">
              Competitive Programming
            </h3>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              I love participating in <span className="text-primary font-semibold">Hackathons</span> and{' '}
              <span className="text-primary font-semibold">CTF competitions</span> to push my
              problem-solving abilities to the limit. Every challenge is an opportunity to learn and
              grow.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="https://gopherhack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Target className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                <span className="font-semibold">GopherHack</span>
              </a>
              <a
                href="https://cryptohack.org/user/Madarame/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Trophy className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                <span className="font-semibold">CryptoHack</span>
              </a>
              <a
                href="https://leetcode.com/u/aureliusnguyen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Award className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                <span className="font-semibold">LeetCode</span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
