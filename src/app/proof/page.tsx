import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: "Proof – Kevin Baker | DaVinci Dynamics LLC",
    description:
      "Background, highlights, and what clients get when working with Kevin Baker and DaVinci Dynamics LLC.",
    baseURL: baseURL,
    path: "/proof",
  });
}

const highlights = [
  "Telecom sales and dealer network background spanning 10 plus years",
  "Ecommerce operations across Shopify and direct commerce platforms",
  "Automation architecture across CRM, webhooks, and backend workflows",
];

const clientResults = [
  {
    title: "Speed",
    description:
      "Systems are built to deploy fast and iterate faster. No bloated discovery phases or unnecessary delays.",
  },
  {
    title: "Clarity",
    description:
      "Every system is documented. Every flow is mapped. No black boxes, no mystery dependencies.",
  },
  {
    title: "Maintainable Systems",
    description:
      "Built to be handed off, modified, and scaled by your team without requiring the original builder.",
  },
  {
    title: "Infrastructure Built for Scale",
    description:
      "Designed from the start to handle volume increases without requiring a rebuild of the core architecture.",
  },
];

export default function Proof() {
  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/proof"
        title="Proof – Kevin Baker | DaVinci Dynamics LLC"
        description="Background, highlights, and what clients get when working with Kevin Baker and DaVinci Dynamics LLC."
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
          Background, track record, and what you get when you build with DaVinci Dynamics LLC.
        </Text>
      </Column>
      <Column fillWidth paddingX="l" gap="xl">
        <Column fillWidth gap="m">
          <Heading as="h2" variant="display-strong-s">
            Highlights
          </Heading>
          <Column as="ul" gap="12">
            {highlights.map((item, i) => (
              <Text key={i} as="li" variant="body-default-m" onBackground="neutral-weak">
                {item}
              </Text>
            ))}
          </Column>
        </Column>
        <Column fillWidth gap="l">
          <Heading as="h2" variant="display-strong-s">
            What Clients Get
          </Heading>
          <Column fillWidth gap="l">
            {clientResults.map((result, index) => (
              <Column key={index} fillWidth gap="4">
                <Text variant="heading-strong-l">{result.title}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {result.description}
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
