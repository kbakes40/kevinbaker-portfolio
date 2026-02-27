import { Column, Flex, Heading, Text, Tag } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: "Stacks – Kevin Baker | DaVinci Dynamics",
    description:
      "Modern commerce, payments, automation, and infrastructure stack built for performance and scale.",
    baseURL: baseURL,
    path: "/stacks",
  });
}

const sections = [
  {
    label: "Frontend and Application",
    chips: ["Shopify", "Next.js", "React", "Node.js"],
  },
  {
    label: "Commerce and Payments",
    chips: ["Stripe", "PayPal", "Authorize.Net", "Klarna", "Affirm", "Apple Pay", "Google Pay"],
  },
  {
    label: "CRM and Growth Systems",
    chips: ["HubSpot", "Salesforce", "Zoho", "GoHighLevel", "Lead scoring systems", "Pipeline automation"],
  },
  {
    label: "Automation and APIs",
    chips: ["REST APIs", "Webhooks", "Zapier", "Make", "Server side automation", "Workflow orchestration"],
  },
  {
    label: "Messaging Infrastructure",
    chips: ["Twilio", "Telegram Bot API", "SMS routing systems", "Number masking systems"],
  },
  {
    label: "Database and Cloud",
    chips: ["Supabase", "Postgres", "Firebase", "Vercel", "Cloudflare", "Edge deployment"],
  },
  {
    label: "Analytics and Reporting",
    chips: ["Analytics platforms", "Conversion tracking", "KPI dashboards", "Automation scripting"],
  },
];

export default function Stacks() {
  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/stacks"
        title="Stacks – Kevin Baker | DaVinci Dynamics"
        description="Modern commerce, payments, automation, and infrastructure stack built for performance and scale."
        image={`${baseURL}/og?title=${encodeURIComponent("Stacks")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Heading variant="display-strong-l">Stacks</Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak">
          Modern commerce, payments, automation, and infrastructure stack built for performance and
          scale.
        </Text>
      </Column>
      <Column fillWidth paddingX="l" gap="40">
        {sections.map((section, index) => (
          <Column key={index} fillWidth gap="12">
            <Text variant="label-default-s" onBackground="neutral-weak">
              {section.label}
            </Text>
            <Flex fillWidth wrap gap="8">
              {section.chips.map((chip, i) => (
                <Tag key={i} label={chip} variant="neutral" size="m" />
              ))}
            </Flex>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
