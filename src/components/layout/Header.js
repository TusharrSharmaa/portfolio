'use client';
import Link from 'next/link';
import DefaultLink from '../DefaultLink';
const Header = () => {

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white z-10">
      <nav className=" container mx-auto flex justify-between items-center">
        <div className='mr-2 py-[20px]'>
        <Link href="" className="font-extrabold text-[23px]">Ryan</Link>
        </div>
        <ul className="flex gap-4 py-[20px]">
          <li><DefaultLink title='Home' url='/'></DefaultLink></li>
          <li><DefaultLink title='About' url='/'></DefaultLink></li>
          <li><DefaultLink title='Services' url='/'></DefaultLink></li>
          <li><DefaultLink title='Portfolio' url='/'></DefaultLink></li>
          <li><DefaultLink title='Blog' url='/'></DefaultLink></li>
          <li><DefaultLink title='Contact' url='/'></DefaultLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;