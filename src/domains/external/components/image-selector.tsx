import send from "@/components/icons/send.svg";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// Define TypeScript interfaces for our props and state
interface ImageSelectionToolProps {
  imageSrc: string;
  width?: number;
  height?: number;
  onSelectionComplete?: (selection: SelectionArea, prompt: string) => void;
  onClick: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

interface SelectionArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Point {
  x: number;
  y: number;
}

const ImageSelectionTool: React.FC<ImageSelectionToolProps> = ({
  imageSrc,
  width = 500,
  height = 500,
  onSelectionComplete,
  onClick,
}) => {
  const [selection, setSelection] = useState<SelectionArea | null>(null);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [startPoint, setStartPoint] = useState<Point>({ x: 0, y: 0 });
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [containerSize, setContainerSize] = useState({ width, height });
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Use proper TypeScript types for refs
  // const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle responsive resizing and detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard breakpoint for mobile
    };

    const updateSize = () => {
      if (containerRef.current && containerRef.current.parentElement) {
        checkMobile();
        const parentWidth = containerRef.current.parentElement.clientWidth;

        // Different max width behavior for mobile vs desktop
        let maxWidth;
        if (isMobile) {
          // On mobile, use the full parent width with minimal padding
          maxWidth = parentWidth - 16;
        } else {
          // On desktop, respect the max width of 650px
          maxWidth = Math.min(650, parentWidth - 40);
        }

        const aspectRatio = height / width;
        const newHeight = maxWidth * aspectRatio;

        setContainerSize({
          width: maxWidth,
          height: newHeight,
        });
      }
    };

    // Initial checks
    checkMobile();
    updateSize();

