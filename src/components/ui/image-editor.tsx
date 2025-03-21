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
  imageSrc: string;
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

  // Get the selected text element
  const selectedText = texts.find((text) => text.id === selectedTextId);

  // Update container size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const parentWidth =
          containerRef.current.parentElement?.clientWidth || 0;
        const maxWidth = Math.min(650, parentWidth - 40);
        const aspectRatio = 500 / 650; // Assuming a fixed aspect ratio
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

  // Add a new text element
  // const addNewText = () => {
  //   const newText: TextElement = {
  //     id: nanoid(),
  //     content: "New Text",
  //     x: 0,
  //     y: 0,
  //     fontSize: 24,
  //     color: "#ffffff",
  //     fontFamily: "Arial",
  //   };
  //   setTexts([...texts, newText]);
  //   setSelectedTextId(newText.id);
  // };

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
      {/* <div className="flex justify-between items-center">
        <Button
          onClick={addNewText}
          variant="outline"
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          Add Text
        </Button>
      </div> */}

      <div className="flex flex-col gap-4 md:bg-[#F2F2F2] flex-1 rounded-md items-center justify-center min-h-[50vh] mx-auto max-w-[699px] w-full max-md:px-4 md:p-8">
        {/* element I want to download */}
        <div
          ref={containerRef}
          className="relative w-full rounded-md p-0"
          id="outputImg"
        >
          {/* <Image
            src={imageSrc ?? "/preview.png"}
            alt="Editable image"
            width={650}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
              borderRadius: "8px",
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedTextId("");
              }
            }}
            unoptimized
          /> */}
          <ImageSelectionTool
            imageSrc={imageSrc ?? "/preview.png"}
            imageId={imageId}
            // width={650}
            // height={500}
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
          containerSize={containerSize}
        />
      )}
    </div>
  );
}
