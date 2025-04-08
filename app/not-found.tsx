import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 md:px-6">
      <h1 className="font-space-mono text-6xl font-bold text-[#2C3E50]">404</h1>
      <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
      <p className="mt-2 text-center text-gray-600">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button className="mt-6 bg-[#27AE60] hover:bg-[#219653]">Return to Home</Button>
      </Link>
    </div>
  )
}
