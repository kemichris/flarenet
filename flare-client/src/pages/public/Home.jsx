
import { DataProviders } from "../../components/home/DataProviders"
import { Hero } from "../../components/home/Hero"
import { Marquee } from "../../components/home/Marquee"
import { TechnologySection } from "../../components/home/TechnologySection"
import { SecureSection } from "../../components/home/SecureSection"

export function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <TechnologySection />
            <DataProviders />
            <SecureSection />
        </>
    )
}