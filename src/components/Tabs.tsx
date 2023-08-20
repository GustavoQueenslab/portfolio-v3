
import clsx from "clsx";

import { articles } from "../../lib/content/articles";
import { components } from "../../lib/content/components";
import { projects } from "../../lib/content/projects";

const tabs = [
  { id: 0, name: "Components" },
  { id: 1, name: "Articles" },
  { id: 2, name: "Projects" },
];

function getContentLength(tabIndex) {
  switch (tabIndex) {
    case 0:
      return components.length;
    case 1:
      return articles.length;
    case 2:
      return projects.length;
    default:
      return 0;
  }
}

export default function Tabs({ actualCategory, stateChanger }) {
  return (
    <nav
      className="flex mb-3 space-x-8 border-b border-gray-200"
      aria-label="Tabs"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => stateChanger(tab.id)}
          className={clsx(
            tab.id == actualCategory
              ? "border-tertiary text-tertiary"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
            "whitespace-nowrap flex py-4 px-1 border-b-2 text-sm font-quicksand font-semibold"
          )}
          aria-current={tab.id == actualCategory ? "page" : undefined}
        >
          {tab.name}
          <span
            className={clsx(
              tab.id == actualCategory
                ? "bg-blue-100 text-tertiary"
                : "bg-gray-100 text-gray-900",
              "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
            )}
          >
            {getContentLength(tab.id)}
          </span>
        </button>
      ))}
    </nav>
  );
}
