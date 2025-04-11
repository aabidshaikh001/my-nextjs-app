"use client"

import { useRef, useState, type MouseEvent, useEffect } from "react"
import {
  IconArrowLeft,
  IconArrowRight,
  IconCreditCard,
  IconUsers,
  IconGlobe,
  IconWallet,
  IconShoppingCart,
  IconDeviceMobile,
  IconPhone,
  IconUserPlus,
  IconLogin,
  IconChartBar,
  IconArrowDown,
  IconArrowUp,
  IconShieldLock,
  IconCoin,
  IconBuildingBank,
  IconDeviceAnalytics,
  IconCurrencyRupee,
  IconCheck,
  IconTrendingUp,
} from "@tabler/icons-react"
import "@fontsource/montserrat"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ApiServiceSection } from "./components/api-service-section"

const HomePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const servicesRef = useRef<HTMLDivElement | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [count, setCount] = useState({ users: 0, transactions: 0, volume: 0 })

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate counter stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        users: prev.users < 10 ? prev.users + 1 : prev.users,
        transactions: prev.transactions < 500 ? prev.transactions + 50 : prev.transactions,
        volume: prev.volume < 1000 ? prev.volume + 100 : prev.volume,
      }))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

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
    servicesRef.current?.scrollBy({ left: -200, behavior: "smooth" })
  }

  const scrollRight = () => {
    servicesRef.current?.scrollBy({ left: 200, behavior: "smooth" })
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
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white flex items-center justify-center flex-col px-4 overflow-hidden text-slate-800">
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
        className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12 mt-32 sm:mt-24"
      >
        <motion.div variants={fadeInUp} className="text-center md:text-left space-y-6 md:w-1/2 z-10">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-teal-500/10 backdrop-blur-sm rounded-full text-blue-600 font-medium text-sm mb-4 border border-blue-500/20">
            INDIA&apos;S BIGGEST FINTECH PLATFORM
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">TRANSFORM</span>{" "}
            YOUR FINANCIAL FUTURE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium leading-relaxed tracking-wide">
            Empowering businesses with next-generation payment solutions
          </p>
          <motion.div variants={fadeInUp} className="mt-8 flex justify-center md:justify-start space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://login.oneatm.in/register"
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center space-x-2 transition duration-300 backdrop-blur-sm"
            >
              <IconUserPlus className="h-5 w-5" aria-hidden="true" />
              <span>Get Started</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://login.oneatm.in/login"
              className="border border-blue-500/50 hover:bg-blue-500/10 text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center space-x-2 transition duration-300 backdrop-blur-sm"
            >
              <IconLogin className="h-5 w-5" aria-hidden="true" />
              <span>Login</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Map Section with enhanced effects */}
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
              src="/Map.webp"
              alt="Financial network map showing global payment connections"
              className="max-w-full h-auto object-contain transition-transform duration-300 cursor-pointer "
              style={{
                transform: `perspective(1000px) rotateY(${tiltX}deg) rotateX(${tiltY}deg)`,
                transition: "transform 0.3s ease-out",
              }}
              width={900}
              height={900}
              priority
            />
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white p-2 rounded-full shadow-lg"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <IconTrendingUp className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-md bg-white/90 rounded-xl p-6 border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-600 font-medium">Active Users</h3>
              <IconUsers className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
              {count.users}M+
            </p>
            <p className="text-slate-500 text-sm mt-2">Across India</p>
          </div>

          <div className="backdrop-blur-md bg-white/90 rounded-xl p-6 border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-600 font-medium">Daily Transactions</h3>
              <IconChartBar className="h-8 w-8 text-teal-600" />
            </div>
            <p className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
              {count.transactions}K+
            </p>
            <p className="text-slate-500 text-sm mt-2">Processed securely</p>
          </div>

          <div className="backdrop-blur-md bg-white/90 rounded-xl p-6 border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-600 font-medium">Transaction Volume</h3>
              <IconCurrencyRupee className="h-8 w-8 text-cyan-600" />
            </div>
            <p className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
              ₹{count.volume}Cr+
            </p>
            <p className="text-slate-500 text-sm mt-2">Monthly</p>
          </div>
        </div>
      </motion.div>

      {/* Our Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-7xl mx-auto py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Comprehensive Financial Solutions
          </span>
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          OneATM offers a complete suite of financial services designed to streamline your business operations and
          enhance customer experience.
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

          {/* Services Scroll Container */}
          <div
            ref={servicesRef}
            className="service-scroll-container flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
          >
            {/* Service Cards with Glassmorphism */}
            {[
              {
                icon: <IconCreditCard className="h-8 w-8 text-white" />,
                title: "Payment Gateway",
                desc: "Secure online transactions",
              },
              {
                icon: <IconBuildingBank className="h-8 w-8 text-white" />,
                title: "Banking Services",
                desc: "Integrated banking solutions",
              },
              {
                icon: <IconGlobe className="h-8 w-8 text-white" />,
                title: "UPI Payments",
                desc: "Instant fund transfers",
              },
              {
                icon: <IconWallet className="h-8 w-8 text-white" />,
                title: "Digital Wallet",
                desc: "Contactless transactions",
              },
              {
                icon: <IconCoin className="h-8 w-8 text-white" />,
                title: "Wealth Management",
                desc: "Investment solutions",
              },
              {
                icon: <IconShoppingCart className="h-8 w-8 text-white" />,
                title: "Merchant Services",
                desc: "Business payment solutions",
              },
              {
                icon: <IconDeviceMobile className="h-8 w-8 text-white" />,
                title: "Mobile Banking",
                desc: "Banking on the go",
              },
              {
                icon: <IconShieldLock className="h-8 w-8 text-white" />,
                title: "Secure Transactions",
                desc: "Advanced encryption",
              },
              {
                icon: <IconDeviceAnalytics className="h-8 w-8 text-white" />,
                title: "Financial Analytics",
                desc: "Data-driven insights",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="service-card flex flex-col items-center text-center p-6 cursor-pointer rounded-xl transition-all transform backdrop-blur-md bg-white border border-slate-200 shadow-xl"
                style={{ minWidth: "220px" }}
              >
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 rounded-full mb-4 shadow-lg"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <span className="font-semibold text-lg text-slate-800 mb-2">{service.title}</span>
                <span className="text-sm text-slate-600">{service.desc}</span>
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

      <ApiServiceSection/>
      {/* Revolutionizing Payments Section - DARKER SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="flex items-center justify-center min-h-screen w-full py-12"
      >
        <div className="relative w-full max-w-screen-xl mx-auto rounded-3xl overflow-hidden">
          {/* Glassmorphism background - darker section */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 backdrop-blur-lg -z-10"></div>

          <div className="flex flex-col md:flex-row items-center justify-between p-10 z-10">
            {/* Left Column - Content */}
            <div className="text-center md:text-left md:w-1/2">
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                  Revolutionizing Financial Technology
                </span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-slate-700 mb-6 text-lg md:text-xl font-medium">
                OneATM delivers enterprise-grade financial infrastructure for businesses of all sizes, powering the
                future of digital payments across India.
              </motion.p>

              {/* Features List */}
              <motion.ul variants={staggerContainer} className="list-none space-y-4 text-lg font-light">
                {[
                  "RBI-certified Payment Aggregator with bank-grade security protocols",
                  "Powering financial services for India's leading public and private sector banks",
                  "Nationwide network of over 1.4 million transaction points for seamless financial access",
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start gap-3 text-slate-700">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-1 rounded-full mt-1 flex-shrink-0">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Right Column - Image */}
            <motion.div variants={fadeInUp} className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
              <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 transform rotate-3"></div>
                <Image
                  src="/okay.png"
                  alt="Advanced Financial Technology Platform"
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

      {/* India's Most Advanced Fintech Platform Section */}
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
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600"
          >
            India&apos;s Most Advanced Fintech Platform
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-700 pb-5">
            Comprehensive financial services including payment processing, banking solutions, and digital wallet
            capabilities for modern businesses.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/Started"
              className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Platform
            </Link>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center">
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"></div>
            <Image
              src="/GIF2.gif"
              alt="OneATM Financial Platform Demo"
              className="w-auto h-auto p-4 lg:-mt-10 rounded-3xl shadow-2xl"
              width={900}
              height={900}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enterprise Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto py-20 flex flex-col gap-3 md:flex-row items-center justify-between space-y-10 md:space-y-0"
      >
        {/* Left Column (Text) */}
        <div className="md:w-1/2 space-y-8">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Enterprise-Grade Financial Infrastructure
          </motion.h2>
          <motion.div variants={staggerContainer} className="space-y-6">
            {[
              {
                title: "Unified Financial Platform",
                desc: "Manage all financial operations through a single, powerful dashboard with real-time analytics and reporting.",
              },
              {
                title: "Multi-Channel Payment Processing",
                desc: "Accept payments through any channel including UPI, credit cards, debit cards, net banking, and digital wallets.",
              },
              {
                title: "Advanced Security Protocols",
                desc: "Bank-grade encryption, tokenization, and fraud detection systems to protect every transaction.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="backdrop-blur-sm bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                  <p className="text-lg text-slate-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column (Image) */}
        <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center">
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="relative w-full max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl -z-10"></div>
            <Image
              src="/logo6.png"
              alt="OneATM Enterprise Financial Platform"
              className="w-full object-contain drop-shadow-2xl"
              width={900}
              height={900}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Digital Payments Section - DARKER SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto py-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 backdrop-blur-md rounded-3xl -z-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between p-6 z-10">
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-800">
              Next-Generation Digital Payments
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-700">
              Enable secure, instant transactions anywhere with our comprehensive digital payment infrastructure. Our
              platform supports all major payment methods with real-time settlement and advanced fraud protection.
            </motion.p>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
            >
              <a
                download={"https://in.tapir.co.in/uploads/logo/oneatm_v1.apk"}
                href="https://in.tapir.co.in/uploads/logo/oneatm_v1.apk"
              >
                Download Mobile App
              </a>
            </motion.button>
          </div>
          <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center">
            <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 transform rotate-3"></div>
              <Image
                src="/Payment Information-rafiki.png"
                alt="Digital Payment Solutions"
                className="drop-shadow-2xl rounded-xl"
                width={900}
                height={900}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Merchant Solutions Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Logo on the Left Side */}
        <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center md:justify-start">
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 transform -rotate-3"></div>
            <Image
              src="/Online shopping-rafiki.png"
              alt="Merchant Payment Solutions"
              className="max-w-lg h-auto rounded-xl shadow-xl"
              width={900}
              height={900}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Content on the Right Side */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-800">
            Comprehensive Merchant Solutions
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-600 pb-5">
            From small businesses to large enterprises, our merchant services provide tailored payment solutions with
            competitive transaction rates, detailed analytics, and seamless integration options.
          </motion.p>
          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#footer"
            className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            Merchant Solutions
          </motion.a>
        </div>
      </motion.div>

      {/* Financial Cards Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Text Content on the Left Side */}
        <div className="md:w-1/2 text-center md:text-left space-y-4 p-6">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-800">
            Next-Generation Financial Cards
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-600">
            Our advanced financial cards combine security and convenience with features like contactless payments,
            real-time notifications, spending analytics, and customizable rewards programs.
          </motion.p>
        </div>

        {/* Image on the Right Side with Movable Hover Effect */}
        <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center">
          <motion.div
            whileHover={{
              x: 16,
              y: 8,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 transform rotate-3"></div>
            <Image
              src="/Wallet-rafiki.svg"
              alt="Advanced Financial Cards"
              className="max-w-2xl h-auto transition-all duration-300 transform hover:scale-105 rounded-xl shadow-2xl"
              width={900}
              height={900}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto py-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white to-slate-50 backdrop-blur-sm rounded-3xl -z-10"></div>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-2"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Frequently Asked Questions
          </span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Get answers to common questions about our financial technology platform
        </motion.p>

        <motion.div variants={staggerContainer} className="space-y-4 p-6">
          {[
            {
              question: "What is OneATM's fintech platform?",
              answer:
                "OneATM is India's leading financial technology platform providing comprehensive payment processing, banking services, and digital wallet solutions for businesses of all sizes.",
            },
            {
              question: "How secure is the OneATM platform?",
              answer:
                "Our platform employs bank-grade security with end-to-end encryption, tokenization, and advanced fraud detection systems. We're fully compliant with RBI regulations and international security standards.",
            },
            {
              question: "What financial services does OneATM offer?",
              answer:
                "OneATM provides a complete suite of financial services including payment gateway, UPI integration, digital wallet, merchant services, banking solutions, and financial analytics.",
            },
            {
              question: "How can businesses integrate with OneATM?",
              answer:
                "Businesses can easily integrate with our platform through our developer-friendly APIs, SDKs, and plugins for major e-commerce platforms. Our team provides comprehensive technical support throughout the integration process.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="backdrop-blur-sm bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium text-slate-800 flex justify-between items-center p-5"
              >
                {faq.question}
                <span className="bg-gradient-to-r from-blue-600/20 to-teal-500/20 p-2 rounded-full">
                  {openFAQ === index ? (
                    <IconArrowUp className="h-4 w-4 text-blue-600" />
                  ) : (
                    <IconArrowDown className="h-4 w-4 text-blue-600" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-600 p-5 pt-0 border-t border-slate-200">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 -z-10"></div>

          <div className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Financial Operations?</h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using OneATM&apos;s advanced fintech platform to streamline payments, enhance
              customer experience, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://login.oneatm.in/register"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center space-x-2 transition duration-300"
              >
                <IconUserPlus className="h-5 w-5" aria-hidden="true" />
                <span>Get Started Now</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center space-x-2 transition duration-300 hover:bg-white/10"
              >
                <IconPhone className="h-5 w-5" aria-hidden="true" />
                <span>Contact Sales</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HomePage
