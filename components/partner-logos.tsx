import Image from "next/image"

export function PartnerLogos() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-space-mono text-xl font-bold tracking-tight md:text-2xl">
              Hack4Impact National Impact
            </h2>
            <p className="text-gray-600">Hack4Impact chapters nationwide have built 100+ projects for 50+ nonprofits</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 grayscale">
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Habitat for Humanity"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Red Cross"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="World Wildlife Fund"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="UNICEF"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Feeding America"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
