import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroImageSection from '@/components/heroImage-Section'
import Aboutus from '@/components/aboutus'
import CompServices from '@/components/comp-services'
import ExpandingAI from '@/components/expand'
import WhychooseErgobite from '@/components/why-choose-ergobite'
import OurTechnolgyArsenal from '@/components/our-technology-arsenal'
import ValuedPartners from '@/components/our-valued-partners'
import ClientReviews from '@/components/client-reviews'
import Discover from '@/components/discover'
import StrategicAlliances from '@/components/strategic-alliances'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <section className='w-full overflow-hidden'>
        <HeroImageSection />
      </section>
      <div>
      <div className='absolute top-[815px] w-full z-10'>
        <Aboutus />
      </div>
      <div className=' w-full z-0'>
        <CompServices />
      </div>
      </div>
      <div>
        <ExpandingAI />
      </div>
      <div>
        <WhychooseErgobite/>
      </div>
      <div>
        <OurTechnolgyArsenal />
      </div>
      <div>
        <ValuedPartners />
      </div>
      <div>
        <ClientReviews />
      </div>
      <div className='absolute -mt-28'>
        <StrategicAlliances />
      </div>
      <div className='mt-[450px] sm:mt-[250px] md:mt-[400px] lg:mt-[600px]'>
      <Discover />
      </div> 
    </div>
    
  )
}

