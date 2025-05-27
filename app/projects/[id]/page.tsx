import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

// This would typically come from a CMS or API
const projects = [
  {
    id: "1",
    title: "Veteran Education Resource Portal",
    organization: "Veterans Rebuilding Life Organization",
    description: "Created app to help veterans with navigating information and eligibility for different VA benefits.",
    challenge:
      "VRL was overwhelmed with requests for eligibility determination and applications assistance with navigating the VA benefits and needed to automate handling these processes (especially eligibility determinations and initial applications). Veterans could theoretically do them themselves, but the VA makes everything seem very complicated and difficult to understand.",
    solution:
      "We will be developing an online self-help / education tool for these kinds of requests. The tool or tools could guide veterans through a series of questions to determine and explain their eligibility and possibly help guide them or complete for them the initial forms for some of these processes, connect them to the correct resource external to us, or help them identify everything they would need to gather and complete before one of my volunteers would be most effective in helping them.",
    impact:
      "The platform will save the organization approximately 15 hours of administrative work per week and improved the volunteer experience, leading to a 15% increase in volunteer retention.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=800",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    isActive:true,
    liveUrl: null,
    githubUrl: "https://github.com/hack4impact/volunteer-portal",
    semester: "Fall 2025",
    team: [
      { name: "TBD", role: "TBD" },
    ],
  },
  {
    id: "2",
    title: "Dream Charter Schools Website",
    organization: "Dream Schools",
    description: "Visualized donation and distribution data to improve resource allocation by 15%.",
    challenge:
      "Dream Schools needed a user-friendly and informative website, along with basic branding and social media setup.",
    solution:
      "We will be developing a website, including a homepage that clearly communicates their mission and impact,sections highlighting their services, past projects, and how to get involved, contact form for school leaders and volunteers and basic social media profiles to amplify their outreach",
    impact:
      "A strong online presence will significantly increase their visibility, help them attract new partners, and better serve public charter schools—particularly those in high-need communities who may not otherwise discover our services. It will also streamline volunteer engagement and donor interest.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=800",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    isActive:true,
    liveUrl: null,
    githubUrl: "https://github.com/hack4impact/volunteer-portal",
    semester: "Fall 2025",
    team: [
      { name: "Lola Sapaeva", role: "Lead UI/UX Designer" },
      { name: "Shams Abrar", role: "Frontend Developer" },
    ],
  },
  {
    id: "4",
    title: "Composting Site Management System",
    organization: "Delaware Community Composting Initiative",
    description: "Built a system to track and manage data for composting sites",
    challenge:
      "DCCI wanted a new system ( data management or app) to handle the existing data as well as new data from future composting sites.",
    solution:
      "we will be developing a unique data collection and management system and/or an app to collect this data.",
    impact:
      "A strong online presence will significantly increase their visibility, help them attract new partners, and better serve public charter schools—particularly those in high-need communities who may not otherwise discover our services. It will also streamline volunteer engagement and donor interest.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=800",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    isActive:true,
    liveUrl: null,
    githubUrl: "https://github.com/hack4impact/volunteer-portal",
    semester: "Fall 2025",
    team: [
      { name: "TBD", role: "TBD" },
    ],
  },
  {
    id: "5",
    title: "IFAM Mobile App",
    organization: "Indomitable Families Affected by Incarceration",
    description: "A mobile app to manage class scheduling, user profiles, and reward systems for IFAM participants.",
    challenge:
      "IFAM needs a scalable, serverless solution to manage user data, class schedules, profiles, and point-based rewards while keeping costs low.",
    solution:
      "We will be developing a React Native app using AWS Amplify and Lambda to provide secure authentication, class booking, profile management, notifications, and reward tracking, backed by Aurora/Redshift and S3.",
    impact:
      "This system streamlines class signups, improves user engagement through a points-based reward system, and ensures efficient management of user and class data while remaining cost-effective through serverless architecture.",
    technologies: [
      "React Native",
      "AWS Amplify",
      "Lambda",
      "TypeScript",
      "Redshift",
      "S3",
      "Aurora",
    ],
    image: "/placeholder.svg?height=400&width=800",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    isActive:true,
    liveUrl: null,
    githubUrl: "https://github.com/hack4impact/ifam-app", // Replace with actual repo if different
    semester: "Fall 2025",
    team: [
      { name: "Mahi Nuthanapati", role: "Project Manager" },
      // Add team as needed
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
            {project.isActive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-[#57C785] px-4 py-2 text-white hover:bg-[#1e2b38]"
              >
                <ExternalLink className="h-4 w-4" />
                Project Currently In Progress
              </a>
            )}
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
