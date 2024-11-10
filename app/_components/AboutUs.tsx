import { HandHelping, Hotel, SmilePlus } from "lucide-react";
import React from "react";

function AboutUs() {
  return (
    <div className="my-5">
      <h2 className="font-medium text-xl mb-2">About Us</h2>
      <div className="grid grid-cols-3">
        <p className="col-span-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          sapien nec felis tempus fermentum. Nullam auctor, eros quis
          condimentum tincidunt, lig
        </p>
        <div className="flex gap-4 justify-center">
          <SmilePlus />
          <Hotel />
          <HandHelping />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
