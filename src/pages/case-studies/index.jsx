import HeroImage from "./hero-image"
import Overview from "./overview"
import Solution from "./solution"
import Impact from "./impact"
import Discoverr from "./discoverr"
import DevChallenges from "./dev-challenges"
import OverComingChallenges from "./overcoming-challenges"

export default function CaseStudies () {

    return (
        <div className='overflow-hidden'>
            <section className=''>
                <HeroImage />
            </section>
            <section className="">
                <Overview />
            </section>
            <section>
                <Solution />
            </section>
            <section>
                <Impact />
            </section>
            <section>
                <Discoverr />
            </section>
            <section>
                <DevChallenges />
            </section>
            <section>
                <OverComingChallenges />
            </section>
      </div>
    )
}