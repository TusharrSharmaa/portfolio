import Link from 'next/link';
const DefaultLink = (props) => {
  return (
    <Link href={props.url} className="p-0 text-[12px] align-top text-[#ececec] font-light uppercase tracking-[0.215em] relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-gray-500 before:-bottom-2 before:left-0 before:right-0 before:m-auto before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-3/4">{props.title}</Link>
  );
};

export default DefaultLink;