import Image from "next/image"
import img from '../../../public/goal.png'


const Overview = () => {
    return (
        <div className="bg-[#EFF5FD] pt-[53px]">
            <div className=" text-center">
                <h1 className="text-[#02033B] text-[36px]">Overview</h1>
                <div className="w-full text-center justify-center pt-[26px]">
                    <p className="px-[5%] md:px-[20%]">The client is a leading player in the refinery industry, committed to leveraging cutting-edge technologies to 
                        optimize their operations. With a strong focus on innovation and efficiency, they sought to enhance their data analysis and decision-making 
                        processes. By implementing an AI-powered system, they aimed to streamline the categorization and summarization of operator comments, 
                        ultimately driving improved operational efficiency and smarter decision-making.
                        </p>
                </div>
                <div className="relative w-full flex justify-center items-center py-[73px]">
                    <div className="relative w-[80%] h-[323px]">
                        <Image className="w-full h-full rounded-[32px]" src={img} alt="goal-image" />
                        <div className="absolute top-[0] left-[0] lg:top-[86px] lg:left-[106px] p-4">
                            <h1 className="text-white text-[36px] font-[700]">Goal</h1>
                        </div>
                        <div className="absolute top-[100px] left-0 lg:top-[147px] lg:left-[106px] lg:w-[741px] w-full text-left p-4">
                            <p className="text-white text-[14px] sm:text-[16px] font-[400]">The primary objective was to develop an advanced AI-powered system tailored for the client,
                                which would efficiently categorize and summarize operator comments from their refineries. This system aimed to significantly enhance data
                                analysis and decision-making processes. Key aspects of this goal included:
                            </p>
                        </div>
                    </div>
                </div>            
            </div>
            <div className="px-5 xl:px-[304px] md:py-20">
                <div className="grid grid-cols-2 gap-[58px]">
                    <div className="text-left">
                        <h1 className=" text-[#02033B] font-[800] text-[19px]">1. Accurate Data Categorization:</h1>
                        <p className=" text-[#02033B] text-[16px]">Incorporating comprehensive data preprocessing steps, such as tokenization, stop-word 
                            removal, and normalization, to ensure the data is clean and prepared for accurate analysis.
                        </p>
                    </div>
                    <div className="text-left">
                        <h1 className="text-[#02033B] font-[800] text-[19px]">1. Accurate Data Categorization:</h1>
                        <p className="text-[#02033B] font-[400] text-[16px]">Incorporating comprehensive data preprocessing steps, such as tokenization, stop-word 
                            removal, and normalization, to ensure the data is clean and prepared for accurate analysis.
                        </p>
                    </div>
                    <div className="text-left">
                        <h1 className="text-[#02033B] font-[800] text-[19px]">1. Accurate Data Categorization:</h1>
                        <p className="text-[#02033B] font-[400] text-[16px]">Incorporating comprehensive data preprocessing steps, such as tokenization, stop-word 
                            removal, and normalization, to ensure the data is clean and prepared for accurate analysis.
                        </p>
                    </div>
                    <div className="text-left">
                        <h1 className="text-[#02033B] font-[800] text-[19px]">1. Accurate Data Categorization:</h1>
                        <p className="text-[#02033B] font-[400] text-[16px]">Incorporating comprehensive data preprocessing steps, such as tokenization, stop-word 
                            removal, and normalization, to ensure the data is clean and prepared for accurate analysis.
                        </p>
                    </div>
                    <div className="text-left">
                        <h1 className="text-[#02033B] font-[800] text-[19px]">1. Accurate Data Categorization:</h1>
                        <p className="text-[#02033B] font-[400] text-[16px]">Incorporating comprehensive data preprocessing steps, such as tokenization, stop-word 
                            removal, and normalization, to ensure the data is clean and prepared for accurate analysis.
                        </p>
                    </div>
                    <div className="text-left">
                        <h1 className="text-[#02033B] font-[800] text-[19px]">1. Accurate Data Categorization:</h1>
                        <p className="text-[#02033B] font-[400] text-[16px]">Incorporating comprehensive data preprocessing steps, such as tokenization, stop-word 
                            removal, and normalization, to ensure the data is clean and prepared for accurate analysis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
    ) 
}

export default Overview 