import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Category Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The category you're looking for doesn't exist. Please check the URL or browse our available categories.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 