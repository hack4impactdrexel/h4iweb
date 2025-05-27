import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  // VACS, VRL , IFAM and RMHC
  {
    id: 1,
    title: "Veteran Education Resource Portal",
    organization: "Veterans Rebuilding Life Organization",
    description: "Created app to help veterans with navigating information and eligibility for different VA benefits.",
    image: "/Veteran_Rebuilding_Life_NGO-1-scaled.jpg?height=200&width=300",
    semester: "Spring 2025",
    year: 2025,
  },
  {
    id: 2,
    title: "Dream Charter Schools Website",
    organization: "Vision Academy Charter Schools",
    description: "Developed a user-friendly and informative website, along with basic branding and social media setup.",
    image: "/cropped-header-logo.webp?height=200&width=300",
    semester: "Spring 2025",
    year: 2025,
  },
  // {
  //   id: 3,
  //   title: "RMHC Mobile App",
  //   organization: "Ronald Mcdonald House Charities",
  //   description: "Created mobile app for users to interact with RMHC events and help with dynamic scheduling.",
  //   image: "/RMHC-Philly-logo-horizontal-305px-X-120-px.jpg?height=200&width=300",
  //   semester: "Summer 2024",
  //   year: 2024,
  // },
  {
    id: 4,
    title: "Composting Site Management System",
    organization: "Delaware Community Composting Initiative",
    description: "Built a system to track and manage data for composting sites",
    image: "/dcci.webp?height=200&width=300",
    semester: "Summer 2025",
    year: 2025,
  },
  {
    id: 5,
    title: "IFAM Mobile App",
    organization: "Indomitable Families Affected by Incarceration",
    description: "Built a mobile app that enables users to securely schedule and join classes, track rewards, manage profiles, and receive notifications through a scalable serverless architecture.",
    image: "/ifam.jpg?height=200&width=300",
    semester: "Summer 2025",
    year: 2025,
  },
  
]

// Group projects by semester
const projectsBySemester = projects.reduce(
  (acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = []
    }
    acc[project.year].push(project)
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
          {sortedSemesters.map((year) => (
            <div key={year} className="mb-12">
              <h2 className="mb-6 inline-block border-b-2 border-[#27AE60] pb-1 text-2xl font-bold">{year}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {projectsBySemester[year].map((project) => (
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
                      <h2 className="text-xl font-bold">{project.semester}</h2>
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
