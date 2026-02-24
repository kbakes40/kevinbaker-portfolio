"use client";

import { useState } from "react";
import { Column, Heading, Text, Button, Input, Textarea } from "@/once-ui/components";

const inquiryTypes = [
  {
    label: "Sales Inquiry",
    email: "sales@davincidynamics.ai",
    description: "New leads, proposals, discovery calls, Fiverr inquiries.",
  },
  {
    label: "Active Project",
    email: "projects@davincidynamics.ai",
    description: "Active client builds and milestone communication.",
  },
  {
    label: "Support",
    email: "support@davincidynamics.ai",
    description: "Post-launch help and maintenance.",
  },
  {
    label: "Billing and Invoices",
    email: "finance@davincidynamics.ai",
    description: "Invoices, contracts, payouts, payment processors, tax documents.",
  },
  {
    label: "Partnerships",
    email: "info@davincidynamics.ai",
    description: "Strategic growth conversations.",
  },
];

export default function Contact() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selected = inquiryTypes[selectedIndex];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${selected.email}?subject=${encodeURIComponent(selected.label + " from " + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nInquiry Type: " + selected.label + "\n\n" + message)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <Column maxWidth="s" gap="xl">
      <Column fillWidth paddingY="24" gap="m">
        <Heading variant="display-strong-l">Contact</Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak">
          Select an inquiry type and your message will be routed to the right inbox.
        </Text>
      </Column>
      {submitted ? (
        <Column fillWidth paddingX="l" gap="m">
          <Text variant="heading-strong-l">Message sent.</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Your inquiry has been routed to {selected.email}. Expect a response within one business
            day.
          </Text>
        </Column>
      ) : (
        <Column as="form" onSubmit={handleSubmit} fillWidth paddingX="l" gap="l">
          <Column fillWidth gap="8">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Inquiry Type
            </Text>
            <select
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
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
              {inquiryTypes.map((type, i) => (
                <option key={type.label} value={i}>
                  {type.label}
                </option>
              ))}
            </select>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {selected.description} Routed to{" "}
              <span style={{ color: "var(--brand-on-background-medium)" }}>{selected.email}</span>
            </Text>
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
