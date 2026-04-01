"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites built with modern frameworks like Next.js and React. Fast, responsive, SEO-optimized, and designed to convert visitors into customers.",
    features: [
      "Responsive, mobile-first design",
      "SEO and performance optimization",
      "CMS integration for easy updates",
      "Analytics and lead tracking",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Software Engineering",
    description:
      "Custom desktop and web applications tailored to your business workflow. From inventory systems to point-of-sale tools, we build software that fits how you work.",
    features: [
      "Custom business applications",
      "Database design and management",
      "API development and integration",
      "Cross-platform desktop apps",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Consulting",
    description:
      "Not sure where to start? We offer technical consulting to help you plan your project, choose the right technologies, and set up a development roadmap.",
    features: [
      "Technology stack recommendations",
      "Architecture and infrastructure planning",
      "Performance audits and optimization",
      "Code review and best practices",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading
            title="Services"
            subtitle="What we offer to help your business succeed online."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col rounded-lg border border-[var(--card-border)] bg-[var(--surface)] p-8"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-coral-red/10 text-coral-red">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <ul className="space-y-2 border-t border-[var(--card-border)] pt-6">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-text-muted"
                    >
                      <svg className="h-4 w-4 flex-shrink-0 text-coral-red" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[var(--card-border)] bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading
            title="How We Work"
            subtitle="A simple, transparent process from start to finish."
          />
          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your business, goals, and budget." },
              { step: "02", title: "Plan", desc: "We propose a solution with clear scope and timeline." },
              { step: "03", title: "Build", desc: "We develop your project with regular check-ins." },
              { step: "04", title: "Launch", desc: "We deploy, test, and hand over everything." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="font-mono text-3xl font-bold text-coral-red">
                  {item.step}
                </span>
                <h4 className="mt-2 font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm text-text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            Let&apos;s discuss how we can help. Reach out for a free, no-pressure consultation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-coral-red px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-coral-red/90 hover:shadow-lg hover:shadow-coral-red/25"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
