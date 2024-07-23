// import Image from "next/image"
// import img from '../public/abtus.png'

// const Aboutus = () => {
//     return (
//         <>
//             <div className=" w-full mx-auto flex justify-center ">
//                 <div className="w-[1514px] px-24 pb-[91px] pt-[76px] bg-white grid grid-cols-2 rounded-[10px] shadow-[#E1E5EB80] ">
//                     <div className="">
//                         <p className="text-black">About us</p>
//                         <br/>
//                         <h3 className="text-[30px]">Together, Lets Shape Tommorrow!</h3>
//                         <br/>
//                         <h2>Empowering innovation through advanced technology solutions, shaping a future of limitless possibilitiesErgobite is a pioneering 
//                             software development company specializing in AI and ML solutions. <br/><br/>
//                             With a history of delivering exceptional performance, a commitment 
//                             to quality service, and a team of top-tier technical experts, Ergobite partners with clients to successfully design, develop, and 
//                             implement their most critical technology projects. 
//                         </h2>
//                     </div>
//                     <div className="flex justify-end place-items-end">
//                         <Image className='w-[540px] h-[404px]' src={img} alt="company logo" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )


// };

// export default Aboutus

import Image from "next/image";
import img from '../public/abtus.png';

const Aboutus = () => {
    return (
        <>
            <div className="w-full mx-auto flex justify-center">
                <div className="md:w-[80%] px-2 md:px-6 pb-[5%] pt-[5%] bg-white grid grid-cols-1 md:grid-cols-2 rounded-[10px]" style={{ boxShadow: '0px 20px 24.7px 0px #E1E5EB80' }}>
                    <div>
                        <p className="text-black">ABOUT US</p>
                        <br />
                        <h3 className="text-[30px]">Together, Lets Shape Tomorrow!</h3>
                        <br />
                        <h2 className="hidden md:block">
                            Empowering innovation through advanced technology solutions, shaping a future of limitless possibilities. Ergobite is a pioneering
                            software development company specializing in AI and ML solutions. <br /><br />
                            With a history of delivering exceptional performance, a commitment
                            to quality service, and a team of top-tier technical experts, Ergobite partners with clients to successfully design, develop, and
                            implement their most critical technology projects.
                        </h2>
                        <button className=" gap-[512px] rounded-[42px] w-[146px] h-[52px] mt-[35px] bg-[#2925CC] text-white">About us</button>
                    </div>
                    <div className="hidden md:flex justify-end items-end">
                        <Image className="w-[80%] h-[90%]" src={img} alt="company logo" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutus;
