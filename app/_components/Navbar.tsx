import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-2 h-[60px]">
      <div className="text-3xl">Rove Travels</div>
      <div className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
