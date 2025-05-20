import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo-cropped.svg"
import { Button } from "@/components/ui/button"
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="space-y-2">
              <p className="text-primary-800 font-medium uppercase tracking-wider">WE ARE</p>
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Developers
                <br />
                for social change
              </h1>
            </div>
            <p className="text-primary-800 text-lg md:text-xl">
              Building powerful nonprofit software as a <span className="font-bold">tool for social good</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Link href="/nonprofits" className="btn-primary inline-block text-center">
                Partner With Us
              </Link>
              <Link href="/join" className="btn-outline inline-block text-center" passHref>
                Apply Now
              </Link> */}
            </div>
          </div>

          <div className="relative">
            {/* <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary"></div> */}
            <div>
              <Image
                src={logo}
                alt="Hack4Impact logo"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            {/* <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary"></div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
