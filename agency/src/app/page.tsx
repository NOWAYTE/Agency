"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHovering ? "scale-150" : "scale-100"
        }`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      >
        <div
          className={`w-5 h-5 rounded-full border transition-all duration-300 ${
            isHovering ? "border-white bg-white/20 shadow-lg shadow-white/50" : "border-gray-400 bg-transparent"
          }`}
        />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        {/* Base Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[25vh] md:h-[30vh] lg:h-[35vh] overflow-hidden">
        {/* Video */}
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="masthead.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Video Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-4"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Crafting Digital Excellence
            </h2>
            <p className="text-sm md:text-lg text-gray-200 font-light max-w-2xl mx-auto">
             Transforming ideas into powerful digital solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-8">
          {/* Main Heading with Gradient */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Zumntavon Solutions
            </h1>
            <p className="text-base md:text-lg text-[#B4B0AE] font-light">Development team based worldwide</p>
          </div>

          {/* Description */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-sm md:text-base leading-relaxed text-gray-300 font-light">
              Currently building the future of digital experiences. We are a team of passionate developers specializing
              in modern web applications, mobile solutions, and innovative software architecture. Previously, we've
              worked with startups, enterprises, and everything in between.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-gray-300 font-light">
              We focus on creating scalable, performant, and user-centric solutions using cutting-edge technologies and
              best practices in software development.
            </p>
          </div>

          {/* Contact Links */}
          <div className="pt-8">
            <div className="flex flex-wrap gap-6 text-sm md:text-base font-light tracking-wider">
              <a
                href="mailto:danielkamaunganga3@gmail.com"
                className="text-gray-400 hover:text-white transition-all duration-300 uppercase relative group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Email
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-gray-400 transition-all duration-300 group-hover:w-full" />
              </a>
              <span className="text-gray-600">/</span>
              <a
                href="https://github.com/NOWAYTE"
                className="text-gray-400 hover:text-white transition-all duration-300 uppercase relative group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                GitHub
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-gray-400 transition-all duration-300 group-hover:w-full" />
              </a>
              <span className="text-gray-600">/</span>
              <a
                href="https://linkedin.com/company/zumntavon"
                className="text-gray-400 hover:text-white transition-all duration-300 uppercase relative group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                LinkedIn
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-gray-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
