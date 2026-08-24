import { FaXTwitter } from "react-icons/fa6";
import {
  FaDiscord,
  FaTelegramPlane,
  FaYoutube,
  FaMedium,
  FaRedditAlien,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import Logo from "../../assets/Flare.svg";

const socialLinks = [
  {
    name: "X",
    href: "https://twitter.com/FlareNetworks",
    icon: <FaXTwitter />,
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/flarenetwork",
    icon: <FaDiscord />,
  },
  {
    name: "Telegram",
    href: "https://t.me/FlareNetwork",
    icon: <FaTelegramPlane />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/Flare_Networks",
    icon: <FaYoutube />,
  },
  {
    name: "Medium",
    href: "https://medium.com/flarenetwork",
    icon: <FaMedium />,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/r/FlareNetworks",
    icon: <FaRedditAlien />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/flare_networks",
    icon: <FaInstagram />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/flarenetwork/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "GitHub",
    href: "https://github.com/flare-foundation",
    icon: <FaGithub />,
  },
];

export function Footer() {
  return (
    <footer className="bg-white text-black border-t border-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-end md:justify-between">
        {/* Logo + Copyright */}
        <div className="flex flex-col gap-6">
          <a href="/" className="w-fit">
            <img src={Logo} alt="Flare" className="w-10" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark text-lg text-black transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-sm text-dark">
        © Flare Network {new Date().getFullYear()}
      </p>
    </footer>
  );
}
