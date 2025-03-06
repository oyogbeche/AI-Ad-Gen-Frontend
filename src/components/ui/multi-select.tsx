"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface OptionType {
  value: string;
  label: string;
  display: string;
}

interface CustomMultiSelectProps {
  options: OptionType[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

const CustomMultiSelect = ({
  options,
  selected = [],
  onChange,
  placeholder = "Select options",
}: CustomMultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:border-[#B800B8] focus:border-[#B800B8] focus:ring-[#B800B8]"
      >
        {selected.length > 0 ? (
          selected.map((value) => {
            const option = options.find((opt) => opt.value === value);
            return (
              <Badge
                key={value}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {option?.display || option?.label || value}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(value);
                  }}
                ></button>
              </Badge>
            );
          })
        ) : (
          <span className="text-muted-foreground">{placeholder}</span>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="p-2 space-y-2">
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={option.value}
                  checked={selected.includes(option.value)}
                  onChange={() => handleSelect(option.value)}
                  className="w-4 h-4 border-gray-300 rounded text-[#B800B8] focus:ring-[#B800B8]"
                />
                <label htmlFor={option.value} className="text-sm">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomMultiSelect;
