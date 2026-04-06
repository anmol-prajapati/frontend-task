import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-6 p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold">
      <Link to="/">Home</Link>
      <Link to="/generator">Generator</Link>
      <Link to="/translator">Translator</Link>
    </div>
  );
}