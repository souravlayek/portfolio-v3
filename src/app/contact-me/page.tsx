"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { TextArea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
function validateEmail(email: string): boolean {
  // Regular expression to validate an email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
}

type FormData = {
  name: string;
  email: string;
  note: string;
};
const validate = (formData: FormData): string | null => {
  if (!formData.name?.trim?.()) {
    return "Sorry! I need your name to conatct you.";
  } else if (!formData.note?.trim?.()) {
    return "Your idea or Query is must to help you.";
  } else if (!validateEmail(formData.email.trim())) {
    return "Sorry! I need your email to contact you.";
  }
  return null;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  note: "",
};

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const message = validate(formData);
      if (message) {
        toast({
          title: "Hey, Got something wrong",
          description: message,
          variant: "destructive",
        });
        return;
      }
      const res = await fetch("/api/contact-me", {
        method: "POST",
        body: JSON.stringify(formData),
      }).then((res) => res.json());
      setFormData(initialFormData);
      toast({
        title: "Got it 🚀",
        description: res.message,
      });
    } catch (error) {
      toast({
        title: "Scheduled: Catch up",
        description: "Something went wrong",
        variant: "destructive",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-24 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Let’s Build Something Amazing Together!
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Have questions, ideas, or a project in mind? I’m here to help! Drop me a
        message, and let’s turn your vision into reality. Your journey to
        innovation starts here—let’s make it happen!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Your good name</Label>
          <Input
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={formData.name}
            id="name"
            placeholder="e.g. Tyler"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Your email for contact</Label>
          <Input
            id="email"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="e.g. tyler@souravlayek.com"
            value={formData.email}
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="note">Your note for me</Label>
          <TextArea
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, note: e.target.value }))
            }
            id="note"
            value={formData.note}
            placeholder="I have an idea ..."
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <div className="loader"></div> : <>Send &rarr;</>}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
