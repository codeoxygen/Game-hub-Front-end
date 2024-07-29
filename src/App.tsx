import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const DarkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-1 p-4 lg:col-span-10">
          <NavBar DarkModeHandler={DarkModeHandler} />
        </div>
        <div className="hidden col-span-1 p-4 lg:block lg:col-span-1 dark:text-white">
          Aside
        </div>
        <div className="col-span-1 p-4 lg:col-span-9 dark:text-white">
        <GameGrid/>
        </div>
      </div>
    </div>
  );
};

export default App;
