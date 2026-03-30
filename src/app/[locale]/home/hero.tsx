import { Button } from "ui/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col justify-center items-center py-16 xl:px-60 lg:px-[10vw] px-4 gap-6 md:gap-8">
      <span className="font-normal border border-foreground rounded-[99px] py-1 px-3 sm:px-4 bg-foreground text-[10px]/[14px] sm:text-[12px]/[16px]">
        <span className="text-primaryGreen">NVIDIA B300</span>
        <span className="text-white"> clusters available in Armenia</span>
      </span>

      <h1 className="text-foreground text-h1 text-center">
        Compute. Innovate.<br />
        <strong>Elevate</strong>
      </h1>

      <p className="text-foreground text-center text-[16px]/[26px] sm:text-[18px]/[28px] font-normal max-w-2xl">
        Industrial-grade cloud GPU infrastructure with predictable performance and
        DevOps-led technical support.{" "}
        <strong>Next-generation NVIDIA GPUs (B300)</strong> delivered as a dependable business
        tool, not a roulette wheel.
      </p>

      <div className="flex justify-center sm:flex-row items-center gap-2 sm:gap-4">
        <Button variant="default">Launch GPU instance</Button>
        <Button variant="secondary">View pricing</Button>
      </div>
    </div>
  );
};