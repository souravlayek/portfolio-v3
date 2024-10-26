import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FlipWords } from "@/components/ui/flip-words";
import { Separator } from "@/components/ui/separator";
import {
  IconBrandDocker,
  IconBrandGithub,
  IconBrandGolang,
  IconBrandJavascript,
  IconBrandNextjs,
  IconWorld,
} from "@tabler/icons-react";
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
      <section className="mt-16 container">
        <div className="mb-6 flex justify-between max-sm:flex-col items-center">
          <h1 className="text-2xl">Here are my memorable works</h1>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-transparent via-foreground max-sm:hidden"></div>
          <button className="bg-brightOrange text-white px-4 py-2 rounded-md transition duration-150 hover:bg-brightOrange/80">
            See More
          </button>
        </div>
        <BentoGrid>
          <BentoGridItem className="col-span-6 p-0 overflow-hidden">
            <WorkShowcaseCard />
          </BentoGridItem>
          <BentoGridItem className="col-span-6 p-0 overflow-hidden">
            <WorkShowcaseCard />
          </BentoGridItem>
          <BentoGridItem className="col-span-12 p-0 overflow-hidden">
            <WorkShowcaseCard />
          </BentoGridItem>
          <BentoGridItem className="col-span-8 p-0 overflow-hidden">
            <WorkShowcaseCard />
          </BentoGridItem>
          <BentoGridItem className="col-span-4 p-0 overflow-hidden">
            <WorkShowcaseCard />
          </BentoGridItem>
        </BentoGrid>
      </section>
    </main>
  );
};

const WorkShowcaseCard = () => {
  return (
    <div className="bg-white dark:bg-black  h-full flex flex-col">
      <div
        style={{
          backgroundImage: "url('https://placehold.co/600x400')",
        }}
        className="w-full h-full rounded-xl bg-center bg-cover bg-no-repeat flex items-end group/work-card"
      >
        <div className="h-10 w-full flex items-center mb-1 opacity-0 transition duration-150 group-hover/work-card:opacity-100">
          <IconBrandGithub className="w-8 h-8 text-primary" />
          <IconWorld className="w-8 h-8 text-primary" />
          <Separator orientation="vertical" />
          <IconBrandNextjs className="w-8 h-8 text-primary/50" />
          <IconBrandJavascript className="w-8 h-8 text-primary/50" />
          <IconBrandDocker className="w-8 h-8 text-primary/50" />
          <IconBrandGolang className="w-8 h-8 text-primary/50" />
        </div>
      </div>
      <p className="text-sm tracking-widest font-light h-fit">Mittler</p>
    </div>
  );
};

export default HomePage;
