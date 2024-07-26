import Image from "next/image"
import img from '../../../public/impact2.png'


const Impact = () => {
    return (
        <div className="bg-[#EFF5FD] pt-[53px]">
            <div className=" text-center">
                <div className="relative w-full flex justify-center items-center py-5 sm:py-[73px]">
                    <div className="relative w-[80%] h-[25rem] sm:h-[323px]">
                        <Image className="w-full bg-[#161514] h-full rounded-[32px]" src={img} alt="goal-image" />
                        <div className="absolute top-0 left-0 sm:top-[86px] sm:left-[106px] p-4">
                            <h1 className="text-white text-[28px] sm:text-[36px] font-[700]">Impact</h1>
                        </div>
                        <div className="absolute top-[70px] left-0 w-full sm:top-[147px] sm:left-[106px] md:w-[741px] text-left p-4">
                            <p className="text-white text-[16px] font-[400]">The primary objective was to develop an advanced AI-powered system tailored for the client,
                                which would efficiently categorize and summarize operator comments from their refineries. This system aimed to significantly enhance data
                                analysis and decision-making processes. Key aspects of this goal included:
                            </p>
                        </div>
                    </div>
                </div>            
            </div>
            <div className="px-5 md:px-[304px] md:py-20">
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

export default Impact;