import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

// This would typically come from a CMS or API
const projects = [
  {
    id: "1",
    title: "Volunteer Management Portal",
    organization: "Habitat for Humanity",
    description: "A comprehensive platform that streamlines volunteer recruitment, scheduling, and management.",
    challenge:
      "Habitat for Humanity needed a better way to manage their growing volunteer base. Their existing process relied on spreadsheets and manual coordination, which was time-consuming and error-prone.",
    solution:
      "We built a custom web application that allows volunteers to sign up, view available opportunities, and manage their schedules. Administrators can create events, track participation, and generate reports.",
    impact:
      "The platform has saved the organization approximately 5 hours of administrative work per week and improved the volunteer experience, leading to a 15% increase in volunteer retention.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=800",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    liveUrl: "https://example.com/volunteer-portal",
    githubUrl: "https://github.com/hack4impact/volunteer-portal",
    semester: "Fall 2025",
    team: [
      { name: "Alex Johnson", role: "Project Manager" },
      { name: "Jamie Smith", role: "Technical Lead" },
      { name: "Taylor Brown", role: "Frontend Developer" },
      { name: "Jordan Lee", role: "Backend Developer" },
      { name: "Casey Wilson", role: "UI/UX Designer" },
    ],
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center px-4 py-12 md:px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <p className="mt-2 text-gray-600">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button className="mt-4">Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/projects" className="mb-6 inline-block text-[#2C3E50] hover:underline">
          ← Back to Projects
        </Link>

        <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80 lg:h-96">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="mt-8">
          <h1 className="font-space-mono text-3xl font-bold md:text-4xl">{project.title}</h1>
          <p className="mt-2 text-xl text-[#27AE60]">{project.organization}</p>
          <p className="mt-4 text-lg text-gray-600">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-[#2C3E50] px-4 py-2 text-white hover:bg-[#1e2b38]"
              >
                <ExternalLink className="h-4 w-4" />
                View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-[#2C3E50] px-4 py-2 text-[#2C3E50] hover:bg-gray-50"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">The Challenge</h2>
            <p className="mt-4 text-gray-600">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our Solution</h2>
            <p className="mt-4 text-gray-600">{project.solution}</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Impact</h2>
          <p className="mt-4 text-gray-600">{project.impact}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Screenshots</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Image
                  src={screenshot || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Project Team</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {project.team.map((member) => (
              <div key={member.name} className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-gray-50 p-6 text-center">
          <h2 className="text-xl font-bold">Interested in a similar project?</h2>
          <p className="mt-2 text-gray-600">
            We'd love to help your nonprofit organization with a custom software solution.
          </p>
          <Link href="/nonprofits">
            <Button className="mt-4 bg-[#27AE60] hover:bg-[#219653]">Work With Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
