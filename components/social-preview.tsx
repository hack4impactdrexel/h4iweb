import Link from "next/link"
import { Facebook, Instagram, Linkedin, Github, Twitter } from "lucide-react"

export function SocialPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="font-mono text-2xl font-bold text-primary">Connect With Us</h2>
          <p className="text-primary-800 max-w-2xl">
            Follow us on social media to stay updated on our Ronald McDonald mobile app initiative and other chapter
            activities
          </p>
          <div className="flex gap-6">
            <Link
              href="https://facebook.com/hack4impact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-secondary/10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-primary" />
            </Link>
            <Link
              href="https://instagram.com/hack4impact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-secondary/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/hack4impact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-secondary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </Link>
            <Link
              href="https://github.com/hack4impact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-secondary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-primary" />
            </Link>
            <Link
              href="https://twitter.com/hack4impact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-secondary/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
