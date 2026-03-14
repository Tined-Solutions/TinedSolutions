import { useEffect, useState, type JSX } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

interface MobileLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  links: MobileLink[];
  ctaHref: string;
}

const panelVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.16, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.03 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.12, ease: "easeIn" } },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.14, ease: "easeOut" } },
};

export default function MobileMenu({ links, ctaHref }: MobileMenuProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="mobile-menu-trigger relative z-50 flex h-10 w-10 items-center justify-center rounded border border-elegance-gold/35 bg-cream md:hidden"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
      >
        <span className={`hamburger-line ${isOpen ? "hamburger-line-top-open" : ""}`} />
        <span className={`hamburger-line ${isOpen ? "hamburger-line-middle-open" : ""}`} />
        <span className={`hamburger-line ${isOpen ? "hamburger-line-bottom-open" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              onClick={closeMenu}
            />

            <motion.div
              className="mobile-menu-panel fixed inset-x-0 top-0 z-50 min-h-screen border-t border-elegance-gold/30 px-6 pb-8 pt-24 md:hidden"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <nav aria-label="Navegación móvil">
                <ul className="space-y-2">
                  {links.map((link) => (
                    <motion.li key={link.href} variants={linkVariants}>
                      <a href={link.href} className="mobile-menu-link block rounded-lg px-3 py-3" onClick={closeMenu}>
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.a
                href={ctaHref}
                onClick={closeMenu}
                variants={linkVariants}
                className="interactive-hover-cta group relative mt-6 inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border border-elegance-gold/45 px-4 py-3 text-sm font-semibold text-tined-blue"
              >
                <span className="interactive-hover-cta-text inline-flex translate-x-0.5 items-center transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                  Contacto
                </span>
                <span className="interactive-hover-cta-reveal absolute inset-0 z-10 flex translate-x-12 items-center justify-center gap-2 text-cream opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <span>Contacto</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M13.5 5.5a1 1 0 0 1 1.41 0l5.3 5.3a1 1 0 0 1 0 1.4l-5.3 5.3a1 1 0 1 1-1.41-1.4l3.6-3.6H4a1 1 0 1 1 0-2h13.1l-3.6-3.6a1 1 0 0 1 0-1.4Z" />
                  </svg>
                </span>
                <span className="interactive-hover-cta-bg absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-tined-blue transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"></span>
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
