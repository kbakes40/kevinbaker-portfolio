import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import styles from "./services.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: "Services – Kevin Baker | DaVinci Dynamics LLC",
    description:
      "Telecom dealer growth systems, Shopify revenue engineering, and automation infrastructure built to scale.",
    baseURL: baseURL,
    path: "/services",
  });
}

/* ── Inline SVG icons — thin stroke, monochrome, no fill ── */
const IconTelecom = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="4" cy="10" r="1.5" />
    <circle cx="10" cy="4" r="1.5" />
    <circle cx="16" cy="10" r="1.5" />
    <circle cx="10" cy="16" r="1.5" />
    <line x1="5.5" y1="10" x2="8.5" y2="10" />
    <line x1="11.5" y1="10" x2="14.5" y2="10" />
    <line x1="10" y1="5.5" x2="10" y2="8.5" />
    <line x1="10" y1="11.5" x2="10" y2="14.5" />
  </svg>
);

const IconCart = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h2l2.5 9h8l2-6H6" />
    <circle cx="8.5" cy="15.5" r="1" />
    <circle cx="14.5" cy="15.5" r="1" />
  </svg>
);

const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="10,2 18,7 10,12 2,7" />
    <polyline points="2,12 10,17 18,12" />
  </svg>
);

const serviceIcons: Record<string, React.ReactNode> = {
  "Telecom Dealer Growth Systems": <IconTelecom />,
  "Shopify Revenue Engineering": <IconCart />,
  "Automation and AI Infrastructure": <IconLayers />,
};

const serviceFlows: Record<string, string[]> = {
  "Telecom Dealer Growth Systems": ["Traffic", "Qualification", "Routing", "Onboarding"],
  "Shopify Revenue Engineering": ["Discovery", "Product", "Checkout", "Retention"],
  "Automation and AI Infrastructure": ["Trigger", "Logic", "Action", "Feedback"],
};

const services = [
  {
    title: "Telecom Dealer Growth Systems",
    items: [
      "Dealer recruitment funnels",
      "Eligibility routing systems",
      "Lead scoring and onboarding automation",
      "CRM pipeline infrastructure",
    ],
  },
  {
    title: "Shopify Revenue Engineering",
    items: [
      "Conversion focused store builds",
      "Checkout and upsell optimization",
      "Bundle strategy",
      "Lifecycle automation",
    ],
  },
  {
    title: "Automation and AI Infrastructure",
    items: [
      "Webhook based backend workflows",
      "CRM integrations",
      "Telegram bot systems",
      "Reporting automation",
      "Operational dashboards",
    ],
  },
];

export default function Services() {
  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/services"
        title="Services – Kevin Baker | DaVinci Dynamics LLC"
        description="Telecom dealer growth systems, Shopify revenue engineering, and automation infrastructure built to scale."
        image={`${baseURL}/og?title=${encodeURIComponent("Services")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Heading variant="display-strong-l">Services</Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak">
          Revenue infrastructure built for operators who need systems that perform under real volume.
        </Text>
      </Column>

      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index}>
            {index > 0 && <div className={styles.divider} />}

            <div className={styles.serviceBlock}>
              {/* Icon + Title */}
              <div className={styles.serviceHeader}>
                <span className={styles.serviceIcon}>
                  {serviceIcons[service.title]}
                </span>
                <Heading as="h2" variant="display-strong-s">
                  {service.title}
                </Heading>
              </div>

              {/* Micro flow line */}
              <div className={styles.flowLine}>
                {serviceFlows[service.title].map((label, i, arr) => (
                  <div key={i} className={styles.flowStep}>
                    <span className={styles.flowNode} />
                    <span className={styles.flowLabel}>{label}</span>
                    {i < arr.length - 1 && <span className={styles.flowConnector} />}
                  </div>
                ))}
              </div>

              {/* Items */}
              <Column as="ul" gap="12">
                {service.items.map((item, i) => (
                  <Flex key={i} gap="12" vertical="center">
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Column>
            </div>
          </div>
        ))}
      </div>
    </Column>
  );
}
