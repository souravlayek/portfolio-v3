import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

type ModalProps = {
  isVisible: boolean;
  onCancel: () => void;
  title: string;
  description?: string;
  content: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isVisible,
  onCancel,
  title,
  description,
  content,
}) => {
  console.log(isVisible);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isVisible} onOpenChange={onCancel}>
        <DialogContent className="sm:max-w-[60vw] w-[60vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {!!description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isVisible} onClose={onCancel}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          {!!description && (
            <DrawerDescription>{description}</DrawerDescription>
          )}
        </DrawerHeader>
        {content}
        {/* <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <button>Cancel</button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default Modal;
