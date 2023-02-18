import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <button
        className="mx-4 rounded-lg p-2 border-transparent focus:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-600"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="sr-only">Dark Mode Toggle</span>
        {['dark', 'system'].includes(theme || 'system') ? <BsFillSunFill /> : <MdOutlineDarkMode />}
      </button>
    </>
  );
}
