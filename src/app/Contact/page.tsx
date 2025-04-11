"use client"

import type React from "react"

import { useState } from "react"
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconCheck,
  IconSend,
} from "@tabler/icons-react"
import "@fontsource/montserrat"
import { motion } from "framer-motion"
import Image from "next/image"

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    }, 1500)
  }

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
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white flex items-center justify-center flex-col px-4 overflow-hidden text-slate-800 pt-32">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full max-w-6xl flex flex-col items-center justify-center space-y-6 mb-16"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-6 z-10 max-w-3xl">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-teal-500/10 backdrop-blur-sm rounded-full text-blue-600 font-medium text-sm mb-4 border border-blue-500/20">
            GET IN TOUCH
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">Contact Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed tracking-wide">
            Have questions about our products or services? Our team is here to help you.
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto pb-20"
      >
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="lg:w-1/3 space-y-8">
            <div className="backdrop-blur-md bg-white/90 rounded-xl p-8 border border-slate-200 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full shadow-md">
                    <IconMapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Our Office</h3>
                    <p className="text-slate-600">123 Financial District, Mumbai, Maharashtra 400001, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full shadow-md">
                    <IconPhone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <p className="text-slate-600">+91 1234 567 890</p>
                    <p className="text-slate-600">+91 9876 543 210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full shadow-md">
                    <IconMail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <p className="text-slate-600">info@oneatm.in</p>
                    <p className="text-slate-600">support@oneatm.in</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-slate-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                  >
                    <IconBrandTwitter className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                  >
                    <IconBrandFacebook className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                  >
                    <IconBrandLinkedin className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                  >
                    <IconBrandInstagram className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/90 rounded-xl p-8 border border-slate-200 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                Business Hours
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Saturday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp} className="lg:w-2/3">
            <div className="backdrop-blur-md bg-white/90 rounded-xl p-8 border border-slate-200 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                Send Us a Message
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className={`w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center ${
                    formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {formStatus === "submitting" ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : formStatus === "success" ? (
                    <span className="flex items-center">
                      <IconCheck className="mr-2 h-5 w-5" />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <IconSend className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto pb-20"
      >
        <div className="backdrop-blur-md bg-white/90 rounded-xl p-8 border border-slate-200 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Our Location
          </h2>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Office Location Map"
              className="w-full h-full object-cover"
              width={1200}
              height={400}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full shadow-lg animate-pulse">
                <IconMapPin className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto pb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our customer support team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "How do I get started with OneATM?",
              answer:
                "Getting started is easy! Simply register for an account on our platform, complete the verification process, and our team will guide you through the integration process.",
            },
            {
              question: "What payment methods do you support?",
              answer:
                "We support all major payment methods including credit cards, debit cards, UPI, net banking, digital wallets, and more. Our platform is designed to provide a comprehensive payment solution for your business.",
            },
            {
              question: "How secure is your platform?",
              answer:
                "Security is our top priority. We employ bank-grade encryption, tokenization, and advanced fraud detection systems to ensure the security of all transactions. We are also fully compliant with RBI regulations and international security standards.",
            },
            {
              question: "What are your transaction fees?",
              answer:
                "Our transaction fees vary based on your business volume and the payment methods you choose to accept. Please contact our sales team for a customized quote tailored to your business needs.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="backdrop-blur-md bg-white/90 rounded-xl p-6 border border-slate-200 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp}
  className="w-full max-w-6xl mx-auto py-16 mb-20"
>
  <div className="relative rounded-3xl overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-600 opacity-90 z-0"></div>

    {/* Optional background pattern */}
    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10 z-0"></div>

    {/* DARK overlay to increase text contrast */}
    <div className="absolute inset-0 bg-black/50 z-0"></div>

    {/* Content wrapper with higher z-index */}
    <div className="relative z-10 p-12 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        Ready to Transform Your Financial Operations?
      </h2>
      <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
        Join thousands of businesses using OneATM&apos;s advanced fintech platform to streamline payments, enhance
        customer experience, and drive growth.
      </p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://login.oneatm.in/register"
        className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg inline-flex items-center space-x-2 transition duration-300"
      >
        <span>Get Started Now</span>
      </motion.a>
    </div>
  </div>
</motion.div>

    </div>
  )
}

export default ContactPage
