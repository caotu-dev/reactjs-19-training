"use client";
import Loading from "@/shared/components/Loading";
import { Suspense, use } from "react";

export default function UseApiScreen() {
  const firstPromise = () => fetch("https://dummyjson.com/recipes");
  const secondPromise = () => fetch("https://dummyjson.com/users");
  return (
    <div className="border p-2">
      <p className="mb-3 text-white dark:text-white">
        <code className="text-red-600">use</code> is a React API that lets you
        read the value of a resource like a Promise or Context.
      </p>
      <code className="text-gray-600 pb-2 block">
        <p> const recipes = use(firstPromise);</p>
        <p> const users = use(secondPromise);</p>
      </code>
      <div className="flex">
        <Suspense fallback={<Loading />}>
          <FirstChildComponent recipePromise={firstPromise()} />
          <SecondChildComponent userPromise={secondPromise()} />
        </Suspense>
      </div>
    </div>
  );
}

function FirstChildComponent({
  recipePromise,
}: Readonly<{
  recipePromise: Promise<any>;
}>) {
  const res = use(recipePromise);
  const recipes = use(res.json());

  return (
    <div className="border p-2">
      <p>First child component</p>
      <p>First promise:</p>
      <code className="w-72 h-72 block pt-2 overflow-auto">
        {JSON.stringify(recipes)}
      </code>
    </div>
  );
}

function SecondChildComponent({
  userPromise,
}: Readonly<{ userPromise: Promise<any> }>) {
  const res = use(userPromise);
  const users = use(res.json());

  return (
    <div className="border p-2">
      <p>Second child component</p>
      <p>Second promise:</p>
      <code className="w-72 h-72 block pt-2 overflow-auto">
        {JSON.stringify(users)}
      </code>
    </div>
  );
}
