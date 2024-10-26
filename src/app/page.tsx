import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
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
    <main>
      <section className="h-[60vh] flex items-center">
        <BackgroundBeamsWithCollision>
          <div className="container">
            <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
              Hey there,
            </p>
            <h1 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-neutral-600 dark:text-neutral-400">
              I’m Sourav, Your Go-To for
              <FlipWords words={words} />
              <span className="inline md:block">Digital Products</span>
            </h1>
          </div>
        </BackgroundBeamsWithCollision>
      </section>
    </main>
  );
};

export default HomePage;
