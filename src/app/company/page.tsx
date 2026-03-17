import Image from "next/image";

const values = [
  {
    title: "Innovation",
    description:
      "We pioneer advancements in AI infrastructure and data technologies, constantly exploring new ways to accelerate the future of artificial intelligence.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4.5 12.5H11L9 20L17.5 9.5H11L13 2Z" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description:
      "We make cutting-edge computing power and AI resources available to innovators and enterprises of all sizes — fostering equal opportunity in the global tech ecosystem.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="5" r="2" />
        <path d="M5 10h12M8 10l-1 7M14 10l1 7M11 10v7" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We deliver uncompromising quality across every layer of our work — from engineering and data center operations to customer experience and research partnerships.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3,15 8,9 12,12 19,5" />
        <polyline points="15,5 19,5 19,9" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Arman L. Aleksanian",
    role: "CEO, Board Member",
    initials: "AA",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Arut Pogosyan",
    role: "Board Member",
    initials: "AP",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Davit Abovyan",
    role: "Board Member",
    initials: "DA",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Arman Jilavian",
    role: "Board Member",
    initials: "AJ",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Davit Arakelyan",
    role: "CEO",
    initials: "DA",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Sergey Petrosyan",
    role: "CTO",
    initials: "SP",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Artur Petrosyan",
    role: "CLO",
    initials: "AP",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Name Surname",
    role: "CLO",
    initials: "NS",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Al Eisaian",
    role: "Ambassador — North America",
    initials: "AE",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Tigran Pogosyan",
    role: "Ambassador — East Asia",
    initials: "TP",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Grant R. Pogosyan",
    role: "Scientific Advisor",
    initials: "GP",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Hrant Khachatryan",
    role: "Scientific Advisor",
    initials: "HK",
    linkedin: "https://linkedin.com",
    photo: null,
  },
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M3.6 2C3.6 2.88 2.88 3.6 2 3.6S.4 2.88.4 2 1.12.4 2 .4 3.6 1.12 3.6 2ZM.5 5h3v9.5h-3V5ZM5.5 5h2.9v1.3h.04C8.9 5.7 10 5 11.4 5c3.1 0 3.6 2 3.6 4.7v4.8h-3v-4.2c0-1 0-2.4-1.4-2.4-1.5 0-1.7 1.1-1.7 2.3v4.3H5.5V5Z" />
    </svg>
  );
}

export default function Company() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14 flex flex-col gap-16">

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
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row items-stretch">
        <div className="flex flex-col justify-center gap-3 px-8 py-8 sm:w-1/2">
          <h2 className="text-[22px]/[30px] font-bold text-foreground">Our Mission</h2>
          <p className="text-foreground/60 text-[13px]/[22px]">
            To empower the next generation of artificial intelligence by providing world-class
            infrastructure, computing power, and scientific expertise — enabling innovators,
            researchers, and enterprises to turn their most ambitious ideas into reality.
          </p>
        </div>
        <div className="relative sm:w-1/2 min-h-[220px]">
          <Image
            src="/home/features/pure-metal.webp"
            alt="Our Mission"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Vision */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row items-stretch">
        <div className="relative sm:w-1/2 min-h-[220px] order-last sm:order-first">
          <Image
            src="/home/features/growth-fabric.webp"
            alt="Our Vision"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 px-8 py-8 sm:w-1/2">
          <h2 className="text-[22px]/[30px] font-bold text-foreground">Our Vision</h2>
          <p className="text-foreground/60 text-[13px]/[22px]">
            To establish Armenia as a leading hub for AI innovation and data infrastructure —
            where technology, research, and industry unite to accelerate global progress.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="flex flex-col gap-6">
        <h2 className="text-[24px]/[32px] font-bold text-foreground text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-foreground rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <h3 className="text-white text-[15px]/[22px] font-bold">{v.title}</h3>
                <span className="text-primaryGreen shrink-0 ml-2">{v.icon}</span>
              </div>
              <p className="text-white/60 text-[12px]/[19px]">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="flex flex-col gap-8">
        <h2 className="text-[24px]/[32px] font-bold text-foreground text-center">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
          {team.map((member) => (
            <div key={member.name + member.role} className="flex flex-col items-center gap-2 text-center">
              {/* Avatar */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden bg-foreground/10 flex items-center justify-center shrink-0">
                {member.photo ? (
                  <Image src={member.photo} alt={member.name} fill className="object-cover" />
                ) : (
                  <span className="text-[18px] font-semibold text-foreground/40">
                    {member.initials}
                  </span>
                )}
              </div>
              <div>
                <p className="text-[13px]/[18px] font-semibold text-foreground">{member.name}</p>
                <p className="text-[11px]/[16px] text-foreground/50 mt-0.5">{member.role}</p>
              </div>
              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6 rounded bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors"
                aria-label={`${member.name} on LinkedIn`}
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
