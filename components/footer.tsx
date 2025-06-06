import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo-copy.svg"
import { Facebook, Instagram, Linkedin, Github, Twitter } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-solid-svg-icons'
import { FaDiscord } from "react-icons/fa6";
import { RxDiscordLogo } from "react-icons/rx";
export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              {/* <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 border-2 border-white transform rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                    <Image src="/globe-icon.svg" alt="Globe Icon" width={16} height={16} className="w-4 h-4" />
                  </div>
                </div>
              </div> */}
              <div className="flex flex-col">
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
              </div>
            </Link>
            <p className="text-sm text-gray-300">Empowering Students. Transforming Social Impact.</p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/hack4impactdrexel/"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/hack4impactdrexel/"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              {/* <Link
                href="https://linkedin.com/company/hack4impact"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link> */}
              <Link
                href="https://github.com/hack4impactdrexel"
                aria-label="GitHub"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://discord.gg/RUWayNEaTG"
                aria-label="Discord"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {/* <FaDiscord></FaDiscord> */}
                <RxDiscordLogo />
                {/* <FontAwesomeIcon icon="fa-brands fa-discord" /> */}
                {/* <p>hello</p> */}
                {/* <Github className="h-5 w-5" /> */}
              </Link>
              {/* <Link
                href="https://twitter.com/hack4impact"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-white transition-colors">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-lg font-bold mb-6">Get Involved</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/join" className="text-gray-300 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/nonprofits" className="text-gray-300 hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="https://hack4impact.org" className="text-gray-300 hover:text-white transition-colors">
                  National Organization
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-lg font-bold mb-6">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">Have questions? Reach out to us at:</p>
            <a href="mailto:drexel@hack4impact.org" className="text-secondary hover:underline">
              drexel@hack4impact.org
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Hack4Impact Drexel University Chapter. All rights reserved.</p>
          <p className="mt-2">
            Part of the{" "}
            <a
              href="https://hack4impact.org"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hack4Impact
            </a>{" "}
            network.
          </p>
        </div>
      </div>
    </footer>
  )
}
