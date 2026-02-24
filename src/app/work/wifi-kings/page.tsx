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
    Replace with WiFi Kings screenshots or a short demo clip.
  </div>
);

export default function WiFiKingsPage() {
  return (
    <CaseStudyLayout
      title="WiFi Kings"
      subtitle="Telecom Growth Systems"
      outcome="Multi provider telecom acquisition engine with address based eligibility, lead qualification, and routing designed to convert high intent customers and scale across regions."
      mockup={mockup}
      problemBody="Most telecom funnels act like brochures. They do not qualify intent, do not route correctly, and do not create a repeatable dealer handoff, which creates wasted leads and inconsistent installs."
      systemBullets={[
        "Address based eligibility and routing flow",
        "Qualification intake that filters low intent leads",
        "Provider routing logic designed to reduce friction",
        "Lead payload ready for CRM handoff and follow up automation",
      ]}
      stack={[
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "SCSS Modules",
        "Once UI tokens",
        "Postgres",
        "Supabase",
        "REST APIs",
        "Webhooks",
        "Vercel",
        "Cloudflare",
        "Conversion tracking",
      ]}
      results={[
        {
          label: "Conversion focus",
          value: "High intent filtering",
          note: "Built to reduce junk leads and increase qualified handoffs.",
        },
        {
          label: "Routing",
          value: "Multi provider logic",
          note: "Designed to match customers to the right path fast.",
        },
        {
          label: "Scalability",
          value: "Region ready",
          note: "Add regions and dealer partners without rebuilding the core system.",
        },
      ]}
      ctaTitle="Build infrastructure that converts"
      ctaBody="If you need a funnel, checkout system, or automation backbone built for real volume, book a call and we will map the fastest path to results."
      ctaPrimaryLabel="Book a call"
      ctaPrimaryHref="/contact"
      ctaSecondaryLabel="View more case studies"
      ctaSecondaryHref="/work"
      liveSiteUrl="https://wifi-kings.com"
      liveSiteLabel="Live Site"
    />
  );
}
