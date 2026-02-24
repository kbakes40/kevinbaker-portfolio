"use client";

import React, { useEffect, useRef, useState } from "react";
import { Meta } from "@/once-ui/modules";
import styles from "./page.module.css";

// ─── KPI Counter Hook ───────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Intersection Observer Hook ─────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── KPI Card ────────────────────────────────────────────────────────────────
function KpiCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView();
  const count = useCounter(value, 2000, inView);
  return (
    <div ref={ref} className={styles.kpiCard}>
      <span className={styles.kpiValue}>
        {count}
        {suffix}
      </span>
      <span className={styles.kpiLabel}>{label}</span>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    installVolume: "",
    primaryMarket: "",
    focus: "",
    revenueRange: "",
    currentInfrastructure: "",
    dealerType: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Dealer Application – ${formData.name} / ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nDealer Type: ${formData.dealerType}\nInstall Volume: ${formData.installVolume}\nPrimary Market: ${formData.primaryMarket}\nFiber or Wireless Focus: ${formData.focus}\nMonthly Revenue Range: ${formData.revenueRange}\nCurrent Infrastructure: ${formData.currentInfrastructure}`
    );
    window.location.href = `mailto:partnerships@davincidynamics.ai?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Sticky Apply Button ─────────────────────────────────────── */}
      <a href="#apply" className={styles.stickyApply}>
        Apply Now
      </a>

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>WiFi Kings · DaVinci Dynamics LLC</div>
          <h1 className={styles.heroHeadline}>
            Scale Your Internet &amp; Wireless<br />
            <span className={styles.accentBlue}>Sales Operation</span>
          </h1>
          <p className={styles.heroSub}>
            Dealer infrastructure. Fiber funnels. Commission clarity. Built for growth.
          </p>
          <div className={styles.heroCtas}>
            <a href="#apply" className={styles.btnPrimary}>
              Become a Partner
            </a>
            <a href="#model" className={styles.btnSecondary}>
              See Dealer Model
            </a>
          </div>
          <p className={styles.heroTrust}>
            Built for serious operators in fiber and wireless.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 – PROBLEM AGITATION
      ══════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>
            Most Dealers Leave Money<br />
            <span className={styles.accentBlue}>On The Table</span>
          </h2>
          <ul className={styles.problemList}>
            {[
              "No centralized install tracking",
              "Commission confusion",
              "Manual order processing",
              "Low conversion from address checks",
              "No automation for follow-up",
            ].map((item) => (
              <li key={item} className={styles.problemItem}>
                <span className={styles.problemIcon}>✕</span>
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.ctaCenter}>
            <a href="#apply" className={styles.btnPrimary}>
              Fix My Dealer Infrastructure
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 – THE SOLUTION
      ══════════════════════════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>
            The <span className={styles.accentGreen}>WiFi Kings</span> Dealer System
          </h2>
          <p className={styles.sectionSub}>
            End-to-end internet sales infrastructure built to increase installs and commissions.
          </p>
          <div className={styles.systemGrid}>
            {[
              {
                icon: "📡",
                title: "Address-Based Availability Funnel",
                desc: "Fiber and wireless lead capture and qualification.",
              },
              {
                icon: "⚡",
                title: "Automated Order Routing",
                desc: "Instant routing to correct carrier or provider.",
              },
              {
                icon: "💰",
                title: "Commission Tracking Model",
                desc: "Structured payout modeling with KPI visibility.",
              },
              {
                icon: "🔧",
                title: "Backend Automation",
                desc: "CRM integration, automated follow-ups, reporting dashboards.",
              },
              {
                icon: "🔒",
                title: "Payment & Compliance",
                desc: "Authorize.net, ID verification, clean checkout architecture.",
              },
            ].map((item) => (
              <div key={item.title} className={styles.systemCard}>
                <span className={styles.systemIcon}>{item.icon}</span>
                <h3 className={styles.systemTitle}>{item.title}</h3>
                <p className={styles.systemDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.ctaCenter}>
            <a href="#apply" className={styles.btnPrimary}>
              Apply To Partner
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 – DEALER GROWTH MODEL
      ══════════════════════════════════════════════════════════════ */}
      <section id="model" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>
            Built For <span className={styles.accentBlue}>Volume</span>
          </h2>
          <ul className={styles.growthList}>
            {[
              "Higher install conversion rates",
              "Faster follow-up cycles",
              "Cleaner backend systems",
              "Automated lead qualification",
              "Scalable commission tiers",
            ].map((item) => (
              <li key={item} className={styles.growthItem}>
                <span className={styles.checkIcon}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.kpiGrid}>
            <KpiCard value={47} suffix="%" label="Install Growth" />
            <KpiCard value={3} suffix="x" label="Conversion Rate" />
            <KpiCard value={12} suffix="+" label="Automated Processes" />
            <KpiCard value={38} suffix="%" label="Revenue Lift" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 – WHO THIS IS FOR
      ══════════════════════════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>
            Who This Is <span className={styles.accentGreen}>For</span>
          </h2>
          <div className={styles.whoGrid}>
            {[
              "Independent Telecom Dealers",
              "Fiber Sub Agents",
              "Wireless Store Owners",
              "Internet Sales Teams",
              "Door-to-Door Fiber Reps",
              "Online Lead Aggregators",
            ].map((item) => (
              <div key={item} className={styles.whoCard}>
                {item}
              </div>
            ))}
          </div>
          <p className={styles.whoDisclaimer}>
            Not for hobbyists. Built for operators.
          </p>
          <div className={styles.ctaCenter}>
            <a href="#apply" className={styles.btnPrimary}>
              Serious About Scaling
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 – APPLICATION FORM
      ══════════════════════════════════════════════════════════════ */}
      <section id="apply" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>
            Apply To Join <span className={styles.accentBlue}>The Network</span>
          </h2>
          {submitted ? (
            <div className={styles.successMsg}>
              Application submitted. We'll be in touch within 24 hours.
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Company *</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="company"
                    required
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Dealer Type *</label>
                  <select
                    className={styles.select}
                    name="dealerType"
                    required
                    value={formData.dealerType}
                    onChange={handleChange}
                  >
                    <option value="">Select dealer type</option>
                    <option value="Fiber Dealer">Fiber Dealer</option>
                    <option value="Wireless Dealer">Wireless Dealer</option>
                    <option value="Sub Agent">Sub Agent</option>
                    <option value="Lead Generator">Lead Generator</option>
                    <option value="Store Owner">Store Owner</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Current Monthly Install Volume</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="installVolume"
                    placeholder="e.g. 50 installs/month"
                    value={formData.installVolume}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Primary Market</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="primaryMarket"
                    placeholder="City, State or Region"
                    value={formData.primaryMarket}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Fiber or Wireless Focus</label>
                  <select
                    className={styles.select}
                    name="focus"
                    value={formData.focus}
                    onChange={handleChange}
                  >
                    <option value="">Select focus</option>
                    <option value="Fiber">Fiber</option>
                    <option value="Wireless">Wireless</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Monthly Revenue Range</label>
                  <select
                    className={styles.select}
                    name="revenueRange"
                    value={formData.revenueRange}
                    onChange={handleChange}
                  >
                    <option value="">Select range</option>
                    <option value="Under $10K">Under $10K</option>
                    <option value="$10K – $50K">$10K – $50K</option>
                    <option value="$50K – $150K">$50K – $150K</option>
                    <option value="$150K+">$150K+</option>
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>What Infrastructure Do You Currently Use?</label>
                  <textarea
                    className={styles.textarea}
                    name="currentInfrastructure"
                    rows={3}
                    placeholder="CRM, order management, tracking tools, etc."
                    value={formData.currentInfrastructure}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.formFooter}>
                <button type="submit" className={styles.btnSubmit}>
                  Submit Application
                </button>
                <p className={styles.formNote}>
                  Applications reviewed within 24 hours. Serious operators only.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.finalCta}`}>
        <div className={styles.container}>
          <h2 className={styles.finalHeadline}>
            If You Want More Installs, Better Structure,<br />
            and <span className={styles.accentGreen}>Real Infrastructure</span>
          </h2>
          <div className={styles.heroCtas}>
            <a href="#apply" className={styles.btnPrimary}>
              Apply Now
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              Schedule Strategy Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
