const cards = [
  {
    title: "Predictable Throughput at Scale",
    description:
      "Reference-class architecture designed to eliminate network and interconnect bottlenecks. Tier III design principles at the data center level. 200 Gbit-class networking without reselling the same capacity across multiple customers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20 Q14 8 24 20" />
        <line x1="4" y1="20" x2="24" y2="20" />
        <line x1="14" y1="4" x2="14" y2="20" />
        <circle cx="14" cy="20" r="1.5" fill="currentColor" />
        <circle cx="4" cy="20" r="1.5" fill="currentColor" />
        <circle cx="24" cy="20" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "From Experiments to Production, Fully Operational",
    description:
      "Enterprise-grade MLOps delivered as a service, plus proprietary capabilities to improve quality and reduce cost through granular resource accounting across datasets. Tools for experiments, pipelines, versioning, and collaboration.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4 C14 4 8 9 8 14 a6 6 0 0 0 12 0 C20 9 14 4 14 4Z" />
        <line x1="14" y1="20" x2="14" y2="24" />
        <line x1="10" y1="24" x2="18" y2="24" />
        <line x1="11" y1="17" x2="17" y2="17" />
      </svg>
    ),
  },
  {
    title: "DevOps-led technical support that Prevents Downtime",
    description:
      "Engineer-to-engineer operations, not scripts and ticket ping-pong. Proactive diagnostics — anomaly detection and outreach before issues turn into downtime.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="22" height="18" rx="2" />
        <polyline points="8,13 12,17 8,21" />
        <line x1="13" y1="21" x2="20" y2="21" />
      </svg>
    ),
  },
  {
    title: "The Calm Alternative to Cloud Chaos",
    description:
      "A distraction-free platform for high-stakes compute and experimentation — built for teams that outgrow marketplace chaos and reject the bureaucracy and opacity of hyperscalers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 19 a5 5 0 0 1 0-10 1 1 0 0 1 .2 0 7 7 0 0 1 13.6 2A5 5 0 0 1 22 19Z" />
      </svg>
    ),
  },
  {
    title: "Real Metrics. Real Accountability.",
    description:
      'Real dashboards with real signals — latency, packet loss, and system health, not just "up or down." Financial accountability — service credits when the SLA is not met.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="2" />
        <polyline points="7,18 11,13 15,16 21,9" />
        <polyline points="17,9 21,9 21,13" />
      </svg>
    ),
  },
  {
    title: "Low Latency Where It Matters",
    description:
      "Strategic presence in Armenia and Kazakhstan — low-latency advantages for Central and East Asia and parts of Europe.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4 a6 6 0 0 1 6 6 c0 5-6 14-6 14 S8 15 8 10 a6 6 0 0 1 6-6Z" />
        <circle cx="14" cy="10" r="2" />
      </svg>
    ),
  },
];

export function Purpose() {
  return (
    <section className="px-4 py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-10 max-w-2xl mx-auto">
        <div className="text-primaryGreen">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M28 8 C22 14 18 20 20 28 C22 36 28 38 28 48" />
            <path d="M20 28 C14 26 10 20 14 14" />
            <path d="M36 28 C42 26 46 20 42 14" />
            <path d="M22 20 C22 12 28 8 28 8 C28 8 34 12 34 20" />
            <path d="M24 34 L28 28 L32 34" />
            <line x1="24" y1="40" x2="32" y2="40" />
          </svg>
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
            className="bg-foreground rounded-2xl p-6 flex flex-col gap-3"
          >
            <div className="flex justify-end text-primaryGreen">
              {card.icon}
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
