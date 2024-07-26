import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

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
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1 p-4 lg:col-span-4">
          <NavBar DarkModeHandler={DarkModeHandler} />
        </div>
        <div className="hidden col-span-1 p-4 bg-green-500 dark:bg-green-900 lg:block lg:col-span-2">
          Aside
        </div>
        <div className="col-span-1 p-4 bg-blue-500 dark:bg-blue-900 lg:col-span-2">
          Main
        </div>
      </div>
    </div>
  );
};

export default App;
