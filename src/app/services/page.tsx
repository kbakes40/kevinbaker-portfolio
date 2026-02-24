import { Column, Flex, Heading, Text, Row } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: "Services – Kevin Baker | DaVinci Dynamics LLC",
    description:
      "Telecom dealer growth systems, Shopify revenue engineering, and automation infrastructure built to scale.",
    baseURL: baseURL,
    path: "/services",
  });
}

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
      <Column fillWidth gap="xl" paddingX="l">
        {services.map((service, index) => (
          <Column key={index} fillWidth gap="m" paddingBottom="40">
            <Heading as="h2" variant="display-strong-s">
              {service.title}
            </Heading>
            <Column as="ul" gap="12">
              {service.items.map((item, i) => (
                <Flex key={i} gap="12" vertical="center">
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {item}
                  </Text>
                </Flex>
              ))}
            </Column>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
