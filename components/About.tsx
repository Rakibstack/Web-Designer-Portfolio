'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: -80,
          ease: 'none',
        })
      }

      // Stagger text animation
      if (textRef.current) {
        const paragraphs = textRef.current.querySelectorAll('p')
        gsap.from(paragraphs, {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 70%',
          },
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-light mb-8 text-gray-900 dark:text-white"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <div ref={textRef} className="space-y-6 text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a web designer based in San Francisco, working with startups and established
                brands to create digital experiences that feel natural and effortless.
              </p>

              <p>
                My approach centers on clarity, restraint, and attention to detail. I believe the
                best design often goes unnoticed—it simply works.
              </p>

              <p>
                When I'm not designing, you'll find me exploring the city, reading about design
                systems, or experimenting with new web technologies.
              </p>

              <motion.div className="flex gap-4 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-6 py-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-100 dark:border-blue-900 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"
                  />
                  <span className="text-3xl font-light block text-gray-900 dark:text-white">8+</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-6 py-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border border-purple-100 dark:border-purple-900 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity"
                  />
                  <span className="text-3xl font-light block text-gray-900 dark:text-white">50+</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div ref={imageRef} className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Designer portrait"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Animated decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 -z-10"
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-600 -z-10"
                animate={{ rotate: [360, 270, 180, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
