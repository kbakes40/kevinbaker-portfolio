"use client";

import { useState } from "react";
import { Column, Flex, Heading, Text, Button, Input, Textarea } from "@/once-ui/components";

const inquiryEmails: Record<string, string> = {
  "Sales Inquiry": "info@davincidynamics.ai",
  "Active Project": "info@davincidynamics.ai",
  Support: "info@davincidynamics.ai",
  "Billing and Invoices": "info@davincidynamics.ai",
  Partnerships: "info@davincidynamics.ai",
};

const inquiryTypes = Object.keys(inquiryEmails);

export default function Contact() {
  const [inquiryType, setInquiryType] = useState(inquiryTypes[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:info@davincidynamics.ai?subject=${encodeURIComponent(inquiryType + " from " + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nInquiry Type: " + inquiryType + "\n\n" + message)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <Column maxWidth="s" gap="xl">
      <Column fillWidth paddingY="24" gap="m">
        <Heading variant="display-strong-l">Contact</Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak">
          All submissions are routed to info@davincidynamics.ai.
        </Text>
      </Column>
      {submitted ? (
        <Column fillWidth paddingX="l" gap="m">
          <Text variant="heading-strong-l">Message sent.</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Your inquiry has been routed. Expect a response within one business day.
          </Text>
        </Column>
      ) : (
        <Column as="form" onSubmit={handleSubmit} fillWidth paddingX="l" gap="l">
          <Column fillWidth gap="8">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Inquiry Type
            </Text>
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              style={{
                background: "var(--neutral-background-medium)",
                color: "var(--neutral-on-background-strong)",
                border: "1px solid var(--neutral-alpha-medium)",
                borderRadius: "var(--radius-m)",
                padding: "12px 16px",
                fontSize: "var(--font-size-body-default-m)",
                width: "100%",
                outline: "none",
              }}
            >
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Column>
          <Input
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            id="message"
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            lines={6}
          />
          <Button type="submit" variant="primary" size="m" fillWidth>
            Send Message
          </Button>
        </Column>
      )}
    </Column>
  );
}
