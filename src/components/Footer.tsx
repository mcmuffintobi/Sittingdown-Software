import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Sittingdown<span className="text-coral-red">.</span>
            </Link>
            <p className="mt-3 text-sm text-text-muted">
              Helping local, small businesses get online for cheap.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Pages
            </h4>
            <ul className="space-y-2 text-sm">
              {["Portfolio", "About", "Services", "Contact"].map((page) => (
                <li key={page}>
                  <Link
                    href={`/${page.toLowerCase()}`}
                    className="transition-colors hover:text-coral-red"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Connect
            </h4>
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

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Get in Touch
            </h4>
            <p className="text-sm">
              <a
                href="mailto:hello@sittingdownsoftware.com"
                className="transition-colors hover:text-coral-red"
              >
                hello@sittingdownsoftware.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--card-border)] pt-6 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Sittingdown Software. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
