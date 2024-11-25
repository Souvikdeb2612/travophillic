import { HandHelping, Hotel, SmilePlus } from "lucide-react";
import React from "react";

function AboutUs() {
  return (
    <div className="py-10">
      <h2
        className="font-medium text-xl mb-2 text-accent
      "
      >
        # About Us
      </h2>
      <div className="grid grid-cols-2">
        <p className="text-2xl">
          we believe that travel is more than just visiting new places—it's
          about creating unforgettable memories and experiencing the world in a
          way that transforms you. Whether you're an adventurer seeking the
          thrill of the unknown or a traveler in search of cultural immersion,
          we're here to inspire and guide your journey.
        </p>
        <div className="flex gap-6 justify-center">
          <div className="flex gap-1.5 items-center">
            <SmilePlus size={50} />
            <div>
              <p className="text-xl font-medium">200+</p>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <Hotel size={50} />
            <div>
              <p className="text-xl font-medium">65+</p>
              <p>Top Hotels</p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <HandHelping size={50} />
            <div>
              <p className="text-xl font-medium">250+</p>
              <p>Experienced guide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
