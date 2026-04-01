"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up to Formspree, Resend, or server action
    setSubmitted(true);
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Drop us a message and we'll get back to you soon."
        />

        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="rounded-lg border border-coral-red/30 bg-coral-red/5 p-8 text-center">
                <svg className="mx-auto mb-4 h-12 w-12 text-coral-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="mt-2 text-text-muted">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3 text-sm transition-colors focus:border-coral-red focus:outline-none focus:ring-1 focus:ring-coral-red"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3 text-sm transition-colors focus:border-coral-red focus:outline-none focus:ring-1 focus:ring-coral-red"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3 text-sm transition-colors focus:border-coral-red focus:outline-none focus:ring-1 focus:ring-coral-red"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3 text-sm transition-colors focus:border-coral-red focus:outline-none focus:ring-1 focus:ring-coral-red"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-coral-red px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-coral-red/90 hover:shadow-lg hover:shadow-coral-red/25 sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-8 lg:col-span-2"
          >
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Email
              </h3>
              <a
                href="mailto:hello@sittingdownsoftware.com"
                className="text-coral-red hover:text-coral-red/80"
              >
                hello@sittingdownsoftware.com
              </a>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Social
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-coral-red">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-coral-red">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-coral-red">
                    X / Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-[var(--card-border)] bg-[var(--surface)] p-6">
              <h3 className="mb-2 font-semibold">Quick Response</h3>
              <p className="text-sm text-text-muted">
                We typically respond within 24 hours. For urgent requests,
                mention it in the subject line.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
