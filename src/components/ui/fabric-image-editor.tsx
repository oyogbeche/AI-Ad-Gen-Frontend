"use client";

import { useEffect, useRef, useState } from "react";
import { ControlPanel } from "./control-panel";
import { Canvas, IText, Rect, Circle, FabricImage, FabricObject, ITextProps, TPointerEvent, TPointerEventInfo } from "fabric";

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
  backgroundColor?: string | "none";
}

interface FabricImageEditorProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  fabricCanvas: Canvas | null;
  imageSrc: string | null;
  imageId: string;
  initialTexts?: TextElement[];
}
interface CustomITextProps extends ITextProps {
  id: string;
}
declare module 'fabric' {
    interface IText {
      id: string;
    }
  }

export function FabricImageEditor({
  canvasRef,
  fabricCanvas,
  imageSrc="https://res.cloudinary.com/dzrap26vg/image/upload/v1743633802/vsrf2xdja9godrxjhntv.png",
  imageId,
  initialTexts = [],
}: FabricImageEditorProps) {
  const [texts, setTexts] = useState<TextElement[]>(initialTexts);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 650, height: 500 });
  const [activeTool, setActiveTool] = useState<"text" | "rectangle" | "circle" | "image">("text");

  const selectedText = texts.find((text) => text.id === selectedTextId);

  // Update canvas size based on container
  useEffect(() => {
    const updateSize = () => {
      const parent = canvasRef.current?.parentElement?.parentElement;
      if (parent && fabricCanvas) {
        const maxWidth = Math.min(650, parent.clientWidth - 40);
        const aspectRatio = 500 / 650;
        const newHeight = maxWidth * aspectRatio;
        setCanvasSize({ width: maxWidth, height: newHeight });
        
        fabricCanvas.setDimensions({
          width: maxWidth,
          height: newHeight
        });
        fabricCanvas.renderAll();
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [canvasRef, fabricCanvas]);

  // Load image and initialize objects
  useEffect(() => {
    if (!fabricCanvas || !imageSrc) return;

    // Clear canvas
    fabricCanvas.clear();

    // Load background image
    FabricImage.fromURL(imageSrc, {
        crossOrigin: 'anonymous'
      }, (img: FabricImage) => {
        const scale = Math.min(
          fabricCanvas.width! / img.width!,
          fabricCanvas.height! / img.height!
        );
        img.scale(scale);
        img.set({
          left: (fabricCanvas.width! - img.width! * scale) / 2,
          top: (fabricCanvas.height! - img.height! * scale) / 2,
          selectable: false,
          evented: false,
        });
        fabricCanvas.add(img);
        fabricCanvas.renderAll();
      });
    
    

    // Add initial texts
    initialTexts.forEach((text) => {
      const fabricText = new IText(text.content, {
        left: text.x,
        top: text.y,
        fontSize: text.fontSize,
        fill: text.color,
        fontFamily: text.fontFamily,
        fontWeight: text.isBold ? "bold" : "normal",
        fontStyle: text.isItalic ? "italic" : "normal",
        underline: text.isUnderline || false,
        backgroundColor: text.backgroundColor !== "none" ? text.backgroundColor : undefined,
        selectable: true,
        hasControls: true,
        id: text.id,
      });

      fabricText.on("selected", () => {
        setSelectedTextId(text.id);
      });

      fabricText.on("deselected", () => {
        setSelectedTextId(null);
      });

      fabricText.on("modified", () => {
        setTexts(prev => prev.map(t => 
          t.id === text.id ? {
            ...t,
            x: fabricText.left || t.x,
            y: fabricText.top || t.y,
            fontSize: fabricText.fontSize || t.fontSize,
            content: fabricText.text || t.content
          } : t
        ));
      });

      fabricCanvas.add(fabricText);
    });

    // Handle object selection
    fabricCanvas.on("selection:created", (e) => {
      if (e.selected && e.selected.length === 1) {
        const obj = e.selected[0];
        if (obj.type === "i-text") {
          setSelectedTextId((obj as any).id);
        }
      }
    });

    fabricCanvas.on("selection:cleared", () => {
      setSelectedTextId(null);
    });

    return () => {
      fabricCanvas.off("selection:created");
      fabricCanvas.off("selection:cleared");
    };
  }, [fabricCanvas, imageSrc, initialTexts]);

  // Handle adding new objects based on active tool
  useEffect(() => {
    if (!fabricCanvas) return;

    const handleCanvasClick = (event: TPointerEventInfo) => {
     if (!event.viewportPoint || !fabricCanvas) return;
      
     const { x, y } = event.viewportPoint;
      
     switch (activeTool) {
        case "text":
          if (!event.target) {
            const newText = new IText("Double click to edit", {
              left: x,
              top: y,
              fontSize: 24,
              fill: "#000000",
              fontFamily: "Arial",
              selectable: true,
              hasControls: true,
            });
    
            // Set custom ID
            (newText as any).id = `text-${Date.now()}`;
    
            newText.on('selected', () => {
              setSelectedTextId((newText as any).id);
            });
            
            newText.on('deselected', () => {
              setSelectedTextId(null);
            });
    
            fabricCanvas.add(newText);
            fabricCanvas.setActiveObject(newText);
            newText.enterEditing();
            newText.selectAll();
          }
          break;
    
        case "rectangle":
          if (!event.target) {
            const rect = new Rect({
              left: x,
              top: y,
              width: 100,
              height: 100,
              fill: "#ffffff",
              stroke: "#000000",
              strokeWidth: 1,
              selectable: true,
              hasControls: true,
            });
            fabricCanvas.add(rect);
          }
          break;
    
        case "circle":
          if (!event.target) {
            const circle = new Circle({
              left: x,
              top: y,
              radius: 50,
              fill: "#ffffff",
              stroke: "#000000",
              strokeWidth: 1,
              selectable: true,
              hasControls: true,
            });
            fabricCanvas.add(circle);
          }
          break;
      }
    };

    fabricCanvas.on("mouse:down", handleCanvasClick);

    return () => {
      fabricCanvas.off("mouse:down", handleCanvasClick);
    };
  }, [fabricCanvas, activeTool]);

  const addImageToCanvas = (file: File) => {
    if (!fabricCanvas) return;

    const reader = new FileReader();
    reader.onload = (e) => {

        if (!e.target?.result) return;

      FabricImage.fromURL(e.target.result as string, {
      crossOrigin: 'anonymous'
    }).then((img: FabricImage) =>  {
        img.scaleToWidth(200);
        img.set({
          left: 100,
          top: 100,
          selectable: true,
          hasControls: true,
        });
        fabricCanvas.add(img);
        fabricCanvas.renderAll();
      });
    };
    reader.readAsDataURL(file);
  };

  const updateText = (updatedText: TextElement) => {
    setTexts(prev => prev.map(text => 
      text.id === updatedText.id ? updatedText : text
    ));

    if (fabricCanvas) {
      const textObj = fabricCanvas.getObjects().find(obj => 
        obj.type === "i-text" && (obj as any).id === updatedText.id
      ) as IText;

      if (textObj) {
        textObj.set({
          text: updatedText.content,
          fill: updatedText.color,
          fontFamily: updatedText.fontFamily,
          fontWeight: updatedText.isBold ? "bold" : "normal",
          fontStyle: updatedText.isItalic ? "italic" : "normal",
          underline: updatedText.isUnderline,
          backgroundColor: updatedText.backgroundColor !== "none" 
            ? updatedText.backgroundColor 
            : undefined,
        });
        fabricCanvas.renderAll();
      }
    }
  };

  const deleteText = (id: string) => {
    setTexts(prev => prev.filter(text => text.id !== id));
    setSelectedTextId(null);

    if (fabricCanvas) {
      const textObj = fabricCanvas.getObjects().find(obj => 
        obj.type === "i-text" && (obj as any).id === id
      );

      if (textObj) {
        fabricCanvas.remove(textObj);
        fabricCanvas.renderAll();
      }
    }
  };

  const duplicateText = () => {
    if (!selectedTextId || !fabricCanvas) return;

    const textObj = fabricCanvas.getObjects().find(obj => 
      obj.type === "i-text" && (obj as any).id === selectedTextId
    ) as IText;

    if (textObj) {
      const newText = new IText(textObj.text, {
        left: (textObj.left || 0) + 20,
        top: (textObj.top || 0) + 20,
        fontSize: textObj.fontSize,
        fill: textObj.fill,
        fontFamily: textObj.fontFamily,
        fontWeight: textObj.fontWeight,
        fontStyle: textObj.fontStyle,
        underline: textObj.underline,
        backgroundColor: textObj.backgroundColor,
        selectable: true,
        hasControls: true,
        id: `text-${Date.now()}`,
      });

      newText.on("selected", () => {
        setSelectedTextId(newText.id);
      });

      newText.on("deselected", () => {
        setSelectedTextId(null);
      });

      fabricCanvas.add(newText);
      fabricCanvas.setActiveObject(newText);
      fabricCanvas.renderAll();

      setTexts(prev => [...prev, {
        id: newText.id,
        content: newText.text || "",
        x: newText.left || 0,
        y: newText.top || 0,
        fontSize: newText.fontSize || 24,
        color: newText.fill?.toString() || "#000000",
        fontFamily: newText.fontFamily || "Arial",
        isBold: newText.fontWeight === "bold",
        isItalic: newText.fontStyle === "italic",
        isUnderline: newText.underline,
        backgroundColor: newText.backgroundColor?.toString() || "none",
      }]);
    }
  };

  const positionText = (position: "vertical" | "horizontal" | "center") => {
    if (!selectedTextId || !fabricCanvas) return;

    const textObj = fabricCanvas.getObjects().find(obj => 
      obj.type === "i-text" && (obj as any).id === selectedTextId
    ) as IText;

    if (textObj) {
      let newX = textObj.left || 0;
      let newY = textObj.top || 0;

      if (position === "vertical" || position === "center") {
        newY = (canvasSize.height - (textObj.height || 0)) / 2;
      }
      if (position === "horizontal" || position === "center") {
        newX = (canvasSize.width - (textObj.width || 0)) / 2;
      }

      textObj.set({
        left: newX,
        top: newY,
      });
      fabricCanvas.renderAll();

      setTexts(prev => prev.map(text => 
        text.id === selectedTextId ? {
          ...text,
          x: newX,
          y: newY
        } : text
      ));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 flex-1 rounded-md items-center justify-center min-h-[50vh] mx-auto max-w-[699px] w-full max-md:px-4 md:p-8 bg-[#F0F3F5]">
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          className="border rounded-md bg-white shadow-sm"
        />

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTool("text")}
            className={`px-4 py-2 rounded ${activeTool === "text" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Text
          </button>
          <button
            onClick={() => setActiveTool("rectangle")}
            className={`px-4 py-2 rounded ${activeTool === "rectangle" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Rectangle
          </button>
          <button
            onClick={() => setActiveTool("circle")}
            className={`px-4 py-2 rounded ${activeTool === "circle" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Circle
          </button>
          <button
            onClick={() => setActiveTool("image")}
            className={`px-4 py-2 rounded ${activeTool === "image" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Image
          </button>
          {activeTool === "image" && (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  addImageToCanvas(e.target.files[0]);
                }
              }}
              className="hidden"
              id="image-upload"
            />
          )}
        </div>
      </div>

      {selectedText && (
        <ControlPanel
          text={selectedText}
          onChange={updateText}
          onDelete={() => deleteText(selectedText.id)}
          onDuplicate={duplicateText}
          onPosition={positionText}
          containerSize={canvasSize}
        />
      )}
    </div>
  );
}