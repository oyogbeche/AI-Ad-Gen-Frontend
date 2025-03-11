import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  variant: "outline" | "solid";
  href: string;
}

const Button = ({ text, variant, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center w-fit justify-center gap-2 px-6 py-3 rounded-md text-lg font-medium transition-colors
        ${
          variant === "outline"
            ? "border border-[#520052] text-[#520052] hover:bg-purple-50"
            : "bg-[#B800B8] text-white hover:bg-dark-purple"
        }
      `}
    >
      {text} <ArrowRight className="h-5 w-5" />
    </Link>
  );
};

export default function AdButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 md:gap-10 items-center  max-w-fit mx-auto">
      <Button text="Try a Demo Ad" variant="outline" href="/demo" />
      <Button
        text="Generate Your Ad"
        variant="solid"
        href="/create-ad/ad-form?type=image"
      />
    </div>
  );
}
