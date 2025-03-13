import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ImageAdCardProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  imageSrc?: string
}

export function ImageAdCard({
  title = "Generate Image Ad",
  description = "Create high-quality, AI-powered image ads in seconds. Upload, customize, and generate visuals tailored for your audience",
  buttonText = "Try it now",
  buttonHref = "/dashboard/ad-form",
  imageSrc = "/get-started.png",
}: ImageAdCardProps) {
  return (
<div className="flex justify-center items-center h-screen overflow-hidden">
  <div className="w-[95%] h-[85vh] bg-gradient-to-r from-[#F8E6F8] to-[#B7D3F3] flex items-center justify-center border border-gray-300 rounded-xl shadow-lg">

<div className="grid grid-cols-1 md:grid-cols-2 items-stretch w-[90%] max-w-6xl mx-auto h-full">
       
        <div className="flex flex-col items-start text-left space-y-4 p-4 self-start">
          <h2 className="text-base md:text-xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-snug">
            {description}
          </p>
          <Button
            asChild
            variant="outline"
            className="group rounded-full border-[#520052] bg-white px-4 md:px-6 text-[#520052] hover:bg-white/90 text-sm md:text-base"
          >
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

      
        <div className="flex flex-col items-center justify-center p-4 self-end transform -translate-y-12">
          <Image
            src={imageSrc}
            alt="Welcome Onboard"
            width={240}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
    </div>
  )
}
