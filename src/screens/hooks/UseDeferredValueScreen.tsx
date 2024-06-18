"use client";

import Loading from "@/shared/components/Loading";
import { apiFetcher } from "@/shared/utils/common.utils";
import { Suspense, use, useDeferredValue, useId, useState } from "react";

export default function UseDeferredValueScreen() {
  const [keyword, setKeyword] = useState<string>("");
  const deferredKeyword = useDeferredValue(keyword);
  const passwordHintId = useId();

  const handleSearch = (q: string) => {
    setKeyword(q);
  };

  return (
    <form>
      <p className="mb-3 text-white dark:text-white">
          apply <code className="text-red-600">useDeferredValue</code> to defer update data state to UI while
          doing request in background
        </p>
      <div className="mb-6">
        <input
          type="text"
          id="keyword"
          name="keyword" // required for formstate
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search ..."
          onChange={(e) => handleSearch(e?.target?.value)}
        />
      </div>
      <Suspense fallback={<Loading />}>
        <SearchResult q={deferredKeyword} />
      </Suspense>
    </form>
  );
}

function SearchResult({ q }: { q: string }) {
  if (!q) return;
  const res: any = use(
    apiFetcher("https://dummyjson.com/products/search?q=" + q)
  );

  return <code className="w-72 overflow-auto block">{JSON.stringify(res)}</code>;
}
