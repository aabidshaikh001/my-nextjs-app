"use client"
import { motion } from "framer-motion"
import { IconCode, IconGitBranch, IconUsers, IconHeadset } from "@tabler/icons-react"
import Image from "next/image"

export function ApiServiceSection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="w-full py-20 relative"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 backdrop-blur-md -z-10"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                Powerful APIs for Seamless Integration
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-slate-700">
              We&apos;ve designed developer-friendly APIs that enable quick integration and rapid deployment of our financial
              services into your applications.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-8 pt-6">
              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full text-white shadow-lg">
                  <IconCode className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Comprehensive Documentation</h3>
                  <p className="text-slate-600 mt-2">
                    Detailed yet concise instructions with interactive examples so your developers can implement quickly
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full text-white shadow-lg">
                  <IconGitBranch className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Consistent & Reliable</h3>
                  <p className="text-slate-600 mt-2">
                    APIs that perform exactly as expected every time with 99.99% uptime and predictable response formats
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full text-white shadow-lg">
                  <IconUsers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Developer Experience Focused</h3>
                  <p className="text-slate-600 mt-2">
                    Intuitive parameters & responses designed for ease of implementation with comprehensive error
                    handling
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full text-white shadow-lg">
                  <IconHeadset className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Dedicated Support</h3>
                  <p className="text-slate-600 mt-2">
                    Responsive technical team available to assist your developers with implementation and
                    troubleshooting
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center items-center">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 transform rotate-3"></div>
              <Image
                src="/Data extraction-rafiki.png"
                alt="API integration diagram"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl"
              />
              {/* You can replace the placeholder with your actual right-side image */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
