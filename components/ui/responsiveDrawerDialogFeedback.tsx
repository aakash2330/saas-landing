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
          <button className="p-[3px] w-[15rem] hover:shadow-2xl z-[900] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] rounded-[6px]" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Feedback
            </div>
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
        <button className="p-[3px] w-[15rem] hover:shadow-2xl z-[900] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] rounded-[6px]" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Feedback
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent className="z-[1000] p-5 bg-zinc-800 border-none ">
        <CarouselDemo type="full" closeDialog={closeDrawer}></CarouselDemo>
        <DrawerClose className="hidden" id="closeDrawerButton"></DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
