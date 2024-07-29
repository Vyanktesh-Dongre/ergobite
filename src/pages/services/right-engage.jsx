// import Image from "next/image"
// import img from "../../../public/engage.png"

// const RightEngagement = () => {

//     return (
//         <div className="bg-[#EFF5FD] pt-[53px]">
//             <div className=" text-center">
//                 <h1 className="text-[#02033B] font-[500] text-[36px]">Find the Right Engagement Model for Your Custom Software Application</h1>
                        
//             </div>
//             <div className="px-5 xl:px-[304px] py-10">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-[48px]">
//                     <div className="mt-10 sm:mt-0">
//                         <Image className=" w-full h-full rounded-[10px]" src={img} alt="image"/>
//                     </div>
//                     <div className="text-left">
//                         <h1 className="text-[#02033B] font-[800] text-[28px]">Time & Material Model</h1>
//                         <h1 className="text-[#02033B] font-[800] text-[24px]">Flexible and Adaptive Development</h1>
//                         <p className="text-[#02033B] font-[400] text-[16px] pt-2">We conduct extensive testing to ensure your product is bug-free, reliable, and performs optimally. Our QA team uses advanced testing tools and methodologies to identify and resolve issues before they impact users.
//                         </p>
//                         <div className="bg-white rounded-xl w-full mt-5 p-2 ">
//                         <h1 className="text-[#2925CC] font-[800] text-[19px]">Key Features:</h1>
//                         <p className="text-[#02033B] font-[400] text-[16px] pt-2">Pay for Actual Work Done: Billing is based on the actual time spent and resources utilized, ensuring you only pay for what you need.
//                             Dynamic Scope: Easily accommodate changes and new requirements without lengthy renegotiations.
//                             Transparent Process: Regular updates and detailed timesheets keep you informed about the progress and expenditure.   
//                         </p>
//                         <h1 className="text-[#2925CC] font-[800] text-[19px] pt-2">Benefits</h1>
//                         <p className="text-[#02033B] font-[400] text-[16px] pt-2">Flexibility: Adjust project requirements as your needs evolve.
//                             Transparency: Clear visibility into the development process and costs.
//                             Quality Focus: Emphasis on delivering the best possible solution through iterative development.  
//                         </p>
//                         </div>
//                     </div>
                
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default RightEngagement

import Image from "next/image";
import { useState } from "react";
import img1 from "../../../public/engage.png";
import img2 from "../../../public/team.png";
import img3 from "../../../public/coin.png";

const engagementData = [
  {
    img: img1,
    title: "Time & Material Model",
    subtitle: "Flexible and Adaptive Development",
    description: "We conduct extensive testing to ensure your product is bug-free, reliable, and performs optimally. Our QA team uses advanced testing tools and methodologies to identify and resolve issues before they impact users.",
    features: [
      "Pay for Actual Work Done: Billing is based on the actual time spent and resources utilized, ensuring you only pay for what you need.",
      "Dynamic Scope: Easily accommodate changes and new requirements without lengthy renegotiations.",
      "Transparent Process: Regular updates and detailed timesheets keep you informed about the progress and expenditure."
    ],
    benefits: [
      "Flexibility: Adjust project requirements as your needs evolve.",
      "Transparency: Clear visibility into the development process and costs.",
      "Quality Focus: Emphasis on delivering the best possible solution through iterative development."
    ]
  },
  {
    img: img2,
    title: "Dedicated Team",
    subtitle: "Your Extended Development Team",
    description: "The Dedicated Team model provides you with a full-time, dedicated team of professionals who work exclusively on your project. This model is perfect for long-term projects where you need a team that understands your business and goals deeply.",
    features: [
      "Exclusive Resources: A dedicated team working solely on your project.",
      "Full Control: Direct management and control over the team and development process.",
      "Seamless Integration: The team integrates with your in-house staff, working as an extension of your organization."
    ],
    benefits: [
      "Consistency: A stable team familiar with your project’s intricacies and objectives.",
      "Scalability: Easily scale your team up or down based on project needs.",
      "Focus: A dedicated focus on your project, ensuring high productivity and commitment."
    ]
  },
  {
    img: img3,
    title: "Fixed Price Model",
    subtitle: "Predictable and Controlled Development",
    description: "The Fixed Price model is suited for projects with well-defined requirements and a clear scope. This model provides a fixed budget and timeline, making it easier to manage costs and schedules.",
    features: [
      "Defined Scope: Clear and detailed project specifications established upfront.",
      "Fixed Budget: A set budget ensures no unexpected costs",
      "Scheduled Delivery: Predefined timelines for deliverables and project completion."
    ],
    benefits: [
      "Predictability: Know exactly what to expect in terms of cost and timeline.",
      "Budget Control: Maintain strict control over your project budget.",
      "Risk Mitigation: Reduced risk with a clear agreement on deliverables and deadlines."
    ]
  }
];

const RightEngagement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  const { img, title, subtitle, description, features, benefits } = engagementData[currentIndex];

  return (
    <div className="bg-[#EFF5FD] pt-[53px] 3xl:max-w-[1920px] 3xl:mx-auto">
      <div className="text-center">
        <h1 className="text-[#02033B] font-[500] text-[36px]">Find the Right Engagement Model for Your Custom Software Application</h1>
      </div>
      <div className="px-5 xl:px-[304px] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-[48px]">
          <div className="mt-10 sm:mt-0">
            <Image className="w-full h-full rounded-[10px]" src={img} alt="image" />
          </div>
          <div className="text-left">
            <h1 className="text-[#02033B] font-[800] text-[28px]">{title}</h1>
            <h1 className="text-[#02033B] font-[800] text-[24px]">{subtitle}</h1>
            <p className="text-[#02033B] font-[400] text-[16px] pt-2">{description}</p>
            <div className="bg-white rounded-xl w-full mt-5 p-2">
              <h1 className="text-[#2925CC] font-[800] text-[19px]">Key Features:</h1>
              {features.map((feature, index) => (
                <p key={index} className="text-[#02033B] font-[400] text-[16px] pt-2">{feature}</p>
              ))}
              <h1 className="text-[#2925CC] font-[800] text-[19px] pt-2">Benefits</h1>
              {benefits.map((benefit, index) => (
                <p key={index} className="text-[#02033B] font-[400] text-[16px] pt-2">{benefit}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-3">
          {engagementData.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${currentIndex === index ? "bg-[#2925CC]" : "bg-[#D9D9D9B2]"} `}
              onClick={() => handleButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightEngagement;
