import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    id: 1,
    title: "Volunteer Management Portal",
    organization: "Habitat for Humanity",
    description: "Streamlined volunteer sign-ups and scheduling, saving 5 hours of admin work weekly.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Food Bank Analytics Dashboard",
    organization: "Local Food Bank",
    description: "Visualized donation and distribution data to improve resource allocation by 15%.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Mentorship Matching Platform",
    organization: "Youth Mentoring Initiative",
    description: "Connected 200+ mentors with at-risk youth through an intelligent matching algorithm.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function FeaturedProjects() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-space-mono text-2xl font-bold tracking-tight md:text-3xl">Featured Projects</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">Check out what Hack4Impact chapters have built</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-sm text-[#27AE60]">{project.organization}</p>
                  <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="mt-3 inline-block text-sm font-medium text-[#2C3E50] hover:underline"
                  >
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link href="/projects">
            <Button
              variant="outline"
              className="mt-4 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
