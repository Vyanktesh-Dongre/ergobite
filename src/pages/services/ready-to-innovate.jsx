import Image from "next/image";
import img from "../../../public/paperlight.png";

const ReadytoInnovate = () => {
  return (
    <div className="relative w-full h-[500px] p-20 bg-gradient-to-r from-[#1A1A1A] via-[#000000] to-[#000000]">
      <div className="absolute w-full z-0">
        <Image
          src={img}
          alt="Background Image"
          objectFit="cover"
          className="w-[20%] flex justify-end items-end place-content-end opacity-100"
        />
      </div>
      <div className="relative z-10 text-left">
        <h1 className="text-[#FFEF00] font-[800] text-[28px] sm:text-[33px]">Ready to Innovate?</h1>
        <p className="text-[#FFFFFF] text-[26px] mt-4">
          Partner with Ergobite to bring your product vision to life. Contact us today to discuss your project and discover how our product development and engineering services can drive your business forward. Let us help you transform your ideas into reality and achieve your business goals.
        </p>
      </div>
    </div>
  );
};

export default ReadytoInnovate;
