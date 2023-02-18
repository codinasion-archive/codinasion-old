import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  setTheme(darkMode ? 'dark' : 'light')
  }, [setTheme])


  return (
    <>
      <button
        className="mx-4 rounded-lg p-2 border-transparent focus:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-600"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span className="sr-only">Dark Mode Toggle</span>
        {theme === "light" ? <MdOutlineDarkMode /> : <BsFillSunFill />}
      </button>
    </>
  );
}
