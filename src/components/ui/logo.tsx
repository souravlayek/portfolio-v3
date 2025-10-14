import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <div
        className={cn(
          "text-[18px] text-foreground font-bold cursor-pointer transition duration-300 hover:opacity-90",
          className,
        )}
      >
        Sourav
        <span className="text-[14px] max-lg:text-[18px] text-muted-foreground ml-[5px] font-medium max-[769px]:hidden">
          Software Engineer & Architect
        </span>
      </div>
    </Link>
  );
};

export default Logo;
