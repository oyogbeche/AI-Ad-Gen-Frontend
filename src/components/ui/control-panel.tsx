"use client";

import type { TextElement } from "./image-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Trash2 } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useState } from "react";

interface ControlPanelProps {
  text: TextElement;
  onChange: (text: TextElement) => void;
  onDelete: () => void;
  containerSize: { width: number; height: number };
}

// const fontFamilies = [
//   "Arial",
//   "Verdana",
//   "Helvetica",
//   "Times New Roman",
//   "Courier New",
//   "Georgia",
//   "Palatino",
//   "Garamond",
//   "Comic Sans MS",
//   "Impact",
// ];

export function ControlPanel({
  text,
  onChange,
  
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
    <div className="border rounded-lg flex items-center justify-center bg-white gap-2 box-border p-2">
      {/* <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Text Properties</h3>
        <Button variant="destructive" size="sm" onClick={onDelete}>
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div> */}

        {/* <div className="space-y-2">
          <Label htmlFor="text-content">Text Content</Label>
          <Input
            id="text-content"
            value={text.content}
            onChange={(e) => onChange({ ...text, content: e.target.value })}
          />
        </div> */}

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

        <div className="">
          <div className="flex gap-2 border rounded-[8px] p-2">
            <Button
              onClick={() => toggleStyle("isBold")}
              className={
                !text.isBold
                  ? `bg-transparent hover:bg-transparent border-none text-black shadow-none`
                  : "bg-blue-500 hover:bg-blue-500 border-none shadow-none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  d="M2 0.5H7.625C8.42819 0.500252 9.21582 0.721542 9.90162 1.13963C10.5874 1.55772 11.1449 2.15648 11.5131 2.87033C11.8812 3.58418 12.0458 4.38558 11.9889 5.18675C11.9319 5.98792 11.6555 6.75795 11.19 7.4125C11.9974 7.91479 12.6191 8.66652 12.961 9.55384C13.3028 10.4411 13.3462 11.4157 13.0845 12.3299C12.8228 13.244 12.2704 14.048 11.5108 14.6201C10.7512 15.1921 9.82589 15.501 8.875 15.5H2C1.66848 15.5 1.35054 15.3683 1.11612 15.1339C0.881696 14.8995 0.75 14.5815 0.75 14.25V1.75C0.75 1.41848 0.881696 1.10054 1.11612 0.866116C1.35054 0.631696 1.66848 0.5 2 0.5ZM3.25 9.25V13H8.875C9.37228 13 9.84919 12.8025 10.2008 12.4508C10.5525 12.0992 10.75 11.6223 10.75 11.125C10.75 10.6277 10.5525 10.1508 10.2008 9.79917C9.84919 9.44754 9.37228 9.25 8.875 9.25H3.25ZM7.625 6.75C8.12228 6.75 8.59919 6.55246 8.95083 6.20083C9.30246 5.84919 9.5 5.37228 9.5 4.875C9.5 4.37772 9.30246 3.90081 8.95083 3.54917C8.59919 3.19754 8.12228 3 7.625 3H3.25V6.75H7.625Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
            <Button
              onClick={() => toggleStyle("isItalic")}
              className={
                !text.isItalic
                  ? `bg-transparent hover:bg-transparent border-none text-black shadow-none`
                  : "bg-blue-500 hover:bg-blue-500 border-none shadow-none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.8359 3.33203H8.33594"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6641 16.668H4.16406"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 3.33203L7.5 16.6654"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              onClick={() => toggleStyle("isUnderline")}
              className={
                !text.isUnderline
                  ? `bg-transparent hover:bg-transparent text-black border-none shadow-none`
                  : "bg-blue-500 hover:bg-blue-500 border-none shadow-none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 2.5V8.33333C5 9.65942 5.52678 10.9312 6.46447 11.8689C7.40215 12.8065 8.67392 13.3333 10 13.3333C11.3261 13.3333 12.5979 12.8065 13.5355 11.8689C14.4732 10.9312 15 9.65942 15 8.33333V2.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33594 17.5H16.6693"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>

          <div className="flex gap-2 border p-2 rounded-[8px]">
            <Button
              onClick={() => positionText("vertical")}
              className={
                "bg-blue-500 hover:bg-blue-500 border-none shadow-none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_7239_20887"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="currentColor" />
                </mask>
                <g mask="url(#mask0_7239_20887)">
                  <path
                    d="M6.12057 17.7078V5.44029H8.21974V17.7078H6.12057ZM11.7777 12.7078V5.44029H13.8768V12.7078H11.7777ZM2.08203 3.5332V2.2832H17.9154V3.5332H2.08203Z"
                    fill="white"
                  />
                </g>
              </svg>
            </Button>
            <Button
              onClick={() => positionText("center")}
              className={
                "bg-blue-500 hover:bg-blue-500 border-none shadow-none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_7239_20891"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="currentColor" />
                </mask>
                <g mask="url(#mask0_7239_20891)">
                  <path
                    d="M6.08036 17.0837V10.6253H2.08203V9.37533H6.08036V2.91699H8.17974V9.37533H11.8177V5.41699H13.917V9.37533H17.9154V10.6253H13.917V14.5837H11.8177V10.6253H8.17974V17.0837H6.08036Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Button>
            <Button
              onClick={() => positionText("horizontal")}
              className={
                "bg-blue-500 hover:bg-blue-500 border-none shadow-none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_7239_20895"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="currentColor" />
                </mask>
                <g mask="url(#mask0_7239_20895)">
                  <path
                    d="M2.08203 17.7078V16.4578H17.9154V17.7078H2.08203ZM6.12057 14.5507V2.2832H8.21974V14.5507H6.12057ZM11.7777 14.5507V7.2832H13.8768V14.5507H11.7777Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Button>
          </div>

        <div className="flex items-center justify-center gap-1 p-2 rounded-[8px] border w-[120px]">
          <Input
            id="text-color"
            type="color"
            value={text.color}
            onChange={(e) => onChange({ ...text, color: e.target.value })}
            className="w-2/5 border-none shadow-none m-0 p-0 aspect-square"
          />
          <Input
            value={text.color}
            onChange={(e) => onChange({ ...text, color: e.target.value })}
            className="border-none shadow-none m-0 p-0"
          />
        </div>
    </div>
  );
}
