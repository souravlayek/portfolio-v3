"use client";

import { useState, useTransition } from "react";
import { subscribe } from "@/actions/subscribe";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);

    startTransition(async () => {
      const result = await subscribe(email.trim());
      if (result.ok) {
        setMessage("🎉 Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(result.error);
      }
    });
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex w-full max-w-md mx-auto">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="jamie@example.com"
          className="flex-1 rounded-l-full px-6 py-3 text-white bg-[#181A20] focus:outline-none text-base md:text-lg"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold px-7 py-3 rounded-r-full text-base md:text-lg transition-colors"
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
      )}
    </>
  );
}
