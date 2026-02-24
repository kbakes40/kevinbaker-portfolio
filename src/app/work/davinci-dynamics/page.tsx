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
    Replace with DaVinciDynamics.ai funnel screenshots or a short demo clip.
  </div>
);

export default function DaVinciDynamicsPage() {
  return (
    <CaseStudyLayout
      title="DaVinci Dynamics"
      subtitle="Telecom Dealer Acquisition"
      outcome="High conversion dealer acquisition funnel engineered to attract serious operators, qualify applicants, and route leads into a structured onboarding pipeline."
      mockup={mockup}
      problemBody="Most dealer recruitment pages are built like corporate brochures. They attract low intent traffic, lack qualification logic, and force manual follow up. The result is wasted time, inconsistent onboarding, and poor conversion from applicant to producer."
      systemBullets={[
        "Operator first positioning that speaks to production and performance",
        "Qualification intake that filters low intent applicants",
        "Automated lead routing to the correct pipeline and owner",
        "Onboarding ready flow with clear next steps and follow up triggers",
      ]}
      stack={[
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "SCSS Modules",
        "Once UI tokens",
        "REST APIs",
        "Webhooks",
        "CRM routing",
        "Email routing",
        "Automation scripting",
        "Vercel",
        "Conversion tracking",
      ]}
      results={[
        {
          label: "Lead quality",
          value: "Higher intent applications",
          note: "Built to filter noise and surface serious operators.",
        },
        {
          label: "Speed",
          value: "Faster follow up",
          note: "Automated routing reduces manual handling and delays.",
        },
        {
          label: "Scalability",
          value: "Repeatable onboarding",
          note: "Same funnel system can scale to multiple regions and dealer teams.",
        },
      ]}
      ctaTitle="Build a system that recruits and converts"
      ctaBody="If you need dealer acquisition, qualification, routing, and onboarding infrastructure built to scale, book a call and we will map the fastest path to measurable lift."
      ctaPrimaryLabel="Book a call"
      ctaPrimaryHref="/contact"
      ctaSecondaryLabel="View more case studies"
      ctaSecondaryHref="/work"
      liveSiteUrl="https://davincidynamics.ai"
      liveSiteLabel="Live Site"
    />
  );
}
