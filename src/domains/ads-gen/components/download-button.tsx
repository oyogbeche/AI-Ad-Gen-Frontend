import { Download, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DownloadButtonProps {
  imageUrl: string | null | undefined;
  downloadImage: (format: "png" | "jpg") => void | Promise<void>;
  isDownloading: boolean;
  isLoading: boolean | undefined;
}

export const DownloadButton = ({
  imageUrl,
  downloadImage,
  isDownloading,
  isLoading,
}: DownloadButtonProps) => {
  if (!imageUrl) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={isLoading || isDownloading}
        className="flex items-center border border-[#650065] px-3 md:px-6 py-2 rounded-[6px] cursor-pointer text-[#650065]"
      >
        <div className="flex items-center">
          <Download size={20} className="mr-0 md:mr-2 strokeWidth-[1.5]" />
          <span className="hidden md:inline">
            {isDownloading ? "Downloading..." : "Download"}
          </span>
          {!isDownloading ? (
            <ChevronDown className="hidden md:inline w-5 h-5 ml-3" />
          ) : (
            <span className="ml-2 w-4 h-4 border-2 border-gray-300 border-t-[#650065] rounded-full animate-spin"></span>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-4 w-[182px] rounded-[12px] shadow-[0px_5px_5px_rgba(0,0,0,0.04)]"
        align="end"
      >
        <DropdownMenuItem
          onClick={() => downloadImage("png")}
          className="px-4 py-4"
        >
          Export as PNG
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => downloadImage("jpg")}
          className="px-4 py-4"
        >
          Export as JPG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
