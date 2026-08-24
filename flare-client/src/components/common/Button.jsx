import { Link } from "react-router-dom";

export function Button({ text, to }) {
  return (
    <Link
      className="btn"
      to={to}
      className="bg-primary py-3 px-2 border-r-2 text-lg text-white"
    >
      {text}
    </Link>
  );
}
