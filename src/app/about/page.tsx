"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "SQLite", "REST APIs"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "Nginx", "Linux", "GitHub Actions"] },
  { category: "Design", items: ["Figma", "Responsive Design", "Accessibility", "UI/UX"] },
];

const timeline = [
  { year: "2024", event: "Sittingdown Software founded" },
  { year: "2025", event: "First five client projects delivered" },
  { year: "2025", event: "Launched first open-source tool" },
  { year: "2026", event: "Expanded into custom software development" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading
            title="About Us"
            subtitle="The story behind Sittingdown Software and why we do what we do."
          />
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-[var(--card-border)] bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-3xl">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <h2 className="mb-6 text-3xl font-bold">Our Philosophy</h2>
              <div className="space-y-4 text-lg leading-relaxed text-text-muted">
                <p>
                  We started Sittingdown Software with a simple belief: every
                  local business deserves a solid online presence, and it
                  shouldn&apos;t cost a fortune to get one.
                </p>
                <p>
                  Too many small businesses get stuck between expensive agencies
                  and cookie-cutter website builders. We sit right in the middle
                  &mdash; delivering custom, professional work at prices that
                  make sense for a small business budget.
                </p>
                <p>
                  We care about the details. Fast load times, clean code,
                  accessible design, and sites that actually help you get more
                  customers. No fluff, no upsells, no unnecessary complexity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="The tools and technologies we use to build great products."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-lg border border-[var(--card-border)] bg-[var(--surface)] p-6"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-coral-red">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-muted"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-coral-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-[var(--card-border)] bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading title="Milestones" />
          <div className="mx-auto max-w-2xl">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 border-l-2 border-coral-red/30 py-4 pl-6 last:border-coral-red"
              >
                <span className="font-mono text-sm font-bold text-coral-red">
                  {item.year}
                </span>
                <p className="text-text-muted">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl font-bold">Want to work together?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            We&apos;d love to hear about your project.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-coral-red px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-coral-red/90 hover:shadow-lg hover:shadow-coral-red/25"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
