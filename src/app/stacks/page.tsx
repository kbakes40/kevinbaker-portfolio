import { Column, Flex, Heading, Text, Tag } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: "Stacks – Kevin Baker | DaVinci Dynamics LLC",
    description:
      "Modern commerce and automation stack built for performance and scale.",
    baseURL: baseURL,
    path: "/stacks",
  });
}

const tools = [
  "Shopify",
  "Next.js",
  "React",
  "Node.js",
  "Supabase",
  "Postgres",
  "Twilio",
  "Telegram Bot API",
  "REST APIs",
  "Vercel",
  "Analytics platforms",
  "Automation scripting",
];

export default function Stacks() {
  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/stacks"
        title="Stacks – Kevin Baker | DaVinci Dynamics LLC"
        description="Modern commerce and automation stack built for performance and scale."
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
          Modern commerce and automation stack built for performance and scale.
        </Text>
      </Column>
      <Column fillWidth paddingX="l" gap="l">
        <Flex fillWidth wrap gap="12">
          {tools.map((tool, index) => (
            <Tag key={index} label={tool} variant="neutral" size="l" />
          ))}
        </Flex>
      </Column>
    </Column>
  );
}
