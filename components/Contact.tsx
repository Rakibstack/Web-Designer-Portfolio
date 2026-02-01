'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 dark:text-white">Let's Work Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Have a project in mind? Let's create something amazing</p>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-10 shadow-xl"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg transition-all duration-300"
              required
            />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg transition-all duration-300"
              required
            />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg resize-none transition-all duration-300"
              required
            />
          </motion.div>
          
          <motion.button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium shadow-lg"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Or reach out directly</p>
          <motion.a
            href="mailto:hello@alexmorgan.design"
            className="text-2xl font-light text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            hello@alexmorgan.design
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
