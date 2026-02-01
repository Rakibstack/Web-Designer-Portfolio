'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-light tracking-tight text-gray-900 dark:text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Alex Morgan
        </motion.a>

        <div className="flex gap-8 items-center">
          <motion.a
            href="#work"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Work
          </motion.a>
          <motion.a
            href="#services"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Services
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>

          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </motion.button>
          )}

          <motion.a
            href="#contact"
            className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.a>
        </div>
      </nav>
    </motion.header>
  )
}
