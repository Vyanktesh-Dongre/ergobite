import Image from "next/image";
import img1 from "../public/AI.png";
import img2 from "../public/eng.png";
import img3 from "../public/webd.png";
import img4 from "../public/appp.png";
import img5 from "../public/devops.png";
import img6 from "../public/strategy.png";


const ComprehensiveServices = () => {
    return (
        <div className="w-full text-center py-10 3xl:max-w-[1920px] 3xl:mx-auto" style={{ background: 'linear-gradient(180deg, #F3F8FF 0%, #E7EFFA 100%)' }}>
            <div className=" sm:mt-[60%] lg:mt-[30%] xl:mt-[20%] mt-[20%]">
                <div className="px-5">
                    <h1 className="md:text-[36px] mt- font-bold text-black">Explore Our Comprehensive Services</h1>
                    <h2 className="md:text-[18px]">From AI-powered solutions to seamless software development, discover how Ergobite<br/>transforms businesses with innovation and expertise.</h2> 
                </div>
                <div className=" w-full md:px-28 lg:px-36 xl:px-40 mt-5 lg:gap-10 grid grid-cols-1 md:mxauto lg:mx-auto xxl:px-[420px] md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="w-[269px] mx-auto mb-5">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img1} alt="company logo" />
                        <h1>AI and ML Solutions</h1>
                        <p className="w-[269px] h-[144px] mx-auto">Harness the power of AI and ML to automate processes, gain insights, and enhance decision-making. Our solutions are designed to address the unique challenges of modern enterprises.</p>
                    </div>
                    <div className="w-[269px] mx-auto mb-5">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img2} alt="company logo" />
                        <h1>Product Engineering</h1>
                        <p>From concept to deployment, our product engineering services ensure that your ideas are transformed into innovative, market-ready products</p>
                    </div>
                    <div className="w-[269px] mx-auto mb-5">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img3} alt="company logo" />
                        <h1>Software Development</h1>
                        <p>Ergobite delivers custom software applications and enterprise-grade solutions tailored to your business needs.</p>
                    </div>
                    <div className="w-[269px] mx-auto mb-5">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img4} alt="company logo" />
                        <h1>Mobile Apps</h1>
                        <p>Creating cutting-edge mobile apps tailored to your needs, enhancing functionality and user engagement across iOS, Android, and cross-platform development.</p>
                    </div>
                    <div className="w-[269px] mx-auto mb-5">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img5} alt="company logo" />
                        <h1>DevOps</h1>
                        <p>Streamlining software development and operations with robust DevOps solutions, optimizing efficiency and scalability for seamless deployment and management.</p>
                    </div>
                    <div className="w-[269px] mx-auto mb-5">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img6} alt="company logo" />
                        <h1>Consulting and Strategy</h1>
                        <p>Our team of experts provides strategic consulting to help you navigate the complexities of AI and ML integration. We work with you to develop a roadmap for success.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComprehensiveServices;
