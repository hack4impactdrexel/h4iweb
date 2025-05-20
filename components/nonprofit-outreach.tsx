import Link from "next/link"
import { Check } from "lucide-react"

export function NonprofitOutreach() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary-800 font-medium">Partner With Us</span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary mb-6">For Nonprofit Partners</h2>
          <p className="text-primary-800 text-lg">
            We partner with nonprofit organizations to build custom software solutions at no cost. Our current focus is
            on our mobile app initiative with Ronald McDonald House Charities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#1A2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 16V12" stroke="#1A2A38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8H12.01" stroke="#1A2A38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-mono text-xl font-bold text-primary mb-4">Custom Solutions</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-800">Mobile applications</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-800">Web platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-800">Data visualization tools</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="#1A2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                  stroke="#1A2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                  stroke="#1A2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                  stroke="#1A2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-mono text-xl font-bold text-primary mb-4">Student Talent</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-800">Skilled developers</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-800">UX/UI designers</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-800">Project managers</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="#1A2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#1A2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#1A2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-mono text-xl font-bold text-primary mb-4">No-Cost Development</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-800">Free software solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-800">Professional quality</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-800">Ongoing support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/nonprofits" className="btn-primary inline-block">
            Learn More About Partnering With Us
          </Link>
        </div>
      </div>
    </section>
  )
}
