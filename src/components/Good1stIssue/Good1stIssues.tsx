"use client";

import { useState } from "react";

import type { Good1stIssueType } from "@/types";

import Good1stIssueCard from "./Good1stIssueCard"

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
      className="block mx-1 px-2 py-1 rounded-md shadow-xl hover:shadow-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"
      onClick={() => setPage(pageNumber)}
    >
      {children}
    </button>
  );
}

export default function Good1stIssues({
  Good1stIssueData,
}: {
  Good1stIssueData: Good1stIssueType[];
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 20;

  const totalPages = Math.ceil(Good1stIssueData.length / perPage);

  const from = currentPage * perPage - perPage;

  const to = currentPage * perPage;

  return (
    <>
      {Good1stIssueData.slice(from, to).map((Good1stIssue) => (
        <Good1stIssueCard key={Good1stIssue.issue_url} Good1stIssueData={Good1stIssue} />
      ))}

      {/* Pagination */}
      <div className="flex justify-center py-10">
        {currentPage > 1 && (
          <Button setPage={setCurrentPage} pageNumber={currentPage - 1}>
            Prev
          </Button>
        )}
        {currentPage > 2 && (
          <Button setPage={setCurrentPage} pageNumber={currentPage - 2}>
            {currentPage - 2}
          </Button>
        )}
        {currentPage > 1 && (
          <Button setPage={setCurrentPage} pageNumber={currentPage - 1}>
            {currentPage - 1}
          </Button>
        )}
        <Button setPage={setCurrentPage} pageNumber={currentPage}>
          {currentPage}
        </Button>
        {currentPage < totalPages && (
          <Button setPage={setCurrentPage} pageNumber={currentPage + 1}>
            {currentPage + 1}
          </Button>
        )}
        {currentPage < totalPages - 1 && (
          <Button setPage={setCurrentPage} pageNumber={currentPage + 2}>
            {currentPage + 2}
          </Button>
        )}
        {currentPage < totalPages && (
          <Button setPage={setCurrentPage} pageNumber={currentPage + 1}>
            Next
          </Button>
        )}
      </div>
    </>
  );
}
