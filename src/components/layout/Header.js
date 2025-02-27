'use client';

import Link from 'next/link';
let linkStyle = "p-0 text-[12px] align-top text-[#ececec] font-light uppercase tracking-[0.215em] relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-gray-500 before:-bottom-2 before:left-0 before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-full";
const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <div className='mr-2'>
        <Link href="" className="font-extrabold text-[23px]">Ryan</Link>
        </div>
        <ul className="flex gap-4">
          <li><Link href="/" className="p-0 text-[12px] align-top text-[#ececec] font-light uppercase tracking-[0.215em] relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-gray-500 before:-bottom-2 before:left-0 before:right-0 before:m-auto before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-3/4">Home</Link></li>
          <li><Link href="/about" className="p-0 text-[12px] align-top text-[#ececec] font-light uppercase tracking-[0.215em] relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-gray-500 before:-bottom-2 before:left-0 before:right-0 before:m-auto before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-3/4">About Us</Link></li>
          <li><Link href="/about" className="p-0 text-[12px] align-top text-[#ececec] font-light uppercase tracking-[0.215em] relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-gray-500 before:-bottom-2 before:left-0 before:right-0 before:m-auto before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-3/4">Services</Link></li>
          <li><Link href="/about" className="p-0 text-[12px] align-top text-[#ececec] font-light uppercase tracking-[0.215em] relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-gray-500 before:-bottom-2 before:left-0 before:right-0 before:m-auto before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-3/4">Portfolio</Link></li>
          <li><Link href="/about" className="p-0 text-[12px] align-top text-[#ececec] font-light uppercase tracking-[0.215em] relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-gray-500 before:-bottom-2 before:left-0 before:right-0 before:m-auto before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-3/4">Blog</Link></li>
          <li><Link href="/contact" className="p-0 text-[12px] align-top text-[#ececec] font-light uppercase tracking-[0.215em] relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-gray-500 before:-bottom-2 before:left-0 before:right-0 before:m-auto before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-3/4">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;