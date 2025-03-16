import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ImageAdCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function ImageAdCard({
  title = "Generate Image Ad",
  description = "Create high-quality, AI-powered image ads in seconds. Upload, customize, and generate visuals tailored for your audience",
  buttonText = "Try it now",
  buttonHref = "/dashboard/ad-form",
}: ImageAdCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full rounded-3xl bg-gradient-to-r from-[#F8E6F8] to-[#B7D3F3] p-8 md:p-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-3xl">
        <h2
          className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl transition-transform duration-500 ${
            isVisible ? "translate-x-0" : "translate-x-4"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mb-6 text-gray-600 md:text-lg transition-transform duration-500 delay-150 ${
            isVisible ? "translate-x-0" : "translate-x-4"
          }`}
        >
          {description}
        </p>

        <Button
          asChild
          variant="outline"
          className={`rounded-full border-[#520052] bg-white px-6 text-[#520052] hover:bg-white/90 transition-all duration-300 ${
            isHovering ? "gap-2 pr-5" : "gap-1 pr-6"
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Link href={buttonHref}>
            {buttonText}
            <ArrowRight
              className={`transition-all duration-300 ${
                isHovering ? "translate-x-1 h-6 w-6" : "h-6 w-6"
              }`}
            />
          </Link>
        </Button>
      </div>
    </div>
  );
}
