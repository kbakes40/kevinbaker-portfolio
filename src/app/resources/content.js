const person = {
  firstName: "Kevin",
  lastName: "Baker",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Revenue Systems Operator",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago",
  languages: ["English"],
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kevin-j-baker",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:info@davincidynamics.ai",
  },
];

const newsletter = {
  display: false,
  title: <>Revenue Systems Updates</>,
  description: (
    <>
      Get updates on telecom dealer infrastructure, ecommerce conversion systems, and automation
      builds from Kevin Baker and DaVinci Dynamics LLC.
    </>
  ),
};

const home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `Kevin Baker | DaVinci Dynamics LLC | Revenue Systems Portfolio`,
  description: `Telecom dealer acquisition funnels, Shopify ecommerce conversion systems, and automation infrastructure built to scale.`,
  headline: <>I build revenue systems, not websites.</>,
  subline: (
    <>
      Telecom dealer acquisition funnels, Shopify ecommerce conversion engines, and AI powered
      automation infrastructure built to perform under real volume.
    </>
  ),
  featured: {
    href: "/work",
    title: "Revenue Systems Library",
  },
};

const about = {
  path: "/about",
  label: "About",
  title: `About – Kevin Baker`,
  description: `Kevin Baker is the founder of DaVinci Dynamics LLC, a revenue systems and automation firm focused on telecom growth, ecommerce conversion, and operational scale.`,
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
        Kevin Baker is the founder of DaVinci Dynamics LLC, a revenue systems and automation firm
        focused on telecom growth, ecommerce conversion, and operational scale. With deep telecom
        sales and dealer network experience, Kevin designs systems built for production, not
        presentation. Across projects like WiFi-Kings.com, DaVinciDynamics.ai, and BossHookah.site,
        the focus remains consistent: increase conversion, remove manual friction, improve margin,
        build scalable infrastructure, and maintain clean documented systems. If a system cannot
        scale, it is redesigned. If it does not increase revenue, it is removed.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "DaVinci Dynamics LLC",
        timeframe: "2020 – Present",
        role: "Founder",
        achievements: [
          <>
            Built AI-assisted sales automation tools for telecom dealers, including CRM integrations,
            Authorize.net payment processing, and ID verification workflows.
          </>,
          <>
            Launched dealer partner programs connecting sub-agents and independent reps with fiber
            carriers across multiple markets.
          </>,
          <>
            Engineered Shopify ecommerce systems structured for fast product discovery, bundle
            positioning, higher average order value, and repeat purchase optimization.
          </>,
        ],
        images: [],
      },
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
    ],
  },
  studies: {
    display: true,
    title: "Background",
    institutions: [
      {
        name: "Telecom Sales and Dealer Operations",
        description: (
          <>
            10 plus years in internet and wireless sales, from door-to-door fiber rep to building
            multi-market dealer infrastructure and acquisition funnels.
          </>
        ),
      },
      {
        name: "Ecommerce and Automation",
        description: (
          <>
            Applied Shopify conversion engineering, webhook-based backend workflows, and AI
            automation to real production systems across multiple verticals.
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
        title: "Telecom Dealer Growth Systems",
        description: (
          <>
            Dealer recruitment funnels, eligibility routing systems, lead scoring and onboarding
            automation, and CRM pipeline infrastructure built for scale.
          </>
        ),
        images: [],
      },
      {
        title: "Shopify Revenue Engineering",
        description: (
          <>
            Conversion focused store builds, checkout and upsell optimization, bundle strategy, and
            lifecycle automation designed to increase average order value and repeat purchase rate.
          </>
        ),
        images: [],
      },
      {
        title: "Automation and AI Infrastructure",
        description: (
          <>
            Webhook-based backend workflows, CRM integrations, Telegram bot systems, reporting
            automation, and operational dashboards that eliminate manual friction.
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
  title: `Revenue Systems Insights – Kevin Baker`,
  description: `Practical guides on telecom dealer infrastructure, Shopify conversion engineering, automation systems, and scaling revenue operations.`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Revenue Systems Library – Kevin Baker`,
  description: `This is not a gallery of websites. This is a library of revenue infrastructure built to increase conversion, reduce manual friction, and scale operations.`,
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
