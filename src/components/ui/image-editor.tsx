"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ControlPanel } from "./control-panel";
import { TextLayer } from "./text-layer";

export interface TextElement {
  id: string;
  content: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  fontFamily: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
}

interface ImageTextEditorProps {
  imageSrc: string;
  initialTexts?: TextElement[];
}

export function ImageTextEditor({
  imageSrc,
  initialTexts = [],
}: ImageTextEditorProps) {
  const [texts, setTexts] = useState<TextElement[]>(initialTexts);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Get the selected text element
  const selectedText = texts.find((text) => text.id === selectedTextId);

  // Update container size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Add a new text element
  const addNewText = () => {
    const newText: TextElement = {
      id: nanoid(),
      content: "New Text",
      x: 0,
      y: 0,
      fontSize: 24,
      color: "#ffffff",
      fontFamily: "Arial",
    };
    setTexts([...texts, newText]);
    setSelectedTextId(newText.id);
  };

  // Update a text element
  const updateText = (updatedText: TextElement) => {
    setTexts(
      texts.map((text) => (text.id === updatedText.id ? updatedText : text))
    );
  };

  // Delete a text element
  const deleteText = (id: string) => {
    setTexts(texts.filter((text) => text.id !== id));
    if (selectedTextId === id) {
      setSelectedTextId(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-between items-center">
        <Button
          onClick={addNewText}
          variant="outline"
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          Add Text
        </Button>
      </div>

      <div className="p-[48px] bg-[#F0F3F5] flex items-center justify-center gap-0 mx-auto">
        
        {/* element I want to download */}
        <div
          ref={containerRef}
          className="relative border overflow-hidden bg-[#F0F3F5] w-[80%] max-w-[650px] p-0"
          style={{ height: "500px" }}
          id="outputImg"
        >
          <Image
            src={imageSrc ?? "/preview.png"}
            alt="Editable image"
            width={650}
            height={500}
            className="w-full h-full object-cover z-[-1]"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedTextId("");
              }
            }}
            unoptimized
          />
          {texts.map((text) => (
            <TextLayer
              key={text.id}
              text={text}
              isSelected={text.id === selectedTextId}
              onSelect={() => setSelectedTextId(text.id)}
              onChange={updateText}
              containerSize={containerSize}
              onClick={() => setSelectedTextId(text.id)}
            />
          ))}
        </div>
      </div>

      {selectedText && (
        <ControlPanel
          text={selectedText}
          onChange={updateText}
          onDelete={() => deleteText(selectedText.id)}
          containerSize={containerSize}
        />
      )}
    </div>
  );
}
