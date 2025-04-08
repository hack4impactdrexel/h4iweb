import Image from "next/image"

export function OverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary mb-6">About Hack4Impact Drexel</h2>
          <p className="text-primary-800 text-lg">
            We are a student-led organization that connects Drexel University students with nonprofits to create lasting
            social change through technology. Our chapter is currently going through a rebuilding phase, and we're
            excited to be working on a mobile application for Ronald McDonald House Charities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-accent/30 rounded-tl-2xl -z-10"></div>
              <Image
                src="https://www.rmhcphilly.org/wp-content/uploads/2021/05/RMHC-Philly-logo-horizontal-305px-X-120-px.jpg"
                alt="Ronald McDonald House Charities Philadelphia logo"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full object-contain bg-white p-4"
              />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-secondary/30 rounded-br-2xl -z-10"></div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block bg-accent/20 px-4 py-2 rounded-full">
              <span className="text-primary-800 font-medium">Our Inaugural Project</span>
            </div>
            <h3 className="font-mono text-2xl md:text-3xl font-bold text-primary">
              Ronald McDonald Mobile App Initiative
            </h3>
            <p className="text-primary-800">
              Our flagship project is developing a mobile application for Ronald McDonald House Charities to help them
              better serve families with children receiving medical care. This app will streamline communication,
              resource access, and support services for families staying at Ronald McDonald Houses.
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
