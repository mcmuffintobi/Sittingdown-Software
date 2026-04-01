"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const categories = ["All", "Website", "Software", "Tool"] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter as "Website" | "Software" | "Tool"));

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Our Work"
          subtitle="Websites, software, and tools we've built for real clients and the open-source community."
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-coral-red text-white shadow-lg shadow-coral-red/25"
                  : "border border-[var(--card-border)] hover:border-coral-red hover:text-coral-red"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-text-muted">
            No projects in this category yet. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}
