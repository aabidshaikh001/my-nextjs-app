"use client"

import { useRef, useState, type MouseEvent } from "react"
import {
  IconArrowLeft,
  IconArrowRight,
  IconCreditCard,
  IconDeviceMobile,
  IconShieldLock,
  IconBuildingBank,
  IconDeviceAnalytics,
  IconCheck,
  IconHeadset,
  IconCode,
  IconChartBar,
  IconUsers,
  IconServer,
} from "@tabler/icons-react"
import "@fontsource/montserrat"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const ServicesPage = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null)
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
    servicesRef.current?.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    servicesRef.current?.scrollBy({ left: 300, behavior: "smooth" })
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
            ENTERPRISE-GRADE SOLUTIONS
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
              Our Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium leading-relaxed tracking-wide">
            Comprehensive financial technology services tailored to your business needs
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
              alt="OneATM Services"
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

      {/* Core Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-7xl mx-auto py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Core Services
          </span>
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Explore our comprehensive range of financial technology services
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
            className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Service Cards with Glassmorphism */}
            {[
              {
                icon: <IconCreditCard className="h-8 w-8 text-white" />,
                title: "Payment Processing",
                desc: "Secure and reliable payment processing for all major payment methods",
                features: ["Multi-channel support", "Real-time processing", "Fraud protection"],
              },
              {
                icon: <IconBuildingBank className="h-8 w-8 text-white" />,
                title: "Banking Solutions",
                desc: "Comprehensive banking services for businesses and individuals",
                features: ["Account management", "Fund transfers", "Financial reporting"],
              },
              {
                icon: <IconHeadset className="h-8 w-8 text-white" />,
                title: "24/7 Support",
                desc: "Round-the-clock customer support for all your financial needs",
                features: ["Dedicated account managers", "Technical support", "Issue resolution"],
              },
              {
                icon: <IconCode className="h-8 w-8 text-white" />,
                title: "API Integration",
                desc: "Seamless integration with your existing systems and applications",
                features: ["Developer-friendly APIs", "Comprehensive documentation", "Technical assistance"],
              },
              {
                icon: <IconChartBar className="h-8 w-8 text-white" />,
                title: "Financial Analytics",
                desc: "Data-driven insights to optimize your financial operations",
                features: ["Real-time reporting", "Trend analysis", "Custom dashboards"],
              },
              {
                icon: <IconShieldLock className="h-8 w-8 text-white" />,
                title: "Security Services",
                desc: "Advanced security solutions for financial transactions",
                features: ["End-to-end encryption", "Fraud detection", "Compliance management"],
              },
            ].map((service, index) => (
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
                    {service.icon}
                  </motion.div>
                  <span className="font-semibold text-xl text-slate-800">{service.title}</span>
                </div>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
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

      {/* Payment Processing Section */}
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
                  Payment Processing Services
                </span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-700 mb-6 text-lg font-medium">
                Our payment processing services provide a secure and seamless payment experience for your customers with
                support for all major payment methods.
              </motion.p>

              {/* Features List */}
              <motion.ul variants={staggerContainer} className="list-none space-y-4 text-lg font-light">
                {[
                  "Multi-channel payment processing for online, mobile, and in-store transactions",
                  "Support for credit cards, debit cards, UPI, net banking, and digital wallets",
                  "Real-time transaction monitoring and fraud detection",
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
                  alt="Payment Processing Interface"
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

      {/* API Integration Section */}
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
            API Integration Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-700 pb-5">
            Our API integration services provide seamless connectivity between your systems and our financial platform,
            enabling you to build custom solutions.
          </motion.p>
          <motion.div variants={staggerContainer} className="space-y-4 text-lg font-light">
            {[
              "Developer-friendly RESTful APIs with comprehensive documentation",
              "SDKs for popular programming languages and frameworks",
              "Webhooks for real-time event notifications",
              "Sandbox environment for testing and development",
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
              Explore API Documentation
            </Link>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center">
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"></div>
            <Image
              src="/placeholder.svg?height=500&width=700"
              alt="API Integration"
              className="w-auto h-auto p-4 rounded-3xl shadow-2xl"
              width={700}
              height={500}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Consulting Services Section */}
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
            Financial Technology Consulting
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-700 pb-5">
            Our expert consultants provide strategic guidance to help you optimize your financial operations and
            leverage the latest fintech innovations.
          </motion.p>
          <motion.div variants={staggerContainer} className="space-y-4 text-lg font-light">
            {[
              "Strategic financial technology planning and implementation",
              "Payment optimization and cost reduction strategies",
              "Security and compliance assessment and recommendations",
              "Custom solution design and development guidance",
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
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 mt-6"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center">
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"></div>
            <Image
              src="/placeholder.svg?height=500&width=700"
              alt="Financial Technology Consulting"
              className="w-auto h-auto p-4 rounded-3xl shadow-2xl"
              width={700}
              height={500}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enterprise Solutions Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full max-w-6xl mx-auto py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Enterprise Solutions
          </span>
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Tailored financial technology solutions for large-scale enterprises
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <IconServer className="h-8 w-8 text-white" />,
              title: "Infrastructure Management",
              desc: "Scalable and secure infrastructure solutions for high-volume financial operations",
            },
            {
              icon: <IconUsers className="h-8 w-8 text-white" />,
              title: "Enterprise Integration",
              desc: "Seamless integration with your existing enterprise systems and workflows",
            },
            {
              icon: <IconDeviceAnalytics className="h-8 w-8 text-white" />,
              title: "Advanced Analytics",
              desc: "Comprehensive data analytics and business intelligence for strategic decision-making",
            },
            {
              icon: <IconShieldLock className="h-8 w-8 text-white" />,
              title: "Security & Compliance",
              desc: "Enterprise-grade security and regulatory compliance solutions",
            },
            {
              icon: <IconDeviceMobile className="h-8 w-8 text-white" />,
              title: "Mobile Solutions",
              desc: "Custom mobile applications for your financial services and operations",
            },
            {
              icon: <IconHeadset className="h-8 w-8 text-white" />,
              title: "Dedicated Support",
              desc: "24/7 dedicated support and account management for enterprise clients",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="flex flex-col items-start text-left p-6 cursor-pointer rounded-xl transition-all transform backdrop-blur-md bg-white border border-slate-200 shadow-xl h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 rounded-full shadow-lg"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <span className="font-semibold text-xl text-slate-800">{service.title}</span>
              </div>
              <p className="text-slate-600 mb-4">{service.desc}</p>
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
              Explore our comprehensive service offerings and discover how OneATM can help you streamline your financial
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

export default ServicesPage
