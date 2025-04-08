"use client"

import { useEffect, useRef } from "react"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { NonprofitOutreach } from "@/components/nonprofit-outreach"
import { GetInvolved } from "@/components/get-involved"
import { SocialPreview } from "@/components/social-preview"

export default function Home() {
  // Create refs for sections we want to animate
  const sectionRefs = {
    hero: useRef(null),
    overview: useRef(null),
    nonprofit: useRef(null),
    getInvolved: useRef(null),
    social: useRef(null),
  }

  useEffect(() => {
    // Set up intersection observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    // Clean up
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        .animate-in {
          animation: fadeSlideIn 0.8s ease forwards;
        }
        
        .slide-up {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .slide-right {
          opacity: 0;
          transform: translateX(-30px);
        }
        
        .slide-left {
          opacity: 0;
          transform: translateX(30px);
        }
        
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translate(0);
          }
        }
      `}</style>

      <div className="flex flex-col">
        <div ref={sectionRefs.hero} className="slide-up">
          <HeroSection />
        </div>
        <div ref={sectionRefs.overview} className="slide-right">
          <OverviewSection />
        </div>
        <div ref={sectionRefs.nonprofit} className="slide-left">
          <NonprofitOutreach />
        </div>
        <div ref={sectionRefs.getInvolved} className="slide-right">
          <GetInvolved />
        </div>
        <div ref={sectionRefs.social} className="slide-up">
          <SocialPreview />
        </div>
      </div>
    </>
  )
}
