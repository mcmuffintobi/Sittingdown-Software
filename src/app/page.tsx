"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-steel-blue/20 via-transparent to-coral-red/10" />
        <div className="pointer-events-none absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-coral-red/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-steel-blue/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-coral-red">
              Web & Software Development
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem]">
              We help small businesses{" "}
              <span className="text-coral-red">get online</span> without
              breaking the bank.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
              Sittingdown Software builds fast, modern websites and custom
              software for local businesses who need a professional online
              presence at an affordable price.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg bg-coral-red px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-coral-red/90 hover:shadow-lg hover:shadow-coral-red/25"
              >
                View Our Work
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-[var(--card-border)] px-6 py-3 text-sm font-semibold transition-all hover:border-coral-red hover:text-coral-red"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of recent work across websites, software, and developer tools."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-medium text-coral-red transition-colors hover:text-coral-red/80"
            >
              View all projects
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="border-t border-[var(--card-border)] bg-[var(--surface)] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold md:text-4xl">
                Built for businesses that need results, not fluff.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                We believe every local business deserves a professional web
                presence. Sittingdown Software focuses on delivering fast,
                well-built sites and apps that actually help you grow &mdash;
                without overcharging or overcomplicating things.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 font-medium text-coral-red transition-colors hover:text-coral-red/80"
              >
                Learn more about us
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "10+", label: "Projects Delivered" },
                { num: "100%", label: "Client Satisfaction" },
                { num: "<2s", label: "Avg. Load Time" },
                { num: "95+", label: "Lighthouse Score" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[var(--card-border)] bg-[var(--background)] p-6 text-center"
                >
                  <p className="text-3xl font-bold text-coral-red">
                    {stat.num}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to get your business online?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
              Let&apos;s talk about what you need. No pressure, no jargon &mdash;
              just a straightforward conversation about your goals.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-coral-red px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-coral-red/90 hover:shadow-lg hover:shadow-coral-red/25"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
