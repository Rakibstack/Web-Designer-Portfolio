'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaPalette, FaLightbulb, FaCode, FaBullseye } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Web Design',
    description: 'Clean, purposeful interfaces that prioritize user experience and visual clarity',
    icon: FaPalette,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Brand Identity',
    description: 'Cohesive visual systems that communicate your values with consistency',
    icon: FaLightbulb,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Development',
    description: 'Modern, responsive websites built with attention to detail and performance',
    icon: FaCode,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'UI/UX Strategy',
    description: 'Research-driven design decisions that align with business goals and user needs',
    icon: FaBullseye,
    color: 'from-purple-500 to-indigo-500',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with split text effect
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        })
      }

      // Animate cards with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            opacity: 0,
            y: 100,
            rotationX: -15,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out',
          })

          // Floating animation
          gsap.to(card, {
            y: -10,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 px-6 md:px-12 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background particles */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-light mb-4">
            What I Do
          </h2>
          <p className="text-xl text-gray-400">Comprehensive design services for modern brands</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer group overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-50`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    className="relative w-16 h-16 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-4xl text-white relative z-10" />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.h3
                  className="text-2xl font-light mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Number indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  0{index + 1}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
