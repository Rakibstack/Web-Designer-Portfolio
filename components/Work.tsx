'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Horizon Banking',
    category: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Minimal Studio',
    category: 'Brand & Digital',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
  },
  {
    title: 'Pulse Analytics',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'Terra Wellness',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    title: 'Urban Spaces',
    category: 'Architecture & Design',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: 'Flow Fitness',
    category: 'Mobile App Design',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
  },
]

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project, index) => {
        if (project) {
          // Parallax scroll effect
          gsap.to(project, {
            scrollTrigger: {
              trigger: project,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
            y: index % 2 === 0 ? -50 : 50,
            ease: 'none',
          })

          // Scale and fade in
          gsap.from(project, {
            scrollTrigger: {
              trigger: project,
              start: 'top 80%',
            },
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-32 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-light mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Selected Work
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Projects that showcase creativity and precision</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={(el) => {
                projectsRef.current[index] = el
              }}
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                >
                  <div className="absolute bottom-6 left-6 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-lg font-light">View Project</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-r-[60px] border-t-blue-600 border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </div>

              <motion.h3
                className="text-2xl font-light mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
