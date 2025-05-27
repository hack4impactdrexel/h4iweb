"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
export default function JoinPage() {
  // Create refs for sections we want to animate
  const sectionRefs = {
    hero: useRef(null),
    whyJoin: useRef(null),
    roles: useRef(null),
    application: useRef(null),
    faq: useRef(null),
    cta: useRef(null),
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
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
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

      <div className="mx-auto max-w-4xl">
        <div ref={sectionRefs.hero} className="slide-up">
          <h1 className="font-space-mono text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Join Hack4Impact Drexel
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Become part of a community of Drexel students using technology to create social impact. Join our inaugural
            Ronald McDonald House mobile app initiative!
          </p>
        </div>

        <section ref={sectionRefs.whyJoin} className="mt-12 slide-right">
          <h2 className="text-2xl font-bold">Why Join?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-gray-600">
                Hack4Impact offers a unique opportunity to gain real-world experience while making a positive impact on
                society. As a member, you'll:
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>Work on our Ronald McDonald House mobile app initiative</div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>Develop technical and professional skills in a collaborative environment</div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>Build a portfolio of impactful work to showcase to future employers</div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>Connect with a community of like-minded students passionate about tech for good</div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>Network with industry professionals and Hack4Impact alumni</div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/stock.jpg?height=700"
                alt="Drexel students collaborating"
                width={400}
                height={300}
                className="rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
        </section>

        <section ref={sectionRefs.roles} className="mt-12 slide-left">
          <h2 className="text-2xl font-bold">Roles Available</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold">Mobile Developers</h3>
              <p className="mt-2 text-gray-600">
                Build cross-platform mobile applications using React Native for our Ronald McDonald House initiative.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Skills:</strong> JavaScript/TypeScript, React Native, or willingness to learn.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold">UI/UX Designers</h3>
              <p className="mt-2 text-gray-600">
                Create intuitive, accessible user experiences for mobile applications focused on families in need.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Skills:</strong> User research, wireframing, prototyping, visual design, or willingness to
                learn.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold">Product Managers</h3>
              <p className="mt-2 text-gray-600">
                Lead project teams, coordinate with Ronald McDonald House staff, and ensure successful project delivery.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Skills:</strong> Communication, organization, basic technical understanding, or willingness to
                learn.
              </p>
            </div>
          </div>
        </section>

        <section ref={sectionRefs.application} className="mt-12 slide-right">
          <h2 className="text-2xl font-bold">Application Process</h2>
          <div className="mt-6">
            <p className="text-gray-600">
              We recruit new members at the beginning of each semester (Fall, Winter, and Spring). Our application
              process consists of the following steps:
            </p>
            <ol className="mt-4 space-y-4 text-gray-600">
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <strong>Online Application:</strong> Submit your application through our form, including your
                  background, relevant experience, and why you're interested in joining.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <strong>Interview:</strong> Selected applicants will be invited for an interview with our team to
                  discuss their interests and experience.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <strong>Technical Assessment (for developers):</strong> A simple take-home task to demonstrate basic
                  coding skills.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <strong>Design Challenge (for designers):</strong> A small design exercise to showcase your approach
                  and skills.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">5</span>
                </div>
                <div>
                  <strong>Final Decisions:</strong> We'll notify all applicants of our decisions within two weeks after
                  interviews.
                </div>
              </li>
            </ol>
            <div className="mt-8">
              <h3 className="text-xl font-bold">Current Application Timeline</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <strong>Applications Open:</strong> Late Spring Quarter
                  </div>
                </li>
                {/* <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <strong>Applications Close:</strong> N/A
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <strong>Interviews:</strong> N/A
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <strong>Final Decisions:</strong> N/A
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="mt-8 text-center">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScqnCcmJobHURYdwudEXF8QCZ8igOYm6L4_gYnyOrwow9Hemw/viewform?usp=header" passHref>
              <Button className="bg-[#27AE60] hover:bg-[#219653]">Fill out Interest form today</Button>
            </Link>
            {/* <p className="mt-2 text-sm text-gray-600">Applications for Fall 2025 are now open!</p> */}
            </div>
          </div>
        </section>

        <section ref={sectionRefs.faq} className="mt-12 slide-left">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do I need to be a Computer Science major?</AccordionTrigger>
              <AccordionContent>
                No, we welcome students from all majors! While many of our members are studying Computer Science or
                related fields, we value diverse perspectives and backgrounds. As long as you have the necessary skills
                (or willingness to learn) for your role, your major doesn't matter.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the time commitment?</AccordionTrigger>
              <AccordionContent>
                Members typically commit 5-10 hours per week during the semester. This includes team meetings, work
                sessions, and independent work on your assigned tasks. We understand that academics come first, and we
                work to accommodate busy schedules and Drexel's co-op program.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do I need prior experience with mobile app development?</AccordionTrigger>
              <AccordionContent>
                Some experience is helpful but not required for all roles. For developers, basic programming knowledge
                is expected, but we provide mentorship and support to help you learn React Native and mobile
                development. For designers and product managers, we look for relevant skills and a willingness to learn.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How will the Ronald McDonald House project work?</AccordionTrigger>
              <AccordionContent>
                The Ronald McDonald House mobile app is our inaugural project. We'll work closely with their staff to
                understand the needs of families staying at their facilities. The app will be developed over the course
                of 2-3 semesters, with different phases focusing on core features, testing, and refinement. All members
                will contribute to this project in their respective roles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I join if I'm a graduate student?</AccordionTrigger>
              <AccordionContent>
                Yes! We welcome both undergraduate and graduate students from Drexel University. Graduate students often
                bring valuable experience and perspectives to our teams.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section ref={sectionRefs.cta} className="mt-12 rounded-lg bg-[#2C3E50] p-8 text-white slide-up">
          <h2 className="text-2xl font-bold">Ready to Make an Impact?</h2>
          <p className="mt-4">
            Join our community of Drexel student technologists building software for social good, starting with our
            Ronald McDonald House mobile app initiative.
          </p>
          <div className="mt-6">
            <Link href="https://discord.gg/RUWayNEaTG" passHref>
              <Button className="bg-[#27AE60] hover:bg-[#219653]">Join our discord</Button>
            </Link>
            {/* <p className="mt-2 text-sm text-white/80"></p> */}
          </div>
        </section>
      </div>
    </div>
  )
}
