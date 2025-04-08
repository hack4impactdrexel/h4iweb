import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-space-mono text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions about Hack4Impact Drexel or our Ronald McDonald House mobile app initiative? We'd love to hear
          from you!
        </p>

        <div className="mt-12">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="What is this regarding?" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={6} required />
            </div>
            <Button type="submit" className="bg-[#2C3E50] hover:bg-[#1e2b38]">
              Send Message
            </Button>
          </form>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Email Us</h2>
            <p className="mt-2 text-gray-600">For general inquiries:</p>
            <a href="mailto:drexel@hack4impact.org" className="mt-1 block text-[#2C3E50] hover:underline">
              drexel@hack4impact.org
            </a>
            <p className="mt-4 text-gray-600">For Ronald McDonald House mobile app initiative:</p>
            <a href="mailto:rmhc-project@hack4impact.org" className="mt-1 block text-[#2C3E50] hover:underline">
              rmhc-project@hack4impact.org
            </a>
          </div>
          <div>
            <h2 className="text-xl font-bold">Follow Us</h2>
            <p className="mt-2 text-gray-600">Stay connected with us on social media:</p>
            <div className="mt-2 flex gap-4">
              <a
                href="https://facebook.com/hack4impact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C3E50] hover:text-[#27AE60]"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/hack4impact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C3E50] hover:text-[#27AE60]"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/hack4impact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C3E50] hover:text-[#27AE60]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
