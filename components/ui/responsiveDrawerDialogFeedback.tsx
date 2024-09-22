import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQueryShad";
import { CarouselDemo } from "../multi-step-form-carousal";
import { DialogClose } from "@radix-ui/react-dialog";

export function DrawerDialogFeedback() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function closeDialog() {
    document.getElementById("closeDialogButton")?.click();
  }

  function closeDrawer() {
    document.getElementById("closeDrawerButton")?.click();
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <button
              className="text-white z-[999] w-[15rem]  py-2 px-4 rounded-[6px] transform transition-transform duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(130deg, #1764FC 0%, #9F1BB5 50%, #F4771C 100%)",
              }}
            >
            Give feedback
            </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-fit flex justify-center items-center bg-zinc-800 z-[999]">
          <CarouselDemo
            type={"feedback"}
            closeDialog={closeDialog}
          ></CarouselDemo>
          <DialogClose className="hidden" id="closeDialogButton"></DialogClose>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
            <button
              className="text-white z-[999] w-[15rem]  py-2 px-4 rounded-[6px] transform transition-transform duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(130deg, #1764FC 0%, #9F1BB5 50%, #F4771C 100%)",
              }}
            >
            Give feedback
            </button>
      </DrawerTrigger>
      <DrawerContent className="z-[1000] p-5 bg-zinc-800 border-none ">
        <CarouselDemo type="feedback" closeDialog={closeDrawer}></CarouselDemo>
        <DrawerClose className="hidden" id="closeDrawerButton"></DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
