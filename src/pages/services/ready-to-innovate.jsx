// import Image from "next/image";
// import img from "../../../public/paperlight.png";

// const ReadytoInnovate = () => {
//   return (
//     <div className="relative w-full h-[500px] p-20 bg-gradient-to-r from-[#1A1A1A] via-[#000000] to-[#000000] 3xl:max-w-[1920px] 3xl:mx-auto">
//       <div className="absolute w-full z-0">
//         <Image
//           src={img}
//           alt="Background Image"
//           objectFit="cover"
//           className="w-[20%] flex justify-end items-end place-content-end opacity-100"
//         />
//       </div>
//       <div className="relative z-10 text-left">
//         <h1 className="text-[#FFEF00] font-[800] text-[28px] sm:text-[33px]">Ready to Innovate?</h1>
//         <p className="text-[#FFFFFF] text-[26px] mt-4">
//           Partner with Ergobite to bring your product vision to life. Contact us today to discuss your project and discover how our product development and engineering services can drive your business forward. Let us help you transform your ideas into reality and achieve your business goals.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ReadytoInnovate;


import Image from "next/image";
import img from "../../../public/paperlight.png";

const ReadytoInnovate = () => {
  return (
    <div className="relative w-full sm:h-[500px] sm:p-20 p-10 bg-gradient-to-r from-[#1A1A1A] via-[#000000] to-[#000000] 3xl:max-w-[1920px] 3xl:mx-auto">
      <div className="absolute right-0 bottom-0 z-0">
        <Image
          src={img}
          alt="Background Image"
          layout="intrinsic"
          width={500}
          height={500}
          className="hidden lg:block opacity-100"
        />
      </div>
      <div className="relative z-10 text-left">
        <h2 className="text-[#FFEF00] font-[800] sm:text-[33px]">Ready to Innovate?</h2>
        <p className="text-[#FFFFFF] sm:text-[26px] w-[85%] mt-4">
          Partner with Ergobite to bring your product vision to life. Contact us today to discuss your project and discover how our product development and engineering services can drive your business forward. Let us help you transform your ideas into reality and achieve your business goals.
        </p>
      </div>
    </div>
  );
};

export default ReadytoInnovate;

