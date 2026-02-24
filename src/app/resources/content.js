const person = {
  firstName: "Kevin",
  lastName: "Baker",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Telecom Dealer & Founder",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago",
  languages: ["English"],
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kevin-baker",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:kevin@davincidreams.ai",
  },
];

const newsletter = {
  display: false,
  title: <>Join the WiFi Kings Network</>,
  description: (
    <>
      Get updates on dealer opportunities, commission structures, and fiber market expansion from
      Kevin Baker and the WiFi Kings team.
    </>
  ),
};

const home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `WiFi Kings Dealer Partner Program | Kevin Baker`,
  description: `Kevin Baker — Founder of WiFi Kings and DaVinci Dynamics LLC. Telecom dealer infrastructure, fiber funnels, and commission clarity for serious operators.`,
  headline: <>Building the infrastructure that scales internet sales</>,
  subline: (
    <>
      I&apos;m Kevin, founder of WiFi Kings and DaVinci Dynamics LLC where I build dealer systems for fiber and wireless
      operators who are serious about growth.
    </>
  ),
  featured: {
    href: "/work",
    title: "WiFi Kings Dealer System",
  },
};

const about = {
  path: "/about",
  label: "About",
  title: `About – Kevin Baker`,
  description: `Kevin Baker is the founder of WiFi Kings and DaVinci Dynamics LLC — a telecom dealer infrastructure and fiber sales automation company.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/kevinbaker",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kevin Baker is a telecom dealer and entrepreneur based in the United States. As the founder
        of <strong>WiFi Kings</strong> and <strong>DaVinci Dynamics LLC</strong>, he builds
        end-to-end dealer infrastructure for fiber and wireless internet sales — including address
        availability funnels, automated order routing, commission tracking, and CRM integrations.
        Kevin works with independent dealers, sub-agents, and wireless store owners who want to
        scale their install volume and revenue without the operational chaos.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "WiFi Kings",
        timeframe: "2021 – Present",
        role: "Founder & CEO",
        achievements: [
          <>
            Built a full-stack dealer acquisition and management platform for fiber and wireless
            internet sales, processing hundreds of orders monthly.
          </>,
          <>
            Developed automated address-based availability funnels that qualify leads and route
            orders to the correct carrier in real time.
          </>,
          <>
            Structured commission tracking models with KPI dashboards, reducing payout disputes and
            increasing dealer retention.
          </>,
        ],
        images: [],
      },
      {
        company: "DaVinci Dynamics LLC",
        timeframe: "2020 – Present",
        role: "Founder",
        achievements: [
          <>
            Built AI-assisted sales automation tools for telecom dealers, including CRM integrations
            with Authorize.net payment processing and ID verification workflows.
          </>,
          <>
            Launched dealer partner programs connecting sub-agents and independent reps with fiber
            carriers across multiple markets.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Background",
    institutions: [
      {
        name: "Telecom Sales & Dealer Operations",
        description: (
          <>
            10+ years in internet and wireless sales, from door-to-door fiber rep to building
            multi-market dealer infrastructure.
          </>
        ),
      },
      {
        name: "Business Automation & AI",
        description: (
          <>
            Applied AI and automation to telecom sales workflows — CRM pipelines, lead scoring,
            order routing, and commission modeling.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Core Competencies",
    skills: [
      {
        title: "Dealer Infrastructure",
        description: (
          <>
            Address-based availability funnels, automated order routing, carrier integrations, and
            commission tracking systems built for scale.
          </>
        ),
        images: [],
      },
      {
        title: "Sales Automation",
        description: (
          <>
            CRM integrations, lead qualification automation, follow-up sequences, and reporting
            dashboards for fiber and wireless dealer operations.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `Telecom Dealer Insights – Kevin Baker`,
  description: `Practical guides on fiber sales, dealer infrastructure, commission structures, and scaling internet sales operations.`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – Kevin Baker`,
  description: `Dealer systems, fiber funnels, and automation projects by Kevin Baker / WiFi Kings / DaVinci Dynamics LLC`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – Kevin Baker`,
  description: `A photo collection by Kevin Baker`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
