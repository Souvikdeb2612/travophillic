import Image from "next/image";
import AboutUs from "./_components/AboutUs";
import MaxWidthContainer from "./_components/MaxWidthContainer";
import Service from "./_components/Service";

export default function Home() {
  return (
    <div className="px-2 overflow-none">
      <div className="relative h-[calc(100vh-70px)] overflow-hidden rounded-md">
        <Image src="/hero.jpg" alt="mountains" fill className="min-w-[800px]" />
        <div className="absolute top-20 right-8 text-right">
          <h1 className="text-white text-4xl md:text-6xl font-bold  leading-loose">
            <span className="text-accent-foreground">
              {" "}
              Explore. Dream. Discover.
            </span>
            <br />
            Start your journey today.
          </h1>
        </div>
      </div>
      <MaxWidthContainer>
        <AboutUs />
        <Service />
      </MaxWidthContainer>
    </div>
  );
}
