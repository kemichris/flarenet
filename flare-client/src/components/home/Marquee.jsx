import ankr from '../../assets/ankr-1.webp';
import arkham from '../../assets/Arkham.webp';
import elliptic from '../../assets/Elliptic.webp';
import hextrust from '../../assets/HexTrust.webp';
import hypernative from '../../assets/hypernative.webp';
import layerZero from '../../assets/LayerZero.webp';
import quicknode from '../../assets/quicknode.webp';

const logos = [
    { name: 'Ankr', image: ankr },
    { name: 'Arkham', image: arkham },
    { name: 'Elliptic', image: elliptic },
    { name: 'Hex Trust', image: hextrust },
    { name: 'Hypernative', image: hypernative },
    { name: 'LayerZero', image: layerZero },
    { name: 'QuickNode', image: quicknode },
];

export function Marquee() {
    return (
        <section className="overflow-hidden py-10 uppercase">
            <p className="mb-6 text-center text-dark text-sm">
                Building with the best
            </p>

            <div className="overflow-hidden">
                <div className="marquee-track flex w-max items-center gap-16">
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={`${logo.name}-${index}`}
                            src={logo.image}
                            alt={logo.name}
                            className="h-8 w-auto shrink-0 object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}