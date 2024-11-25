"use client";
import works from "./data.json";

import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Modal from "@/components/ui/modal";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { LinkPreview } from "@/components/ui/link-preview";
const ModalContent = ({ data }: { data: any }) => {
  return (
    <div className="">
      <div className="relative w-full h-[400px] rounded-xl bg-center bg-cover bg-no-repeat flex items-end group/work-card">
        <Image src={data.thumbnail} fill alt={data.title} objectFit="contain" />
      </div>
      <div>
        <h2 className="text-lg font-bold my-4">Challenges I Faced</h2>
        {data.challenges.map((item) => (
          <div className="my-1" key={item.challenge}>
            <p className="font-semibold flex gap-1 items-center">
              <IconArrowRight />
              {item.challenge}
            </p>

            <p className="ml-8">{item.solution}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-bold my-4">
          Tech Stack I have Worked With
        </h2>
        {data.techStack.map((item) => (
          <div className="my-1 ml-2" key={item.link}>
            <LinkPreview
              url={item.link}
              target="_blank"
              className="font-semibold flex gap-1 items-center"
            >
              {item.name}
            </LinkPreview>
          </div>
        ))}
      </div>
    </div>
  );
};
const WorkShowcaseCard = ({
  image,
  name,
  details,
}: {
  image: string;
  name: string;
  details: any;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="bg-white dark:bg-black min-h-[240px] h-full flex flex-col"
      >
        <div className="relative w-full h-full rounded-xl bg-center bg-cover bg-no-repeat flex items-end group/work-card">
          <Image src={image} fill alt={name} />
        </div>
        <p className="text-sm tracking-widest font-light h-fit">{name}</p>
      </div>

      <Modal
        isVisible={isModalOpen}
        onCancel={handleCancel}
        content={<ModalContent data={details} />}
        title={details.title}
        description={details.description}
      />
    </>
  );
};
const Works = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center mt-24">
      <BentoGrid>
        {works
          .filter((item) => !item.hide)
          .map((item) => (
            <BentoGridItem
              key={item.id}
              className="col-span-6 p-0 overflow-hidden"
            >
              <WorkShowcaseCard
                image={item.thumbnail}
                name={item.title}
                details={item}
              />
            </BentoGridItem>
          ))}
      </BentoGrid>
    </div>
  );
};

export default Works;
