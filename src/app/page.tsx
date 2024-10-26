import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FlipWords } from "@/components/ui/flip-words";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/ui/timeline";
import {
  IconArrowRight,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandGolang,
  IconBrandJavascript,
  IconBrandNextjs,
  IconWorld,
} from "@tabler/icons-react";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  LINKS_FOR_TECHNOLOGIES,
  SERVICES,
  TESTIMONIALS,
  WORKFLOW_STEPS,
} from "./data";
import { LinkPreview } from "@/components/ui/link-preview";
import ServiceDetailsModal from "@/components/service-details-modal";

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
          <h1 className="text-2xl">Highlights of My Journey</h1>
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
      <section className="mt-16 container">
        <div className="flex items-center">
          <h1 className="text-2xl">The Method to My Craft</h1>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-transparent via-foreground max-sm:hidden"></div>
        </div>
        <Timeline
          data={WORKFLOW_STEPS.map((item) => ({
            title: item.title,
            content: (
              <ul>
                {item.content.map((work) => (
                  <li className="flex gap-1" key={work}>
                    <IconArrowRight className="min-w-4 min-h-4 text-foreground" />
                    {work}
                  </li>
                ))}
              </ul>
            ),
          }))}
        />
      </section>
      <section className="mt-16">
        <div className="container flex items-center">
          <h1 className="text-2xl">What I Bring to the Table</h1>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-transparent via-foreground max-sm:hidden"></div>
        </div>
        <div>
          <Carousel
            items={SERVICES.map((service, index) => (
              <Card
                key={service.tag}
                card={{
                  category: service.tag,
                  content: (
                    <ServiceDetailsModal
                      body={service.description}
                      tagline={service.tagline}
                      technologies={service.technologies}
                    />
                  ),
                  src: service.src,
                  title: service.title,
                }}
                index={index}
              />
            ))}
          />
        </div>
      </section>
      <section className="my-16">
        <div className="container flex items-center">
          <h1 className="text-2xl">Reflections on Working Together</h1>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-transparent via-foreground max-sm:hidden"></div>
        </div>
        <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={TESTIMONIALS}
            direction="right"
            speed="slow"
          />
        </div>
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
        <div className="h-8 px-2 w-full flex gap-2 items-center pb-2 opacity-0 transition duration-150 group-hover/work-card:opacity-100">
          <IconBrandGithub className="w-6 h-6 text-primary cursor-pointer hover:animate-bounce" />
          <IconWorld className="w-6 h-6 text-primary cursor-pointer hover:animate-bounce" />
          <Separator orientation="vertical" />
          <IconBrandNextjs className="w-5 h-5 text-primary/50" />
          <IconBrandJavascript className="w-5 h-5 text-primary/50" />
          <IconBrandDocker className="w-5 h-5 text-primary/50" />
          <IconBrandGolang className="w-5 h-5 text-primary/50" />
        </div>
      </div>
      <p className="text-sm tracking-widest font-light h-fit">Mittler</p>
    </div>
  );
};

export default HomePage;
