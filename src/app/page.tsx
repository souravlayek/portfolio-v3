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

const words: string[] = [
  "Innovative",
  "Reliable",
  "Unique",
  "Impactful",
  "Professional",
  "Sophisticated",
];
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

const HomePage = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
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
      <section className="mt-16 container">
        <h1 className="text-2xl">My Work Process</h1>
        <Timeline
          data={myWorkProcess.map((item) => ({
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
      <section>
        <h1 className="container text-2xl">Services I offer</h1>
        <div>
          <Carousel items={cards} />
        </div>
      </section>
    </main>
  );
};

const myWorkProcess: { title: string; content: string[] }[] = [
  {
    title: "Understanding Your Vision",
    content: [
      "We’ll start with an open discussion to understand your goals and the purpose behind your project.",
      "Together, we’ll identify the target audience, core requirements, and any key features or functionalities you envision.",
      "I’ll bring in ideas to help shape a clear project direction tailored just for you.",
    ],
  },
  {
    title: "Crafting a Customized Proposal",
    content: [
      "Once we have a solid idea, I’ll create a detailed proposal, outlining costs, a realistic timeline, and deliverables.",
      "This proposal will include key milestones so you know exactly what to expect at each stage.",
      "I’ll share the proposal with you for review and make any necessary adjustments to ensure it meets your needs.",
    ],
  },
  {
    title: "Designing Your Solution",
    content: [
      "I’ll start with initial wireframes or mockups that reflect our discussed vision, giving you a tangible sense of the product.",
      "After sharing the designs, I’ll gather your feedback to ensure everything aligns with your expectations.",
      "Any tweaks or updates you need? I’ll handle them promptly so we’re ready to move forward confidently.",
    ],
  },
  {
    title: "Finalizing Your Design",
    content: [
      "I’ll present the refined design for your approval, ensuring every detail matches your requirements.",
      "If there’s anything further to adjust, I’ll take care of it to make sure you’re fully satisfied with the look and feel.",
      "With your sign-off, we’ll be ready to kick off development!",
    ],
  },
  {
    title: "Building Your Project",
    content: [
      "I’ll set up the development environment and begin coding, implementing features exactly as we planned.",
      "Throughout the process, I’ll keep you updated on progress so you’re never out of the loop.",
      "Any questions along the way? I’m here to provide answers and adapt as needed.",
    ],
  },
  {
    title: "Delivering Your Final Product",
    content: [
      "Once development wraps up, I’ll test the product thoroughly to ensure it’s free of any bugs or issues.",
      "After testing, I’ll deploy your product to the agreed environment, so it’s live and ready for use.",
      "I’ll hand over access, documentation, and everything you need to start using the product confidently.",
    ],
  },
  {
    title: "Two Weeks of Free Support",
    content: [
      "For two weeks post-launch, I’ll be available to provide maintenance and support, free of charge.",
      "I’ll monitor performance, address any questions, and make sure everything runs smoothly for you.",
      "This gives you peace of mind, knowing I’m here to help if any issues arise.",
    ],
  },
  {
    title: "Gathering Your Feedback",
    content: [
      "At the end of the project, I’ll reach out for your honest feedback on both the product and the process.",
      "If there’s anything more I can do to make the product perfect, I’ll address it with priority.",
      "With your final approval, we’ll wrap up the project, and I’ll always be just a message away for future needs!",
    ],
  },
];

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
