"use client";
import { useEffect, useState } from "react";
import { TEuroMatchTab } from "../../types/match.types";
import MatchItem from "../MatchItem";
import React from "react";

export default function MatchDetailTab({ tabs }: { tabs: TEuroMatchTab[] }) {
  const defaultTab = 1;
  const [activeTab, setActiveTab] = useState<number>(defaultTab);

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700 w-full bg-gray-50 dark:bg-gray-800">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          {tabs?.map((tab) => (
            <li key={tab?.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 ${
                  tab?.id === activeTab ? "border-b-2 rounded-t-lg" : ""
                }`}
                id={`${tab?.selector}-tab`}
                data-tabs-target={`#${tab?.selector}`}
                type="button"
                role="tab"
                aria-controls={tab?.selector}
                aria-selected={tab?.id === activeTab}
                onClick={() => setActiveTab(tab?.id)}
              >
                {tab?.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {tabs?.map((tab) => (
          <div
            key={tab?.id}
            className={`${
              tab?.id === activeTab ? "flex flex-wrap gap-4" : "hidden"
            }`}
            id={tab?.selector}
            role="tabpanel"
            aria-labelledby={`${tab?.selector}-tab`}
          >
            {tab?.children}
          </div>
        ))}
      </div>
    </>
  );
}
