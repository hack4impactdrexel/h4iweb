import Link from "next/link"
import { Code, Palette, LineChart } from "lucide-react"

export function GetInvolved() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary-800 font-medium">Join Our Team</span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary mb-6">Get Involved</h2>
          <p className="text-primary-800 text-lg">
            Join our community of passionate Drexel students using their skills to make a difference. Be part of our
            inaugural Ronald McDonald mobile app initiative!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-mono text-xl font-bold text-primary mb-4">Developers</h3>
            <p className="text-primary-800 mb-6">
              Build mobile and web applications using modern technologies. Both frontend and backend developers are
              welcome.
            </p>
            <p className="text-sm text-primary-700 font-medium">
              <strong>Skills:</strong> React Native, JavaScript/TypeScript, or willingness to learn.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-mono text-xl font-bold text-primary mb-4">Designers</h3>
            <p className="text-primary-800 mb-6">
              Create intuitive, accessible user experiences for mobile applications and websites.
            </p>
            <p className="text-sm text-primary-700 font-medium">
              <strong>Skills:</strong> UI/UX design, wireframing, prototyping, or willingness to learn.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-mono text-xl font-bold text-primary mb-4">Project Managers</h3>
            <p className="text-primary-800 mb-6">
              Lead project teams, coordinate with nonprofit partners, and ensure successful project delivery.
            </p>
            <p className="text-sm text-primary-700 font-medium">
              <strong>Skills:</strong> Communication, organization, basic technical understanding, or willingness to
              learn.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/join" className="btn-secondary inline-block">
            Apply to Join Us
          </Link>
        </div>
      </div>
    </section>
  )
}
