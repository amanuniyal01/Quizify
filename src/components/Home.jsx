import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const RoutetoMainPage = () => {
    navigate("/Quiz");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white px-4">
      
   
      <h1 className="text-5xl md:text-6xl font-extrabold font-serif drop-shadow-lg text-center animate-fadeIn">
        Welcome to <span className="text-yellow-300">Quizify!</span>
      </h1>

     
      <p className="text-xl md:text-2xl mt-4 opacity-90 text-center max-w-xl animate-fadeInSlow">
        Test your knowledge, challenge yourself, and grow smarter every day.
      </p>

      
      <button
        onClick={RoutetoMainPage}
        className="mt-10 bg-yellow-300 text-indigo-900 px-10 py-4 rounded-2xl text-2xl font-bold shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
      >
        Start Quiz
      </button>

  
      <p className="mt-14 text-sm opacity-70">Designed with ❤️ using React & Tailwind CSS by Aman Uniyal</p>
    </div>
  );
}

export default Home;
