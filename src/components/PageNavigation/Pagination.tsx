"use client";

import type { ProgramType } from "@/types";
import { useState } from "react";
import { ProgramCard } from "../Program";

function returnArray(length: number) {
  return Array.from({ length });
}

function Button({
  children,
  setPage,
  pageNumber,
}: {
  children: React.ReactNode;
  setPage: (arg: number) => void;
  pageNumber: number;
}) {
  return (
    <button
      className="block mr-2 p-2 rounded-lg shadow-xl hover:shadow-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"
      onClick={() => setPage(pageNumber)}
    >
      {children}
    </button>
  );
}

export default function Pagination({
  programData,
}: {
  programData: ProgramType[];
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 10;

  const totalPages = Math.ceil(programData.length / perPage);

  const from = currentPage * perPage - perPage;

  const to = currentPage * perPage;

  const selectedProgramData = programData
    .slice(from, to)
    .map((program) => <ProgramCard key={program.slug} ProgramData={program} />);

  if (totalPages < 5) {
    return (
      <>
        {selectedProgramData}
        {returnArray(totalPages).map((_el, ind) => (
          <button onClick={() => setCurrentPage(ind + 1)} key={ind}>
            {ind + 1}
          </button>
        ))}
      </>
    );
  }

  return (
    <>
      {selectedProgramData}
      <div className="flex items-center">
        {currentPage !== 1 && (
          <Button setPage={setCurrentPage} pageNumber={1}>
            First
          </Button>
        )}
        {currentPage > 1 && (
          <Button setPage={setCurrentPage} pageNumber={currentPage - 1}>
            Prev
          </Button>
        )}
        {
          <Button setPage={setCurrentPage} pageNumber={currentPage}>
            {currentPage}
          </Button>
        }
        <p>...</p>
        {
          <Button setPage={setCurrentPage} pageNumber={totalPages}>
            {totalPages}
          </Button>
        }
        {currentPage < totalPages && (
          <Button setPage={setCurrentPage} pageNumber={currentPage + 1}>
            Next
          </Button>
        )}
        {currentPage !== totalPages && (
          <Button setPage={setCurrentPage} pageNumber={totalPages}>
            Last
          </Button>
        )}
      </div>
    </>
  );
}
