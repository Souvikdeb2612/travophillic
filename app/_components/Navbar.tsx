import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-2 h-[60px]">
      <div className="text-3xl font-semibold">Rove Travels</div>
      <div className="flex gap-2 max-sm:hidden">
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
      </div>
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
