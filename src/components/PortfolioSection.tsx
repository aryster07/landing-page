"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { ExternalLink, GitBranch } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "UI/UX Design",
    description: "Modern e-commerce platform with intuitive user experience and smooth checkout flow.",
    image: "/images/portfolio/project-1.jpg",
    tags: ["Figma", "React", "TypeScript"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Brand Photography",
    category: "Photography",
    description: "Professional brand photography series for a local business.",
    image: "/images/portfolio/project-2.jpg",
    tags: ["Canon R5", "Studio Lighting", "Adobe Lightroom"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Mobile App Design",
    category: "UI/UX Design",
    description: "Fitness tracking mobile app with gamification elements.",
    image: "/images/portfolio/project-3.jpg",
    tags: ["Sketch", "Prototyping", "User Research"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Portrait Session",
    category: "Photography",
    description: "Creative portrait photography with dramatic lighting techniques.",
    image: "/images/portfolio/project-4.jpg",
    tags: ["Portrait", "Natural Light", "Post-Processing"],
    link: "#",
    github: "#"
  }
]

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, { y: 80, opacity: 0 })
      gsap.set(gridRef.current?.children || [], { y: 100, opacity: 0 })

      // Create ScrollTrigger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Animate title
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      })

      // Animate grid items with stagger
      tl.to(gridRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2
      }, "-=0.6")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="py-20 lg:py-32 bg-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my latest work in design and photography
          </p>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Project Image</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={item.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={item.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-400 font-medium">{item.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
          >
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
