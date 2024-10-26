import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

const words: string[] = [
  "Innovative",
  "Reliable",
  "Unique",
  "Impactful",
  "Professional",
  "Sophisticated",
];
const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <section className="h-[60vh] flex items-center">
        <div className="container text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          <div>
            I’m Sourav, Your Go-To for
            <FlipWords words={words} />
            <span className="inline md:block">Digital Products</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
