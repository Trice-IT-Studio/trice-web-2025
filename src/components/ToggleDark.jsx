import { useEffect, useState } from "react";
import "./component.css";

const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle-dark flex justify-end">
      <div className="toggle-switch">
        <label className="switch-label">
          <input
            id="dark-toggle"
            checked={isDarkMode}
            onChange={toggleMode}
            type="checkbox"
            className="checkbox"
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleDark;
