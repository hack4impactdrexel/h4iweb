"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import logo from "../public/logo-cropped.svg"
import AboutCircle from "@/components/about-circle"
export default function AboutPage() {
  // Create refs for sections we want to animate
  const sectionRefs = {
    header: useRef(null),
    mission: useRef(null),
    rmhc: useRef(null),
    team: useRef(null),
    values: useRef(null),
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

      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-5">
        <div className="mx-auto max-w-4xl">
          <div ref={sectionRefs.header} className="slide-up">
            <h1 className="font-space-mono text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">About Us</h1>
          </div>

          <section ref={sectionRefs.mission} className="mt-8 md:mt-12 slide-right">
            <h2 className="text-2xl font-bold">Mission & Story</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-gray-600">
                  <span className="font-bold">Hack4Impact</span> is a nonprofit organization that connects student developers with nonprofits to build
                  technology for social good. Our mission is to empower students to use their technical skills for
                  social impact while providing nonprofits with technology solutions they might not otherwise have
                  access to.
                </p>
                <p className="mt-4 text-gray-600">
                  The Drexel University chapter was founded in 2025 as part of the national Hack4Impact network, which
                  began at the University of Pennsylvania in 2014. Since then, Hack4Impact has expanded to over 25
                  universities across the United States, with each chapter maintaining the same core values and
                  commitment to social good.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/wicsbanner.png?height=300&width=400"
                  alt="Mobile app mockup"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </section>

          {/* <section ref={sectionRefs.rmhc} className="mt-12 slide-left">
            <h2 className="text-2xl font-bold">Ronald McDonald Mobile App Initiative</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="flex items-center justify-center order-last md:order-first">
                <Image
                  src="/wicsbanner.png?height=300&width=400"
                  alt="Mobile app mockup"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600">
                  Our inaugural project is developing a mobile application for Ronald McDonald House Charities to help
                  them better serve families with children receiving medical care. This app will streamline
                  communication, resource access, and support services for families staying at Ronald McDonald Houses.
                </p>
                <p className="mt-4 text-gray-600">
                  Through this initiative, we're not only creating technology that makes a difference but also providing
                  our student members with valuable real-world experience in software development, design, and project
                  management.
                </p>
              </div>
            </div>
          </section> */}

          <section ref={sectionRefs.team} className="mt-12 slide-right">
            <h2 className="text-2xl font-bold">Team Introduction</h2>
            <p className="mt-4 text-gray-600">
              Our chapter is led by a dedicated team of Drexel student leaders who are passionate about using technology
              for social good. Each member brings unique skills and perspectives to our organization.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* <div className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src='./brandon_gorski.jpg'
                    alt="Brandon Gorski"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold">Brandon Gorski</h3>
                <p className="text-[#27AE60]">Chapter President</p>
                <p className="mt-2 text-sm text-gray-600">Computer Science '26</p>
              </div> */}
                <AboutCircle 
                  name="Brandon Gorski" 
                  image="./brandon_gorski.jpg"
                  role="Executive Advisor"
                  major="Computer Science '26">
                </AboutCircle>
                <AboutCircle 
                  name="Shams Abrar" 
                  image="./shams_abrar.jpg"
                  role="President"
                  major="Computer Science '28">
                </AboutCircle>
              {/* <div className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image src="./shams_abrar.jpg" alt="Shams Abrar" fill className="object-cover" />
                </div>
                <h3 className="mt-4 font-bold">Shams Abrar</h3>
                <p className="text-[#27AE60]">Technical Lead</p>
                <p className="mt-2 text-sm text-gray-600">Computer Science '28</p>
              </div> */}
              <AboutCircle 
                  name="Chibuike Nwume" 
                  image="./chibuike_nwume.jpg"
                  role="Vice President"
                  major="Computer Science '28">
              </AboutCircle>
              {/* <div className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src="./chibuike_nwume.jpg"
                    alt="Chibuike Nwume"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold">Chibuike Nwume</h3>
                <p className="text-[#27AE60]">Technical Lead</p>
                <p className="mt-2 text-sm text-gray-600">Computer Science '27</p>
              </div> */}
              <AboutCircle 
                  name="Ryen Ling" 
                  image="./ryen_ling.jpg"
                  role="Engineering Chair"
                  major="Computer Science '26">
              </AboutCircle>
              {/* <div className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image src="/ryen_ling.jpg" alt="Ryen Ling" fill className="object-cover" />
                </div>
                <h3 className="mt-4 font-bold">Ryen Ling</h3>
                <p className="text-[#27AE60]">Project Manager</p>
                <p className="mt-2 text-sm text-gray-600">Computer Science '27</p>
              </div> */}
              <AboutCircle 
                  name="Lola Sapaeva" 
                  image="./lola-sapaeva.jpg"
                  role="Design Director"
                  major="Computer Science '28">
              </AboutCircle>
              <AboutCircle 
                  name="Nitya Patel" 
                  image="./nitya-patel.jpg"
                  role="External Relations & Partnerships Director"
                  major="Computer Science '28">
              </AboutCircle>
              <AboutCircle 
                  name="David Fonteneau" 
                  image="./david-fonteneau.jpg"
                  role="Event Coordinator"
                  major="Computer Science '27">
              </AboutCircle>
              <AboutCircle 
                  name="Mahi Nuthanapati" 
                  image="./mahi-nuthanapati.png"
                  role="Treasurer"
                  major="Computer Science '26">
              </AboutCircle>
              <AboutCircle 
                  name="Tim Gorichanaz" 
                  image="./tim_goranchaz.jpg"
                  role="Faculty Advisor"
                  major="Teaching Professor at CCI">
              </AboutCircle>
            </div>
          </section>

          <section ref={sectionRefs.values} className="mt-12 slide-left">
            <h2 className="text-2xl font-bold">Values & Approach</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-bold">Our Core Values</h3>
                <p className="mt-4 text-gray-600">
                   Our core values guide every project and initiative. We are committed to fostering continuous learning, creating meaningful impact, embracing collaboration, and ensuring inclusion in all that we do.
                   </p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <strong>Learning:</strong> We foster a culture of continuous growth and skill development.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <strong>Impact:</strong> We prioritize projects that create meaningful social change.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <strong>Collaboration:</strong> We believe in the power of teamwork and diverse perspectives.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <strong>Inclusion:</strong> We welcome students of all backgrounds and experience levels.
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Our Approach</h3>
                <p className="mt-4 text-gray-600">
                  We work on semester-long projects with nonprofit partners. For all our projects
                  and initiatives, we follow a structured development process:
                </p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <strong>Consultation:</strong> Initial consultation with client stakeholders.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <strong>Requirements Gathering:</strong> Gathering requirements and defining project scope.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                        <strong>Design &amp; Prototyping:</strong> Designing and prototyping the user interface and experience.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <strong>Development:</strong> Iterative development with regular check-ins and feedback loops.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <strong>Testing:</strong> Conducting tests with real users and stakeholders.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <strong>Deployment:</strong> Deploying the final product and handing off documentation.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
