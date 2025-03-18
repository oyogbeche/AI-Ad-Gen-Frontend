import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import send from "@/components/icons/send.svg"

// Define TypeScript interfaces for our props and state
interface ImageSelectionToolProps {
  imageSrc: string;
  width?: number;
  height?: number;
  onSelectionComplete?: (selection: SelectionArea, prompt: string) => void;
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
  onSelectionComplete
}) => {
  const [selection, setSelection] = useState<SelectionArea | null>(null);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [startPoint, setStartPoint] = useState<Point>({ x: 0, y: 0 });
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  
  // Use proper TypeScript types for refs
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    
    setSelection({
      x: Math.min(startPoint.x, currentX),
      y: Math.min(startPoint.y, currentY),
      width: Math.abs(currentX - startPoint.x),
      height: Math.abs(currentY - startPoint.y)
    });
  };

  // Handle mouse up to end selection
  const handleMouseUp = () => {
    if (isSelecting && selection && selection.width > 10 && selection.height > 10) {
      setIsSelecting(false);
      setShowPrompt(true);
    } else {
      // Reset if selection is too small
      setIsSelecting(false);
      setSelection(null);
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
      
      // For demonstration, we'll just log the data
      console.log("Prompt submitted:", prompt);
      console.log("Selection area:", selection);
      
      // Alert for feedback (you would remove this in production)
      alert(`Prompt "${prompt}" submitted for the selected area`);
    }
    
    // Reset for next selection
    setPrompt('');
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

    document.addEventListener('mouseup', handleMouseUpOutside);
    return () => {
      document.removeEventListener('mouseup', handleMouseUpOutside);
    };
  }, [isSelecting, selection]);

  // Render the corner circles for a given selection
  const renderCornerCircles = (sel: SelectionArea) => {
    const circleSize = 10; // Diameter of corner circles in pixels
    const offset = circleSize / 2;
    
    // Calculate positions for each corner
    const corners = [
      { left: sel.x - offset, top: sel.y - offset }, // Top-left
      { left: sel.x + sel.width - offset, top: sel.y - offset }, // Top-right
      { left: sel.x - offset, top: sel.y + sel.height - offset }, // Bottom-left
      { left: sel.x + sel.width - offset, top: sel.y + sel.height - offset } // Bottom-right
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
          cursor: 'pointer'
        }}
      />
    ));
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto">
      <div 
        ref={containerRef}
        className="relative cursor-crosshair" 
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Image 
          src={imageSrc} 
          alt="Selectable image" 
          width={width} 
          height={height}
          className="object-contain select-none"
          draggable={false}
        />
        
        {isSelecting && selection && (
          <>
            <div 
              className="absolute border-3 border-white bg-white/30"
              style={{
                left: `${selection.x}px`,
                top: `${selection.y}px`,
                width: `${selection.width}px`,
                height: `${selection.height}px`
              }}
            />
            {/* {renderCornerCircles(selection)} */}
          </>
        )}
        
        {!isSelecting && selection && (
          <>
            <div 
              className="absolute border-3 border-white bg-white/30"
              style={{
                left: `${selection.x}px`,
                top: `${selection.y}px`,
                width: `${selection.width}px`,
                height: `${selection.height}px`
              }}
            />
            {renderCornerCircles(selection)}
          </>
        )}
      </div>
      
      {showPrompt && (
        <div className="w-full max-w-md">
          <form onSubmit={handlePromptSubmit} className="flex flex-col gap-2">
            <div className="flex gap-2 items-center border border-slate-400 py-2 px-2 rounded-md bg-white  focus:ring-2 focus:ring-slate-500">
              <input
                type="text"
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 px-3 py-2 rounded-md focus:outline-none"
                placeholder="Describe what you want to do with this area..."
              />
              <button
                type="submit"
                className="px-3 py-3 hover:bg-slate-200 cursor-pointer focus:outline-none rounded-md"
              >
                <Image src={send} alt="send" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ImageSelectionTool;