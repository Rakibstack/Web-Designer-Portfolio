'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-4">Alex Morgan</h3>
            <p className="text-gray-400">Creating digital experiences with purpose and clarity</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <motion.a
                href="#work"
                className="block text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                Work
              </motion.a>
              <motion.a
                href="#services"
                className="block text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                Services
              </motion.a>
              <motion.a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                About
              </motion.a>
              <motion.a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://twitter.com"
                className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                𝕏
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                in
              </motion.a>
              <motion.a
                href="https://dribbble.com"
                className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                ⚾
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>© 2026 Alex Morgan. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
