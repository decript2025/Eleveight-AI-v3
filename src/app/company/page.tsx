import Image from "next/image";
import { createServerApiClient } from "ui/lib/api-client";

const values = [
  {
    title: "Innovation",
    description:
      "We pioneer advancements in AI infrastructure and data technologies, constantly exploring new ways to accelerate the future of artificial intelligence.",
    icon: '/company/our values/sparkles.svg',
  },
  {
    title: "Accessibility",
    description:
      "We make cutting-edge computing power and AI resources available to innovators and enterprises of all sizes — fostering equal opportunity in the global tech ecosystem.",
    icon: '/company/our values/user group.svg',
  },
  {
    title: "Excellence",
    description:
      "We deliver uncompromising quality across every layer of our work — from engineering and data center operations to customer experience and research partnerships.",
    icon: '/company/our values/trending up.svg',
  },
];



interface TeamMember {
  id: number;
  linkedin: string | null;
  Fullname: string;
  Position: string;
  Bio?: string;
  Image?: {
    url: string;
  };
  Order: number;
  createdAt: string;
  documentId: string;
  publishedAt: string | null;
  updatedAt: string;
}

interface TeamsResponse {
  data: TeamMember[];
}

function LinkedInIcon() {
  return (
    <svg className="mt-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="#0A66C2"/>
    </svg>
  );
}

async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    // Use centralized API client - handles errors, timeouts, retries automatically
    const serverApi = createServerApiClient({ revalidate: 60 });
    const data = await serverApi.get<TeamsResponse>('/teams?populate=Image');
    console.log(data.data);
    return data.data || [];
  } catch {
    // Error is already logged by api-client, just return empty array
    return [];
  }
}

export default async function Company() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="mx-auto px-20 py-14 flex flex-col gap-16 bg-secondary">

      {/* Hero */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-[28px]/[36px] sm:text-[34px]/[44px] font-bold text-foreground">
          Empowering AI infrastructure &amp;<br />data innovation
        </h1>
        <p className="text-foreground/60 text-[14px]/[24px] max-w-xl mx-auto">
          Eleveight AI is dedicated data cluster under DIGI Data — the largest colocated data
          center in Armenia, with an installed capacity of 20 MW. Leveraging the technological and
          infrastructural foundation of DIGI Data, the project ensures high reliability,
          scalability, and full compliance with the most advanced industry standards.
        </p>
      </div>

      {/* Our Mission */}
      <div className="bg-white rounded-2xl flex items-stretch">
        <div className="flex-1 flex flex-col justify-center gap-3 px-8 py-8">
          <h2 className="text-[42px]/[32px] font-bold text-foreground">Our Mission</h2>
          <p className="text-foreground text-[16px]/[22px] z-1">
            To empower the next generation of artificial intelligence by providing world-class
            infrastructure, computing power, and scientific expertise — enabling innovators,
            researchers, and enterprises to turn their most ambitious ideas into reality.
          </p>
        </div>

        <div className="relative flex-1 bg-[url(/company/mission.png)] rounded-r-2xl bg-no-repeat bg-cover bg-[center_38%]">
          <Image
            src="/sparkle.svg"
            alt="sparkle"
            width={94}
            height={94}
            className="absolute top-[-16px] right-[10%] animate-[sparklePulse_0.8s_linear_infinite_alternate]"
            unoptimized
          />
          <Image
            src="/sparkle.svg"
            alt="sparkle"
            width={94}
            height={94}
            className="absolute bottom-[-16px] left-[15%] animate-[sparklePulse_0.8s_linear_infinite_alternate-reverse]"
            unoptimized
          />
          <Image
            src="/cloud.svg"
            alt="cloud"
            width={250}
            height={120}
            className="absolute top-[-50px] right-[-2%] mix-blend-screen animate-[cloudXMotion_0.8s_linear_infinite_alternate-reverse] scale-120"
            unoptimized
          />
          <Image
            src="/cloud.svg"
            alt="cloud"
            width={250}
            height={120}
            className="absolute bottom-[-12px] left-[-25%] mix-blend-screen animate-[cloudXMotion_0.8s_linear_infinite_alternate] scale-120"
            unoptimized
          /> 
        </div>
      </div>

      {/* Our Vision */}
      <div className="bg-white rounded-2xl flex items-stretch">
        <div className="relative flex-1 bg-[url(/company/vision.png)] rounded-l-2xl bg-no-repeat bg-cover bg-[center_60%]">
          <Image
            src="/bowl.png"
            alt="sparkle"
            width={94}
            height={94}
            className="absolute top-[-50px] right-[50%] animate-[bowlOneMotion_2s_linear_infinite_alternate]"
            unoptimized
          />
          <Image
            src="/bowl.png"
            alt="sparkle"
            width={180}
            height={180}
            className="absolute bottom-[-75px] right-[6%] animate-[bowlOneMotion_2s_linear_infinite_alternate-reverse]"
            unoptimized
          />

          <Image
            src="/cloud.svg"
            alt="cloud"
            width={250}
            height={120}
            className="absolute bottom-[10px] left-[-20%] mix-blend-screen scale-120 animate-[cloudYMotion_0.8s_ease-in-out_infinite_alternate]"
            unoptimized
          /> 
          <Image
            src="/cloud.svg"
            alt="cloud"
            width={250}
            height={120}
            className="absolute bottom-[-45%] right-[2%] mix-blend-screen scale-120 animate-[cloudYMotion_0.8s_linear_infinite_alternate-reverse]"
            unoptimized
          />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-3 px-8 py-8">
          <h2 className="text-[42px]/[32px] font-bold text-foreground">Our Vision</h2>
          <p className="text-foreground text-[16px]/[22px] z-1">
          To establish Armenia as a leading hub for AI innovation and data infrastructure —
          where technology, research, and industry unite to accelerate global progress.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="flex flex-col gap-6">
        <h2 className="text-[24px]/[32px] font-bold text-foreground text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {values.map((card, index) => (
            <div
              key={index}
              className="bg-foreground rounded-2xl py-4 px-6 flex flex-col gap-3"
              >
              <div className="flex justify-end text-primaryGreen">
                <Image src={card.icon} alt={card.title} width={48} height={48} />
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
      </div>

      {/* Meet Our Team */}
      <div className="flex flex-col gap-8">
        <h2 className="text-[24px]/[32px] font-bold text-foreground text-center">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
          {teamMembers.length && teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center gap-2 text-center">
              {/* Avatar */}
              <div className="flex items-center justify-center shrink-0">
              <Image src={`https://console.eleveight.ai${member.Image?.url ?? ''}`} alt={member.Fullname} width={180} height={180} style={{ height: 'auto', width: '100%' }}/>
              </div>
              <div>
                <p className="text-[13px]/[18px] font-semibold text-foreground">{member.Fullname}</p>
                <p className="text-[11px]/[16px] text-foreground/50 mt-0.5">{member.Position}</p>
              </div>
              {/* LinkedIn */}
              <a
                href={member.linkedin || ''}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.Fullname} on LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
