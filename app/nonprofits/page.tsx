import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function NonprofitsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-space-mono text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          For Nonprofit Partners
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-600">
          We build custom software solutions for nonprofits at no cost, helping you leverage technology to increase your
          impact.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why Partner With Us?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-gray-600">
                Hack4Impact Drexel connects your nonprofit with talented student developers, designers, and product
                managers who are passionate about using their skills for social good. By partnering with us, you'll
                receive:
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <span>A custom software solution designed specifically for your organization's needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <span>Professional-quality development at no cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <span>A dedicated team working with you throughout the semester</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <span>Technical documentation and support for maintaining your application</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <span>Access to the broader Hack4Impact network and resources</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/website-optimization.jpg?height=300&width=400"
                alt="Nonprofit collaboration"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <div className="mt-6">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                <div>
                  <h3 className="font-bold">Initial Consultation</h3>
                  <p className="mt-2 text-gray-600">
                    We meet with your organization to understand your mission, challenges, and how technology might help
                    address your needs.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="font-bold">Project Scoping</h3>
                  <p className="mt-2 text-gray-600">
                    Together, we define the scope of the project, identifying key features and requirements that will
                    make the most impact.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                <div>
                  <h3 className="font-bold">Design and Development</h3>
                  <p className="mt-2 text-gray-600">
                    Our student team creates designs, prototypes, and builds the application, with regular check-ins to
                    gather your feedback.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                <div>
                  <h3 className="font-bold">Testing and Refinement</h3>
                  <p className="mt-2 text-gray-600">
                    We test the application with real users and make refinements based on their feedback to ensure it
                    meets your needs.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#27AE60] mt-0.5 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                <div>
                  <h3 className="font-bold">Delivery and Support</h3>
                  <p className="mt-2 text-gray-600">
                    We deliver the completed application, provide documentation, and offer support to help you integrate
                    it into your operations.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Project Criteria</h2>
          <p className="mt-4 text-gray-600">
            While we're currently focused on our Ronald McDonald House mobile app initiative, we're interested in
            connecting with other nonprofits for future projects. We look for proposals that:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Good Fit</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Mobile applications or responsive websites</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Data visualization dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Volunteer or donor management systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Process automation tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Projects achievable within 1-2 semesters</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Not a Good Fit</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Hardware or IoT projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Projects requiring extensive AI/ML</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Projects with significant legal/compliance requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Projects too large for a 1-2 semester timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Projects requiring 24/7 support or maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>How much does it cost to work with Hack4Impact?</AccordionTrigger>
              <AccordionContent>
                Our services are provided at no cost to nonprofit organizations. We are a student volunteer organization
                committed to using our skills for social good. However, if your project requires ongoing hosting or
                maintenance costs after we deliver it, your organization would be responsible for those expenses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the time commitment for nonprofit partners?</AccordionTrigger>
              <AccordionContent>
                We ask that nonprofit partners commit to regular check-in meetings (typically bi-weekly) and be
                responsive to questions throughout the development process. The total time commitment is usually 1-2
                hours per week for the duration of the project.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Who owns the intellectual property of the project?</AccordionTrigger>
              <AccordionContent>
                Your organization will own the intellectual property of the custom solution we build for you. We
                typically develop our projects as open-source software, which means the code is publicly available, but
                you retain ownership and full rights to use and modify it.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>When can we propose a project?</AccordionTrigger>
              <AccordionContent>
                While we're currently focused on our Ronald McDonald House mobile app initiative, we're interested in
                connecting with nonprofits for future projects. You can reach out to us at any time to start a
                conversation about potential collaboration, and we'll keep you informed about our project timeline and
                availability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What happens after the project is completed?</AccordionTrigger>
              <AccordionContent>
                We provide documentation and training to help your team use and maintain the application. While we can't
                guarantee ongoing support after the semester ends, we strive to build sustainable solutions and can
                sometimes arrange for limited follow-up support if needed. We also provide all source code and
                documentation to ensure your team can maintain and extend the application in the future.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-12 rounded-lg bg-[#2C3E50] p-8 text-white">
          <h2 className="text-2xl font-bold">Interested in Partnering With Us?</h2>
          <p className="mt-4">
            While we're currently focused on our Ronald McDonald House mobile app initiative, we're excited to connect
            with other nonprofits for future collaborations. Reach out to start a conversation!
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScfSk7dXiYAWWvcIPdN0DW1ZRCInnJb11Mct3pWh2L1NgoTFw/viewform?usp=header" passHref>
            <Button className="bg-[#27AE60] hover:bg-[#219653]">Contact Us</Button>
            </Link>
            {/* <Button variant="outline" className="border-white bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50]">
              Learn More
            </Button> */}
          </div>
        </section>
      </div>
    </div>
  )
}
