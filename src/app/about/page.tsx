import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import React from "react";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

/* ── Inline SVG icons for competency cards ── */
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

const competencyIcons: Record<string, React.ReactNode> = {
  "Telecom Dealer Growth Systems": <IconNetwork />,
  "Shopify Revenue Engineering": <IconCart />,
  "Automation and AI Infrastructure": <IconGear />,
};

/* ── System flow nodes ── */
const flowSteps = ["Strategy", "Build", "Integrate", "Scale"];

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`${baseURL}/og?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>

            {/* ── System flow line under role title ── */}
            <div className={styles.flowLine}>
              {flowSteps.map((step, i) => (
                <React.Fragment key={step}>
                  {i > 0 && <span className={styles.flowConnector} />}
                  <span className={styles.flowNode} />
                  <span className={styles.flowLabel}>{step}</span>
                </React.Fragment>
              ))}
              <span className={styles.flowNode} />
            </div>

            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {/* ── Intro with structured paragraph lines ── */}
          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              <div className={styles.introBlock}>
                <span className={styles.introLine}>
                  Kevin Baker is the founder of DaVinci Dynamics, a revenue systems and automation firm
                  focused on telecom growth, ecommerce conversion, and operational scale.
                </span>
                <span className={styles.introLine}>
                  With deep telecom sales and dealer network experience, Kevin designs systems built for production, not presentation.
                </span>
                <span className={styles.introLine}>
                  Across projects like WiFi-Kings.com, DaVinciDynamics.ai, and BossHookah.site,
                  the focus remains consistent: increase conversion, remove manual friction, improve margin,
                  build scalable infrastructure, and maintain clean documented systems.
                </span>
                <span className={styles.introLine}>
                  If a system cannot scale, it is redesigned. If it does not increase revenue, it is removed.
                </span>
              </div>
            </Column>
          )}

          {/* ── Work Experience with left timeline line ── */}
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <div className={styles.workTimeline}>
                <Column fillWidth gap="l" marginBottom="40">
                  {about.work.experiences.map((experience, index) => (
                    <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                      <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Flex>
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="16">
                        {experience.achievements.map((achievement: JSX.Element, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ))}
                      </Column>
                      {experience.images.length > 0 && (
                        <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                          {experience.images.map((image, index) => (
                            <Flex
                              key={index}
                              border="neutral-medium"
                              radius="m"
                              //@ts-ignore
                              minWidth={image.width}
                              //@ts-ignore
                              height={image.height}
                            >
                              <SmartImage
                                enlarge
                                radius="m"
                                //@ts-ignore
                                sizes={image.width.toString()}
                                //@ts-ignore
                                alt={image.alt}
                                //@ts-ignore
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Column>
                  ))}
                </Column>
              </div>
            </>
          )}

          {/* ── Background section with divider above ── */}
          {about.studies.display && (
            <>
              <div className={styles.sectionDivider} />
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* ── Core Competencies as bordered surface cards ── */}
          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="32"
              >
                {about.technical.title}
              </Heading>
              <div className={styles.competencyGrid}>
                {about.technical.skills.map((skill, index) => (
                  <div key={`${skill.title}-${index}`} className={styles.competencyCard}>
                    <div className={styles.competencyCardHeader}>
                      <Text variant="heading-strong-l">{skill.title}</Text>
                    </div>
                    <Text
                      className={styles.competencyDescription}
                      variant="body-default-m"
                      onBackground="neutral-weak"
                    >
                      {skill.description}
                    </Text>
                  </div>
                ))}
              </div>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
