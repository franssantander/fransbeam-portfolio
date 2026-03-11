import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01FreeIcons,
  Mail01FreeIcons,
  Github01FreeIcons,
  Linkedin02FreeIcons,
  Instagram,
  FileDownloadFreeIcons,
  ArrowUpRight03Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui";
import Footer from "@/components/footer";

const AVAILABILITY = [
  "Full-time roles",
  "Freelance projects",
  "Collaborations",
];

const SOCIALS = [
  {
    label: "GitHub",
    handle: "@franssantander",
    href: "https://github.com/franssantander",
    icon: Github01FreeIcons,
  },
  {
    label: "LinkedIn",
    handle: "francebeam",
    href: "https://www.linkedin.com/in/francebeam/",
    icon: Linkedin02FreeIcons,
  },
  {
    label: "Instagram",
    handle: "@franss.dev",
    href: "https://www.instagram.com/franss.dev/",
    icon: Instagram,
  },
];

const email = "your@email.com";

export default function ContactPage() {
  return (
    <main className="px-6 md:px-10 max-w-7xl mx-auto py-16 lg:py-24">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} />
        Back to home
      </Link>

      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">Let&apos;s</h1>
          <h1>Work Together</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col divide-y divide-border">
        <div className="py-10 flex flex-col sm:flex-row gap-8">
          <div className="sm:w-64 shrink-0 space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Email
            </p>
            <p className="text-sm text-muted-foreground">
              Best way to reach me
            </p>
          </div>
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Have a project in mind or looking for a software engineer to join
              your team? My inbox is always open — I&apos;ll get back to you
              within 24 hours.
            </p>
            <div className="flex items-center gap-4">
              <Link href={`mailto:${email}`}>
                <Button className="gap-2 rounded-full px-6" size="lg">
                  <HugeiconsIcon icon={Mail01FreeIcons} size={18} />
                  Email Me
                </Button>
              </Link>
              <span className="text-xs text-muted-foreground">{email}</span>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="py-10 flex flex-col sm:flex-row gap-8">
          <div className="sm:w-64 shrink-0 space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Available for
            </p>
            <p className="text-sm text-muted-foreground">
              Open to opportunities
            </p>
          </div>
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <div className="flex-1 flex flex-wrap gap-2 items-start">
            {AVAILABILITY.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="py-10 flex flex-col sm:flex-row gap-8">
          <div className="sm:w-64 shrink-0 space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Based in
            </p>
            <p className="text-sm text-muted-foreground">Location</p>
          </div>
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Philippines 🇵🇭</p>
            <p className="text-sm text-muted-foreground">
              Open to remote & on-site opportunities worldwide
            </p>
          </div>
        </div>

        {/* Socials */}
        <div className="py-10 flex flex-col sm:flex-row gap-8">
          <div className="sm:w-64 shrink-0 space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Elsewhere
            </p>
            <p className="text-sm text-muted-foreground">Find me online</p>
          </div>
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <div className="flex-1 flex flex-col divide-y divide-border">
            {SOCIALS.map(({ label, handle, href, icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="group flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <HugeiconsIcon
                    icon={icon}
                    size={18}
                    className="text-muted-foreground"
                  />
                  <div>
                    <p className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                      {label}
                    </p>
                    <p className="text-xs text-muted-foreground">{handle}</p>
                  </div>
                </div>
                <HugeiconsIcon
                  icon={ArrowUpRight03Icon}
                  size={16}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="py-10 flex flex-col sm:flex-row gap-8">
          <div className="sm:w-64 shrink-0 space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Resume
            </p>
            <p className="text-sm text-muted-foreground">Download my CV</p>
          </div>
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Prefer a formal document? Download my resume for a full overview
              of my experience, skills, and education.
            </p>
            <Link href="/francis-santander-resume.pdf" target="_blank" download>
              <Button
                variant="outline"
                className="gap-2 rounded-full px-6"
                size="lg"
              >
                <HugeiconsIcon icon={FileDownloadFreeIcons} size={18} />
                Download Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
