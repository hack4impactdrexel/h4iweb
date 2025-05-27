"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const headerRef = useRef(null)
  const router = useRouter()
  const pathname = usePathname()

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height to determine when to make header sticky
      const heroSection = document.querySelector("section") // Assuming first section is hero
      if (!heroSection) return

      const heroHeight = heroSection.offsetHeight - 100 // Trigger slightly before end of hero
      const scrollY = window.scrollY

      if (scrollY > heroHeight && !isSticky) {
        setIsSticky(true)
      } else if (scrollY <= heroHeight && isSticky) {
        setIsSticky(false)
      }
    }

    // Set loaded state after component mounts to trigger initial animations
    setIsLoaded(true)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isSticky])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Handle navigation with scroll to top
  const handleNavigation = (href) => {
    setIsMenuOpen(false)
    router.push(href)
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "instant" instead of "smooth" to avoid conflicts with page transitions
    })
  }

  return (
    <>
      <style jsx global>{`
        /* Link underline animation */
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--secondary-color, #64D2FF);
          transition: width 0.3s ease-out;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        /* Mobile menu animation */
        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.4s ease-out;
        }
        
        .mobile-menu.open {
          transform: translateX(0);
        }
        
        /* Hamburger to X animation */
        .menu-icon {
          transition: transform 0.3s ease-out;
        }
        
        .menu-icon.open {
          transform: rotate(180deg);
        }
        
        /* Sticky header animation */
        .header {
          transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
        }
        
        .header.sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          animation: slideDown 0.4s ease-out forwards;
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        /* Mobile menu item animations */
        .mobile-menu-item {
          opacity: 0;
          transform: translateX(20px);
        }
        
        .mobile-menu.open .mobile-menu-item {
          animation: slideIn 0.5s forwards ease-out;
        }
        
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Initial load animations */
        .fade-in {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .loaded .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <header
        ref={headerRef}
        className={`w-full bg-white py-4 z-50 header ${isSticky ? "sticky" : ""} ${isLoaded ? "loaded" : ""}`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("/")
            }}
            className="flex items-center gap-2 fade-in"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 border-2 border-primary transform rotate-3"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/hack4impact_earth_logo_1000_1000.png" alt="Globe Icon" width={16} height={16} className="w-8 h-8" />
              </div>
            </div>
            <span className="font-mono text-xl font-bold text-primary">hack4impact</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/about", label: "About Us" },
              { href: "/join", label: "Apply" },
              { href: "/projects", label: "Our Projects" },
              // { href: "/contact", label: "Contact Us" },
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(item.href)
                }}
                className="text-primary hover:text-secondary transition-colors nav-link fade-in"
                style={{ transitionDelay: `${(index + 1) * 100 + 100}ms` }}
              >
                {item.label}
              </a>
            ))}
            {/* <a
              href="/donate"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation("/donate")
              }}
              className="bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-primary-800 hover:scale-105 transition-all duration-200 fade-in"
              style={{ transitionDelay: "500ms" }}
            >
              Donate
            </a> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-primary z-50 menu-icon ${isMenuOpen ? "open" : ""} fade-in`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{ transitionDelay: "200ms" }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 mobile-menu ${isMenuOpen ? "open" : ""}`}
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <div className="container mx-auto px-4 py-20 h-full flex flex-col">
            <nav className="flex flex-col gap-8 items-center justify-center flex-grow">
              {[
                { href: "/about", label: "About Us" },
                { href: "/join", label: "Apply" },
                { href: "/contact", label: "Contact Us" },
                { href: "/projects", label: "Our Projects" },
                { href: "/donate", label: "Donate", isPrimary: true },
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(item.href)
                  }}
                  className={`text-2xl font-medium mobile-menu-item ${
                    item.isPrimary
                      ? "bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-800"
                      : "text-primary hover:text-secondary"
                  }`}
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
