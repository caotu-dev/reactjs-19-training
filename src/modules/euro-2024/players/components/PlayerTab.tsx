"use client";
import { useState } from "react";
import { TEuroMatchTab } from "../../matches/types/match.types";
import PlayerList from "./PlayerList";
import PlayerTopScore from "./PlayerTopScore";
import PlayerTopAssister from "./PlayerTopAssister";

export default function PlayerTab() {
  const defaultTab = 1;
  const [activeTab, setActiveTab] = useState<number>(defaultTab);

  const tabs: TEuroMatchTab[] = [
    {
      id: 1,
      selector: "all-player",
      title: "All player",
      isActive: true,
    },
    {
      id: 2,
      selector: "top-scores",
      title: "Top Scores",
      isActive: false,
    },
    {
      id: 3,
      selector: "top-assisters",
      title: "Top Assisters",
      isActive: false,
    },
  ];

  const TabContent = ({ tabId }: Readonly<{ tabId: number }>) => {
    switch (tabId) {
      case 1:
        return <PlayerList />;
      case 2:
        return <PlayerTopScore />;
      case 3:
        return <PlayerTopAssister />;
      default:
        return <PlayerList />;
    }
  };

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 w-full bg-gray-50 dark:bg-gray-800">
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
        <TabContent tabId={activeTab} />
      </div>
    </>
  );
}
