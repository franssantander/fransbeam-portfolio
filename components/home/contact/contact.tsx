import { MailIcon } from "lucide-react";
import Link from "next/link";
import { Badge, Button } from "@/components/ui";
import Footer from "@/components/footer";
import Socials from "./socials";
import { projectInquiryHref, siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1 font-geist">
          <span className="block text-muted-foreground">Let&apos;s</span>
          <span className="block">Work Together</span>
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-border">
        <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1 sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Available for
            </p>
          </div>
          <div className="flex-1 flex flex-wrap gap-2">
            {[
              "Product builds",
              "Business web apps",
              "UI/UX design",
              "Full-time roles",
              "Partnerships",
            ].map((item, index) => (
              <Badge
                key={index}
                className="p-3 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                variant="outline"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Based in
            </p>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              Philippines 🇵🇭 — open to remote & on-site opportunities
            </p>
          </div>
        </div>

        <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Contact
            </p>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href={projectInquiryHref}>
              <Button
                className="gap-2 rounded-full px-4 hover:bg-muted-foreground"
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

        {/* Socials */}
        <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Elsewhere
            </p>
          </div>
          <Socials />
        </div>
      </div>

      <Footer />
    </section>
  );
}
