import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Typewriter from 'typewriter-effect';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

const Prompt = () => {
  const [query, setQuery] = useState("");
  const [savedQuery, setSavedQuery] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const saveQuery = () => {
    setSavedQuery(query);
    console.log("Saved:", query);

    // Navigate to gallery/:savedQuery
    navigate(`/gallery/${query}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveQuery();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#dce4ef]">
      <div className="text-center w-full max-w-4xl px-4">
        <h1 className="text-2xl font-semibold text-[#2c3e50] mb-6">
          <Typewriter
            options={{
              strings: ['What can I help you with?'],
              autoStart: true,
              loop: false, 
              delay: 75, 
              deleteSpeed: Infinity, 
            }}
          />
        </h1>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress} // Handle "Enter" key press
              className="w-full h-11 p-2 pr-12 text-lg border border-gray-300 rounded-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 text-center"
              placeholder="Type here..."
            />

            <button
              onClick={saveQuery} // Handle button click
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500"
            >
              <ArrowCircleUpTwoToneIcon fontSize="large" sx={{ color: '#41506D' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
