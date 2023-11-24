import React from "react";
import Footer from "./components/Footer";
import DictionaryCard from "./components/DictionaryCard";

const App = () => {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-52 lg:px-16 transition-all ease-in justify-between space-y-20 lg:space-y-0 p-4">
      <div className="relative w-full lg:max-w-[500px]">
        <div className="absolute lg:top-8 lg:left-16 lg:w-[310px] lg:h-[310px] w-[190px] h-[190px] top-48 left-4 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob_animation"></div>
        <div className="absolute lg:top-10 lg:right-24 lg:w-[310px] lg:h-[310px] w-[190px] h-[190px] top-52 right-10 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob_animation animation-delay-2000"></div>
        <div className="absolute lg:-bottom-4 lg:left-36 lg:w-[310px] lg:h-[310px] w-[190px] h-[190px] top-24 right-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob_animation animation-delay-4000"></div>
        <DictionaryCard />
      </div>
      <Footer />
    </main>
  );
};

export default App;
