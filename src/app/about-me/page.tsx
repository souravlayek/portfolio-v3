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
  {
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Valley of life",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sala behta hi jayega",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camping is for pros",
    src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The road not taken",
    src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    link: "https://linkedin.com/souravlayek",
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
        <div className="flex justify-between gap-24">
          <div className="relative min-w-32 h-32 rounded-full overflow-hidden">
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
        <div className="my-16">
          <FocusCards cards={cards} />
        </div>
      </section>
    </main>
  );
};

export default AboutMe;