import Image from "next/image";
import { Button } from "ui/components/ui/button";

const features = [
  {
    title: "Pure Metal",
    bullets: [
      "Dedicated next-gen servers with no noisy neighbors",
      "You control the software stack",
      "We own infrastructure reliability end to end",
      "You control the software stack",
    ],
    imgSrc: "/home/features/pure-metal.webp",
    alt: "Pure Metal",
    bg: "bg-[linear-gradient(180deg,_#D8EBFF_0%,_#A8FFCF_80%)]",
    imageRight: true,
    imageShape: "default" as const,
  },
  {
    title: "Growth Fabric",
    bullets: [
      "AI Cloud for training and inference with clear instance classes",
      "Consumption-based pricing aligned to actual usage",
      "Kubernetes as a service",
      "MLOps delivered as a platform",
    ],
    imgSrc: "/home/features/growth-fabric.webp",
    alt: "Growth Fabric",
    bg: "bg-[linear-gradient(180deg,_#A8FFCF_0%,_#FFF4DF_80%)]",
    imageRight: false,
    imageShape: "diamond" as const,
  },
  {
    title: "Private Compute",
    bullets: [
      "Physically isolated racks or dedicated machine halls",
      "Custom network design for your traffic patterns",
      "Integration with corporate security controls",
      "Tailored SLA and operating procedures",
    ],
    imgSrc: "/home/features/private-compute.webp",
    alt: "Private Compute",
    bg: "bg-[linear-gradient(180deg,_#F0E2FF_0%,_#FFF4DF_80%)]",
    imageRight: true,
    imageShape: "circle" as const,
  },
  {
    title: "Model Marketplace",
    bullets: [
      "AI Cloud for training and inference with clear instance classes",
      "Consumption-based pricing aligned to actual usage",
      "Kubernetes as a service",
      "MLOps delivered as a platform",
    ],
    imgSrc: "/home/features/model-marketplace.webp",
    alt: "Model Marketplace",
    bg: "bg-[linear-gradient(180deg,_#F0E2FF_0%,_#FFF4DF_80%)]",
    imageRight: false,
    imageShape: "triangle" as const,
  },
];

type ImageShape = "default" | "diamond" | "circle" | "triangle";

function FeatureImage({ src, alt, shape }: { src: string; alt: string; shape: ImageShape }) {
  if (shape === "diamond") {
    return (
      <div className="relative w-56 h-56 shrink-0">
        <div className="absolute inset-0 rotate-45 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 -rotate-45 scale-[1.42] flex items-center justify-center">
            <Image src={src} alt={alt} fill className="object-cover" unoptimized/>
          </div>
        </div>
      </div>
    );
  }

  if (shape === "circle") {
    return (
      <div className="relative w-60 h-60 shrink-0 rounded-full overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover" unoptimized/>
      </div>
    );
  }

  if (shape === "triangle") {
    return (
      <div
        className="relative w-60 h-60 shrink-0 overflow-hidden"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      >
        <Image src={src} alt={alt} fill className="object-cover" unoptimized/>
      </div>
    );
  }

  return (
    <div className="relative w-72 h-52 shrink-0 rounded-2xl overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover" unoptimized />
    </div>
  );
}

export function Features() {
  return (
    <section className="flex flex-col gap-4 px-4 py-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${feature.bg} rounded-3xl flex flex-col md:flex-row items-center gap-8 px-10 py-8 overflow-hidden`}
        >
          {!feature.imageRight && (
            <div className="flex justify-center md:w-1/2">
              <FeatureImage src={feature.imgSrc} alt={feature.alt} shape={feature.imageShape} />
            </div>
          )}

          <div className="flex flex-col gap-4 md:w-1/2">
            <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
            <ul className="flex flex-col gap-2">
              {feature.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-0.5 shrink-0">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Button variant="secondary" className="w-fit mt-2">Launch GPU instance</Button>
          </div>

          {feature.imageRight && (
            <div className="flex justify-center md:w-1/2">
              <FeatureImage src={feature.imgSrc} alt={feature.alt} shape={feature.imageShape} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
