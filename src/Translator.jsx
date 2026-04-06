import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  const translateText = async () => {
    try {
      const res = await fetch(
        "https://api.mymemory.translated.net/get?q=" +
          text +
          "&langpair=en|hi"
      );
      const data = await res.json();
      setTranslated(data.responseData.translatedText);
    } catch (err) {
      console.log(err);
      alert("Error in translation");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px] text-center">
        
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          🌍 Translator
        </h1>

        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={translateText}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition"
        >
          Translate
        </button>

        {translated && (
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-gray-700">{translated}</p>
          </div>
        )}
      </div>
    </div>
  );
}