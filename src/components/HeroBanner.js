import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen flex items-center bg-gray-900 text-white">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/banner.jpg"
          alt="left-img"
          className=" w-full h-full object-cover"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          quality={80}
        />
      </div>
      <div className="container">
        <div className="relative max-w-3xl">
          <h4>Hello, my name is</h4>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">James Thompson</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">I am the pixel crafter based in Canada. I make the visual to be more interactive.</p>
          <div className="mt-6">
            <Link href="/about">Download CV</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
