import Image from 'next/image';
import { FeatureCards } from '../feature-cards';
import { GetStarted } from 'app/home/get-started';
import { ViewPricing } from 'app/home/view-pricing';
import { Button } from 'ui/components/ui/button';

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

export default function PrivateCompute() {
  return (
    <section className="sm:p-6 px-2 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Hero image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/products/private_compute.jpg"
              alt="Private Compute"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="flex items-center gap-3 text-background text-[32px]/[48px] font-semibold">
            <span className="text-background text-3xl">●</span>
            Private Compute
          </h1>

          {/* Lead */}
          <p className="text-ashen text-xl/8">
          Private compute is a dedicated infrastructure and operations perimeter for corporate customers that require physical isolation,
          deterministic performance, and controlled integration with the company’s security stack.
          </p>

          {/* Physical isolation */}
          <Section title="Physical isolation">
            <p className="text-background text-sm">
              Deployment in physically isolated racks or a dedicated machine hall.
            </p>
            <p className="text-background text-sm">
              Hardware resources are reserved for a single organization – no shared tenancy,
              no noisy-neighbor contention, and a clean compliance and audit boundary with clear accountability.
            </p>
          </Section>

          {/* Network built for your traffic patterns */}
          <Section title="Network built for your traffic patterns">
            <p className="text-background text-sm">
            Network architecture is designed around real data flows – east–west inside the platform, north–south to external systems,
            backups, replication, streaming delivery, high-frequency requests, and large batch transfers.
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <div>
                <p className="text-background text-sm font-semibold mb-2">Capabilities inside the private compute perimeter:</p>
                <BulletList
                  items={[
                    'Isolated virtual networks and subnets per project with explicit control over routing and gateways',
                    'Public reachability through dedicated external IP addresses with flexible attachment to instances',
                    'QoS policies for bandwidth limits and guarantees, traffic prioritization, and peak smoothing',
                    'BGP routing to advertise subnets and selected workloads into external networks, including VLAN and flat network scenarios and multi-site anycast patterns',
                    'VPN connectivity for remote sites and site-to-site links using common protocols',
                    'VPN access for users with transparent access to virtual networks.'
                  ]}
                />
              </div>
            </div>
          </Section>

          {/* Integration with corporate security controls */}
          <Section title="Integration with corporate security controls">
            <div className="mt-1">
              <p className="text-background text-sm font-semibold mb-2">Private compute is aligned with SOC and governance requirements:              </p>
              <BulletList
                items={[
                  'Isolation at the project, network, and subnet levels',
                  'Network access enforcement via security groups acting as a virtual firewall at instance and interface level',
                  'Quotas and limits for predictable resource consumption',
                  'Role-based access control for administrative and user actions',
                  'Audit logging for actions across platform objects with filtering, retention, and export',
                ]}
              />
            </div>
          </Section>

           {/* Full platform capabilities inside a dedicated perimeter*/}
           <Section title="Full platform capabilities inside a dedicated perimeter">
            <p className="text-background text-sm">
            Private compute does not reduce platform functionality – it changes ownership boundaries and control surfaces.
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <div>
                <p className="text-background text-sm font-semibold mb-2">Core platform capabilities:</p>
                <BulletList
                  items={[
                    'Infrastructure and service orchestration for automated provisioning and operational workflows',
                    'Managed Kubernetes with version selection, CNI options, internal and external network integration, control plane sizing, and standardized access configuration',
                    'Platform observability with monitoring across compute, storage, and core services'
                  ]}
                />
              </div>
            </div>
          </Section>

          {/* Tailored SLA and operating procedures */}
          <Section title="Tailored SLA and operating procedures">
            <p className="text-background text-sm">
            Service levels and operating procedures are defined around your operating model:
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <div>
                <BulletList
                  items={[
                    'Access rules and separation of responsibilities',
                    'Maintenance windows and change management process',
                    'Incident response targets and escalation paths',
                    'Backup and recovery policy',
                    'Agreed availability metrics and SLA reporting'
                  ]}
                />
              </div>
            </div>
          </Section>

          {/* CTAs */}
          <div className="flex justify-center p-4">
            <Button>Talk to our team</Button>
          </div>
        </div>

        {/* Right column – feature cards */}
        <FeatureCards features={features} />
      </div>
    </section>
  );
}
