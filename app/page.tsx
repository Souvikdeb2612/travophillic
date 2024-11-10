import Image from "next/image";
import AboutUs from "./_components/AboutUs";
import MaxWidthContainer from "./_components/MaxWidthContainer";

export default function Home() {
  return (
    <div className="px-2 overflow-none">
      <div className="relative h-[calc(100vh-70px)] overflow-hidden rounded-md">
        <Image src="/hero.jpg" alt="mountains" fill className="min-w-[800px]" />
      </div>
      <MaxWidthContainer>
        <AboutUs />
      </MaxWidthContainer>
    </div>
  );
}
