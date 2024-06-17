"use client";
import { delayInSec } from "@/shared/utils/common.utils";
import { useOptimistic, useState } from "react";

export default function UseOptimisticScreen() {
  const [messages, setMessages] = useState<any[]>([]);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        content: newMessage,
        status: "SENDING",
      },
    ]
  );

  const sendMessage = async (formData: any) => {
    const message = formData.get("message");
    // Append new message with status sendding
    addOptimisticMessage(message);
    await delayInSec(5000);
    const resMessage = { content: message, status: "DONE" };
    setMessages((messages: any[]) => [...messages, resMessage]);
  };

  return (
    <form action={sendMessage}>
      <p className="mb-3 text-white dark:text-white">
        apply <code className="text-red-600">useOptimistic</code> to update new data state to UI while
        doing request in background
      </p>
      <div className="mb-6">
        <input
          type="text"
          id="message"
          name="message" // required for formstate
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter message"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      <p>Messages:</p>
      {optimisticMessages.map((message: any, key: number) => (
        <p key={key}>
          {message?.content}
          <small className="pl-2">
            {message?.status === "SENDING" ? "sending ..." : "sent"}
          </small>
        </p>
      ))}
    </form>
  );
}
