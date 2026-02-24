"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./CaseStudyLayout.module.scss";

interface ResultItem {
  label: string;
  value: string;
  note?: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle?: string;
  outcome: string;
  mockup: React.ReactNode;
  problemBody: string;
  systemBullets: string[];
  stack: string[];
  results: ResultItem[];
  ctaTitle: string;
  ctaBody: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  liveSiteUrl?: string;
  liveSiteLabel?: string;
  extraSectionTitle?: string;
  extraSectionBody?: string;
  extraSectionBullets?: string[];
}

export default function CaseStudyLayout({
  title,
  subtitle,
  outcome,
  mockup,
  problemBody,
  systemBullets,
  stack,
  results,
  ctaTitle,
  ctaBody,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  liveSiteUrl,
  liveSiteLabel = "Live Site",
  extraSectionTitle,
  extraSectionBody,
  extraSectionBullets,
}: CaseStudyLayoutProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mockupInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Scroll reveal for all [data-reveal] elements
        const reveals = rootRef.current?.querySelectorAll("[data-reveal]") ?? [];
        reveals.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
              },
            }
          );
        });

        // Subtle mockup scale on scroll
        if (mockupInnerRef.current) {
          gsap.fromTo(
            mockupInnerRef.current,
            { scale: 1 },
            {
              scale: 1.02,
              ease: "none",
              scrollTrigger: {
                trigger: mockupInnerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      }, rootRef);
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.root}>
      {/* ── Hero ── */}
      <section className={styles.hero} data-reveal>
        <div className={styles.heroText}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.outcomePanel} data-reveal>
          <p className={styles.outcomeLabel}>Outcome</p>
          <p className={styles.outcomeBody}>{outcome}</p>
        </div>
        <div className={styles.buttonRow} data-reveal>
          <Link href={ctaPrimaryHref} className={styles.btnPrimary}>
            {ctaPrimaryLabel}
          </Link>
          {ctaSecondaryLabel && ctaSecondaryHref && (
            <Link href={ctaSecondaryHref} className={styles.btnSecondary}>
              {ctaSecondaryLabel}
            </Link>
          )}
          {liveSiteUrl && (
            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnTertiary}
            >
              {liveSiteLabel} ↗
            </a>
          )}
        </div>
      </section>

      {/* ── Problem ── */}
      <section className={styles.section} data-reveal>
        <h2 className={styles.sectionHeading}>The Problem</h2>
        <p className={styles.bodyText}>{problemBody}</p>
      </section>

      {/* ── System ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading} data-reveal>
          The System
        </h2>
        <div className={styles.systemGrid}>
          <ul className={styles.bulletList} data-reveal>
            {systemBullets.map((b, i) => (
              <li key={i} className={styles.bulletItem}>
                {b}
              </li>
            ))}
          </ul>
          <div className={styles.mockupSticky}>
            <div ref={mockupInnerRef} className={styles.mockupInner}>
              {mockup}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack ── */}
      <section className={styles.section} data-reveal>
        <h2 className={styles.sectionHeading}>Stack</h2>
        <div className={styles.chipWrap}>
          {stack.map((s, i) => (
            <span key={i} className={styles.chip}>
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* ── Results ── */}
      <section className={styles.section} data-reveal>
        <h2 className={styles.sectionHeading}>Results</h2>
        <div className={styles.resultsGrid}>
          {results.map((r, i) => (
            <div key={i} className={styles.resultCard} data-reveal>
              <p className={styles.resultLabel}>{r.label}</p>
              <p className={styles.resultValue}>{r.value}</p>
              {r.note && <p className={styles.resultNote}>{r.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Extra Section ── */}
      {extraSectionTitle && (
        <section className={styles.section} data-reveal>
          <h2 className={styles.sectionHeading}>{extraSectionTitle}</h2>
          {extraSectionBody && (
            <p className={styles.bodyText}>{extraSectionBody}</p>
          )}
          {extraSectionBullets && extraSectionBullets.length > 0 && (
            <ul className={styles.bulletList} data-reveal>
              {extraSectionBullets.map((b, i) => (
                <li key={i} className={styles.bulletItem}>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* ── CTA ── */}
      <section className={styles.ctaSection} data-reveal>
        <h2 className={styles.ctaTitle}>{ctaTitle}</h2>
        <p className={styles.ctaBody}>{ctaBody}</p>
        <div className={styles.buttonRow}>
          <Link href={ctaPrimaryHref} className={styles.btnPrimary}>
            {ctaPrimaryLabel}
          </Link>
          {ctaSecondaryLabel && ctaSecondaryHref && (
            <Link href={ctaSecondaryHref} className={styles.btnSecondary}>
              {ctaSecondaryLabel}
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
