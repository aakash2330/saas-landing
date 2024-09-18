import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQueryShad";
import { CarouselDemo } from "../multi-step-form-carousal";
import { DialogClose } from "@radix-ui/react-dialog";

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function closeDialog() {
    document.getElementById("closeDialogButton")?.click();
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="p-[3px] hover:shadow-2xl z-[900] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] rounded-[6px]" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Upload your excel file
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-fit bg-zinc-800 z-[999]">
          <CarouselDemo closeDialog={closeDialog}></CarouselDemo>
          <DialogClose className="hidden" id="closeDialogButton"></DialogClose>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="p-[3px] hover:shadow-2xl z-[900] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] rounded-[6px]" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Upload your excel file
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent className="z-[999] p-5">
        <CarouselDemo closeDialog={closeDialog}></CarouselDemo>
      </DrawerContent>
    </Drawer>
  );
}
