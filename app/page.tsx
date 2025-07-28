"use client"

import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const productCategories = {
  "Lighting & Electrical": [
    {
      name: "Headlights",
      image: "/images/headlights/Venom Front light.png",
      whatsappText: "I want to order Headlights for my bike",
    },
    {
      name: "Backlights",
      image: "/images/backlights/Markhor.png",
      whatsappText: "I want to order Backlights for my bike",
    },
    {
      name: "Indicators",
      image: "/images/side-indicators/smoke.png",
      whatsappText: "I want to order Indicators for my bike",
    },
    {
      name: "SMD Front Lights",
      image: "/placeholder.svg?height=200&width=200",
      whatsappText: "I want to order SMD Front Lights",
    },
    {
      name: "External Lenses",
      image: "/placeholder.svg?height=200&width=200",
      whatsappText: "I want to order External Lenses",
    },
  ],
  "Engine & Performance": [
    {
      name: "Digital RPM Meters",
      image: "/placeholder.svg?height=200&width=200",
      whatsappText: "I want to order Digital RPM Meters",
    },
    {
      name: "Meters (125)",
      image: "/placeholder.svg?height=200&width=200",
      whatsappText: "I want to order Meters for 125",
    },
    {
      name: "Exhaust Plates (125)",
      image: "/placeholder.svg?height=200&width=200",
      whatsappText: "I want to order Exhaust Plates for 125",
    },
  ],
  "Body & Styling": [
    {
      name: "Tank Sets CG 125",
      image: "/images/tunk 125/125.jpg",
      whatsappText: "I want to order Tank Sets for CG 125",
    },
    {
      name: "Tank Sets CD 70",
      image: "/images/tunk 70/70.jpg",
      whatsappText: "I want to order Tank Sets for CD 70",
    },
    {
      name: "Number Plates",
      image: "/placeholder.svg?height=200&width=200",
      whatsappText: "I want to order Number Plates",
    },
  ],
  Accessories: [
    {
      name: "Wall Clocks",
      image: "/placeholder.svg?height=200&width=200",
      whatsappText: "I want to order Wall Clocks",
    },
    {
      name: "Keychains",
      image: "/placeholder.svg?height=200&width=200",
      whatsappText: "I want to order Keychains",
    },
  ],
}

const whatsappNumber = "+923167772775" // Replace with actual WhatsApp number

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
               <nav className="bg-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-red-600/20 shadow-md">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="/bike1111.png" // or use import logo from '../assets/logo.png'
          alt="Tayyab Autos Logo"
          className="h-10 w-auto rounded-sm shadow-sm"
        />
        <span className="text-lg text-white font-semibold tracking-wide hidden sm:block">
          Tayyab Autos
        </span>
      </div>

  

            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-300 hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link href="#products" className="text-gray-300 hover:text-red-500 transition-colors">
                Products
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">
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

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-[url('/1.png?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
            TAYYAB AUTOS
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-300">DECORATION</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Premium Customized Bike Decoration Parts for Honda CG 125 & CD 70
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold"
            >
              <a href="#products">View Products</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
            >
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-red-600/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-red-600/30 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              High-quality decoration parts to make your Honda CG 125 & CD 70 stand out
            </p>
          </div>

          {Object.entries(productCategories).map(([categoryName, products], categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                <h3 className="px-6 text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  {categoryName}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
              </div>

              {/* Category Description */}
              <div className="text-center mb-8">
                <p className="text-gray-400 max-w-3xl mx-auto">
                  {categoryName === "Lighting & Electrical" &&
                    "Illuminate your ride with our premium lighting solutions and electrical components"}
                  {categoryName === "Engine & Performance" &&
                    "Enhance your bike's performance with precision meters and exhaust accessories"}
                  {categoryName === "Body & Styling" &&
                    "Transform your bike's appearance with custom body parts and styling elements"}
                  {categoryName === "Accessories" && "Complete your bike's look with our unique decorative accessories"}
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, productIndex) => (
                  <Card
                    key={productIndex}
                    className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-red-600/20 cursor-pointer"
                    onClick={() => window.location.href = `/products/${encodeURIComponent(product.name)}`}
                  >
                    <CardContent className="p-6">
                      <div className="relative mb-4 overflow-hidden rounded-lg flex items-center justify-center bg-white" style={{height: '180px'}}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={160}
                          height={160}
                          className="object-contain mx-auto"
                        />
                        <div className="absolute top-2 left-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          {categoryName.split(" ")[0]}
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold mb-4 text-center text-gray-100 group-hover:text-red-400 transition-colors">
                        {product.name}
                      </h4>

                      <div className="space-y-2">
                        <WhatsAppButton text={product.whatsappText} productName={product.name} />
                        
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full border-red-600 text-red-500 bg-transparent hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold"
                        >
                          <Link href={`/products/${encodeURIComponent(product.name)}`}>
                            More Items
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-red-600/20">
            <h3 className="text-2xl font-bold mb-4 text-red-500">Can't Find What You're Looking For?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We specialize in custom bike decoration parts. Contact us for personalized solutions for your Honda CG 125
              or CD 70.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I need custom bike decoration parts. Can you help me?")}`}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-gray-400">Get in touch for custom orders and inquiries</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-red-500">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-gray-400">+92 316 7772775</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-red-500" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-400">+92 316 7772775</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-red-500" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-400">Abid Majeed Road, Tench Bhatta, Rawalpindi, Pakistan</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-red-500">Why Choose Us?</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Premium quality decoration parts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Specialized for Honda CG 125 & CD 70</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Custom designs available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Fast delivery across Pakistan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Easy ordering via WhatsApp</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in your bike decoration parts.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TA</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Tayyab Autos Decoration
              </span>
            </div>
            <p className="text-gray-400 mb-6">Premium Bike Decoration Parts | Honda CG 125 & CD 70 Specialists</p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://www.facebook.com/tayyabautos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/tayyabautos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.405c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807 0-.315.105-.595.315-.807.21-.21.49-.315.807-.315.315 0 .595.105.807.315.21.21.315.49.315.807 0 .315-.105.595-.315.807-.21.193-.49.315-.807.315zm-3.832 9.405c-2.5 0-4.532-2.032-4.532-4.532s2.032-4.532 4.532-4.532 4.532 2.032 4.532 4.532-2.032 4.532-4.532 4.532z" />
                </svg>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://www.youtube.com/@tayyabautos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@tayyabautos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300 group border border-gray-700 hover:border-white"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+92 316 7772775</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Orders Only</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">© 2024 Tayyab Autos Decoration. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
