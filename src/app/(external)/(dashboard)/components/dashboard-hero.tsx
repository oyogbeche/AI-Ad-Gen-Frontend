import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageAdCardProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export function ImageAdCard({
  title = "Generate Image Ad",
  description = "Create high-quality, AI-powered image ads in seconds. Upload, customize, and generate visuals tailored for your audience",
  buttonText = "Try it now",
  buttonHref = "/dashboard/ad-form",
}: ImageAdCardProps) {
  return (
    <div className="w-full rounded-3xl bg-gradient-to-r from-[#F8E6F8]  to-[#B7D3F3] p-8 md:p-12">
      <div className="max-w-3xl">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">{title}</h2>
        <p className="mb-6 text-gray-600 md:text-lg">{description}</p>

        <Button
          asChild
          variant="outline"
          className="group rounded-full border-[#520052] bg-white px-6 text-[#520052] hover:bg-white/90"
        >
          <Link href={buttonHref}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}