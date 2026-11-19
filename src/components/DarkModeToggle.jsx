
import React from "react";

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="theme-button">
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
