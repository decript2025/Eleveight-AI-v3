import Image from "next/image";


const cards = [
  {
    title: "Predictable Throughput at Scale",
    description:
      "Reference-class architecture designed to eliminate network and interconnect bottlenecks. Tier III design principles at the data center level. 200 Gbit-class networking without reselling the same capacity across multiple customers.",
    icon: 'Scale.svg',
  },
  {
    title: "From Experiments to Production, Fully Operational",
    description:
      "Enterprise-grade MLOps delivered as a service, plus proprietary capabilities to improve quality and reduce cost through granular resource accounting across datasets. Tools for experiments, pipelines, versioning, and collaboration.",
    icon: 'Light bulb.svg',
  },
  {
    title: "DevOps-led technical support that Prevents Downtime",
    description:
      "Engineer-to-engineer operations, not scripts and ticket ping-pong. Proactive diagnostics — anomaly detection and outreach before issues turn into downtime.",
    icon: 'Terminal.svg',
  },
  {
    title: "The Calm Alternative to Cloud Chaos",
    description:
      "A distraction-free platform for high-stakes compute and experimentation — built for teams that outgrow marketplace chaos and reject the bureaucracy and opacity of hyperscalers.",
    icon: 'Cloud.svg',
  },
  {
    title: "Real Metrics. Real Accountability.",
    description:
      'Real dashboards with real signals — latency, packet loss, and system health, not just "up or down." Financial accountability — service credits when the SLA is not met.',
    icon: 'Presentation chart line.svg',
  },
  {
    title: "Low Latency Where It Matters",
    description:
      "Strategic presence in Armenia and Kazakhstan — low-latency advantages for Central and East Asia and parts of Europe.",
    icon: 'Location marker.svg',
  },
];

export function Purpose() {
  return (
    <section className="px-4 py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-10 max-w-2xl mx-auto">
        <div className="text-primaryGreen">
          <Image src="/home/purpose/green-power.svg" alt="Green Power" width={110} height={107} />
        </div>
        <h2 className="text-[28px]/[36px] sm:text-[32px]/[42px] font-bold text-foreground">
          100% Green Power. Tier III Resilience.
        </h2>
        <p className="text-foreground text-[15px]/[24px] font-normal">
          100% green power as the baseline, not an option. Tier III–aligned redundancy and backup
          power keep performance stable through grid events. PUE is available online for full
          operational transparency.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-foreground rounded-2xl py-4 px-6 flex flex-col gap-3"
          >
            <div className="flex justify-end text-primaryGreen">
              <Image src={`/home/purpose/${card.icon}`} alt={card.title} width={48} height={48} />
            </div>
            <h3 className="text-white text-[15px]/[22px] font-bold">
              {card.title}
            </h3>
            <p className="text-white/60 text-[13px]/[20px] font-normal">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
