import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";

const mockup = (
  <div
    style={{
      background: "var(--neutral-background-medium)",
      border: "1px solid var(--neutral-alpha-medium)",
      borderRadius: "var(--radius-l)",
      padding: "2rem",
      minHeight: "260px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--neutral-on-background-weak)",
      fontFamily: "var(--font-family-label)",
      fontSize: "0.875rem",
      textAlign: "center",
      lineHeight: 1.6,
    }}
  >
    Replace with Ordering Bot screenshots or a short demo clip.
  </div>
);

export default function OrderingBotPage() {
  return (
    <CaseStudyLayout
      title="Deployable Hookah Shop Order Bot"
      subtitle="Telegram Ordering System"
      outcome="Structured Telegram bot flow with webhook backend logic designed to automate order intake, recommendations, and fulfillment notifications."
      mockup={mockup}
      problemBody="Manual order intake creates bottlenecks, errors, and inconsistent customer experiences. Without a structured flow, staff spend time fielding repetitive questions instead of fulfilling orders — and customers get inconsistent responses."
      systemBullets={[
        "Menu navigation with structured decision tree",
        "Product recommendations based on customer selections",
        "Order intake captured directly through the chat interface",
        "Webhook backend fires on order submission for staff notification",
        "Fulfillment tracking updates routed through backend confirmation logic",
      ]}
      stack={[
        "Telegram Bot API",
        "Node.js",
        "Webhooks",
        "Database logic",
        "Automation scripting",
      ]}
      results={[
        {
          label: "Order intake",
          value: "Fully automated",
          note: "Eliminated manual order intake through a structured bot flow.",
        },
        {
          label: "Fulfillment errors",
          value: "Reduced",
          note: "All orders routed through a structured, automated flow with backend confirmation logic.",
        },
        {
          label: "Staff efficiency",
          value: "Improved",
          note: "Staff notified automatically — no manual follow up required.",
        },
      ]}
      ctaTitle="Automate your order intake"
      ctaBody="If you need a bot system, webhook backend, or automation flow built for real volume, book a call and we will map the fastest path to results."
      ctaPrimaryLabel="Book a call"
      ctaPrimaryHref="/contact"
      ctaSecondaryLabel="View more case studies"
      ctaSecondaryHref="/work"
      liveSiteUrl="https://www.davincidynamics.site"
      liveSiteLabel="Live Site"
      extraSectionTitle="Telegram Ordering Extension"
      extraSectionBody="This system is designed to extend into chat based ordering. A Telegram bot can guide customers through product selection, capture order details, and hand off to checkout or staff fulfillment, while keeping catalog and pricing centralized."
      extraSectionBullets={[
        "Guided product selection and recommendations",
        "Quick reorder for repeat customers",
        "Order intake with staff notification handoff",
        "Webhook backend foundation for status updates",
      ]}
    />
  );
}
