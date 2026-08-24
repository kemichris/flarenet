import { Link } from "react-router-dom";

export function Button({ text, to, className = '' }) {
  return (
    <Link
      to={to}
      className={`bg-primary py-2 px-4 font-medium rounded-lg text-lg text-white hover:scale-[.9] transition-transform duration-300 ${className}`}
    >
      {text}
    </Link>
  );
}
