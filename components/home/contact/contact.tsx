import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01FreeIcons,
  Github01FreeIcons,
  Linkedin02FreeIcons,
  FileDownloadFreeIcons,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Button } from "@/components/ui";
import Footer from "@/components/footer";

export default function Contact() {
  const email = "santanderfrancisbeam@gmail.com";

  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">Let&apos;s</h1>
          <h1>Work Together</h1>
        </div>
      </div>

      <div className="flex flex-col divide-y divide-border">
        <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1 sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Available for
            </p>
          </div>
          <div className="flex-1 flex flex-wrap gap-2">
            {["Full-time roles", "Freelance projects", "Collaborations"].map(
              (item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {item}
                </span>
              ),
            )}
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
            <Link href={`mailto:${email}`}>
              <Button className="gap-2 rounded-full px-4" size="lg">
                <HugeiconsIcon icon={Mail01FreeIcons} size={18} />
                Email Me
              </Button>
            </Link>
            <span className="text-xs text-muted-foreground">{email}</span>
          </div>
        </div>

        <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Elsewhere
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/franssantander"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={Github01FreeIcons} size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/francebeam/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={Linkedin02FreeIcons} size={20} />
            </Link>
            <Link
              href="/francis-santander-resume.pdf"
              target="_blank"
              download
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={FileDownloadFreeIcons} size={20} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
