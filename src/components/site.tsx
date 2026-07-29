import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoAsset from "@/assets/cluscore-logo.png.asset.json";

export function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="CluScore" className={className} />;
}

/* ---------------- Page meta (SEO) ---------------- */
export function usePageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", `https://cluscore.ie${path}`);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://cluscore.ie${path}`;
  }, [title, description, path]);
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/* ---------------- Nav ---------------- */
export function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const home = pathname === "/";
  const h = (hash: string) => (home ? hash : `/${hash}`);

  const links: [string, string][] = [
    ["GAA", "/"],
    ["Rugby", "/rugby"],
    ["Soccer", "/soccer"],
    ["Other sports", "/other-sports"],
    ["Gallery", h("#gallery")],
    ["FAQ", h("#faq")],
    ["Contact", h("#contact")],
  ];

  const isRoute = (href: string) => href.startsWith("/") && !href.includes("#");

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center">
          <LogoMark />
        </Link>
        <nav className="hidden gap-6 lg:flex">
          {links.map(([label, href]) =>
            isRoute(href) ? (
              <Link
                key={href}
                to={href}
                className={`text-sm font-medium transition hover:text-foreground ${
                  pathname === href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ) : (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {label}
              </a>
            ),
          )}
        </nav>
        <a
          href={h("#contact")}
          className="hidden rounded-md bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground transition hover:opacity-90 lg:inline-flex"
        >
          Get a quote
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="rounded-md border border-border px-3 py-2 text-sm font-medium lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {links.map(([label, href]) =>
              isRoute(href) ? (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  {label}
                </a>
              ),
            )}
            <a
              href={h("#contact")}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-ink px-4 py-3 text-center text-sm font-semibold text-ink-foreground"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Section head ---------------- */
export function SectionHead({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="text-xs font-bold uppercase tracking-[0.2em]">
        <span className="rounded bg-primary px-2 py-1 text-primary-foreground">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQ({ faqs, title }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <section id="faq" className="border-y border-border bg-card">
      <div className="mx-auto max-w-4xl px-5 py-20">
        <SectionHead eyebrow="FAQ" title={title ?? "Questions committees usually ask."} />
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-background">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold">{q}</span>
        <span
          aria-hidden
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground transition ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

/* ---------------- CTA band ---------------- */
export function CTABand({
  title = "Ready to upgrade your scoreboard?",
  body = "Tell us about your Club — we'll come back with a quote.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-2 text-ink-foreground/70">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-95"
          >
            Get a quote for your Club
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-ink-foreground transition hover:bg-white/5"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact({ sport }: { sport?: string }) {
  const [form, setForm] = useState({ name: "", club: "", county: "", contact: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending || sent) return;
    const website =
      (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sport: sport ?? "GAA", website }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json().catch(() => ({}));
      if (!data?.success) throw new Error("Unexpected response");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-primary/40";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHead
            eyebrow="Contact"
            title="Get a quote for your Club."
            subtitle="A few details and we'll be in touch. No obligation, no pressure."
          />
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="mt-0.5">📍</span>
              <span>
                <strong>Interactive Displays Ireland</strong>
                <br />
                <span className="text-muted-foreground">Ireland</span>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✉️</span>
              <a
                href="mailto:sales@interactivedisplays.ie"
                className="border-b border-primary hover:opacity-80"
              >
                sales@interactivedisplays.ie
              </a>
            </li>
          </ul>
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              opacity: 0,
            }}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Your name
              </span>
              <input
                required
                className={field}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Club
              </span>
              <input
                required
                className={field}
                value={form.club}
                onChange={(e) => setForm({ ...form, club: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                County
              </span>
              <input
                className={field}
                value={form.county}
                onChange={(e) => setForm({ ...form, county: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phone or email
              </span>
              <input
                required
                className={field}
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </span>
            <textarea
              rows={5}
              className={field}
              placeholder="Tell us about your Club — sport, wall size, indoor/outdoor, when you'd want it in place…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <button
            type="submit"
            disabled={sending || sent}
            className="mt-6 w-full rounded-md bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending…" : sent ? "Sent ✓" : "Send enquiry"}
          </button>
          {sent && (
            <p className="mt-3 text-center text-xs font-medium text-green-600">
              Thanks — your enquiry is on the way.
            </p>
          )}
          {error && !sent && (
            <p className="mt-3 text-center text-xs font-medium text-red-600">
              Couldn't send: {error}. Please email sales@interactivedisplays.ie directly.
            </p>
          )}
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            We'll only use your details to reply to this enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center">
            <LogoMark />
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            CluScore is a product of{" "}
            <strong className="text-foreground">Interactive Displays Ireland</strong>. Purpose-built
            LED scoreboards for GAA clubs and other sports, made and supported in Ireland.
          </p>
          <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              GAA scoreboards
            </Link>
            <Link to="/rugby" className="hover:text-foreground">
              Rugby
            </Link>
            <Link to="/soccer" className="hover:text-foreground">
              Soccer
            </Link>
            <Link to="/other-sports" className="hover:text-foreground">
              Other sports
            </Link>
          </nav>
        </div>
        <div className="text-sm sm:text-right">
          <div className="font-semibold">Interactive Displays Ireland</div>
          <div className="mt-1 text-muted-foreground">Ireland</div>
          <a
            href="mailto:sales@interactivedisplays.ie"
            className="mt-1 inline-block text-muted-foreground hover:text-foreground"
          >
            sales@interactivedisplays.ie
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Interactive Displays Ireland. All rights reserved.</span>
          <span>Made in Ireland 🇮🇪</span>
        </div>
      </div>
    </footer>
  );
}
