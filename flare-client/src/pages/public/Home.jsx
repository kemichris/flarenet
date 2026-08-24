
import { DataProviders } from "../../components/home/DataProviders"
import { Hero } from "../../components/home/Hero"
import { Marquee } from "../../components/home/Marquee"
import { TechnologySection } from "../../components/home/TechnologySection"
import { SecureSection } from "../../components/home/SecureSection"
import { BuildSection } from "../../components/home/BuildSection"
import { CTA } from "../../components/home/CTA"
import { Community } from "../../components/home/Community"

export function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <TechnologySection />
            <DataProviders />
            <SecureSection />
            <BuildSection />
            <CTA />
            <Community />
        </>
    )
}