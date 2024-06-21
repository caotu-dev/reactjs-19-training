"use client";
import { TEuroMatch } from "../types/match.types";
import { useState } from "react";
import MatchGeneralInfo from "./match-details/MatchDetailGeneralInfo";

export default function IncomingMatch({ matches }: { matches: TEuroMatch[] }) {
  let [activeSlide, setActiveSlide] = useState<number>(0);

  const goPrev = (slide: number) => {
    const newSlide = slide < 0 ? matches.length - 1 : slide;
    setActiveSlide(newSlide);
  };

  const goNext = (slide: number) => {
    const newSlide = activeSlide >= matches.length ? 0 : slide;
    setActiveSlide(newSlide);
  };

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative overflow-hidden rounded-lg md:h-96">
        {matches?.map((match, index) => (
          <div key={match?._id} className={`animate-fade-left ${index === activeSlide ? "" : "hidden"}`} data-carousel-item>
            <MatchGeneralInfo matchDetails={match} />
          </div>
        ))}
      </div>
      <button
        onClick={() => goPrev(--activeSlide)}
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={() => goNext(++activeSlide)}
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
