import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Service() {
  return (
    <div className="py-10">
      <h2 className="font-medium text-xl mb-2 text-accent"># Our Services</h2>
      <p className="text-2xl mb-6">Explore endless options with our service</p>
      <div className="grid grid-cols-2 h-[500px] grid-rows-2 gap-2">
        <Skeleton className="w-full h-full row-span-2" />
        <Skeleton className="w-full h-full row-span-1" />
        <Skeleton className="w-full h-full row-span-1" />
      </div>
    </div>
  );
}

export default Service;
