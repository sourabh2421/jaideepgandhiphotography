"use client"

import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase"

// Register GSAP Plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase)
}

interface KineticNavigationProps {
  logoText?: string
  logoSubtext?: string
  navLinks: Array<{ href: string; label: string }>
  onNavigate?: (href: string) => void
}

export function KineticNavigation({ 
  logoText = "JAIDEEP GANDHI",
  logoSubtext = "Photography • Fine Art",
  navLinks,
  onNavigate
}: KineticNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Initial Setup & Hover Effects
  useEffect(() => {
    if (!containerRef.current) return

    // Set initial state - hide menu off-screen
    const menu = containerRef.current.querySelector(".menu-content")
    const navWrap = containerRef.current.querySelector(".nav-overlay-wrapper")
    if (menu) {
      gsap.set(menu, { xPercent: 120 })
    }
    if (navWrap) {
      gsap.set(navWrap, { display: "none" })
    }

    // Create custom easing
    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99")
        gsap.defaults({ ease: "main", duration: 0.7 })
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e)
      gsap.defaults({ ease: "power2.out", duration: 0.7 })
    }

    const ctx = gsap.context(() => {
      const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]")
      const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes")

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape")
        const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null

        if (!shape) return

        const shapeEls = shape.querySelectorAll(".shape-element")

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"))
          }
          shape.classList.add("active")

          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
          )
        }

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
          })
        }

        item.addEventListener("mouseenter", onEnter)
        item.addEventListener("mouseleave", onLeave)

        ;(item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter)
          item.removeEventListener("mouseleave", onLeave)
        }
      })
    }, containerRef)

    return () => {
      ctx.revert()
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(".menu-list-item[data-shape]")
        items.forEach((item: any) => item._cleanup && item._cleanup())
      }
    }
  }, [])

  // Menu Open/Close Animation Effect
  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper")
      const menu = containerRef.current!.querySelector(".menu-content")
      const overlay = containerRef.current!.querySelector(".overlay")
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer")
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link")
      const menuLinkTexts = containerRef.current!.querySelectorAll(".nav-link-text")
      const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]")

      const tl = gsap.timeline()

      if (isMenuOpen) {
        // OPEN
        if (navWrap) navWrap.setAttribute("data-nav", "open")

        tl.set(navWrap, { display: "block" })
          .set(menu, { xPercent: 0, display: "block", visibility: "visible" }, "<")
          .set(menuLinks, { opacity: 1, visibility: "visible" }, "<")
          .set(menuLinkTexts, { opacity: 1, visibility: "visible", color: "#1a1918", display: "block" }, "<")
        
        tl.fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 })
          .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
          .fromTo(menu, { xPercent: 120 }, { xPercent: 0, duration: 0.7 }, "<")
          .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35")

        if (fadeTargets.length) {
          tl.fromTo(
            fadeTargets,
            { autoAlpha: 0, yPercent: 50 },
            { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" },
            "<+=0.2"
          )
        }
      } else {
        // CLOSE
        if (navWrap) navWrap.setAttribute("data-nav", "closed")
        tl.to(overlay, { autoAlpha: 0 })
          .to(menu, { xPercent: 120, duration: 0.7 }, "<")
        
        tl.set(navWrap, { display: "none" })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [isMenuOpen])

  // keydown Escape handling
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const handleLinkClick = (href: string) => {
    closeMenu()
    if (onNavigate) {
      onNavigate(href)
    }
  }

  return (
    <div ref={containerRef}>
      <div className="site-header-wrapper">
        <header className="header">
          <div className="container is--full">
            <nav className="nav-row">
              <a href="/" aria-label="home" className="nav-logo-row">
                <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.15em] text-charcoal-900 hover:text-gold-700 transition-colors">
                  {logoText}
                </span>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-gold-700 font-medium">
                  {logoSubtext}
                </span>
              </a>
              
              {/* Desktop Navigation Links - visible on large screens */}
              <nav className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-charcoal-700">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-gold-700 transition-colors">
                    {link.label}
                  </a>
                ))}
              </nav>
              
              <div className="nav-row__right">
                {/* Hamburger menu button - only visible on mobile/tablet */}
                <button 
                  role="button" 
                  className="lg:hidden flex items-center gap-2 text-charcoal-900 hover:text-gold-700 transition-colors" 
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider">Menu</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <section className="fullscreen-menu-container">
        <div data-nav="closed" className="nav-overlay-wrapper">
          <div className="overlay" onClick={closeMenu}></div>
          <nav className="menu-content">
            <div className="menu-bg">
              <div className="backdrop-layer first"></div>
              <div className="backdrop-layer second"></div>
              <div className="backdrop-layer"></div>

              {/* Abstract shapes container */}
              <div className="ambient-background-shapes">
                {/* Shape 1: Floating circles */}
                <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(197,168,128,0.15)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(197,168,128,0.12)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(197,168,128,0.1)" />
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(197,168,128,0.15)" />
                </svg>

                {/* Shape 2: Wave pattern */}
                <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element" d="M0 200 Q100 100, 200 200 T 400 200" stroke="rgba(197,168,128,0.2)" strokeWidth="60" fill="none" />
                  <path className="shape-element" d="M0 280 Q100 180, 200 280 T 400 280" stroke="rgba(197,168,128,0.15)" strokeWidth="40" fill="none" />
                </svg>

                {/* Shape 3: Grid dots */}
                <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="100" cy="150" r="12" fill="rgba(197,168,128,0.25)" />
                  <circle className="shape-element" cx="200" cy="150" r="12" fill="rgba(197,168,128,0.25)" />
                  <circle className="shape-element" cx="300" cy="150" r="12" fill="rgba(197,168,128,0.25)" />
                  <circle className="shape-element" cx="50" cy="250" r="10" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="150" cy="250" r="10" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="250" cy="250" r="10" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="350" cy="250" r="10" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="100" cy="350" r="6" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="200" cy="350" r="6" fill="rgba(197,168,128,0.3)" />
                  <circle className="shape-element" cx="300" cy="350" r="6" fill="rgba(197,168,128,0.3)" />
                </svg>

                {/* Shape 4: Organic blobs */}
                <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
                    fill="rgba(197,168,128,0.12)"
                  />
                  <path
                    className="shape-element"
                    d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
                    fill="rgba(197,168,128,0.1)"
                  />
                </svg>

                {/* Shape 5: Diagonal lines */}
                <svg className="bg-shape bg-shape-5" viewBox="0 0 400 400" fill="none">
                  <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="rgba(197,168,128,0.15)" strokeWidth="30" />
                  <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="rgba(197,168,128,0.12)" strokeWidth="25" />
                  <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="rgba(197,168,128,0.1)" strokeWidth="20" />
                </svg>
              </div>
            </div>

            <div className="menu-content-wrapper">
              {/* Close button inside menu */}
              <button 
                onClick={closeMenu}
                className="absolute top-6 right-6 z-[2000] flex items-center gap-3 text-charcoal-900 hover:text-gold-700 transition-colors group"
                aria-label="Close menu"
              >
                <span className="text-sm font-semibold uppercase tracking-wider">Close</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:rotate-90 transition-transform duration-300"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <ul className="menu-list">
                {navLinks.map((link, index) => (
                  <li key={index} className="menu-list-item" data-shape={(index % 5) + 1}>
                    <a href={link.href} className="nav-link w-inline-block" onClick={() => handleLinkClick(link.href)}>
                      <p className="nav-link-text">{link.label}</p>
                      <div className="nav-link-hover-bg"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  )
}
