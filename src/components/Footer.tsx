import { Flex, IconButton, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear}</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>

        {/* Phone number */}
        <Flex vertical="center" gap="8">
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.6 }}
            aria-hidden="true"
          >
            <path d="M3 3.5C3 3.5 4 2 5.5 2c.5 0 1 .3 1.3.8l1.4 2.4c.3.5.2 1.1-.2 1.5L7 7.7c.8 1.5 2.3 3 3.8 3.8l1-1c.4-.4 1-.5 1.5-.2l2.4 1.4c.5.3.8.8.8 1.3 0 1.5-1.5 2.5-1.5 2.5C13 17 5 9 3 3.5z" />
          </svg>
          <a
            href="tel:+17343086789"
            style={{
              color: "var(--neutral-on-background-weak)",
              textDecoration: "none",
              fontSize: "var(--font-size-body-default-s)",
              letterSpacing: "0.01em",
            }}
          >
            1-734-308-6789
          </a>
        </Flex>

        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
