import React from "react";

const InputField = ({ wordRef, validateWord, word, clearInput }) => {
  return (
    <div
      className={`relative w-full flex items-center justify-center h-14 focus-within:text-pink-600 text-slate-600 selection:bg-blue-300 selection:text-blue-900 -mb-2`}
    >
      <input
        type="text"
        placeholder="Search for a word ..."
        ref={wordRef}
        onChange={validateWord}
        className="lg:w-[80%] p-2 px-10 rounded-lg bg-transparent border-2 border-slate-600 focus:outline-none focus:border-pink-600 caret-pink-600 text-black placeholder:italic placeholder:text-slate-700"
      />
      <span className="absolute lg:left-14 left-4 text-[1.2rem]">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <span
        className={`absolute lg:right-14 right-4 text-[1.2rem] text-slate-500 cursor-pointer hover:scale-110 z-10 ${
          word.length > 2 ? "" : "hidden"
        }`}
        onClick={clearInput}
      >
        <i className="fa-solid fa-xmark"></i>
      </span>
    </div>
  );
};

export default InputField;
