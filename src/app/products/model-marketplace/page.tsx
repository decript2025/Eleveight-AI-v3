import Image from 'next/image';
import { FeatureCards } from '../feature-cards';
import { GetStarted } from 'app/home/get-started';
import { ViewPricing } from 'app/home/view-pricing';
import { Badge } from 'app/components/badge';
import { Tag } from 'app/components/tag';

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

export default function ModelMarketplace() {
  return (
    <section className="sm:p-6 px-2 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 pb-4">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Hero image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/products/model_marketplace.jpg"
              alt="Model Marketplace"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="flex items-center gap-3 text-background text-[32px]/[48px] font-semibold">
            <span className="text-background text-3xl">▲</span>
            Model Marketplace
          </h1>

          {/* Lead */}
          <p className="text-ashen text-xl/8">
            Model Marketplace is a catalog of open-source models prepared to run on Eleveight.ai
            data center compute without you having to build and maintain the hosting infrastructure yourself.
          </p>

          {/* Open-source models ready to run */}
          <Section title="Open-source models ready to run">
            <p className="text-background text-sm">
            Models are provided as preconfigured deployments: the runtime environment, dependencies, and a standard
            execution interface are already packaged. This shortens the time from model selection to first results and
            removes the routine work of containerization and runtime setup.
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <div>
                <p className="text-background text-sm font-semibold mb-2">Typical model categories include:</p>
                <BulletList
                  items={[
                    'LLMs for chat, summarization, and structured extraction',
                    'Vision and multimodal models for image understanding tasks',
                    'Speech models for ASR and TTS',
                    'Embedding and reranking models for search and retrieval'
                  ]}
                />
              </div>
            </div>
          </Section>

          {/* Instant launch and evaluation in a single environment */}
          <Section title="Instant launch and evaluation in a single environment">
            <p className="text-background text-sm">
            Models run inside the Eleveight.ai environment, making it straightforward to validate quality
            and basic performance before integrating into your product.
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <div>
                <p className="text-background text-sm font-semibold mb-2">Typical evaluation flow:</p>
                <BulletList
                  items={[
                    'Select a model and a compute configuration',
                    'Run interactive tests and batch jobs',
                    'Compare configurations and measure baseline speed metrics',
                    'Record results to benchmark alternatives'
                  ]}
                />
              </div>
            </div>
          </Section>

          {/* Pay only for the compute you consume */}
          <Section title="Pay only for the compute you consume">
            <p className="text-background text-sm">
            Pricing is tied to actual compute usage. This supports experimentation without keeping
            dedicated capacity running and enables scaling for short bursts of demand.
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <div>
                <p className="text-background text-sm font-semibold mb-2">Common cost-control practices in this approach:</p>
                <BulletList
                  items={[
                    'Right-size compute to the workload and run duration',
                    'Shut down deployments when idle',
                    'Use on-demand batch runs instead of permanent servers'
                  ]}
                />
              </div>
            </div>
          </Section>

          {/* From evaluation to usage */}
          <Section title="From evaluation to usage">
            <p className="text-background text-sm">
            Evaluation results can become the basis for adoption: the selected model and compute profile are fixed,
            and operations are built around repeatable runs and predictable resource consumption.
            </p>
          </Section>


        </div>

        {/* Right column – feature cards */}
        <FeatureCards features={features} />
      </div>

      {/* Model grid */}
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {[
              {
                name: 'Llama-3.1-70B-Instruct',
                isNew: true,
                category: 'Text Generation',
                desc: "Meta's Llama 3.1 70B parameter model optimized for instruction following",
                tags: ['text-generation', 'code-generation', 'reasoning'],
              },
              {
                name: 'Mixtral-8x7B-Instruct',
                isNew: false,
                category: 'Text Generation',
                desc: 'Mistral AI 8x7B MoE model optimized for instruction following',
                tags: ['text-generation', 'code-generation', 'reasoning'],
              },
              {
                name: 'Stable Diffusion XL',
                isNew: false,
                category: 'Text Generation',
                desc: 'State-of-the-art text-to-image generation model',
                tags: ['image-generation', 'text-to-image', 'image-editing'],
              },
              {
                name: 'Whisper Large v3',
                isNew: false,
                category: 'Text Generation',
                desc: 'OpenAI speech recognition model for audio transcription',
                tags: ['speech-recognition', 'audio-transcription', 'translation'],
              },
            ].map((model) => (
              <div
                key={model.name}
                className="bg-white rounded-xl py-4 px-6 flex flex-col gap-2 border border-background/10 min-w-[250px] min-h-[250px]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-background font-semibold text-xl/8">{model.name}</h3>
                  {model.isNew && (
                    <Badge text="New" />
                  )}
                </div>
                <p className="text-green-600 text-sm font-mono font-medium">{model.category}</p>
                <p className="text-background text-sm grow">{model.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {model.tags.map((tag) => (
                    <Tag tag={tag} key={tag} />
                  ))}
                </div>
              </div>
            ))}
      </div>

      {/* CTAs */}
      <div className="flex justify-center gap-3">
        <GetStarted />
        <ViewPricing />
      </div>
    </section>
  );
}
