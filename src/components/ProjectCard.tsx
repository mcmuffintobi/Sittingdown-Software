"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { existingImages } from "@/data/images";

export default function ProjectCard({ project }: { project: Project }) {
  const hasImage = existingImages.includes(project.heroImage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block overflow-hidden rounded-lg border border-[var(--card-border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-[var(--surface-alt)]">
          {hasImage ? (
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              className="flex h-full items-center justify-center"
              style={
                project.brandColors
                  ? {
                      background: `linear-gradient(135deg, ${project.brandColors[0]}, ${project.brandColors[1]})`,
                    }
                  : undefined
              }
            >
              <span className="text-2xl font-bold text-white/60">
                {project.title}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-coral-red/0 transition-colors duration-300 group-hover:bg-coral-red/10" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-2 flex items-center gap-2">
            {project.categories.map((cat) => (
              <span key={cat} className="rounded-full bg-coral-red/10 px-3 py-0.5 font-mono text-xs font-medium text-coral-red">
                {cat}
              </span>
            ))}
            <span className="text-xs text-text-muted">{project.year}</span>
          </div>
          <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-coral-red">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-text-muted">
            {project.tagline}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded bg-[var(--surface-alt)] px-2 py-0.5 font-mono text-[11px] text-text-muted"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="rounded bg-[var(--surface-alt)] px-2 py-0.5 font-mono text-[11px] text-text-muted">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
