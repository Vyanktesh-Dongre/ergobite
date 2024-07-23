// import Image from "next/image"

// const ValuedPartners = () => {

//     return (
//         <div className="w-full py-10" style={{ background: 'linear-gradient(180deg, #F3F8FF 0%, #E7EFFA 100%)' }}>
//         <div className="">
//             <div className=" text-center">
//                 <h1 className="text-[36px] font-bold text-[#02033B]">Our Valued Partners</h1>
//                 <h2 className="text-[18px]">Choose Ergobite for cutting-edge solutions, client-focused service, and a proven track record of success.</h2> 
//             </div>
//         </div>
       

//     </div>
//     )
// }


// export default ValuedPartners
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import partner1 from '../public/react.png';
// import partner2 from '../public/html.png';
// import partner3 from '../public/saas.png';
// import partner4 from '../public/jquery.png';

// const ValuedPartners = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ]
//     };

//     const partners = [
//         { src: partner1, alt: 'Partner 1' },
//         { src: partner2, alt: 'Partner 2' },
//         { src: partner3, alt: 'Partner 3' },
//         { src: partner4, alt: 'Partner 4' },
//     ];

//     return (
//         <div className="w-full py-10" style={{ background: 'linear-gradient(180deg, #F3F8FF 0%, #E7EFFA 100%)' }}>
//             <div className="text-center">
//                 <h1 className="text-[36px] font-bold text-[#02033B]">Our Valued Partners</h1>
//                 <h2 className="text-[18px]">Choose Ergobite for cutting-edge solutions, client-focused service, and a proven track record of success.</h2> 
//             </div>
//             <div className="mt-10">
//                 <Slider {...settings}>
//                     {partners.map((partner, index) => (
//                         <div key={index} className="px-2">
//                             <Image src={partner.src} alt={partner.alt} layout="responsive" className="rounded-lg" />
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default ValuedPartners;

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partner1 from '../public/paintminds.png';
import partner2 from '../public/smoor.png';
import partner3 from '../public/revomix.png';
import partner4 from '../public/triphobo.png';
import partner5 from '../public/zlade.png';
import partner6 from '../public/zippia.png';
import partner7 from '../public/cradlewise.png';
import partner8 from '../public/firsteigen.png';

const ValuedPartners = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const partners = [
        { src: partner1, alt: 'Partner 1', width: 200, height: 100 },
        { src: partner2, alt: 'Partner 2', width: 250, height: 150 },
        { src: partner3, alt: 'Partner 3', width: 300, height: 200 },
        { src: partner4, alt: 'Partner 4', width: 220, height: 110 },
        { src: partner5, alt: 'Partner 5', width: 250, height: 150 },
        { src: partner6, alt: 'Partner 3', width: 300, height: 200 },
        { src: partner7, alt: 'Partner 4', width: 220, height: 110 },
        { src: partner8, alt: 'Partner 5', width: 250, height: 150 },
    ];

    return (
        <div className="w-full py-10 mt-10 " style={{ background: 'linear-gradient(180deg, #F3F8FF 0%, #E7EFFA 100%)' }}>
            <div className="text-center">
                <h1 className="text-[36px] font-bold text-[#02033B]">Our Valued Partners</h1>
                <h2 className="text-[18px]">We proudly collaborate with a diverse range of clients, delivering tailored solutions that drive their success.</h2> 
            </div>
            <div className="mt-[84px]">
                <Slider {...settings}>
                    {partners.map((partner, index) => (
                        <div key={index} className="px-2 flex justify-center">
                            <div style={{ width: partner.width, height: partner.height }}>
                                <Image 
                                    src={partner.src} 
                                    alt={partner.alt} 
                                    width={partner.width} 
                                    height={partner.height} 
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ValuedPartners;
