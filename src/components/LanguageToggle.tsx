"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useState } from "react";

export function LanguageToggle() {
  const [language, setLanguage] = useState("EN");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setLanguage("EN")}>
          English (EN)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage("አማ")}>
          አማርኛ (Amharic)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
