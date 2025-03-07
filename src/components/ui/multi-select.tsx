"use client";

import * as React from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export type OptionType = {
  label: string;
  value: string;
};

type MultiSelectProps = {
  options: OptionType[];
  selected: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
};

const MultiSelect = ({
  options = [],
  selected = [],
  onChange,
  placeholder = "Select options...",
  emptyMessage = "No options found.",
  className,
  disabled = false,
}: MultiSelectProps) => {
  const [open, setOpen] = React.useState(false);

  // Ensure options and selected are always arrays with stable references
  const safeOptions = React.useMemo(
    () => (Array.isArray(options) ? options : []),
    [options]
  );

  const safeSelected = React.useMemo(
    () => (Array.isArray(selected) ? selected : []),
    [selected]
  );

  const handleSelect = (value: string) => {
    const newSelected = safeSelected.includes(value)
      ? safeSelected.filter((item) => item !== value)
      : [...safeSelected, value];

    onChange(newSelected);
  };

  const handleRemove = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(safeSelected.filter((item) => item !== value));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full min-h-10 h-auto justify-between border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] bg-white text-left font-normal",
            className
          )}
          disabled={disabled}
          type="button"
        >
          <div className="flex flex-wrap gap-1 items-center overflow-hidden">
            {safeSelected.length === 0 && (
              <span className="text-gray-500">{placeholder}</span>
            )}

            {safeSelected.map((value) => {
              const option = safeOptions.find((opt) => opt.value === value);
              return option ? (
                <Badge
                  key={value}
                  variant="secondary"
                  className="mr-1 mb-1 bg-gray-100 text-gray-800 hover:bg-gray-200"
                >
                  {option.label}
                  <button
                    className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => handleRemove(value, e)}
                    type="button"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {option.label}</span>
                  </button>
                </Badge>
              ) : null;
            })}
          </div>
          <div className="ml-auto self-center">
            {open ? (
              <ChevronUp className="h-4 w-4 opacity-50" />
            ) : (
              <ChevronDown className="h-4 w-4 opacity-50" />
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full p-2"
        align="start"
        sideOffset={5}
        style={{ zIndex: 50 }}
      >
        <div className="max-h-64 overflow-y-auto">
          {safeOptions.length === 0 ? (
            <div className="py-6 text-center text-sm text-gray-500">
              {emptyMessage}
            </div>
          ) : (
            safeOptions.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 px-2 py-1.5 hover:bg-white rounded-md cursor-pointer mb-3"
                onClick={() => handleSelect(option.value)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(option.value);
                  }
                }}
              >
                <Checkbox
                  id={`option-${option.value}`}
                  checked={safeSelected.includes(option.value)}
                  onCheckedChange={() => {}}
                  className="data-[state=checked]:bg-[#B800B8] data-[state=checked]:border-[#B800B8]"
                  onClick={(e) => e.stopPropagation()}
                />
                <label
                  htmlFor={`option-${option.value}`}
                  className="text-sm flex-grow cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  {option.label}
                </label>
              </div>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;
