

import vid from '../public/hero.mp4';
import Header from '@/components/header';

const HeroImageSection = () => {
    return (
        <>
            <section className="relative w-full h-[1080px]">
                {/* Header with absolute positioning */}
                <div className="absolute top-0 left-0 w-full">
                    <div className="w-full absolute inset-0 h-[1080px]">
                        <video src={vid} autoPlay playsInline loop muted preload="auto" controlsList="nodownload" className="object-cover w-full h-full"></video>
                        <div className=" absolute inset-0 md:w-[740px] h-[150px] top-[352px] sm:left-5 lg:left-[199px] px-5 md:flex items-center justify-center">
                            <p className="sm:text-[60px] text-[30px] text-[800] text-white">Empowering Businesses with AI & ML Innovations</p>
                        </div>
                        <div className='hidden sm:block absolute inset-0 top-[494px] w-[670px] h-[82px] sm:left-5 lg:left-[199px] mt-[22px] '>
                            <p className=' text-[20px] text-white'>Unlock new potentials and streamline your business processes with advanced AI and ML solutions.</p>
                        </div>
                        <div className='absolute inset-0 top-[593px] w-[670px] h-[82px] px-5 sm:left-5 lg:left-[199px] mt-[17px] '>
                            <button className=" gap-[512px] rounded-[42px] w-[175px] h-[54.5px] bg-[#FFEF00] text-black">Talk to an Expert</button>
                        </div>

                    </div>
                </div>
                {/* Video element */}
            </section>
        </>
    );
}

export default HeroImageSection;
