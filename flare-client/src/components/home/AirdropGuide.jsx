const snapshots = [
  ["June 18, 2023", "00:01:00 UTC", "Block 17219520500"],
  ["July 26, 2024", "00:01:00 UTC", "Block 1721952060"],
  ["October 27, 2024", "00:01:00 UTC", "Block 1729987260"],
  ["December 19, 2024", "00:01:00 UTC", "Block 1734566460"],
  ["May 21, 2025", "23:59:59 UTC", "Block 1747871999"],
];

const eligibility = [
  "Participated in FAssets testing on the Coston test network",
  "Held an XRP balance before making a claim",
  "Had a history of FLR or SGB delegation or staking activity",
];

const steps = [
  ["01", "Visit the official Flare Website"],
  ["02", "Select your wallet", "Choose the wallet you used for eligible activity."],
  ["03", "Connect securely", "Connect automatically or use the manual connection option."],
  ["04", "Review and claim", "Confirm your allocation and complete the claim."],
];

const Arrow = () => <span aria-hidden="true">→</span>;

export function AirdropGuide() {
  return (
    <main className="overflow-hidden bg-background leading-relaxed text-black">
   <section className="relative overflow-hidden bg-[#111537] py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-44 -top-64 h-155 w-155 rounded-full bg-[radial-gradient(circle,#5b43e5_0%,transparent_68%)] opacity-70" />
        <div className="pointer-events-none absolute -bottom-72 -left-44 h-107.5 w-107.5 rounded-full bg-[radial-gradient(circle,#008d86_0%,transparent_69%)] opacity-45" />

        <div className="relative mx-auto w-[min(1120px,calc(100%-48px))]">
          <p className="mb-5 text-xs font-bold tracking-[0.13em] text-[#b9c4ff]">
            FLARE UPDATES <span className="mx-2 text-[#65e6d0]">•</span> MAY 21, 2025
          </p>
          <div className="mb-5 inline-block rounded-full border border-[#5f65a6] px-3 py-1.5 text-[11px] font-extrabold tracking-[0.12em]">
            FASSETS RETROACTIVE AIRDROP
          </div>
          <h1 className="max-w-225 text-[clamp(42px,6vw,76px)] font-bold leading-[1.03] tracking-[-0.055em]">
            Your early testing helped bring FAssets closer to mainnet.
          </h1>
          <p className="mt-6 max-w-170 text-[clamp(17px,2vw,21px)] text-[#d8dcf5]">
            Flare is rewarding qualifying Coston testnet participants who stayed active across
            Flare and Songbird with a one-time rFLR airdrop.
          </p>
          <div className="my-10 flex flex-wrap items-center gap-6 sm:my-17.5">
            <a href="#claim" className="rounded-lg bg-[#74f1d0] px-5 py-3.5 font-extrabold text-[#111537] no-underline transition hover:bg-[#9bffe4]">
              How to claim <Arrow />
            </a>
            <a href="#eligibility" className="font-bold text-white no-underline transition hover:text-[#74f1d0]">
              Check eligibility <Arrow />
            </a>
          </div>
          <div className="flex flex-wrap border-t border-[#444a7b]">
            {[
              ["46,969", "unique test wallets"],
              ["$10–$2,000", "rFLR allocation range"],
              ["12 months", "vesting period"],
            ].map(([value, label]) => (
              <div key={label} className="min-w-45 flex-1 py-6 pr-6 sm:py-7">
                <strong className="block text-2xl tracking-tight">{value}</strong>
                <span className="text-sm text-[#b9c4ff]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-[min(1120px,calc(100%-48px))]">
          <p className="mb-4 text-xs font-extrabold tracking-[0.14em] text-primary">THE DISTRIBUTION</p>
          <div className="grid gap-9 md:grid-cols-[0.95fr_1.05fr] md:gap-20">
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.08] tracking-[-0.045em]">What is the FAssets retroactive airdrop?</h2>
            <div>
              <p className="mb-5 text-lg text-dark">This one-time rFLR distribution thanks community members who tested the FAssets protocol on Coston. That testing was vital to validating the protocol’s scalability, security, and usability ahead of mainnet readiness.</p>
              <div className="mt-7 flex gap-3.5 rounded-[10px] border-l-4 border-primary bg-background p-5 text-black">
                <span className="text-xl font-extrabold">↗</span>
                <p><strong>Claiming opens May 28, 2025.</strong><br />There is no fixed claim deadline; rewards follow the usual 12-month vesting period.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="eligibility" className="bg-black py-20 text-white sm:py-24">
        <div className="mx-auto w-[min(1120px,calc(100%-48px))]">
          <p className="mb-4 text-xs font-extrabold tracking-[0.14em] text-primary">ELIGIBILITY</p>
          <h2 className="max-w-162.5 text-[clamp(32px,4vw,52px)] font-bold leading-[1.08] tracking-[-0.045em]">Who is eligible?</h2>
          <p className="mb-8 mt-4 max-w-162.5 text-lg text-white/70">To receive an allocation, a wallet must meet all of the following requirements.</p>
          <div className="grid gap-3.5 md:grid-cols-3">
            {eligibility.map((item, index) => (
              <div key={item} className="flex gap-3.5 rounded-[10px] border border-white/20 bg-white/10 p-5.5 text-base font-semibold">
                <span className="font-black text-primary">✓</span>
                <span><small className="mb-1 block text-[10px] font-bold tracking-[0.12em] text-white/50">REQUIREMENT 0{index + 1}</small>{item}</span>
              </div>
            ))}
          </div>
          <p className="mb-4 mt-12 text-white/70">Eligibility was determined from activity captured at the following snapshots:</p>
          <div className="grid overflow-hidden rounded-[10px] border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-5">
            {snapshots.map(([date, time, block]) => (
              <div className="flex flex-col gap-1 bg-black p-4 sm:p-4.25" key={block}>
                <strong>{date}</strong><span className="text-sm text-white/70">{time}</span><small className="text-xs text-white/50">{block}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-[min(1120px,calc(100%-48px))]">
          <p className="mb-4 text-xs font-extrabold tracking-[0.14em] text-primary">ALLOCATION</p>
          <div className="grid gap-9 md:grid-cols-[0.95fr_1.05fr] md:gap-20">
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.08] tracking-[-0.045em]">Rewards reflect your impact.</h2>
            <div className="space-y-5 text-lg text-dark">
              <p>Allocations are tiered according to testing participation and impact. Qualifying wallets can receive between $10 and $2,000 worth of rFLR.</p>
              <p>rFLR is Flare's reward token, designed to incentivize participation in governance and ecosystem activity such as staking.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="claim" className="bg-dark py-20 text-center text-white sm:py-24">
        <div className="mx-auto w-[min(1120px,calc(100%-48px))]">
          <p className="mb-4 text-xs font-extrabold tracking-[0.14em] text-white/75">CLAIM YOUR ALLOCATION</p>
          <h2 className="mb-12 text-[clamp(36px,4vw,58px)] font-bold leading-tight tracking-tighter">Claim in four simple steps.</h2>
          <div className="mb-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <div key={number} className="rounded-[10px] bg-black/15 p-6">
                <span className="text-[13px] font-extrabold tracking-widest text-white/75">{number}</span>
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                {description && <p className="mt-2 text-sm text-white/80">{description}</p>}
              </div>
            ))}
          </div>
          <a href="/wallets" target="_blank" rel="noreferrer" className="inline-block rounded-lg bg-black px-6 py-4 font-extrabold text-white no-underline transition hover:scale-[.97] hover:bg-[#222]">
            Go to Flare Portal <Arrow />
          </a>
        </div>
      </section>

      <footer className="bg-[#0e1027] py-7 text-sm text-[#b7bbd2]">
        <div className="mx-auto w-[min(1120px,calc(100%-48px))]">Need help with your claim? Contact Flare's live support</div>
      </footer>
    </main>
  );
}
