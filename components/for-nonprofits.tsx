import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ForNonprofits() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="font-space-mono text-2xl font-bold tracking-tight md:text-3xl">For Nonprofits</h2>
            <p className="text-gray-600">
              We partner with nonprofit organizations to build custom software solutions at no cost. Our student teams
              work closely with you to understand your needs and develop technology that helps further your mission.
            </p>
            <p className="text-gray-600">
              From web applications to data visualization tools, we can help you leverage technology to increase your
              impact. Each project is developed over the course of a semester by a dedicated team of student developers,
              designers, and product managers.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/nonprofits">
                <Button className="bg-[#2C3E50] hover:bg-[#1e2b38]">Propose a Project</Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-[#2C3E50] pl-4">
              <p className="italic text-gray-600">
                "Working with Hack4Impact transformed how our organization manages volunteers. The team was
                professional, responsive, and delivered a solution that exceeded our expectations. The platform they
                built has saved us countless hours of administrative work."
              </p>
              <footer className="mt-2 text-sm font-medium">
                — Sarah Johnson, Volunteer Coordinator at Habitat for Humanity
              </footer>
            </blockquote>
            <p className="text-gray-600">
              Our project selection process is competitive, and we look for partners who are committed to collaboration
              and have well-defined technical needs that our student teams can address in a semester. We prioritize
              projects that will create meaningful social impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
