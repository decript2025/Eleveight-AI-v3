export function FeatureCards({ features }: { features: { title: string; desc: string }[] }) {
  return (
    <div className="flex flex-col gap-6">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-foreground/70 rounded-2xl p-6 shadow-sm border border-background/5"
        >
          <h3 className="text-background font-semibold text-xl/8">{feature.title}</h3>
          <p className="text-background text-sm">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}
