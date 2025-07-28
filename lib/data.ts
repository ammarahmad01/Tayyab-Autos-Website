export const whatsappNumber = "+923167772775"

export interface SubProduct {
  name: string
  image: string
  description: string
  whatsappText: string
}

export interface ProductCategory {
  name: string
  description: string
  subProducts: SubProduct[]
}

export const productCategories: Record<string, ProductCategory> = {
  "Lighting & Electrical": {
    name: "Lighting & Electrical",
    description: "Illuminate your ride with our premium lighting solutions and electrical components",
    subProducts: [
      {
        name: "Headlights",
        image: "/placeholder.svg?height=200&width=200",
        description: "High-intensity LED headlights for superior visibility and modern look. Perfect for Honda CG 125 & CD 70.",
        whatsappText: "I want to order Headlights for my bike"
      },
      {
        name: "Backlights",
        image: "/placeholder.svg?height=200&width=200",
        description: "Modern LED backlights with multiple color options and enhanced visibility.",
        whatsappText: "I want to order Backlights for my bike"
      },
      {
        name: "Indicators",
        image: "/placeholder.svg?height=200&width=200",
        description: "Bright LED indicators for clear signaling and modern appearance.",
        whatsappText: "I want to order Indicators for my bike"
      },
      {
        name: "SMD Front Lights",
        image: "/placeholder.svg?height=200&width=200",
        description: "Surface Mount Device front lights for maximum brightness and efficiency.",
        whatsappText: "I want to order SMD Front Lights"
      },
      {
        name: "External Lenses",
        image: "/placeholder.svg?height=200&width=200",
        description: "High-quality external lenses for protection and enhanced light distribution.",
        whatsappText: "I want to order External Lenses"
      }
    ]
  },
  "Engine & Performance": {
    name: "Engine & Performance",
    description: "Enhance your bike's performance with precision meters and exhaust accessories",
    subProducts: [
      {
        name: "Digital RPM Meters",
        image: "/placeholder.svg?height=200&width=200",
        description: "Advanced digital RPM meters with multiple display options and accurate readings.",
        whatsappText: "I want to order Digital RPM Meters"
      },
      {
        name: "Meters (125)",
        image: "/placeholder.svg?height=200&width=200",
        description: "Complete meter sets including speedometer, tachometer, and fuel gauge for 125cc bikes.",
        whatsappText: "I want to order Meters for 125"
      },
      {
        name: "Exhaust Plates (125)",
        image: "/placeholder.svg?height=200&width=200",
        description: "Custom exhaust plates designed specifically for 125cc engines with enhanced performance.",
        whatsappText: "I want to order Exhaust Plates for 125"
      }
    ]
  },
  "Body & Styling": {
    name: "Body & Styling",
    description: "Transform your bike's appearance with custom body parts and styling elements",
    subProducts: [
      {
        name: "Tank Sets CG 125",
        image: "/placeholder.svg?height=200&width=200",
        description: "Custom tank sets specifically designed for Honda CG 125 with premium finish and fit.",
        whatsappText: "I want to order Tank Sets for CG 125"
      },
      {
        name: "Tank Sets CD 70",
        image: "/placeholder.svg?height=200&width=200",
        description: "Custom tank sets for Honda CD 70 with enhanced styling and durability.",
        whatsappText: "I want to order Tank Sets for CD 70"
      },
      {
        name: "Number Plates",
        image: "/placeholder.svg?height=200&width=200",
        description: "Custom number plates with various designs and premium materials.",
        whatsappText: "I want to order Number Plates"
      }
    ]
  },
  "Accessories": {
    name: "Accessories",
    description: "Complete your bike's look with our unique decorative accessories",
    subProducts: [
      {
        name: "Wall Clocks",
        image: "/placeholder.svg?height=200&width=200",
        description: "Custom wall clocks featuring bike designs and premium materials.",
        whatsappText: "I want to order Wall Clocks"
      },
      {
        name: "Keychains",
        image: "/placeholder.svg?height=200&width=200",
        description: "Custom keychains with bike themes and durable materials.",
        whatsappText: "I want to order Keychains"
      }
    ]
  }
}

