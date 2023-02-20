"use client";

import * as React from "react";

import Link from "next/link";

import { BiSearchAlt2 } from "react-icons/bi";

export default function UserSearch() {
  const [username, setUsername] = React.useState<string>("");

  return (
    <>
      <label className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 -left-4 flex items-center pl-3 pointer-events-none">
          <span className="md:w-15 md:h-15 bg-gray-200 dark:bg-gray-600 p-2.5 rounded-l-lg">
            github.com
          </span>
        </div>
        <input
          type="text"
          className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 text-sm rounded-lg block w-full pl-28 p-2.5 dark:placeholder-gray-400 dark:text-white"
          placeholder="harshraj8843"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <Link href={`/archive/${username}`}>
        <button className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <BiSearchAlt2 className="w-5 h-5" />
          <span className="sr-only">Search</span>
        </button>
      </Link>
    </>
  );
}
