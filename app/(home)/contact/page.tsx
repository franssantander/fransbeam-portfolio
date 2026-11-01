import Link from "next/link";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  FileDownIcon,
  MailIcon,
} from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/brand-icons";
import { Button } from "@/components/ui";
import Footer from "@/components/footer";
import { ScrambleText } from "@/components/animations/scramble-text";
import { projectInquiryHref, siteConfig } from "@/config/site";

const AVAILABILITY = [
  "Product builds",
  "Business web apps",
  "UI/UX design",
  "Full-time roles",
  "Partnerships",
];

const SOCIALS = [
  {
    label: "GitHub",
    handle: "@franssantander",
    href: "https://github.com/franssantander",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    handle: "francebeam",
    href: "https://www.linkedin.com/in/francebeam/",
    icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    handle: "@franss.dev",
    href: "https://www.instagram.com/franss.dev/",
    icon: InstagramIcon,
  },
];

export default function ContactPage() {
  return (
    <main className="px-6 md:px-10 max-w-7xl mx-auto py-16 lg:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ChevronLeftIcon size={16} />
        Back to home
      </Link>

      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1 font-geist">
          <span className="block text-muted-foreground">
            <ScrambleText text="Let's" delay={0} />
          </span>
          <span className="block">
            <ScrambleText text="Work Together" delay={0.1} />
          </span>
        </h1>
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
              Have a product to build, a business system to modernize, or a role
              to fill? Tell me what you&apos;re working on — I&apos;ll get back
              to you within 24 hours.
            </p>
            <div className="flex items-center gap-4">
              <Link href={projectInquiryHref}>
                <Button
                  className="gap-2 rounded-full px-6 hover:bg-muted-foreground"
                  size="lg"
                >
                  <MailIcon size={18} />
                  Start a project
                </Button>
              </Link>
              <span className="text-xs text-muted-foreground">
                {siteConfig.email}
              </span>
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
              Projects, roles &amp; partnerships
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
            {SOCIALS.map(({ label, handle, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="group flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                      {label}
                    </p>
                    <p className="text-xs text-muted-foreground">{handle}</p>
                  </div>
                </div>
                <ArrowUpRightIcon
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
            <div>
              <Link
                href={process.env.NEXT_PUBLIC_RESUME_URL || ""}
                target="_blank"
                download
              >
                <Button
                  variant="outline"
                  className="gap-2 rounded-full px-6"
                  size="lg"
                >
                  <FileDownIcon size={18} />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
