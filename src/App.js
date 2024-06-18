import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center relative overflow-hidden">
      <h1 className="text-white text-5xl font-bold mb-8">Welcome to Bug Land</h1>
      <p className="text-white text-xl mb-16">
        Watch the bugs crawl around as you enjoy the scenery.
      </p>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bug"></div>
        ))}
      </div>
    </div>
  );
}

export default App;
