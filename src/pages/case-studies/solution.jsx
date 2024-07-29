import Image from "next/image"
import img from '../../../public/sol.png'


const Solution = () => {
    return (
        <div className="bg-[#fefefe] pt-[53px] 3xl:max-w-[1920px] 3xl:mx-auto">
            <div className=" text-center">
                <div className="relative w-full flex justify-center items-center py-[73px]">
                    <div className="relative w-[80%] h-[323px]">
                        <Image className="w-full h-full rounded-[32px]" src={img} alt="goal-image" />
                        <div className="absolute top-[10px] left-[0] xl:top-[86px] xl:left-[106px] p-10">
                            <h1 className="text-white text-[36px] font-[700]">Solution</h1>
                        </div>
                        <div className="absolute top-[100px] left-0 w-full xl:top-[147px] xl:left-[106px] xl:w-[741px] text-left p-10">
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

export default Solution;