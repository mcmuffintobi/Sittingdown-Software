import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { existingImages } from "@/data/images";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-end bg-[var(--surface-alt)]">
        {existingImages.includes(project.heroImage) && (
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-12 pt-24">
          <Link
            href="/portfolio"
            className="mb-4 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-coral-red"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            {project.categories.map((cat) => (
              <span key={cat} className="rounded-full bg-coral-red/10 px-3 py-0.5 font-mono text-xs font-medium text-coral-red">
                {cat}
              </span>
            ))}
            <span className="text-sm text-text-muted">{project.year}</span>
            {project.client && (
              <span className="text-sm text-text-muted">
                &middot; {project.client}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-text-muted">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-bold">Overview</h2>
              <p className="leading-relaxed text-text-muted">
                {project.overview}
              </p>

              <h3 className="mb-3 mt-10 text-xl font-bold">
                Role & Scope
              </h3>
              <p className="leading-relaxed text-text-muted">{project.role}</p>

              <h3 className="mb-3 mt-10 text-xl font-bold">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-text-muted">
                    <svg className="mt-1 h-4 w-4 flex-shrink-0 text-coral-red" fill="currentColor" viewBox="0 0 20 20">
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

              {project.testimonial && (
                <blockquote className="mt-12 rounded-lg border-l-4 border-coral-red bg-[var(--surface)] p-6">
                  <p className="text-lg italic leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-text-muted">
                    &mdash; {project.testimonial.author},{" "}
                    {project.testimonial.role}
                  </footer>
                </blockquote>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28 space-y-6">
                {/* Tech Stack */}
                <div className="rounded-lg border border-[var(--card-border)] bg-[var(--surface)] p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[var(--surface-alt)] px-3 py-1 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.liveUrl || project.repoUrl) && (
                  <div className="rounded-lg border border-[var(--card-border)] bg-[var(--surface)] p-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                      Links
                    </h4>
                    <div className="space-y-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-2 text-sm font-medium text-coral-red hover:text-coral-red/80"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Site
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          className="flex items-center gap-2 text-sm font-medium text-coral-red hover:text-coral-red/80"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub Repo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-[var(--card-border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-[1200px] flex-col sm:flex-row">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="flex flex-1 items-center gap-3 border-b border-[var(--card-border)] p-6 transition-colors hover:bg-[var(--surface-alt)] sm:border-b-0 sm:border-r"
            >
              <svg className="h-5 w-5 text-text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              <div>
                <p className="text-xs text-text-muted">Previous</p>
                <p className="font-medium">{prev.title}</p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="flex flex-1 items-center justify-end gap-3 p-6 text-right transition-colors hover:bg-[var(--surface-alt)]"
            >
              <div>
                <p className="text-xs text-text-muted">Next</p>
                <p className="font-medium">{next.title}</p>
              </div>
              <svg className="h-5 w-5 text-text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </section>
    </>
  );
}
