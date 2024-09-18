"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

function progressColors({ progress }: { progress: number }) {
  if (progress === 100) {
    return "[&>*]:bg-green-400";
  } else if (progress > 60) {
    return "[&>*]:bg-orange-400";
  } else {
    return "[&>*]:bg-white";
  }
}

export function ProgressTimer({
  progressTimerStart,
}: {
  progressTimerStart: boolean;
}) {
  const [progress, setProgress] = React.useState(0);
  console.log({ progress });

  React.useEffect(() => {
    if (progressTimerStart) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 10000) {
            return prev + 1000;
          } else {
            clearInterval(interval);
            return 10000;
          }
        });
      }, 1000);
    }
  }, [progressTimerStart]);

  // Convert progress from a 10,000 scale to a 100 scale
  const progressPercent = (progress / 10000) * 100;

  return (
    <>
      {progress !== 10000 ? (
        <Progress
          value={progressPercent} // Pass the scaled progress here
          className={cn(
            `${progressColors({ progress: progressPercent })} h-1 bg-transparent  transition-all`,
          )}
        />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Button className="bg-zinc-200 hover:bg-zinc-300">
            Open Report in a new Tab
          </Button>
          <p className="text-xs">Link will expire in 5 mins</p>
        </div>
      )}
    </>
  );
}
