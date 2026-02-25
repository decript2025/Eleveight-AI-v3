import Image from 'next/image';
import { FeatureCards } from '../feature-cards';
import { GetStarted } from 'app/home/get-started';
import { ViewPricing } from 'app/home/view-pricing';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-background font-semibold text-xl/8">{title}</h2>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-background text-sm">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-background" />
          {item}
        </li>
      ))}
    </ul>
  );
}

const features = [
  {
    title: 'Compute without noise',
    desc: 'A clean path to performance without noisy neighbors, oversold network capacity, or surprise slowdowns. Built for teams that outgrew the chaos of low-cost marketplaces but do not want the faceless bureaucracy of hyperscale clouds.',
  },
  {
    title: 'DevOps-led technical support',
    desc: 'Technical support delivered by DevOps and specialized engineers, with clear, architecture-aware guidance tailored to your workloads, without call-center scripting.',
  },
  {
    title: 'Reference-grade performance',
    desc: 'Dell reference architecture with no network or interconnect bottlenecks. Data centers designed to Tier III requirements.',
  },
  {
    title: 'Transparency you can verify',
    desc: 'Detailed dashboards – network latency, packet loss, system health. Visibility into performance metrics and energy provenance.',
  },
  {
    title: 'Energy efficiency as an engineering standard',
    desc: 'Green energy with Tier III redundancy. PUE available online. Customer invoices include a carbon footprint reduction calculator.',
  },
];

export default function GrowthFabric() {
  return (
    <section className="sm:p-6 px-2 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Hero image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/products/growth_fabric.jpg"
              alt="Growth Fabric"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="flex items-center gap-3 text-background text-[32px]/[48px] font-semibold">
            <span className="text-background text-3xl">◆</span>
            Growth Fabric
          </h1>

          {/* Lead */}
          <p className="text-ashen text-xl/8">
            MLOps fabric that turns GPU infrastructure, experimentation, fine-tuning, and
            production rollout into one controlled system.
          </p>

          {/* What it solves */}
          <Section title="What it solves">
            <p className="text-background text-sm">
              Growth Fabric eliminates common ML delivery failures: unreproducible experiments,
              fragmented tooling, poor collaboration, unmanaged compute, and weak governance. It
              unifies the full lifecycle: experimentation, orchestration, versioning, evaluation,
              deployment, and operations.
            </p>
          </Section>

          {/* Platform foundation */}
          <Section title="Platform foundation">
            <p className="text-background text-sm">
              Managed Kubernetes with selectable versions to match your compatibility and
              compliance requirements.
            </p>
          </Section>

          {/* ClearML */}
          <Section title="ClearML inside Growth Fabric">
            <p className="text-background text-sm">
              ClearML provides the control layer for ML work: orchestration, traceability,
              governance, and repeatability across the entire workflow.
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <div>
                <p className="text-background text-sm font-semibold mb-2">Core capabilities:</p>
                <BulletList
                  items={[
                    'Experiment tracking with full lineage: code, parameters, artifacts, and results',
                    'Centralized comparison of runs and repeatable execution across environments',
                    'Pipelines and orchestration: queues, agents, scheduling, and automated workflows',
                    'Model and dataset management: versioning, metadata, and searchable registries',
                    'Identity and access control with role-based permissions',
                    'Multi-tenant isolation and stronger access boundaries than raw Kubernetes access alone',
                    'Operational visibility into resource utilization, queues, and execution status',
                  ]}
                />
              </div>
              <div>
                <p className="text-background text-sm font-semibold mb-2">Included stack components:</p>
                <BulletList
                  items={[
                    'Kubernetes + ClearML orchestration',
                    'Registry + WEKA S3 gateway',
                    'Internal Grafana and monitoring',
                  ]}
                />
              </div>
            </div>
          </Section>

          {/* EML Clusters */}
          <Section title="EML Clusters">
            <p className="text-background text-sm">
              EML Clusters is a collaborative fine-tuning lab designed for teams running multiple
              iterations in parallel while keeping everything measurable and comparable.
            </p>
            <div className="mt-1">
              <p className="text-background text-sm font-semibold mb-2">Capabilities:</p>
              <BulletList
                items={[
                  'Shared fine-tuning workspace for many concurrent experiments',
                  'Quality evaluation, analysis, and side-by-side comparison of results',
                  'Versioning of key assets and outcomes for repeatability and auditability',
                  'Team workflows with role separation and controlled access',
                  'Resource management and scheduling for running experiments',
                ]}
              />
            </div>
          </Section>

          {/* Observability */}
          <Section title="Observability and operational control">
            <p className="text-background text-sm">
              Monitoring is built in: platform health, training and runtime metrics, resource
              visibility, and continuous tracking of model performance degradation over time.
            </p>
          </Section>

          {/* CTAs */}
          <div className="flex justify-center gap-3">
            <GetStarted />
            <ViewPricing />
          </div>
        </div>

        {/* Right column – feature cards */}
        <FeatureCards features={features} />
      </div>
    </section>
  );
}
