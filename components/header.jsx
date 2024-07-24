
// import Image from 'next/image';
// import img from 'public/ergo-logo.png';

// const header = () => {

//   return (
//     <div className="fixed flex md:justify-center w-full md:mx-auto bg-[#000000CC] h-[102px] z-50">
//       <div className="flex gap-[596px] ">
//         {/* Company Logo */}
//         <div className="flex justify-items-start place-items-center">
//           <Image className='w-[216px] h-[54px]' src={img} alt="company logo" />
//         </div>
//         {/* Desktop Navigation */}
//         <nav className="hidden xl:flex justify-items-center place-items-center gap-[42px]  ">
//             <NavButton href="/services" text="Services" />
//             <NavButton href="/case-studies" text="Case Studies" />
//             <NavButton href="/blogs" text="Blogs" />
//             <NavButton href="/Aboutus" text="About Us"  />
//             <button className=" gap-[512px] rounded-[42px] w-[120px] h-[50px] bg-[#FFEF00] text-black">Contact Us</button>
//         </nav>
//       </div>
//     </div>
//   );
// };

// // NavButton component for individual navigation buttons (desktop)
// const NavButton = ({ href, text, onClick }) => (
//   <a href={href} className={`text-white font-medium transition-colors`} onClick={onClick}>{text} </a>
// );

// export default header;

import { useState, useEffect } from 'react';
import Image from 'next/image';
import img from 'public/ergo-logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.1;
      setScrolled(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed flex md:justify-center w-full md:mx-auto  ${scrolled ? 'h-[60px] bg-black' : 'h-[102px] bg-[#000000CC]'} transition-all duration-300 z-50`}>
      <div className="flex ">
        {/* Company Logo */}
        <div className="flex justify-items-start place-items-center">
          <Image className={`w-[216px] h-[54px] ${scrolled ?  'w-[140px] h-[33px]' : 'w-[216px] h-[54px]' } `} src={img} alt="company logo" />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex justify-items-center place-items-center gap-[42px]">
          <NavButton href="/services" text="Services" />
          <NavButton href="/case-studies" text="Case Studies" />
          <NavButton href="/blogs" text="Blogs" />
          <NavButton href="/Aboutus" text="About Us" />
          <button className="rounded-[42px] w-[120px] h-[50px] bg-[#FFEF00] text-black">Contact Us</button>
        </nav>
      </div>
    </div>
  );
};

// NavButton component for individual navigation buttons (desktop)
const NavButton = ({ href, text, onClick }) => (
  <a href={href} className={`text-white font-medium transition-colors`} onClick={onClick}>{text}</a>
);

export default Header;

