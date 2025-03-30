"use client";

import ImageSelectionTool from "@/domains/external/components/image-selector";
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
  imageSrc: string | null;
  imageId: string;
  initialTexts?: TextElement[];
}

export function ImageTextEditor({
  imageSrc,
  imageId,
  initialTexts = [],
}: ImageTextEditorProps) {
  const [texts, setTexts] = useState<TextElement[]>(initialTexts);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const selectedText = texts.find((text) => text.id === selectedTextId);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const parentWidth =
          containerRef.current.parentElement?.clientWidth || 0;
        const maxWidth = Math.min(650, parentWidth - 40);
        const aspectRatio = 500 / 650;
        const newHeight = maxWidth * aspectRatio;

        setContainerSize({
          width: maxWidth,
          height: newHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const duplicateSelectedText = () => {
    if (selectedTextId) {
      const textToDuplicate = texts.find((text) => text.id === selectedTextId);
      if (textToDuplicate) {
        const newText = {
          ...textToDuplicate,
          id: `${textToDuplicate.id}-copy-${Date.now()}`,
          x: textToDuplicate.x + 20, 
          y: textToDuplicate.y + 20, 
        };

        setTexts([...texts, newText]);
        setSelectedTextId(newText.id);
      }
    }
  };

  const updateText = (updatedText: TextElement) => {
    setTexts(
      texts.map((text) => (text.id === updatedText.id ? updatedText : text))
    );
  };

  const deleteText = (id: string) => {
    setTexts(texts.filter((text) => text.id !== id));
    if (selectedTextId === id) {
      setSelectedTextId(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 flex-1 rounded-md items-center justify-center min-h-[50vh] mx-auto max-w-[699px] w-full max-md:px-4 md:p-8 bg-[#F0F3F5]">
        <div
          ref={containerRef}
          className="relative w-full rounded-md p-0"
          id="containerRef"
        >
          <ImageSelectionTool
            imageSrc={imageSrc ?? "/preview.png"}
            imageId={imageId}
            onSelectionComplete={(selection, prompt) => {
              console.log(
                `Selection at (${selection.x},${selection.y}) with dimensions ${selection.width}x${selection.height}`
              );
              console.log(`Prompt: ${prompt}`);
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedTextId("");
              }
            }}
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
          onDuplicate={duplicateSelectedText}
          containerSize={containerSize}
        />
      )}
    </div>
  );
}
