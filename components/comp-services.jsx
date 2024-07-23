import Image from "next/image";
import img from "../public/AI.png";

const ComprehensiveServices = () => {
    return (
        <div className="w-full text-center py-10" style={{ background: 'linear-gradient(180deg, #F3F8FF 0%, #E7EFFA 100%)' }}>
            <div className="sm:mt-[60%] lg:mt-[25%] xl:mt-[20%] mt-[20%]">
                <div className="">
                    <h1 className="text-[36px] mt- font-bold text-black">Explore Our Comprehensive Services</h1>
                    <h2 className="text-[18px]">From AI-powered solutions to seamless software development, discover how Ergobite<br/>transforms businesses with innovation and expertise.</h2> 
                </div>
                <div className=" w-full mt-5 lg:gap-10 grid grid-cols-1 md:mxauto lg:mx-auto xxl:px-[420px] md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="w-[269px] mx-auto">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img} alt="company logo" />
                        <h1>AI and ML Solutions</h1>
                        <p className="w-[269px] h-[144px] mx-auto">Harness the power of AI and ML to automate processes, gain insights, and enhance decision-making. Our solutions are designed to address the unique challenges of modern enterprises.</p>
                    </div>
                    <div className="w-[269px] mx-auto">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img} alt="company logo" />
                        <h1>AI and ML Solutions</h1>
                        <p>Harness the power of AI and ML to automate processes, gain insights, and enhance decision-making. Our solutions are designed to address the unique challenges of modern enterprises.</p>
                    </div>
                    <div className="w-[269px] mx-auto">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img} alt="company logo" />
                        <h1>AI and ML Solutions</h1>
                        <p>Harness the power of AI and ML to automate processes, gain insights, and enhance decision-making. Our solutions are designed to address the unique challenges of modern enterprises.</p>
                    </div>
                    <div className="w-[269px] mx-auto">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img} alt="company logo" />
                        <h1>AI and ML Solutions</h1>
                        <p>Harness the power of AI and ML to automate processes, gain insights, and enhance decision-making. Our solutions are designed to address the unique challenges of modern enterprises.</p>
                    </div>
                    <div className="w-[269px] mx-auto">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img} alt="company logo" />
                        <h1>AI and ML Solutions</h1>
                        <p>Harness the power of AI and ML to automate processes, gain insights, and enhance decision-making. Our solutions are designed to address the unique challenges of modern enterprises.</p>
                    </div>
                    <div className="w-[269px] mx-auto">
                        <Image className="w-[30%] mx-auto h-[30%]" src={img} alt="company logo" />
                        <h1>AI and ML Solutions</h1>
                        <p>Harness the power of AI and ML to automate processes, gain insights, and enhance decision-making. Our solutions are designed to address the unique challenges of modern enterprises.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComprehensiveServices;
