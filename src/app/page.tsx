import Image from "next/image";
import HeroPage from "./components/hero-page";
import Navbar from "./components/Navbar";
import background from "./assests/images/a-chosen-soul-sNQf2ySMcj8-unsplash.jpg";
export default function Home() {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className="h-full relative">
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-full [clip-path:circle(50%_at_50%_100%)] object-cover origin-center">
            <Image
              src={background}
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <Navbar />
        <HeroPage />
      </div>
    </section>
  );
}
