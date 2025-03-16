"use client";

import type { TextElement } from "./image-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ControlPanelProps {
  text: TextElement;
  onChange: (text: TextElement) => void;
  onDelete: () => void;
  containerSize: { width: number; height: number };
}

const fontFamilies = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Palatino",
  "Garamond",
  "Comic Sans MS",
  "Impact",
];

export function ControlPanel({
  text,
  onChange,
  onDelete,
  containerSize,
}: ControlPanelProps) {
  const toggleStyle = (style: keyof TextElement) => {
    onChange({ ...text, [style]: !text[style] });
  };

  const positionText = (position: "vertical" | "horizontal" | "center") => {
    let newX = text.x;
    let newY = text.y;

    if (position === "vertical" || position === "center") {
      newY = (containerSize.height - text.fontSize) / 2;
    }
    if (position === "horizontal" || position === "center") {
      newX = (containerSize.width - text.fontSize * text.content.length) / 2;
    }

    onChange({ ...text, x: newX, y: newY });
  };

  return (
    <div className="px-4 py-2 border rounded-lg bg-white w-[60%] max-w-[516px]">
      {/* <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Text Properties</h3>
        <Button variant="destructive" size="sm" onClick={onDelete}>
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* <div className="space-y-2">
          <Label htmlFor="text-content">Text Content</Label>
          <Input
            id="text-content"
            value={text.content}
            onChange={(e) => onChange({ ...text, content: e.target.value })}
          />
        </div> */}

        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              id="text-color"
              type="color"
              value={text.color}
              onChange={(e) => onChange({ ...text, color: e.target.value })}
              className="w-12 h-10 p-1"
            />
            <Input
              value={text.color}
              onChange={(e) => onChange({ ...text, color: e.target.value })}
              className="flex-1"
            />
          </div>
        </div>

        {/* <div className="space-y-2">
          <Label htmlFor="font-size">Font Size</Label>
          <div className="flex gap-2 items-center">
            <Input
              id="font-size"
              type="number"
              min="8"
              max="120"
              value={text.fontSize}
              onChange={(e) => onChange({ ...text, fontSize: Number(e.target.value) })}
            />
            <span className="text-sm text-muted-foreground">px</span>
          </div>
        </div> */}

        {/* <div className="space-y-2">
          <Label htmlFor="font-family">Font Family</Label>
          <Select value={text.fontFamily} onValueChange={(value) => onChange({ ...text, fontFamily: value })}>
            <SelectTrigger id="font-family">
              <SelectValue placeholder="Select font" />
            </SelectTrigger>
            <SelectContent>
              {fontFamilies.map((font) => (
                <SelectItem key={font} value={font} style={{ fontFamily: font }}>
                  {font}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> */}

        <div className="space-y-2">
          <div className="flex gap-2">
            <Button variant={text.isBold ? "default" : "outline"} onClick={() => toggleStyle("isBold")}>
              Bold
            </Button>
            <Button variant={text.isItalic ? "default" : "outline"} onClick={() => toggleStyle("isItalic")}>
              Italic
            </Button>
            <Button variant={text.isUnderline ? "default" : "outline"} onClick={() => toggleStyle("isUnderline")}>
              Underline
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2">
            <Button onClick={() => positionText("vertical")}>Vertical Center</Button>
            <Button onClick={() => positionText("horizontal")}>Horizontal Center</Button>
            <Button onClick={() => positionText("center")}>Center</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
