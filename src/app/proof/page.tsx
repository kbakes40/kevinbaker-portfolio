import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import styles from "./proof.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: "Proof – Kevin Baker | DaVinci Dynamics",
    description:
      "Background, highlights, and what clients get when working with Kevin Baker and DaVinci Dynamics.",
    baseURL: baseURL,
    path: "/proof",
  });
}

/* ── Inline SVG icons — thin stroke, monochrome, no fill ── */
const IconBolt = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="13,2 7,11 11,11 7,18" />
  </svg>
);

const IconDocument = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="2" width="12" height="16" rx="1.5" />
    <line x1="7" y1="7" x2="13" y2="7" />
    <line x1="7" y1="10" x2="13" y2="10" />
    <line x1="7" y1="13" x2="10" y2="13" />
  </svg>
);

const IconLayers = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="10,2 18,7 10,12 2,7" />
    <polyline points="2,12 10,17 18,12" />
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2L3 5v5c0 4 3.5 7 7 8 3.5-1 7-4 7-8V5L10 2z" />
  </svg>
);

const IconNetwork = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h2l2.5 9h8l2-6H6" />
    <circle cx="8.5" cy="15.5" r="1" />
    <circle cx="14.5" cy="15.5" r="1" />
  </svg>
);

const IconGear = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="10" cy="10" r="3" />
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" />
  </svg>
);

const highlights = [
  {
    text: "Telecom sales and dealer network background spanning 15 plus years",
    icon: <IconNetwork />,
  },
  {
    text: "Ecommerce operations across Shopify and direct commerce platforms",
    icon: <IconCart />,
  },
  {
    text: "Automation architecture across CRM, webhooks, and backend workflows",
    icon: <IconGear />,
  },
];

const clientResults = [
  {
    title: "Speed",
    description:
      "Systems are built to deploy fast and iterate faster. No bloated discovery phases or unnecessary delays.",
    icon: <IconBolt />,
  },
  {
    title: "Clarity",
    description:
      "Every system is documented. Every flow is mapped. No black boxes, no mystery dependencies.",
    icon: <IconDocument />,
  },
  {
    title: "Maintainable Systems",
    description:
      "Built to be handed off, modified, and scaled by your team without requiring the original builder.",
    icon: <IconLayers />,
  },
  {
    title: "Infrastructure Built for Scale",
    description:
      "Designed from the start to handle volume increases without requiring a rebuild of the core architecture.",
    icon: <IconShield />,
  },
];

const timelineNodes = ["Telecom", "Commerce", "Automation", "Infrastructure"];

export default function Proof() {
  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/proof"
        title="Proof – Kevin Baker | DaVinci Dynamics"
        description="Background, highlights, and what clients get when working with Kevin Baker and DaVinci Dynamics."
        image={`${baseURL}/og?title=${encodeURIComponent("Proof")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Heading variant="display-strong-l">Proof</Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak">
          Background, track record, and what you get when you build with DaVinci Dynamics.
        </Text>
      </Column>

      <div className={styles.proofContainer}>
        {/* ── Highlights ── */}
        <Column fillWidth gap="m">
          <Heading as="h2" variant="display-strong-s">
            Highlights
          </Heading>
          <ul className={styles.highlightList}>
            {highlights.map((item, i) => (
              <li key={i} className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{item.icon}</span>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {item.text}
                </Text>
              </li>
            ))}
          </ul>

          {/* Horizontal timeline strip */}
          <div className={styles.timeline}>
            {timelineNodes.map((label, i) => (
              <div key={i} className={styles.timelineStep}>
                {i > 0 && <span className={styles.timelineConnector} />}
                <div className={styles.timelineNodeWrap}>
                  <span className={styles.timelineLabel}>{label}</span>
                  <span className={styles.timelineNode} />
                </div>
              </div>
            ))}
          </div>
        </Column>

        <div className={styles.divider} />

        {/* ── What Clients Get ── */}
        <Column fillWidth gap="l">
          <Heading as="h2" variant="display-strong-s">
            What Clients Get
          </Heading>
          <div className={styles.cardsGrid}>
            {clientResults.map((result, index) => (
              <div key={index} className={styles.card}>
                <span className={styles.cardIcon}>{result.icon}</span>
                <Text variant="heading-strong-l">{result.title}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {result.description}
                </Text>
              </div>
            ))}
          </div>
        </Column>
      </div>
    </Column>
  );
}
