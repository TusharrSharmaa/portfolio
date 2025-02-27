import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Welcome to Our Platform
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Empowering businesses with innovative solutions to scale and grow.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/about">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition">
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-lg font-semibold transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
