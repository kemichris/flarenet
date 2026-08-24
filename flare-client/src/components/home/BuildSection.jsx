export function BuildSection() {
  return (
    <section className="bg-background mx-6 px-6 py-16 rounded-2xl flex flex-col items-center mb-8">
      <h2 className="font-semibold text-3xl text-center mb-4">
        Build on Flare
      </h2>
      <p className="text-dark text-center mb-4">
        Leverage Flare's full-stack data solutions in your decentralized
        application.
      </p>

      <a
        href="https://dev.flare.network/network/overview"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-dark bg-transparent px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 hover:border-primary hover:text-primary"
      >
        Learn About Flare
      </a>
    </section>
  );
}
