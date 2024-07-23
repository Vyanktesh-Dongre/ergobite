
// import Image from 'next/image';
// import img1 from '../public/ajax.png'
// import img2 from '../public/css.png'
// import img3 from '../public/html.png'
// import img4 from '../public/jquery.png'
// import img5 from '../public/saas.png'
// import img6 from '../public/angular.png'
// import img7 from '../public/react.png'

// import { useState } from 'react';

// const OurTechnologyArsenal = () => {
//     const [activeButton, setActiveButton] = useState('');

//     const handleButtonClick = (buttonName) => {
//         setActiveButton(buttonName);
//     };

//     const buttonClasses = (buttonName) => {
//         return activeButton === buttonName
//             ? 'my-auto px-12 h-[60px] rounded-[50px] bg-[#2925CC] text-white'
//             : 'my-auto px-12 h-[60px] rounded-[50px] text-black';
//     };

//     const images = {
//         'Web design & Development': [
//             img1,img2,img3,img4,img5,img7,img6
//         ],
//         'UI/UX Design': [
//             img7,img6,img5,img4,img3,img2,img1
//         ],
//         'Server Scripting': [
//             img1,img2,img3,img4,img5,img6,img7
//         ],
//         'Database': [
//             img1,img2,img3,img4,img5,img6,img7
//         ],
//         'Cache & Version': [
//             img1,img2,img3,img4,img5,img6,img7
//         ],
//         'Frameworks': [
//             img1,img2,img3,img4,img5,img6,img7
//         ],
//         'Payment Gateway': [
//             img1,img2,img3,img4,img5,img6,img7
//         ]
//     };

//     return (
//         <div className="bg-black w-full h-auto pb-10"> {/* Adjusted height */}
//             <div className="text-center pt-[119px]">
//                 <h2 className="text-white text-[36px] font-bold">Our Technology Arsenal</h2>
//             </div>
//             <div className="text-center pt-[18px]">
//                 <h2 className="text-white text-[20px]">Leveraging a robust and versatile tech stack, we deliver cutting-edge solutions 
//                     <br/> to meet your business needs.</h2>
//             </div>
//             <div className="flex mx-auto px-2 w-[1516px] h-[80px] bg-white rounded-[50px] mt-[46px] mb-[70px]">
//                 <div className="w-full mx-auto my-auto flex justify-around">
//                     {Object.keys(images).map((buttonName) => (
//                         <button
//                             key={buttonName}
//                             className={buttonClasses(buttonName)}
//                             onClick={() => handleButtonClick(buttonName)}
//                         >
//                             {buttonName}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//             {activeButton && (
//                 <div className="flex justify-center mt-10 flex-wrap gap-10">
//                     {images[activeButton].map((src, index) => (
//                         <div key={index} className="w-[150px] h-[150px] relative">
//                         <Image
//                             src={src}
//                             alt={activeButton}
//                             layout="responsive"
//                             className="rounded-lg"
//                         />
//                     </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OurTechnologyArsenal;


import Image from 'next/image';
import img1 from '../public/ajax.png'
import img2 from '../public/css.png'
import img3 from '../public/html.png'
import img4 from '../public/jquery.png'
import img5 from '../public/saas.png'
import img6 from '../public/angular.png'
import img7 from '../public/react.png'

import { useState } from 'react';

const OurTechnologyArsenal = () => {
    const [activeButton, setActiveButton] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        setCurrentPage(0); // Reset to the first page when a new button is clicked
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const buttonClasses = (buttonName) => {
        return activeButton === buttonName
            ? 'my-auto px-12 h-[60px] rounded-[50px] bg-[#2925CC] text-white'
            : 'my-auto px-12 h-[60px] rounded-[50px] text-black';
    };

    const images = {
        'Web design & Development': [
            img1, img2, img3, img4, img5, img7, img6
        ],
        'UI/UX Design': [
            img7, img6, img5, img4, img3, img2, img1
        ],
        'Server Scripting': [
            img1, img2, img3, img4, img5, img6, img7
        ],
        'Database': [
            img1, img2, img3, img4, img5, img6, img7
        ],
        'Cache & Version': [
            img1, img2, img3, img4, img5, img6, img7
        ],
        'Frameworks': [
            img1, img2, img3, img4, img5, img6, img7
        ],
        'Payment Gateway': [
            img1, img2, img3, img4, img5, img6, img7
        ]
    };

    const itemsPerPage = 7;

    return (
        <div className="bg-black w-full h-auto pb-10"> {/* Adjusted height */}
            <div className="text-center pt-[119px]">
                <h2 className="text-white text-[36px] font-bold">Our Technology Arsenal</h2>
            </div>
            <div className="text-center pt-[18px]">
                <h2 className="text-white text-[20px]">Leveraging a robust and versatile tech stack, we deliver cutting-edge solutions 
                    <br/> to meet your business needs.</h2>
            </div>
            <div className="flex mx-auto px-2 w-[1516px] h-[80px] bg-white rounded-[50px] mt-[46px] mb-[70px]">
                <div className="w-full mx-auto my-auto flex justify-around">
                    {Object.keys(images).map((buttonName) => (
                        <button
                            key={buttonName}
                            className={buttonClasses(buttonName)}
                            onClick={() => handleButtonClick(buttonName)}
                        >
                            {buttonName}
                        </button>
                    ))}
                </div>
            </div>
            {activeButton && (
                <div className="text-center">
                    <div className="flex justify-center flex-wrap gap-10">
                        {images[activeButton].slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((src, index) => (
                            <div key={index} className="w-[150px] mt-5 h-[150px] relative">
                                <Image
                                    src={src}
                                    alt={activeButton}
                                    layout="responsive"
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-[107px]">
                        {Array.from({ length: Math.ceil(images[activeButton].length / itemsPerPage) }).map((_, pageIndex) => (
                            <div
                                key={pageIndex}
                                className={`w-3 h-3 mx-1 rounded-full ${currentPage === pageIndex ? 'bg-white' : 'bg-gray-500'}`}
                                onClick={() => handlePageChange(pageIndex)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurTechnologyArsenal;
