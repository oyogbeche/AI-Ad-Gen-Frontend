"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UserAvatarProps {
  name: string
  imageUrl?: string
  onSignOut?: () => void
  onViewProfile?: () => void
  onSettings?: () => void
}

export function UserAvatar({
  name,
  imageUrl,
  onSignOut = () => {},
  onViewProfile = () => {},
  onSettings = () => {},
}: UserAvatarProps) {
  const [isOpen, setIsOpen] = useState(false)

  
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-pink-100 hover:bg-pink-200 transition-colors"
          aria-label="User menu"
        >
          <Avatar className="h-10 w-10 border-0 bg-white">
            {imageUrl ? <AvatarImage src={imageUrl} alt={name} /> : initials}
            <AvatarFallback className="bg-white text-gray-400">
  {initials || <User className="h-5 w-5" />}
</AvatarFallback>
          </Avatar>
          <span className="text-xl font-medium text-gray-900">{name}</span>
          <ChevronDown className={`h-5 w-5 text-purple-800 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={onViewProfile}>View Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={onSettings}>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onSignOut} className="text-red-500">
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

