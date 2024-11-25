import { LinkPreview } from "@/components/ui/link-preview";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { EXPERIENCES } from "../data";
import { IconArrowRight } from "@tabler/icons-react";
import { FocusCards } from "@/components/ui/focus-cards";
export const metadata = {
  title: "About Me | Sourav Layek",
};

const cards = [
  { title: "Art In Tail", src: "/gallery/artInTail.jpg" },
  { title: "Leopard", src: "/gallery/leopard.jpg" },
  { title: "Buildings", src: "/gallery/buildings.jpg" },
  { title: "Leopard Eye", src: "/gallery/leopardEye.jpg" },
  { title: "Butcher", src: "/gallery/butcher.jpg" },
  { title: "Locopilot", src: "/gallery/locopilot.jpg" },
  { title: "Carriage", src: "/gallery/carraige.jpg" },
  {
    title: "Merge Illusion",
    src: "/gallery/mergeIllusion.jpg",
    isHorizontal: true,
  },
  { title: "Child With Camel", src: "/gallery/childWithCammel.jpg" },
  { title: "Monk", src: "/gallery/monk.jpg" },

  { title: "Monkey", src: "/gallery/monkey.jpg" },
  { title: "Covered Eye", src: "/gallery/coveredEye.jpg", isHorizontal: true },
  { title: "Difference", src: "/gallery/difference.jpg" },
  { title: "Panchayat", src: "/gallery/panchayat.jpg" },
  { title: "Dog", src: "/gallery/dog.jpg" },
  { title: "Play With Fire", src: "/gallery/playWithFire.jpg" },
  { title: "Durga", src: "/gallery/durga.jpg" },
  { title: "Playful", src: "/gallery/playfull.jpg" },
  { title: "Eyes", src: "/gallery/eyes.jpg" },
  {
    title: "Rajasthani Dance",
    src: "/gallery/rajasthaniDance.jpg",
    isHorizontal: true,
  },
  {
    title: "Hard Work Before Durga Puja",
    src: "/gallery/hardWorkBeforeDurgaPuja.jpg",
  },
  { title: "Recursion", src: "/gallery/recursion.jpg", isHorizontal: true },
  { title: "Horse", src: "/gallery/horse.jpg" },
  { title: "The Horse Dancer", src: "/gallery/horseDancer.jpg" },
  { title: "The Tri", src: "/gallery/theTri.jpg", isHorizontal: true },
  { title: "Train Man", src: "/gallery/trainMan.jpg" },
  { title: "Japan In India", src: "/gallery/japanInIndia.jpg" },
  { title: "Twistness", src: "/gallery/twistness.jpg" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/souravlayek/",
  },
  {
    label: "Read.cv",
    link: "https://read.cv/souravlayek",
  },
  {
    label: "GitHub",
    link: "https://github.com/souravlayek",
  },
];

const CONNECTION = [
  {
    label: "Email Me",
    link: "mailto:souravlayek11@gmail.com",
  },
  {
    label: "Call Me",
    link: "tel:+918617552545",
  },
];

const AboutMe = () => {
  return (
    <main className="container">
      <section className="py-28">
        <h1 className="text-2xl mb-6">About Me</h1>
        <div className="flex justify-between gap-24 flex-col lg:flex-row">
          <div className="relative min-w-32 max-w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/me.jpg"
              alt="Sourav's headshot"
              fill
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-5">A few words about me</h2>
            <p className="mb-3">
              I’m a Senior Software Engineer with over five years of experience,
              during which I’ve had the opportunity to work on a range of
              projects across multiple technologies. Throughout my career, I’ve
              led a team of eight talented professionals and played an
              instrumental role in system design and architectural decisions for
              various projects. I take pride in building high-performance,
              secure applications that serve and impact a broad user base,
              always aiming to deliver solutions that are both robust and
              reliable.
              <br />
              <br />
              If you’re looking for a professional who combines technical
              expertise with leadership and a focus on quality, I’d be thrilled
              to work with you. My approach is grounded in collaboration,
              attention to detail, and a commitment to creating applications
              that are as secure as they are user-friendly. Let’s team up to
              bring your vision to life with innovative and dependable solutions
              tailored to your needs.
            </p>
            <Link
              className="text-brightOrange font-semibold trasition duration-150 hover:tracking-widest"
              href="https://drive.google.com/file/d/14Nxqbrt39n3sl6W88xrQRtlXe7wK3IBS/view?usp=drive_link"
              target="_blank"
            >
              <span className="text-brightOrange">Download Resume</span>
            </Link>
          </div>
          <div className="flex gap-20">
            <div>
              <h4 className="text-lg font-semibold mb-4">Socials</h4>
              <div className="flex flex-col gap-3">
                {SOCIALS.map((item) => (
                  <LinkPreview
                    className="cursor-pointer hover:font-medium text-nowrap"
                    key={item.label}
                    url={item.link}
                    target="_blank"
                  >
                    {item.label}
                  </LinkPreview>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-3">
                {CONNECTION.map((item) => (
                  <Link
                    className="cursor-pointer hover:font-medium text-nowrap"
                    key={item.label}
                    href={item.link}
                    target="_blank"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl mb-6">My Experiences</h1>
        <Timeline
          data={EXPERIENCES.map((item) => ({
            title: item.title,
            subTitle: item.subTitle,
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
      <div className="my-16 text-center">
        <h2 className="text-2xl text-foreground/80 font-semibold mb-5">
          Explore My Projects
        </h2>
        <p className="text-xl text-foreground/80">
          Curious about what I’ve been working on? Click below to view my
          portfolio, where you can discover a variety of projects that showcase
          my skills and expertise in software development and design. From
          innovative applications to impactful design solutions, my work
          reflects my dedication to excellence and creativity.
        </p>
        <div className="my-8">
          <Link
            href="/works"
            className="px-5 py-4 bg-brightOrange hover:bg-brightOrange/80 cursor-pointer rounded-lg"
          >
            Let&apos;s see my works
          </Link>
        </div>
      </div>
      <section>
        <h2 className="text-2xl text-foreground/80 font-semibold mb-5">
          Adventures Beyond the Screen
        </h2>
        <p className="text-xl text-foreground/80">
          Beyond my life in tech, I’m a passionate photographer with a love for
          capturing moments and exploring new places. Traveling offers endless
          stories and unique perspectives that inspire my creative side. Join me
          as I share glimpses of my journey, from snapshots of stunning
          landscapes to the experiences that fuel my work and passions.
        </p>
        <div className="my-16" id="gallery">
          <FocusCards cards={cards} />
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