    // Update on window resize
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [width, height, isMobile]);

  // Handle mouse down to start selection
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setStartPoint({ x, y });
    setSelection(null);
    setIsSelecting(true);
    setShowPrompt(false);
  };

  // Handle mouse move to update selection
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSelecting || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const currentX = Math.max(
      0,
      Math.min(e.clientX - rect.left, containerSize.width)
    );
    const currentY = Math.max(
      0,
      Math.min(e.clientY - rect.top, containerSize.height)
    );

    setSelection({
      x: Math.min(startPoint.x, currentX),
      y: Math.min(startPoint.y, currentY),
      width: Math.abs(currentX - startPoint.x),
      height: Math.abs(currentY - startPoint.y),
    });
  };

  // Handle touch events for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length !== 1) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    setStartPoint({ x, y });
    setSelection(null);
    setIsSelecting(true);
    setShowPrompt(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isSelecting || !containerRef.current || e.touches.length !== 1) return;
    e.preventDefault(); // Prevent scrolling while selecting

    const rect = containerRef.current.getBoundingClientRect();
    const currentX = Math.max(
      0,
      Math.min(e.touches[0].clientX - rect.left, containerSize.width)
    );
    const currentY = Math.max(
      0,
      Math.min(e.touches[0].clientY - rect.top, containerSize.height)
    );

    setSelection({
      x: Math.min(startPoint.x, currentX),
      y: Math.min(startPoint.y, currentY),
      width: Math.abs(currentX - startPoint.x),
      height: Math.abs(currentY - startPoint.y),
    });
  };

  const handleTouchEnd = () => {
    if (isSelecting && selection) {
      if (selection.width > 10 && selection.height > 10) {
        setIsSelecting(false);
        setShowPrompt(true);
      } else {
        setIsSelecting(false);
        setSelection(null);
      }
    } else {
      setIsSelecting(false);
    }
  };

  // Handle mouse up to end selection
  const handleMouseUp = () => {
    if (isSelecting && selection) {
      if (selection.width > 10 && selection.height > 10) {
        setIsSelecting(false);
        setShowPrompt(true); // Ensure we're showing the prompt
      } else {
        // Reset if selection is too small
        setIsSelecting(false);
        setSelection(null);
      }
    } else {
      setIsSelecting(false);
    }
  };

  // Handle prompt submission
  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selection && prompt) {
      // Call the callback if provided
      if (onSelectionComplete) {
        onSelectionComplete(selection, prompt);
      }

      // Reset for next selection
      setPrompt("");
      setShowPrompt(false); // Hide the prompt after submission
    }
  };

  // Add event listeners for mouse events outside the component
  useEffect(() => {
    const handleMouseUpOutside = () => {
      if (isSelecting) {
        setIsSelecting(false);
        if (selection && selection.width > 10 && selection.height > 10) {
          setShowPrompt(true);
        } else {
          setSelection(null);
        }
      }
    };

    document.addEventListener("mouseup", handleMouseUpOutside);
    return () => {
      document.removeEventListener("mouseup", handleMouseUpOutside);
    };
  }, [isSelecting, selection]);

  // Render the corner circles for a given selection
  const renderCornerCircles = (sel: SelectionArea) => {
    // Adjust circle size for mobile
    const circleSize = isMobile ? 16 : 10; // Bigger circles on mobile for easier touch
    const offset = circleSize / 2;

    // Calculate positions for each corner
    const corners = [
      { left: sel.x - offset, top: sel.y - offset }, // Top-left
      { left: sel.x + sel.width - offset, top: sel.y - offset }, // Top-right
      { left: sel.x - offset, top: sel.y + sel.height - offset }, // Bottom-left
      { left: sel.x + sel.width - offset, top: sel.y + sel.height - offset }, // Bottom-right
    ];

    return corners.map((corner, index) => (
      <div
        key={`corner-${index}`}
        className="absolute bg-white border-2 border-white rounded-full z-10"
        style={{
          left: `${corner.left}px`,
          top: `${corner.top}px`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          cursor: "pointer",
        }}
      />
    ));
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative cursor-crosshair rounded-md"
        style={{
          // width: `${containerSize.width}px`,
          // height: `${containerSize.height}px`,
          width: "100%",
          height: "100%",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={imageSrc}
          alt="Selectable image"
          width={containerSize.width}
          height={containerSize.height}
          className="select-none w-full h-full object-cover z-[-1]"
          draggable={false}
          onClick={onClick}
          unoptimized
        />

        {isSelecting && selection && (
          <>
            <div
              className={`absolute border-${
                isMobile ? "4" : "3"
              } border-white bg-white/30`}
              style={{
                left: `${selection.x}px`,
                top: `${selection.y}px`,
                width: `${selection.width}px`,
                height: `${selection.height}px`,
              }}
            />
          </>
        )}

        {!isSelecting && selection && (
          <>
            <div
              className={`absolute border-${
                isMobile ? "4" : "3"
              } border-white bg-white/30`}
              style={{
                left: `${selection.x}px`,
                top: `${selection.y}px`,
                width: `${selection.width}px`,
                height: `${selection.height}px`,
              }}
            />
            {renderCornerCircles(selection)}
          </>
        )}
      </div>

      {showPrompt && (
        <div className="w-full mt-4 px-2 md:px-0">
          <form onSubmit={handlePromptSubmit} className="flex flex-col gap-2">
            <div
              className={`flex gap-2 items-center border border-slate-400 ${
                isMobile ? "py-3" : "py-2"
              } px-2 rounded-md bg-white focus:ring-2 focus:ring-slate-500`}
            >
              <input
                type="text"
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 px-3 py-2 rounded-md focus:outline-none"
                placeholder={
                  isMobile
                    ? "Describe this area..."
                    : "Describe what you want to do with this area..."
                }
                autoFocus
              />
              <button
                type="submit"
                className={`${
                  isMobile ? "px-4 py-4" : "px-3 py-3"
                } hover:bg-slate-200 cursor-pointer focus:outline-none rounded-md`}
              >
                <Image src={send} alt="send" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ImageSelectionTool;
