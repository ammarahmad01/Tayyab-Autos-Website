import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { productCategories, whatsappNumber } from "@/lib/data"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    category: string
  }
}

function WhatsAppButton({ text, productName }: { text: string; productName: string }) {
  const message = encodeURIComponent(`${text} - ${productName}`)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-4 h-4 mr-2" />
        Order on WhatsApp
      </a>
    </Button>
  )
}

function VideoCard({ videoName, videoPath }: { videoName: string; videoPath: string }) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-red-600/20">
      <CardContent className="p-4">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <video
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            controls
            preload="metadata"
          >
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-red-600/80 rounded-full p-3">
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-100 group-hover:text-red-400 transition-colors">
          {videoName}
        </h3>
      </CardContent>
    </Card>
  )
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Decode the category name from URL
  const categoryName = decodeURIComponent(params.category)
  const category = productCategories[categoryName]

  if (!category) {
    notFound()
  }

  // Video data for Indicators category
  const indicatorVideos = [
    { name: "Indicator Demo 1", path: "/videos/indicators/IL (1).mp4" },
    { name: "Indicator Demo 2", path: "/videos/indicators/IL (2).mp4" },
    { name: "Indicator Demo 3", path: "/videos/indicators/IL (3).mp4" },
    { name: "Indicator Demo 4", path: "/videos/indicators/IL (4).mp4" },
    { name: "Indicator Demo 5", path: "/videos/indicators/IL (5).mp4" },
    { name: "Indicator Demo 6", path: "/videos/indicators/IL (6).mp4" },
    { name: "Indicator Demo 7", path: "/videos/indicators/IL (7).mp4" },
    { name: "Indicator Demo 8", path: "/videos/indicators/IL (8).mp4" },
    { name: "Indicator Demo 9", path: "/videos/indicators/IL (9).mp4" },
    { name: "Indicator Demo 10", path: "/videos/indicators/IL (10).mp4" },
    { name: "Indicator Demo 11", path: "/videos/indicators/IL (11).mp4" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-red-600/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TA</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Tayyab Autos
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link href="/#products" className="text-gray-300 hover:text-red-500 transition-colors">
                Products
              </Link>
              <Link href="/#contact" className="text-gray-300 hover:text-red-500 transition-colors">
                Contact
              </Link>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/" className="mr-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-red-500">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              {category.name}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {category.subProducts.map((product, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-red-600/20"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-center text-gray-100 group-hover:text-red-400 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 text-center leading-relaxed">
                    {product.description}
                  </p>

                  <WhatsAppButton text={product.whatsappText} productName={product.name} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section - Only for Indicators category */}
      {categoryName === "Indicators" && (
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Live Demo
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Watch our side indicators in action! See how they light up and enhance your bike's appearance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {indicatorVideos.map((video, index) => (
                <VideoCard
                  key={index}
                  videoName={video.name}
                  videoPath={video.path}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 bg-black/50">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-red-500">Need Custom Solutions?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We specialize in custom bike decoration parts. Contact us for personalized solutions for your Honda CG 125 or CD 70.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I need custom ${category.name.toLowerCase()} parts. Can you help me?`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Custom Parts
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2024 Tayyab Autos Decoration. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 