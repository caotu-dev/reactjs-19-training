"use client";
import Loading from "@/shared/components/Loading";
import { useState, useTransition } from "react";

export default function UseTransitionScreen() {
  // Handle the pending state of an api request
  const [isPending, startTransition] = useTransition();
  const [products, setProducts] = useState("");

  const handleSubmit = () => {
    startTransition(async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    });
  };

  return (
    <div className=" p-24">
      <p className="mb-3 text-white dark:text-white">
        apply <code>useTransition</code> to handle the pending state for api
        request
      </p>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        <code>
            const [isPending, startTransition] = useTransition();
        </code>
      </p>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isPending}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Get products
      </button>
      <p>Response:</p>
      {products && (
        <code className="block w-72">{JSON.stringify(products)}</code>
      )}
      {isPending && <Loading />}
    </div>
  );
}