// Individual product pages with 10 sub-products each
export const individualProducts: Record<string, SubProduct[]> = {
  "Headlights": [
    {
      name: "4 Lense Neon Light",
      image: "/images/headlights/4 Lense Neon Light.png",
      description: "Premium 4-lens neon headlight with bright illumination and modern design.",
      whatsappText: "I want to order 4 Lense Neon Light headlight"
    },
    {
      name: "Owl double metal lense",
      image: "/images/headlights/owl double metal lense.png",
      description: "Owl-themed double metal lens headlight with unique design and superior visibility.",
      whatsappText: "I want to order Owl double metal lense headlight"
    },
    {
      name: "Single Big lense",
      image: "/images/headlights/Single Big lense.png",
      description: "Single large lens headlight with maximum brightness and powerful illumination.",
      whatsappText: "I want to order Single Big lense headlight"
    },
    {
      name: "Single lense Neon light",
      image: "/images/headlights/Single lense Neon light.png",
      description: "Single lens neon headlight with glowing effect and eye-catching design.",
      whatsappText: "I want to order Single lense Neon light headlight"
    },
    {
      name: "Skull front light",
      image: "/images/headlights/skull front light.png",
      description: "Skull-themed front headlight with edgy design and aggressive appearance.",
      whatsappText: "I want to order Skull front light headlight"
    },
    {
      name: "Venom Front light",
      image: "/images/headlights/Venom Front light.png",
      description: "Venom-themed front headlight with fierce design and powerful illumination.",
      whatsappText: "I want to order Venom Front light headlight"
    }
  ],
  "Backlights": [
    {
      name: "Crome skull",
      image: "/images/backlights/Crome skull.png",
      description: "Premium chrome skull backlight with aggressive design and superior visibility.",
      whatsappText: "I want to order Crome skull backlight"
    },
    {
      name: "Dragon 125",
      image: "/images/backlights/dragon 125.png",
      description: "Dragon-themed backlight designed specifically for 125cc bikes with fierce styling.",
      whatsappText: "I want to order Dragon 125 backlight"
    },
    {
      name: "Loin face",
      image: "/images/backlights/Loin face.png",
      description: "Lion face backlight with majestic design and powerful appearance.",
      whatsappText: "I want to order Loin face backlight"
    },
    {
      name: "Markhor",
      image: "/images/backlights/Markhor.png",
      description: "Markhor-themed backlight featuring the national animal of Pakistan with elegant design.",
      whatsappText: "I want to order Markhor backlight"
    },
    {
      name: "SIdhu moosewala",
      image: "/images/backlights/SIdhu moosewala.png",
      description: "Sidhu Moose Wala themed backlight with tribute design and cultural significance.",
      whatsappText: "I want to order SIdhu moosewala backlight"
    },
    {
      name: "Skull figure",
      image: "/images/backlights/skull figure.png",
      description: "Skull figure backlight with edgy design and bold appearance.",
      whatsappText: "I want to order Skull figure backlight"
    },
    {
      name: "Skull Honda",
      image: "/images/backlights/skull Honda.png",
      description: "Honda-themed skull backlight combining brand loyalty with aggressive styling.",
      whatsappText: "I want to order Skull Honda backlight"
    },
    {
      name: "Trio skull",
      image: "/images/backlights/Trio skull.png",
      description: "Triple skull backlight with unique three-skull design and maximum impact.",
      whatsappText: "I want to order Trio skull backlight"
    },
    {
      name: "Wolf",
      image: "/images/backlights/wolf.png",
      description: "Wolf-themed backlight with wild and fierce design for aggressive riders.",
      whatsappText: "I want to order Wolf backlight"
    },
    {
      name: "Yellow Eyes Neon",
      image: "/images/backlights/Yellow Eyes Neon.png",
      description: "Neon yellow eyes backlight with glowing effect and eye-catching design.",
      whatsappText: "I want to order Yellow Eyes Neon backlight"
    }
  ],
  "Indicators": [
    {
      name: "audi",
      image: "/images/side-indicators/audi.png",
      description: "Audi-style side indicator with modern look and bright illumination.",
      whatsappText: "I want to order audi side indicator"
    },
    {
      name: "batman",
      image: "/images/side-indicators/batman.png",
      description: "Batman-themed side indicator for a bold and unique appearance.",
      whatsappText: "I want to order batman side indicator"
    },
    {
      name: "cafe racer",
      image: "/images/side-indicators/cafe racer.png",
      description: "Cafe racer style indicator for classic and custom bikes.",
      whatsappText: "I want to order cafe racer side indicator"
    },
    {
      name: "fan",
      image: "/images/side-indicators/fan.png",
      description: "Fan-shaped side indicator with a unique and stylish design.",
      whatsappText: "I want to order fan side indicator"
    },
    {
      name: "lava",
      image: "/images/side-indicators/lava.png",
      description: "Lava-style indicator with glowing effect and modern appeal.",
      whatsappText: "I want to order lava side indicator"
    },
    {
      name: "ROund lava",
      image: "/images/side-indicators/ROund lava.png",
      description: "Round lava indicator with a smooth and bright finish.",
      whatsappText: "I want to order ROund lava side indicator"
    },
    {
      name: "smoke",
      image: "/images/side-indicators/smoke.png",
      description: "Smoke-style indicator for a sleek and subtle look.",
      whatsappText: "I want to order smoke side indicator"
    }
  ],
  "SMD Front Lights": [
    {
      name: "SMD Front Light Pro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium SMD front lights for maximum brightness and efficiency.",
      whatsappText: "I want to order SMD Front Light Pro"
    },
    {
      name: "SMD Front Light Sport",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style SMD front lights with aggressive design and bright illumination.",
      whatsappText: "I want to order SMD Front Light Sport"
    },
    {
      name: "SMD Front Light Retro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style SMD front lights combining classic looks with modern SMD technology.",
      whatsappText: "I want to order SMD Front Light Retro"
    },
    {
      name: "SMD Front Light Standard",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard SMD front lights with reliable performance and easy maintenance.",
      whatsappText: "I want to order SMD Front Light Standard"
    },
    {
      name: "SMD Front Light Custom",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom SMD front lights with personalized design and enhanced features.",
      whatsappText: "I want to order SMD Front Light Custom"
    },
    {
      name: "SMD Front Light Performance",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused SMD front lights for maximum visibility and safety.",
      whatsappText: "I want to order SMD Front Light Performance"
    },
    {
      name: "SMD Front Light Premium",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium SMD front lights with enhanced brightness and durability.",
      whatsappText: "I want to order SMD Front Light Premium"
    },
    {
      name: "SMD Front Light Ultimate",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate SMD front lights with cutting-edge technology and superior brightness.",
      whatsappText: "I want to order SMD Front Light Ultimate"
    },
    {
      name: "SMD Front Light Classic",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic SMD front light design with modern technology and reliable performance.",
      whatsappText: "I want to order SMD Front Light Classic"
    },
    {
      name: "SMD Front Light Max",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum brightness SMD front lights for superior night visibility.",
      whatsappText: "I want to order SMD Front Light Max"
    }
  ],
  "External Lenses": [
    {
      name: "External Lens Pro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium external lenses for protection and enhanced light distribution.",
      whatsappText: "I want to order External Lens Pro"
    },
    {
      name: "External Lens Sport",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style external lenses with aggressive design and superior protection.",
      whatsappText: "I want to order External Lens Sport"
    },
    {
      name: "External Lens Retro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style external lenses combining classic looks with modern protection.",
      whatsappText: "I want to order External Lens Retro"
    },
    {
      name: "External Lens Standard",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard external lenses with reliable protection and easy maintenance.",
      whatsappText: "I want to order External Lens Standard"
    },
    {
      name: "External Lens Custom",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom external lenses with personalized design and enhanced protection.",
      whatsappText: "I want to order External Lens Custom"
    },
    {
      name: "External Lens Performance",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused external lenses for maximum protection and safety.",
      whatsappText: "I want to order External Lens Performance"
    },
    {
      name: "External Lens Premium",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium external lenses with enhanced protection and durability.",
      whatsappText: "I want to order External Lens Premium"
    },
    {
      name: "External Lens Ultimate",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate external lenses with cutting-edge technology and superior protection.",
      whatsappText: "I want to order External Lens Ultimate"
    },
    {
      name: "External Lens Classic",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic external lens design with modern protection and reliable performance.",
      whatsappText: "I want to order External Lens Classic"
    },
    {
      name: "External Lens Max",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum protection external lenses for superior durability and safety.",
      whatsappText: "I want to order External Lens Max"
    }
  ],
  "Digital RPM Meters": [
    {
      name: "Digital RPM Meter Pro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Advanced digital RPM meters with multiple display options and accurate readings.",
      whatsappText: "I want to order Digital RPM Meter Pro"
    },
    {
      name: "Digital RPM Meter Sport",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style digital RPM meters with aggressive design and precise readings.",
      whatsappText: "I want to order Digital RPM Meter Sport"
    },
    {
      name: "Digital RPM Meter Retro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style digital RPM meters combining classic looks with modern technology.",
      whatsappText: "I want to order Digital RPM Meter Retro"
    },
    {
      name: "Digital RPM Meter Standard",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard digital RPM meters with reliable performance and easy reading.",
      whatsappText: "I want to order Digital RPM Meter Standard"
    },
    {
      name: "Digital RPM Meter Custom",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom digital RPM meters with personalized design and enhanced features.",
      whatsappText: "I want to order Digital RPM Meter Custom"
    },
    {
      name: "Digital RPM Meter Performance",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused digital RPM meters for maximum accuracy and safety.",
      whatsappText: "I want to order Digital RPM Meter Performance"
    },
    {
      name: "Digital RPM Meter Premium",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium digital RPM meters with enhanced accuracy and durability.",
      whatsappText: "I want to order Digital RPM Meter Premium"
    },
    {
      name: "Digital RPM Meter Ultimate",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate digital RPM meters with cutting-edge technology and superior accuracy.",
      whatsappText: "I want to order Digital RPM Meter Ultimate"
    },
    {
      name: "Digital RPM Meter Classic",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic digital RPM meter design with modern technology and reliable performance.",
      whatsappText: "I want to order Digital RPM Meter Classic"
    },
    {
      name: "Digital RPM Meter Max",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum accuracy digital RPM meters for superior performance monitoring.",
      whatsappText: "I want to order Digital RPM Meter Max"
    }
  ],
  "Meters (125)": [
    {
      name: "Meter Set Pro (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Complete meter sets including speedometer, tachometer, and fuel gauge for 125cc bikes.",
      whatsappText: "I want to order Meter Set Pro (125)"
    },
    {
      name: "Meter Set Sport (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style meter sets with aggressive design and precise readings for 125cc bikes.",
      whatsappText: "I want to order Meter Set Sport (125)"
    },
    {
      name: "Meter Set Retro (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style meter sets combining classic looks with modern technology for 125cc bikes.",
      whatsappText: "I want to order Meter Set Retro (125)"
    },
    {
      name: "Meter Set Standard (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard meter sets with reliable performance and easy reading for 125cc bikes.",
      whatsappText: "I want to order Meter Set Standard (125)"
    },
    {
      name: "Meter Set Custom (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom meter sets with personalized design and enhanced features for 125cc bikes.",
      whatsappText: "I want to order Meter Set Custom (125)"
    },
    {
      name: "Meter Set Performance (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused meter sets for maximum accuracy and safety for 125cc bikes.",
      whatsappText: "I want to order Meter Set Performance (125)"
    },
    {
      name: "Meter Set Premium (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium meter sets with enhanced accuracy and durability for 125cc bikes.",
      whatsappText: "I want to order Meter Set Premium (125)"
    },
    {
      name: "Meter Set Ultimate (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate meter sets with cutting-edge technology and superior accuracy for 125cc bikes.",
      whatsappText: "I want to order Meter Set Ultimate (125)"
    },
    {
      name: "Meter Set Classic (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic meter set design with modern technology and reliable performance for 125cc bikes.",
      whatsappText: "I want to order Meter Set Classic (125)"
    },
    {
      name: "Meter Set Max (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum accuracy meter sets for superior performance monitoring for 125cc bikes.",
      whatsappText: "I want to order Meter Set Max (125)"
    }
  ],
  "Exhaust Plates (125)": [
    {
      name: "Exhaust Plate Pro (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom exhaust plates designed specifically for 125cc engines with enhanced performance.",
      whatsappText: "I want to order Exhaust Plate Pro (125)"
    },
    {
      name: "Exhaust Plate Sport (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style exhaust plates with aggressive design for 125cc engines.",
      whatsappText: "I want to order Exhaust Plate Sport (125)"
    },
    {
      name: "Exhaust Plate Retro (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style exhaust plates combining classic looks with modern performance for 125cc engines.",
      whatsappText: "I want to order Exhaust Plate Retro (125)"
    },
    {
      name: "Exhaust Plate Standard (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard exhaust plates with reliable performance for 125cc engines.",
      whatsappText: "I want to order Exhaust Plate Standard (125)"
    },
    {
      name: "Exhaust Plate Custom (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom exhaust plates with personalized design and enhanced features for 125cc engines.",
      whatsappText: "I want to order Exhaust Plate Custom (125)"
    },
    {
      name: "Exhaust Plate Performance (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused exhaust plates for maximum power and efficiency for 125cc engines.",
      whatsappText: "I want to order Exhaust Plate Performance (125)"
    },
    {
      name: "Exhaust Plate Premium (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium exhaust plates with enhanced performance and durability for 125cc engines.",
      whatsappText: "I want to order Exhaust Plate Premium (125)"
    },
    {
      name: "Exhaust Plate Ultimate (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate exhaust plates with cutting-edge technology and superior performance for 125cc engines.",
      whatsappText: "I want to order Exhaust Plate Ultimate (125)"
    },
    {
      name: "Exhaust Plate Classic (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic exhaust plate design with modern performance and reliable durability for 125cc engines.",
      whatsappText: "I want to order Exhaust Plate Classic (125)"
    },
    {
      name: "Exhaust Plate Max (125)",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum performance exhaust plates for superior power output for 125cc engines.",
      whatsappText: "I want to order Exhaust Plate Max (125)"
    }
  ],
  "Tank Sets CG 125": [
    {
      name: "Tank Set CG 125 Pro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom tank sets specifically designed for Honda CG 125 with premium finish and fit.",
      whatsappText: "I want to order Tank Set CG 125 Pro"
    },
    {
      name: "Tank Set CG 125 Sport",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style tank sets with aggressive design for Honda CG 125.",
      whatsappText: "I want to order Tank Set CG 125 Sport"
    },
    {
      name: "Tank Set CG 125 Retro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style tank sets combining classic looks with modern design for Honda CG 125.",
      whatsappText: "I want to order Tank Set CG 125 Retro"
    },
    {
      name: "Tank Set CG 125 Standard",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard tank sets with reliable performance and perfect fit for Honda CG 125.",
      whatsappText: "I want to order Tank Set CG 125 Standard"
    },
    {
      name: "Tank Set CG 125 Custom",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom tank sets with personalized design and enhanced features for Honda CG 125.",
      whatsappText: "I want to order Tank Set CG 125 Custom"
    },
    {
      name: "Tank Set CG 125 Performance",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused tank sets for maximum style and durability for Honda CG 125.",
      whatsappText: "I want to order Tank Set CG 125 Performance"
    },
    {
      name: "Tank Set CG 125 Premium",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium tank sets with enhanced finish and durability for Honda CG 125.",
      whatsappText: "I want to order Tank Set CG 125 Premium"
    },
    {
      name: "Tank Set CG 125 Ultimate",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate tank sets with cutting-edge design and superior finish for Honda CG 125.",
      whatsappText: "I want to order Tank Set CG 125 Ultimate"
    },
    {
      name: "Tank Set CG 125 Classic",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic tank set design with modern finish and reliable performance for Honda CG 125.",
      whatsappText: "I want to order Tank Set CG 125 Classic"
    },
    {
      name: "Tank Set CG 125 Max",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum style tank sets for superior appearance and durability for Honda CG 125.",
      whatsappText: "I want to order Tank Set CG 125 Max"
    }
  ],
  "Tank Sets CD 70": [
    {
      name: "Tank Set CD 70 Pro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom tank sets for Honda CD 70 with enhanced styling and durability.",
      whatsappText: "I want to order Tank Set CD 70 Pro"
    },
    {
      name: "Tank Set CD 70 Sport",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style tank sets with aggressive design for Honda CD 70.",
      whatsappText: "I want to order Tank Set CD 70 Sport"
    },
    {
      name: "Tank Set CD 70 Retro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style tank sets combining classic looks with modern design for Honda CD 70.",
      whatsappText: "I want to order Tank Set CD 70 Retro"
    },
    {
      name: "Tank Set CD 70 Standard",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard tank sets with reliable performance and perfect fit for Honda CD 70.",
      whatsappText: "I want to order Tank Set CD 70 Standard"
    },
    {
      name: "Tank Set CD 70 Custom",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom tank sets with personalized design and enhanced features for Honda CD 70.",
      whatsappText: "I want to order Tank Set CD 70 Custom"
    },
    {
      name: "Tank Set CD 70 Performance",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused tank sets for maximum style and durability for Honda CD 70.",
      whatsappText: "I want to order Tank Set CD 70 Performance"
    },
    {
      name: "Tank Set CD 70 Premium",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium tank sets with enhanced finish and durability for Honda CD 70.",
      whatsappText: "I want to order Tank Set CD 70 Premium"
    },
    {
      name: "Tank Set CD 70 Ultimate",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate tank sets with cutting-edge design and superior finish for Honda CD 70.",
      whatsappText: "I want to order Tank Set CD 70 Ultimate"
    },
    {
      name: "Tank Set CD 70 Classic",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic tank set design with modern finish and reliable performance for Honda CD 70.",
      whatsappText: "I want to order Tank Set CD 70 Classic"
    },
    {
      name: "Tank Set CD 70 Max",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum style tank sets for superior appearance and durability for Honda CD 70.",
      whatsappText: "I want to order Tank Set CD 70 Max"
    }
  ],
  "Number Plates": [
    {
      name: "Number Plate Pro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom number plates with various designs and premium materials.",
      whatsappText: "I want to order Number Plate Pro"
    },
    {
      name: "Number Plate Sport",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style number plates with aggressive design and premium materials.",
      whatsappText: "I want to order Number Plate Sport"
    },
    {
      name: "Number Plate Retro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style number plates combining classic looks with modern materials.",
      whatsappText: "I want to order Number Plate Retro"
    },
    {
      name: "Number Plate Standard",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard number plates with reliable performance and premium materials.",
      whatsappText: "I want to order Number Plate Standard"
    },
    {
      name: "Number Plate Custom",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom number plates with personalized design and enhanced features.",
      whatsappText: "I want to order Number Plate Custom"
    },
    {
      name: "Number Plate Performance",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused number plates for maximum style and durability.",
      whatsappText: "I want to order Number Plate Performance"
    },
    {
      name: "Number Plate Premium",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium number plates with enhanced design and durability.",
      whatsappText: "I want to order Number Plate Premium"
    },
    {
      name: "Number Plate Ultimate",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate number plates with cutting-edge design and superior materials.",
      whatsappText: "I want to order Number Plate Ultimate"
    },
    {
      name: "Number Plate Classic",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic number plate design with modern materials and reliable performance.",
      whatsappText: "I want to order Number Plate Classic"
    },
    {
      name: "Number Plate Max",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum style number plates for superior appearance and durability.",
      whatsappText: "I want to order Number Plate Max"
    }
  ],
  "Wall Clocks": [
    {
      name: "Wall Clock Pro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom wall clocks featuring bike designs and premium materials.",
      whatsappText: "I want to order Wall Clock Pro"
    },
    {
      name: "Wall Clock Sport",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style wall clocks with aggressive design and premium materials.",
      whatsappText: "I want to order Wall Clock Sport"
    },
    {
      name: "Wall Clock Retro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style wall clocks combining classic looks with modern materials.",
      whatsappText: "I want to order Wall Clock Retro"
    },
    {
      name: "Wall Clock Standard",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard wall clocks with reliable performance and premium materials.",
      whatsappText: "I want to order Wall Clock Standard"
    },
    {
      name: "Wall Clock Custom",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom wall clocks with personalized design and enhanced features.",
      whatsappText: "I want to order Wall Clock Custom"
    },
    {
      name: "Wall Clock Performance",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused wall clocks for maximum style and durability.",
      whatsappText: "I want to order Wall Clock Performance"
    },
    {
      name: "Wall Clock Premium",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium wall clocks with enhanced design and durability.",
      whatsappText: "I want to order Wall Clock Premium"
    },
    {
      name: "Wall Clock Ultimate",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate wall clocks with cutting-edge design and superior materials.",
      whatsappText: "I want to order Wall Clock Ultimate"
    },
    {
      name: "Wall Clock Classic",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic wall clock design with modern materials and reliable performance.",
      whatsappText: "I want to order Wall Clock Classic"
    },
    {
      name: "Wall Clock Max",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum style wall clocks for superior appearance and durability.",
      whatsappText: "I want to order Wall Clock Max"
    }
  ],
  "Keychains": [
    {
      name: "Keychain Pro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom keychains with bike themes and durable materials.",
      whatsappText: "I want to order Keychain Pro"
    },
    {
      name: "Keychain Sport",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sport-style keychains with aggressive design and durable materials.",
      whatsappText: "I want to order Keychain Sport"
    },
    {
      name: "Keychain Retro",
      image: "/placeholder.svg?height=300&width=300",
      description: "Retro-style keychains combining classic looks with modern materials.",
      whatsappText: "I want to order Keychain Retro"
    },
    {
      name: "Keychain Standard",
      image: "/placeholder.svg?height=300&width=300",
      description: "Standard keychains with reliable performance and durable materials.",
      whatsappText: "I want to order Keychain Standard"
    },
    {
      name: "Keychain Custom",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom keychains with personalized design and enhanced features.",
      whatsappText: "I want to order Keychain Custom"
    },
    {
      name: "Keychain Performance",
      image: "/placeholder.svg?height=300&width=300",
      description: "Performance-focused keychains for maximum style and durability.",
      whatsappText: "I want to order Keychain Performance"
    },
    {
      name: "Keychain Premium",
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium keychains with enhanced design and durability.",
      whatsappText: "I want to order Keychain Premium"
    },
    {
      name: "Keychain Ultimate",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultimate keychains with cutting-edge design and superior materials.",
      whatsappText: "I want to order Keychain Ultimate"
    },
    {
      name: "Keychain Classic",
      image: "/placeholder.svg?height=300&width=300",
      description: "Classic keychain design with modern materials and reliable performance.",
      whatsappText: "I want to order Keychain Classic"
    },
    {
      name: "Keychain Max",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maximum style keychains for superior appearance and durability.",
      whatsappText: "I want to order Keychain Max"
    }
  ]
} 