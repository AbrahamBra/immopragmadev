import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const sections = Object.values(FOOTER_LINKS);

  return (
    <footer className="relative border-t border-border bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-xl font-black tracking-tight text-text-primary">
                Pragma
                <span className="text-accent-primary">Dev</span>
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed">
              Modeling and testing tools since 2001
            </p>
            <p className="text-text-muted text-xs mt-4 leading-relaxed">
              9 Rue Saint-Ambroise
              <br />
              75011 Paris, France
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
                      {...(link.href.startsWith("http")
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
            &copy; {new Date().getFullYear()} PragmaDev. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/pragmadev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/pragmadev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:contact@pragmadev.com"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
