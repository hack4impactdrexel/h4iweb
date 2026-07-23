import Image from "next/image"

export function OverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary mb-6">About Hack4Impact Drexel</h2>
          <p className="text-primary-800 text-lg">
            We are a student-led organization that connects Drexel University students with nonprofits to create lasting
            social change through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-accent/30 rounded-tl-2xl -z-10"></div>
              <Image
                src="/ifam.jpg?height=200&width=300"
                alt="Indomitable Families Affected By Incarceration logo"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full object-contain bg-white p-4"
              />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-secondary/30 rounded-br-2xl -z-10"></div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block bg-accent/20 px-4 py-2 rounded-full">
              <span className="text-primary-800 font-medium">Project Spotlight</span>
            </div>
            <h3 className="font-mono text-2xl md:text-3xl font-bold text-primary">
              IFAM Engagement Mobile App
            </h3>
            <p className="text-primary-800">
              Our spotlight project is a mobile application we developed for Indomitable Families Affected By Incarceration to help them
              better serve families affected by incarceration. This app streamlines class signup,
              improves user engagement through a points-based reward system, and ensures efficient management of user and class data while remaining cost effective through serverless architecture.
            </p>
            <p className="text-primary-800">
              Through this initiative, we're not only creating technology that makes a difference but also providing our
              student members with valuable real-world experience in software development, design, and project
              management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
