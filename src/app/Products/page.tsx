"use client"

import { useRef, useState, type MouseEvent } from "react"
import {
  IconArrowLeft,
  IconArrowRight,
  IconCreditCard,
  IconWallet,
  IconShoppingCart,
  IconShieldLock,
  IconBuildingBank,
  IconCheck,
  IconCurrencyRupee,
} from "@tabler/icons-react"
import "@fontsource/montserrat"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const ProductsPage = () => {
  const productsRef = useRef<HTMLDivElement | null>(null)
  const [tiltX, setTiltX] = useState<number>(0)
  const [tiltY, setTiltY] = useState<number>(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { clientWidth, clientHeight } = e.currentTarget

    const x = (clientX / clientWidth) * 20 - 10 // Calculate tilt X value
    const y = (clientY / clientHeight) * 20 - 10 // Calculate tilt Y value

    setTiltX(x)
    setTiltY(y)
  }

  const handleMouseLeave = () => {
    setTiltX(0)
    setTiltY(0)
  }

  const scrollLeft = () => {
    productsRef.current?.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    productsRef.current?.scrollBy({ left: 300, behavior: "smooth" })
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

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
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
        className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12 mb-20"
      >
        <motion.div variants={fadeInUp} className="text-center md:text-left space-y-6 md:w-1/2 z-10">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-teal-500/10 backdrop-blur-sm rounded-full text-blue-600 font-medium text-sm mb-4 border border-blue-500/20">
            COMPREHENSIVE FINANCIAL SOLUTIONS
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
              Our Product Suite
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium leading-relaxed tracking-wide">
            Discover our comprehensive range of financial technology solutions
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="md:w-1/2 flex justify-center p-5 group transition-transform duration-300 z-10"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 transform -rotate-3"></div>
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="OneATM Product Suite"
              className="max-w-full h-auto object-contain transition-transform duration-300 rounded-2xl shadow-2xl"
              style={{
                transform: `perspective(1000px) rotateY(${tiltX}deg) rotateX(${tiltY}deg)`,
                transition: "transform 0.3s ease-out",
              }}
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Featured Products Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-7xl mx-auto py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Featured Products
          </span>
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Explore our flagship financial technology solutions designed to transform your business
        </p>

        <div className="flex items-center justify-center space-x-5">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollLeft}
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 shadow-md backdrop-blur-sm"
          >
            <IconArrowLeft className="h-5 w-5 text-blue-600" />
          </motion.button>

          {/* Products Scroll Container */}
          <div
            ref={productsRef}
            className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Product Cards with Glassmorphism */}
            {[
              {
                icon: <IconCreditCard className="h-8 w-8 text-white" />,
                title: "Payment Gateway",
                desc: "Secure online payment processing with support for all major payment methods",
                features: ["Multi-currency support", "Instant settlements", "Advanced fraud protection"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <IconBuildingBank className="h-8 w-8 text-white" />,
                title: "Banking Services",
                desc: "Comprehensive banking solutions for businesses and individuals",
                features: ["Account management", "Fund transfers", "Financial reporting"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <IconWallet className="h-8 w-8 text-white" />,
                title: "Digital Wallet",
                desc: "Secure digital wallet for contactless payments and money management",
                features: ["QR code payments", "Expense tracking", "Loyalty programs"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <IconShoppingCart className="h-8 w-8 text-white" />,
                title: "Merchant Services",
                desc: "Complete payment solutions for online and offline businesses",
                features: ["POS integration", "Inventory management", "Customer analytics"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <IconCurrencyRupee className="h-8 w-8 text-white" />,
                title: "Financial Analytics",
                desc: "Data-driven insights to optimize your financial operations",
                features: ["Real-time reporting", "Trend analysis", "Custom dashboards"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <IconShieldLock className="h-8 w-8 text-white" />,
                title: "Secure Transactions",
                desc: "Advanced security solutions for financial transactions",
                features: ["End-to-end encryption", "Fraud detection", "Compliance management"],
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="flex flex-col items-start text-left p-6 cursor-pointer rounded-xl transition-all transform backdrop-blur-md bg-white border border-slate-200 shadow-xl"
                style={{ minWidth: "320px", maxWidth: "320px" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 rounded-full shadow-lg"
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.icon}
                  </motion.div>
                  <span className="font-semibold text-xl text-slate-800">{product.title}</span>
                </div>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-slate-600 mb-4">{product.desc}</p>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <IconCheck className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 w-full text-center"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollRight}
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 shadow-md backdrop-blur-sm"
          >
            <IconArrowRight className="h-5 w-5 text-blue-600" />
          </motion.button>
        </div>
      </motion.div>

      {/* Payment Gateway Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="flex items-center justify-center w-full py-20"
      >
        <div className="relative w-full max-w-screen-xl mx-auto rounded-3xl overflow-hidden">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 backdrop-blur-lg -z-10"></div>

          <div className="flex flex-col md:flex-row items-center justify-between p-10 z-10">
            {/* Left Column - Content */}
            <div className="text-center md:text-left md:w-1/2">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                  Advanced Payment Gateway
                </span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-700 mb-6 text-lg font-medium">
                Our payment gateway provides a secure and seamless payment experience for your customers with support
                for all major payment methods.
              </motion.p>

              {/* Features List */}
              <motion.ul variants={staggerContainer} className="list-none space-y-4 text-lg font-light">
                {[
                  "Support for credit cards, debit cards, UPI, net banking, and digital wallets",
                  "Real-time transaction monitoring and fraud detection",
                  "Customizable checkout experience with your brand identity",
                  "Detailed analytics and reporting for business insights",
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start gap-3 text-slate-700">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-1 rounded-full mt-1 flex-shrink-0">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>

            {/* Right Column - Image */}
            <motion.div variants={fadeInUp} className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
              <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 transform rotate-3"></div>
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Payment Gateway Interface"
                  width={700}
                  height={500}
                  quality={100}
                  className="w-full max-w-xs md:max-w-lg shadow-xl rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Digital Wallet Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto py-20 flex flex-col md:flex-row-reverse items-center justify-between"
      >
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600"
          >
            Digital Wallet Solutions
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-700 pb-5">
            Our digital wallet platform enables secure contactless payments, money transfers, and financial management
            for your customers.
          </motion.p>
          <motion.div variants={staggerContainer} className="space-y-4 text-lg font-light">
            {[
              "QR code and NFC-based contactless payments",
              "Peer-to-peer money transfers",
              "Bill payments and subscription management",
              "Expense tracking and budgeting tools",
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3 text-slate-700">
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-1 rounded-full mt-1 flex-shrink-0">
                  <IconCheck className="h-4 w-4" />
                </span>
                {item}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              href="#"
              className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 mt-6"
            >
              Explore Digital Wallet
            </Link>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center">
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"></div>
            <Image
              src="/placeholder.svg?height=500&width=700"
              alt="Digital Wallet Interface"
              className="w-auto h-auto p-4 rounded-3xl shadow-2xl"
              width={700}
              height={500}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Banking Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center justify-between"
      >
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600"
          >
            Comprehensive Banking Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-700 pb-5">
            Our banking services provide a complete financial ecosystem for businesses and individuals with advanced
            account management and reporting tools.
          </motion.p>
          <motion.div variants={staggerContainer} className="space-y-4 text-lg font-light">
            {[
              "Account management and fund transfers",
              "Automated reconciliation and reporting",
              "Multi-currency support for global operations",
              "API-based integration with your existing systems",
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3 text-slate-700">
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-1 rounded-full mt-1 flex-shrink-0">
                  <IconCheck className="h-4 w-4" />
                </span>
                {item}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              href="#"
              className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 mt-6"
            >
              Explore Banking Services
            </Link>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center">
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"></div>
            <Image
              src="/placeholder.svg?height=500&width=700"
              alt="Banking Services Interface"
              className="w-auto h-auto p-4 rounded-3xl shadow-2xl"
              width={700}
              height={500}
              priority
            />
          </motion.div>
        </motion.div>
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-90 -z-10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10 -z-10"></div>

          <div className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Financial Operations?</h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Explore our comprehensive product suite and discover how OneATM can help you streamline your financial
              operations and enhance customer experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://login.oneatm.in/register"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center space-x-2 transition duration-300"
              >
                <span>Get Started Now</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center space-x-2 transition duration-300 hover:bg-white/10"
              >
                <span>Contact Sales</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductsPage
