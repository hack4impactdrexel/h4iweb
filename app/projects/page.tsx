import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  // VACS, VRL , IFAM and RMHC
  {
    id: 1,
    title: "Volunteer Management Portal",
    organization: "Habitat for Humanity",
    description: "Streamlined volunteer sign-ups and scheduling, saving 5 hours of admin work weekly.",
    image: "/placeholder.svg?height=200&width=300",
    semester: "Fall 2025",
  },
  {
    id: 2,
    title: "Food Bank Analytics Dashboard",
    organization: "Local Food Bank",
    description: "Visualized donation and distribution data to improve resource allocation by 15%.",
    image: "/placeholder.svg?height=200&width=300",
    semester: "Fall 2025",
  },
  {
    id: 3,
    title: "Mentorship Matching Platform",
    organization: "Youth Mentoring Initiative",
    description: "Connected 200+ mentors with at-risk youth through an intelligent matching algorithm.",
    image: "/placeholder.svg?height=200&width=300",
    semester: "Spring 2026",
  },
  {
    id: 4,
    title: "Donation Tracking System",
    organization: "Community Foundation",
    description: "Built a system to track and acknowledge donations, increasing donor retention by 20%.",
    image: "/placeholder.svg?height=200&width=300",
    semester: "Spring 2026",
  },
]

// Group projects by semester
const projectsBySemester = projects.reduce(
  (acc, project) => {
    if (!acc[project.semester]) {
      acc[project.semester] = []
    }
    acc[project.semester].push(project)
    return acc
  },
  {} as Record<string, typeof projects>,
)

// Sort semesters chronologically (newest first)
const sortedSemesters = Object.keys(projectsBySemester).sort().reverse()

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-space-mono text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Our Projects</h1>
        <p className="mt-4 max-w-3xl text-gray-600">
          Explore the impactful projects our chapter has worked on. Each project represents a collaboration between our
          student teams and nonprofit partners to create technology solutions for social good.
        </p>

        <div className="mt-12">
          {sortedSemesters.map((semester) => (
            <div key={semester} className="mb-12">
              <h2 className="mb-6 inline-block border-b-2 border-[#27AE60] pb-1 text-2xl font-bold">{semester}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {projectsBySemester[semester].map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-[#27AE60]">{project.organization}</p>
                      <p className="mt-2 text-gray-600">{project.description}</p>
                      <Link
                        href={`/projects/${project.id}`}
                        className="mt-4 inline-block text-[#2C3E50] hover:underline"
                      >
                        View Case Study →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-gray-50 p-6 text-center">
          <h2 className="text-xl font-bold">Have a Project Idea?</h2>
          <p className="mt-2 text-gray-600">
            We're always looking for new nonprofit partners with impactful project ideas.
          </p>
          <Link href="/nonprofits" className="mt-4 inline-block text-[#2C3E50] hover:underline">
            Learn how to work with us →
          </Link>
        </div>
      </div>
    </div>
  )
}
