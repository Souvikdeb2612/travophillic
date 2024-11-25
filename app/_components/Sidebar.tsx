import React from "react";
import { SheetDescription, SheetHeader } from "@/components/ui/sheet";
import Link from "next/link";

function Sidebar() {
  return (
    <SheetHeader>
      <SheetDescription>
        <Link href="/" className="block p-2">
          Home
        </Link>
        <Link href="/" className="block p-2">
          Home
        </Link>
        <Link href="/" className="block p-2">
          Home
        </Link>
        <Link href="/" className="block p-2">
          Home
        </Link>
      </SheetDescription>
    </SheetHeader>
  );
}

export default Sidebar;
