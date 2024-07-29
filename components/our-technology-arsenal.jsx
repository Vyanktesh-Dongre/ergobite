
import Image from 'next/image';
import img1 from '../public/ajax.png';
import img2 from '../public/css.png';
import img3 from '../public/html.png';
import img4 from '../public/jquery.png';
import img5 from '../public/saas.png';
import img6 from '../public/angular.png';
import img7 from '../public/react.png';

import { useState } from 'react';

const OurTechnologyArsenal = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const images = {
        'Web design & Development': [img1, img2, img3, img4, img5, img7, img6],
        'UI/UX Design': [img7, img6, img5, img4, img3, img2, img1],
        'Server Scripting': [img1, img2, img3, img4, img5, img6, img7],
        'Database': [img1, img2, img3, img4, img5, img6, img7],
        'Cache & Version': [img1, img2, img3, img4, img5, img6, img7],
        'Frameworks': [img1, img2, img3, img4, img5, img6, img7],
        'Payment Gateway': [img1, img2, img3, img4, img5, img6, img7]
    };

    // Set the first key as the default active button
    const defaultButton = Object.keys(images)[0];
    const [activeButton, setActiveButton] = useState(defaultButton);

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

    const itemsPerPage = 7;

    return (
        <div className="bg-black w-full h-auto pb-10 3xl:max-w-[1920px] 3xl:mx-auto">
            <div className="text-center pt-[50px]">
                <h2 className="text-white text-[36px] font-bold">Our Technology Arsenal</h2>
            </div>
            <div className="text-center pt-[18px]">
                <h3 className="text-white text-[20px]">Leveraging a robust and versatile tech stack, we deliver cutting-edge solutions 
                    <br /> to meet your business needs.</h3>
            </div>
            {/* <div className="flex mx-auto px-2 w-[1516px] h-[80px] bg-white rounded-[50px] mt-[46px] mb-[70px]">
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
            </div> */}
            {/* <div className="flex flex-wrap justify-center mx-auto px-2 w-full md:w-[1516px] h-auto bg-white rounded-[50px] mt-[46px] mb-[70px]">
                <div className="w-full flex flex-wrap justify-around my-auto">
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
            </div> */}
            <div className="overflow-x-auto px-2 w-full md:w-[90%] mx-auto h-[80px] bg-white md:rounded-[50px] mt-[46px] mb-[70px] place-content-center ">
                <div className="w-max flex justify-center items-center ">
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
                            <div key={index} className="md:w-[150px] w-[70px] h-[70px] mt-5 md:h-[150px] relative">
                                <Image
                                    src={src}
                                    alt={activeButton}
                                    layout="responsive"
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-[40px] md:mt-[107px]">
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
