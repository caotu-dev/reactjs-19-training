"use client";
import Loading from "@/shared/components/Loading";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function UseFormStatusScreen() {
  const [product, setProduct] = useState("");


  const addProduct = async (formData: any) => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.get("title"),
      }),
    });
    const data = await response.json();

    if (data?.status === 201) {
      // handle success
      setProduct(JSON.stringify(data?.data));
    }
  };
  return (
    <form action={addProduct}>
      <p className="mb-3 text-white dark:text-white">
        apply <code className="text-red-600">action</code> in to form tag to
        handle form submission on the client
      </p>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title" // required for formstate
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>

      <SubmitButton />
      <p>Response:</p>
      <code>{product}</code>
    </form>
  );
}

function SubmitButton() {
  const status = useFormStatus();
  const title = status?.data?.get("title") as string;
  return (
    <>
      <p>Note: This button is a separately component</p>
      <p className="mb-3 text-white dark:text-white">
        apply <code className="text-red-600">useFormStatus</code> to get
        information of the last form submission.
      </p>
      <p>Input value : {title}</p>
      <button
        type="submit"
        disabled={status.pending}
        className="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {status?.pending ? <Loading /> : "Submit"}
      </button>
    </>
  );
}
