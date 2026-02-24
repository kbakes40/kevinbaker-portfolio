const person = {
  firstName: "Kevin",
  lastName: "Baker",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Telecom Dealer Infrastructure Builder",
  avatar: "/images/avatar.jpg",
  email: "partnerships@davincidynamics.ai",
  location: "America/Detroit",
  languages: [],
};

const newsletter = {
  display: false,
  title: <>Partner Newsletter</>,
  description: <>Updates from the WiFi Kings dealer network.</>,
};

const social = [
  {
    name: "Email",
    icon: "email",
    link: `mailto:partnerships@davincidynamics.ai`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "WiFi Kings Dealer Partner Program | Kevin Baker",
  description:
    "Scale your internet and wireless sales operation. Dealer infrastructure, fiber funnels, and commission clarity built for growth. Apply to partner with WiFi Kings.",
  headline: <>Scale Your Internet &amp; Wireless Sales Operation</>,
  featured: {
    display: false,
    title: <>WiFi Kings Dealer Program</>,
    href: "/",
  },
  subline: (
    <>
      Dealer infrastructure. Fiber funnels. Commission clarity. Built for growth.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: "About Kevin Baker",
  description:
    "Kevin Baker — Founder of WiFi Kings and DaVinci Dynamics LLC. Building scalable internet and wireless sales infrastructure for dealers.",
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "About Kevin Baker",
    description: (
      <>
        Kevin Baker is the founder of WiFi Kings and DaVinci Dynamics LLC, based in Michigan. He
        builds scalable internet and wireless sales infrastructure for dealers who want higher
        installs, cleaner payouts, and real backend systems.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [
      {
        company: "WiFi Kings",
        timeframe: "2020 - Present",
        role: "Founder",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [
      {
        name: "DaVinci Dynamics LLC",
        description: <>Telecom dealer infrastructure.</>,
      },
    ],
  },
  technical: {
    display: false,
    title: "Technical skills",
    skills: [
      {
        title: "Dealer Infrastructure",
        description: <>End-to-end internet sales systems.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Dealer Insights",
  description: "Telecom dealer growth strategies from WiFi Kings.",
};

const work = {
  path: "/work",
  label: "Work",
  title: "Projects",
  description: "Dealer infrastructure projects by Kevin Baker",
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery",
  description: "WiFi Kings gallery",
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
