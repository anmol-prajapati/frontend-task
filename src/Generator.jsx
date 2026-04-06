import { useState, useCallback, useEffect } from "react";

export default function Generator() {
  const [text, setText] = useState("");

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setText(result);
  }, []);

  // 👇 YE IMPORTANT ADD KIYA
  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
      <button
        onClick={generateString}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition"
      >
        Generate Random String
      </button>

      <p className="mt-4 text-xl font-semibold">{text}</p>
    </div>
  );
}