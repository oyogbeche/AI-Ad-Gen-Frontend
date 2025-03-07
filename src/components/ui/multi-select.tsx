"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, X } from "lucide-react";
import * as React from "react";

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
  checkboxColor?: string;
};

export const MultiSelect = ({
  options = [],
  selected = [],
  onChange,
  placeholder = "Select options...",
  emptyMessage = "No options found.",
  className,
  disabled = false,
  checkboxColor = "#B800B8",
}: MultiSelectProps) => {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  // Ensure options and selected are always arrays
  const safeOptions = Array.isArray(options) ? options : [];
  const safeSelected = Array.isArray(selected) ? selected : [];

  // Get label for a value
  const getLabelForValue = (value: string) => {
    const option = safeOptions.find((opt) => opt.value === value);
    return option ? option.label : value;
  };

  const filteredOptions = React.useMemo(() => {
    return safeOptions.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [safeOptions, searchValue]);

  const handleSelect = (value: string) => {
    const newSelected = safeSelected.includes(value)
      ? safeSelected.filter((item) => item !== value)
      : [...safeSelected, value];

    onChange(newSelected);
  };

  const handleRemove = (value: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the popover
    const newSelected = safeSelected.filter((item) => item !== value);
    onChange(newSelected);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full h-auto min-h-10 justify-between border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] text-left font-normal",
            className
          )}
          disabled={disabled}
          type="button"
        >
          <div className="flex flex-wrap gap-1">
            {safeSelected.length === 0 ? (
              <span className="text-gray-500">{placeholder}</span>
            ) : (
              safeSelected.map((value) => (
                <div
                  key={value}
                  className="flex items-center bg-gray-100 rounded-md px-2 py-1"
                >
                  <span className="text-sm">{getLabelForValue(value)}</span>
                  <span
                    onClick={(e) => handleRemove(value, e)}
                    className="ml-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <X className="h-3 w-3" />
                  </span>
                </div>
              ))
            )}
          </div>
          <ChevronDown className="size-4 text-[#a0b1c9] opacity-50 ml-2 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 w-[var(--radix-popover-trigger-width)] border-gray-200"
        align="start"
      >
        <div className="flex flex-col">
          <div className="max-h-84 overflow-y-auto py-1">
            {filteredOptions.length === 0 ? (
              <div className="py-6 text-center text-sm text-gray-500">
                {emptyMessage}
              </div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="flex items-center px-[18px] py-4 hover:bg-gray-50 cursor-pointer"
                >
                  <div
                    className={cn(
                      "w-5 h-5 flex items-center justify-center rounded mr-3 border",
                      safeSelected.includes(option.value)
                        ? "border-none"
                        : "border-gray-300"
                    )}
                    style={{
                      backgroundColor: safeSelected.includes(option.value)
                        ? checkboxColor
                        : "white",
                    }}
                  >
                    {safeSelected.includes(option.value) && (
                      <Check className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <span className="text-sm">{option.label}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
