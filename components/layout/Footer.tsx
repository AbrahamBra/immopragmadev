import { FOOTER_LINKS, COMPANY_INFO } from "@/lib/constants";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const sections = Object.values(FOOTER_LINKS);

  return (
    <footer className="relative border-t border-border bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-xl font-black tracking-tight text-text-primary">
                Pragma
                <span className="text-accent-primary">Dev</span>
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-text-muted text-xs leading-relaxed mb-3">
              {COMPANY_INFO.address}
            </p>
            <div className="space-y-1.5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-text-muted text-xs hover:text-text-secondary transition-colors"
              >
                <Phone size={12} />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-text-muted text-xs hover:text-text-secondary transition-colors"
              >
                <Mail size={12} />
                {COMPANY_INFO.email}
              </a>
            </div>
            <p className="text-text-muted text-[10px] mt-3 font-mono">
              Founded in {COMPANY_INFO.founded} by {COMPANY_INFO.founders}
            </p>
          </div>

          {/* Link columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-text-primary font-semibold text-sm mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http") || link.href.startsWith("mailto")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-text-muted text-sm hover:text-text-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.pragmadev.com/news.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              News
            </a>
            <a
              href="https://www.pragmadev.com/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              Contact
            </a>
            <a
              href={`mailto:${COMPANY_INFO.supportEmail}`}
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              Support
            </a>
            <a
              href="https://www.pragmadev.com/pragmadev_feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
