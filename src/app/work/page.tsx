import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, home, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Heading variant="display-strong-l">
          {home.featured?.title ?? "Revenue Systems Library"}
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak">
          {work.description}
        </Text>
      </Column>
      <Projects />
    </Column>
  );
}
