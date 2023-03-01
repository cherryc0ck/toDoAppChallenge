import React, { createContext, useContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState();
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, theme: darkMode && "dark" }}>
      {children}
    </DarkModeContext.Provider>
  )
};
export const updateDarkMode = (darkMode) => {
  darkMode 
    ? document.documentElement.classList.add('dark') 
    : document.documentElement.classList.remove('dark');
};

export const useDarkMode = () => useContext(DarkModeContext);