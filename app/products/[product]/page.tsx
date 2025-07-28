import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { individualProducts, whatsappNumber } from "@/lib/data"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    product: string
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

function VideoCard({ videoName, videoPath, poster }: { videoName: string; videoPath: string; poster: string }) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-red-600/20">
      <CardContent className="p-4">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <video
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            controls
            preload="none"
            poster={poster}
          >
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
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

// Utility function to convert a string to title case
function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}

export default function ProductPage({ params }: ProductPageProps) {
  // Decode the product name from URL
  const productName = decodeURIComponent(params.product)
  const products = individualProducts[productName]

  if (!products) {
    notFound()
  }

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
              {productName}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our premium collection of {productName.toLowerCase()} with various styles and features
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      {productName === "Tank Sets CG 125" ? (
        <section className="py-16 px-4">
          <div className="container mx-auto flex justify-center">
            <Card className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-red-600/20 max-w-md w-full">
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-lg flex justify-center">
                  <video
                    className="w-48 h-96 object-cover group-hover:scale-105 transition-transform duration-300 mx-auto"
                    controls
                    preload="none"
                    poster="/images/tunk 125/125.jpg"
                  >
                    <source src="/images/tunk 125/TUNK125.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-100 group-hover:text-red-400 transition-colors">
                  Tunk CG 125
                </h3>
                <p className="text-gray-400 text-base mb-4 text-center leading-relaxed">
                  Premium custom tank set for Honda CG 125. Durable, stylish, and designed for a perfect fit. Upgrade your bike's look and protection with this exclusive tank set.
                </p>
                <WhatsAppButton text="I want to order Tunk CG 125 tank set" productName="Tunk CG 125" />
              </CardContent>
            </Card>
          </div>
        </section>
      ) : productName === "Tank Sets CD 70" ? (
        <section className="py-16 px-4">
          <div className="container mx-auto flex justify-center">
            <Card className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-red-600/20 max-w-md w-full">
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-lg flex justify-center">
                  <video
                    className="w-48 h-96 object-cover group-hover:scale-105 transition-transform duration-300 mx-auto"
                    controls
                    preload="none"
                    poster="/images/tunk 70/70.jpg"
                  >
                    <source src="/images/tunk 70/TUNK70.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-100 group-hover:text-red-400 transition-colors">
                  Tunk CD 70
                </h3>
                <p className="text-gray-400 text-base mb-4 text-center leading-relaxed">
                  Premium custom tank set for Honda CD 70. Durable, stylish, and designed for a perfect fit. Upgrade your bike's look and protection with this exclusive tank set.
                </p>
                <WhatsAppButton text="I want to order Tunk CD 70 tank set" productName="Tunk CD 70" />
              </CardContent>
            </Card>
          </div>
        </section>
      ) : (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-red-600/20"
                >
                  <CardContent className="p-6">
                    <div className="relative mb-4 overflow-hidden rounded-lg flex items-center justify-center bg-white" style={{height: '220px'}}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-gray-100 group-hover:text-red-400 transition-colors" style={{ textTransform: 'capitalize', letterSpacing: '0.5px' }}>
                      {toTitleCase(product.name)}
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
      )}

      {/* Live Demo Section - For Indicators, Backlights, and Headlights products */}
      {(productName === "Indicators" || productName === "Backlights" || productName === "Headlights") && (
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Live Demo
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Watch our {productName.toLowerCase()} in action! See how they light up and enhance your bike's appearance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(() => {
                let videos: { name: string; path: string }[] = [];
                let posters: string[] = [];
                if (productName === "Indicators") {
                  videos = [
                    { name: "Cafe Racer", path: "/videos/indicators/IL1.mp4" },
                    { name: "Round Lava", path: "/videos/indicators/IL10.mp4" },
                    { name: "Lava", path: "/videos/indicators/IL3.mp4" },
                    { name: "Fan", path: "/videos/indicators/IL6.mp4" },
                    { name: "Batman", path: "/videos/indicators/IL7.mp4" },
                    { name: "Smoke", path: "/videos/indicators/IL8.mp4" },
                    { name: "Audi", path: "/videos/indicators/IL9.mp4" },
                    { name: "All Indicators", path: "/videos/indicators/IL2.mp4" },
                  ];
                  posters = [
                    "/images/side-indicators/cafe racer.png",
                    "/images/side-indicators/ROund lava.png",
                    "/images/side-indicators/lava.png",
                    "/images/side-indicators/fan.png",
                    "/images/side-indicators/batman.png",
                    "/images/side-indicators/smoke.png",
                    "/images/side-indicators/audi.png",
                    "/images/side-indicators/cafe racer.png",
                  ];
                } else if (productName === "Backlights") {
                  videos = [
                    { name: "Loin Face", path: "/videos/backlights/BL1.mp4" },
                    { name: "Markhor", path: "/videos/backlights/BL2.mp4" },
                    { name: "Trio Skull", path: "/videos/backlights/BL3.mp4" },
                    { name: "Skull Figure", path: "/videos/backlights/BL4.mp4" },
                    { name: "Crome Skull", path: "/videos/backlights/BL5.mp4" },
                  ];
                  posters = [
                    "/images/backlights/Loin face.png",
                    "/images/backlights/Markhor.png",
                    "/images/backlights/Trio skull.png",
                    "/images/backlights/skull figure.png",
                    "/images/backlights/Crome skull.png",
                  ];
                } else if (productName === "Headlights") {
                  videos = [
                    { name: "Owl Double Metal Lense", path: "/videos/headlights/HL6.mp4" },
                    { name: "Venom Front Light", path: "/videos/headlights/HL7.mp4" },
                  ];
                  posters = [
                    "/images/headlights/owl double metal lense.png",
                    "/images/headlights/Venom Front light.png",
                  ];
                }
                return videos.map((video, index) => (
                  <VideoCard
                    key={index}
                    videoName={video.name}
                    videoPath={video.path}
                    poster={posters[index % posters.length]}
                  />
                ));
              })()}
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
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I need custom ${productName.toLowerCase()} parts. Can you help me?`)}`}
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