import HeroImage from "./hero-image"
import CustomSoftwareDevelopment from "./cus-soft-dev"
import ProductEnginneering from "./product-eng"
import Quality from "./quality"
import Maintenance from "./maintenance"
import OurTechnologyArsenal from "@/components/our-technology-arsenal" 
import RightEngagement from "./right-engage"
import ChooseErgobite from "./why-choose-ergobite"
import ReadytoInnovate from "./ready-to-innovate"

const Services = () => {

    return (
        <div className='overflow-hidden'>
        <section className=''>
            <HeroImage />
        </section>
        <section>
            <CustomSoftwareDevelopment />
        </section>
        <section>
        <ProductEnginneering />
        </section>
        <secrion>
            <Quality />
        </secrion>
        <section>
            <Maintenance />
        </section>
        <section>
            <OurTechnologyArsenal />
        </section>
        <section>
            <RightEngagement />
        </section>
        <section>
            <ChooseErgobite />
        </section>
        <section>
            <ReadytoInnovate />
        </section>
  </div>
    )
}

export default Services