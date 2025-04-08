import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Chapter President",
    major: "Computer Science '25",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Alex is passionate about using technology to create social impact. They have experience in full-stack development and project management.",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    email: "alex@hack4impact.org",
  },
  {
    name: "Taylor Smith",
    role: "Technical Lead",
    major: "Computer Engineering '26",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Taylor specializes in backend development and system architecture. They're committed to building robust, scalable solutions for nonprofits.",
    linkedin: "https://linkedin.com/in/taylorsmith",
    github: "https://github.com/taylorsmith",
    email: "taylor@hack4impact.org",
  },
  {
    name: "Jordan Lee",
    role: "Design Lead",
    major: "Digital Media Design '25",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jordan brings a strong background in UI/UX design and user research. They're dedicated to creating accessible, intuitive interfaces.",
    linkedin: "https://linkedin.com/in/jordanlee",
    github: "https://github.com/jordanlee",
    email: "jordan@hack4impact.org",
  },
  {
    name: "Morgan Chen",
    role: "External Relations",
    major: "Business Administration '24",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Morgan handles partnerships with nonprofits and campus organizations. They're skilled in communication and relationship building.",
    linkedin: "https://linkedin.com/in/morganche",
    github: "https://github.com/morganche",
    email: "morgan@hack4impact.org",
  },
  {
    name: "Casey Wilson",
    role: "Project Manager",
    major: "Information Science '25",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Casey coordinates project teams and ensures successful delivery. They have experience in agile methodologies and team leadership.",
    linkedin: "https://linkedin.com/in/caseywilson",
    github: "https://github.com/caseywilson",
    email: "casey@hack4impact.org",
  },
  {
    name: "Jamie Rivera",
    role: "Education Lead",
    major: "Computer Science '26",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jamie develops training materials and workshops for members. They're passionate about making technical skills accessible to everyone.",
    linkedin: "https://linkedin.com/in/jamierivera",
    github: "https://github.com/jamierivera",
    email: "jamie@hack4impact.org",
  },
]

export default function TeamPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-space-mono text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Our Team</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-600">
          Meet the dedicated students behind Hack4Impact University Chapter. Our team brings together diverse skills and
          perspectives, united by a passion for using technology to create social impact.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Leadership Team</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="group rounded-lg border p-6 transition-all hover:shadow-md">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-[#27AE60]">{member.role}</p>
                  <p className="mt-1 text-sm text-gray-600">{member.major}</p>
                  <p className="mt-4 text-sm text-gray-600">{member.bio}</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#2C3E50]"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#2C3E50]"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-[#2C3E50]"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Faculty Advisor</h2>
          <div className="mt-8 flex flex-col items-center md:flex-row md:items-start md:gap-8">
            <div className="relative h-48 w-48 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=300&width=300" alt="Professor Smith" fill className="object-cover" />
            </div>
            <div className="mt-6 text-center md:mt-0 md:text-left">
              <h3 className="text-xl font-bold">Professor Jane Smith, Ph.D.</h3>
              <p className="text-[#27AE60]">Department of Computer Science</p>
              <p className="mt-4 text-gray-600">
                Professor Smith specializes in human-computer interaction and has been supporting Hack4Impact since our
                founding. Her guidance and expertise have been invaluable in helping us develop effective solutions for
                our nonprofit partners.
              </p>
              <p className="mt-4 text-gray-600">
                "I'm continually impressed by the dedication and talent of our Hack4Impact students. They're not just
                building software; they're creating meaningful change in our community."
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Join Our Team</h2>
          <p className="mt-4 text-gray-600">
            Interested in becoming part of Hack4Impact? We recruit new members at the beginning of each semester.
          </p>
          <div className="mt-6">
            <Link href="/join" className="inline-block rounded-md bg-[#27AE60] px-6 py-3 text-white hover:bg-[#219653]">
              Learn How to Join
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
