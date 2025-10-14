import React from "react";
import { LinkPreview } from "./ui/link-preview";
import { LINKS_FOR_TECHNOLOGIES } from "@/app/data";
import { IconArrowRight } from "@tabler/icons-react";
const ServiceDetailsModal = ({
  body,
  tagline,
  technologies,
}: {
  body: string;
  tagline: string;
  technologies: string[];
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {tagline}
        </span>{" "}
        {body}
      </p>
      <div className="mt-3 max-w-3xl mx-auto">
        <h1 className="text-xl font-semibold my-1"> Technology I use</h1>
        {technologies.map((item) => (
          <LinkPreview
            url={LINKS_FOR_TECHNOLOGIES[item] ?? "https://souravlayek.com"}
            key={item}
            className="flex items-center gap-1"
          >
            <IconArrowRight className="min-w-4 min-h-4 text-foreground" />
            {item}
          </LinkPreview>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailsModal;
