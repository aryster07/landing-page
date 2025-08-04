"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, textRef.current], { 
        y: 80, 
        opacity: 0 
      })

      // Create ScrollTrigger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Animate title with text reveal
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      })

      // Animate text content
      tl.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* About Me Section */}
        <div className="text-center">
          <h2 
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold mb-8"
          >
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              me
            </span>
          </h2>
          
          <div ref={textRef} className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Hi, Aryan this side - a passionate designer and photographer with an unwavering love for art and perfection. I always keep stepping up my levels in every field I enter.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Whether it's crafting intuitive digital experiences or capturing compelling visual stories, I approach each project with creative vision and meticulous attention to detail.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in design and photography has been driven by curiosity and a constant desire to push creative boundaries. From conceptualizing brand identities to capturing moments that tell stories, I believe in the power of visual communication.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not behind a camera or designing interfaces, you'll find me exploring the beautiful landscapes of Himachal Pradesh, always seeking new perspectives and inspiration for my next creative endeavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
