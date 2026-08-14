import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import "./app.css";
import svgPaths from "../imports/Nav/svg-p1tbeb06bf";
import { HeroSection } from "./components/hero-section/hero-section";
import { MetricsSection } from "./components/metrics-section/metrics-section";
import { ServicesSection } from "./components/services-section/services-section";
import { SpecialtySection } from "./components/specialty-section/specialty-section";
import { AboutSection } from "./components/about-section/about-section";
import { ReviewsSection } from "./components/reviews-section/reviews-section";
import { FaqSection } from "./components/faq-section/faq-section";
import { OfficeSection } from "./components/office-section/office-section";
import { ContactFormSection } from "./components/contact-form/contact-form-section";
import { Footer } from "./components/footer-section/footer";

const NAV_LINKS = [
  { label: "Resultados", id: "resultados" },
  { label: "Serviços", id: "servicos" },
  { label: "Sobre Nós", id: "sobre" },
  { label: "FAQ", id: "faq" },
  { label: "Contato", id: "contato" },
];

function Logo() {
  return (
    <div className="logo" aria-label="Logo">
      <svg
        width="70"
        height="60"
        viewBox="0 0 81 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.7953 0.0512424C44.1157 0.0302079 44.4371 0.0158585 44.7585 0.00819171C50.6 -0.122143 56.5083 1.28942 61.0199 5.20262C62.8816 6.81755 62.5896 10.4942 59.8316 10.4503C56.701 10.4004 56.9585 6.15378 55.2905 4.39711C53.4475 2.47748 51.0512 1.98533 48.5192 1.83435C42.5814 1.4804 38.8856 2.12795 34.3518 6.13413C35.9944 8.10655 36.9337 9.74881 37.3146 12.3104C38.1504 17.9344 35.8259 22.6155 30.872 25.4207C27.6797 27.2293 24.6728 27.8427 21.1007 28.3547C25.4582 29.9658 26.3766 32.3483 29.4439 35.6785C30.778 37.1273 32.4038 38.9752 34.5357 39.0224C36.1276 39.0577 38.5848 38.6911 39.6877 37.3652C40.0857 36.8865 40.4769 35.9016 40.9763 35.4534L41.1404 35.4937C41.512 36.9464 39.7191 39.0116 38.8473 40.0456C43.5967 42.2395 52.789 41.8944 56.8907 38.121C57.1069 37.9235 57.5679 37.2354 57.6112 36.9258C57.968 34.3889 57.7497 31.6701 57.7183 29.1018C57.6338 26.0587 53.5861 26.8145 52.5285 25.9004C52.384 25.519 52.3987 25.7117 52.5098 25.2998C52.5943 25.2497 52.614 25.232 52.6995 25.1986C53.2647 24.9745 64.1918 25.001 65.5207 25.0698C65.8568 25.0875 66.1488 25.1269 66.4633 25.2497C66.6678 25.6095 66.6009 25.4129 66.5911 25.8837C65.9768 26.7261 62.9297 26.0646 62.566 28.7214C62.3331 30.4189 62.4029 31.8785 62.4058 33.5809L62.4039 40.2215C58.6747 40.4034 57.6731 41.0963 54.1395 42.0497C48.7846 43.4946 42.2973 43.474 37.0303 41.7175C35.3261 42.5825 34.2217 42.5953 32.3383 42.5628C24.9958 41.6064 22.2746 32.3179 16.0684 29.2069C15.0034 28.6732 12.1168 28.6555 12.0976 27.6303C12.4672 27.0553 13.2776 27.1851 13.8654 27.2214C19.9511 27.6048 27.5866 25.6203 30.6267 19.8014C32.3726 16.459 32.2554 11.3339 30.1665 8.12414C27.1269 3.45371 20.4829 2.33191 15.3266 2.20884C8.66835 1.94002 9.50835 3.41223 9.53253 8.97476L9.53144 30.6902C9.53233 33.0482 9.52801 35.65 9.55386 37.9854C9.5973 41.9111 13.0741 39.9748 14.1204 41.3853C14.1627 41.7293 14.1854 41.5661 14.0335 41.8915C13.1959 42.1952 11.3843 42.093 10.4384 42.09L4.70227 42.0802C3.81175 42.0783 0.732763 42.2542 0.125418 41.8551C-0.84305 40.0004 4.10397 41.69 4.46018 39.1698C4.72281 37.3091 4.63317 35.6529 4.63386 33.7775L4.63681 11.5131C4.63642 9.10371 4.67849 6.64131 4.58599 4.27248C4.49891 2.0443 2.49523 2.0673 0.845893 1.93825C0.451153 1.90738 0.253195 1.76368 0.0351835 1.44944C0.0188671 1.16538 0.070568 0.741347 0.438867 0.732698C2.32617 0.688368 4.23637 0.705865 6.12377 0.704489L15.4071 0.702131C17.1439 0.702623 19.1464 0.658782 20.8643 0.738595C22.1707 0.79295 23.4716 0.941566 24.7566 1.18327C27.6416 1.73478 29.485 2.51109 31.9381 4.0183C35.9229 1.24893 39.0203 0.453059 43.7953 0.0512424Z"
          fill="#FFFCF5"
        />
        <path
          d="M64.6715 3.46511C66.4466 3.31108 79.1685 3.25918 80.4227 3.58148L80.5662 3.87301C80.3539 5.58702 75.23 3.19333 75.285 7.44808C75.3066 9.15246 75.2752 12.3744 75.2801 14.1767L75.2732 34.0743C75.2732 35.2784 75.2015 37.144 75.3548 38.2763C75.743 41.1504 79.1616 39.8431 80.4217 40.7601C80.5879 41.1366 80.5417 41.0039 80.4866 41.461C80.2301 41.5003 79.1361 41.5494 78.8972 41.5258C77.2017 41.3587 65.3615 41.8217 64.643 41.3715C64.2085 40.25 65.8166 40.4092 66.6206 40.3827C70.3744 40.2608 69.6883 37.4163 69.6863 34.7555L69.6725 12.7711C69.6657 10.9358 69.7256 9.07461 69.7138 7.24C69.6873 6.69507 69.5615 6.09569 69.2184 5.65829C68.2709 4.45127 66.6059 4.72972 65.2681 4.54621C64.9477 4.50218 64.756 4.41205 64.5692 4.13958C64.5083 3.80549 64.5496 3.77964 64.6715 3.46511Z"
          fill="#FFFCF5"
        />
      </svg>
    </div>
  );
}

type NavItemProps = {
  label: string;
  id: string;
  active: boolean;
  onClick: (id: string) => void;
};

function NavItem({ label, id, active, onClick }: NavItemProps) {
  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
      }}
      className="navbar__nav-item group"
    >
      <span
        className={`navbar__nav-label ${active ? "navbar__nav-label--active" : "navbar__nav-label--inactive"}`}
      >
        {label}
      </span>
      <span
        className={`navbar__nav-underline ${active ? "navbar__nav-underline--active" : "navbar__nav-underline--inactive"}`}
        style={{ width: active ? "100%" : "0%" }}
        aria-hidden
      />
    </a>
  );
}

type CTAButtonProps = {
  onClick: () => void;
};

function CTAButton({ onClick }: CTAButtonProps) {
  return (
    <button onClick={onClick} className="navbar__cta">
      <span className="navbar__cta-label">Fale Conosco</span>
    </button>
  );
}

type MobileMenuProps = {
  open: boolean;
  activeSection: string;
  onClose: () => void;
  onNav: (id: string) => void;
};

function MobileMenu({ open, activeSection, onClose, onNav }: MobileMenuProps) {
  return (
    <div
      className="mobile-menu"
      style={{ pointerEvents: open ? "all" : "none" }}
    >
      <div
        className="mobile-menu__backdrop"
        style={{ opacity: open ? 1 : 0 }}
        onClick={onClose}
      />
      <div
        className="mobile-menu__drawer"
        style={{ transform: open ? "translateY(0)" : "translateY(-100%)" }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              onNav(link.id);
              onClose();
            }}
            className="mobile-menu__link"
          >
            <span
              className={`mobile-menu__link-label ${
                activeSection === link.id
                  ? "mobile-menu__link-label--active"
                  : "mobile-menu__link-label--inactive"
              }`}
            >
              {link.label}
            </span>
            <span
              className="mobile-menu__link-underline"
              style={{ width: activeSection === link.id ? "100%" : "0%" }}
              aria-hidden
            />
          </a>
        ))}
        <button
          className="mobile-menu__cta"
          onClick={() => {
            onNav("contato");
            onClose();
          }}
        >
          Fale Conosco
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      const root = document.getElementById("root") as HTMLElement | null;
      const y = root ? root.scrollTop : window.scrollY;
      setScrolled(y > 40);

      let current = "";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (root) {
          const rootRect = root.getBoundingClientRect();
          const relativeTop = rect.top - rootRect.top;
          if (relativeTop <= root.clientHeight * 0.45) current = link.id;
        } else {
          if (rect.top <= window.innerHeight * 0.45) current = link.id;
        }
      }
      setActiveSection(current);
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    const root = document.getElementById("root") as HTMLElement | null;
    const target: EventTarget = root ?? window;
    target.addEventListener("scroll", handleScroll as EventListener, { passive: true });
    handleScroll();
    return () => target.removeEventListener("scroll", handleScroll as EventListener);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-root">
      {/* ── Header ── */}
      <header
        className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--transparent"}`}
      >
        <div className="navbar__inner">
          <button
            className="navbar__logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo />
          </button>

          <nav className="navbar__nav hidden lg:flex">
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.id}
                label={link.label}
                id={link.id}
                active={activeSection === link.id}
                onClick={scrollTo}
              />
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton onClick={() => scrollTo("contato")} />
          </div>

          <button
            className="navbar__hamburger lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className="navbar__hamburger-icon"
              style={{
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen
                  ? "rotate(90deg) scale(0.5)"
                  : "rotate(0deg) scale(1)",
                position: mobileOpen ? "absolute" : "relative",
              }}
            >
              <Menu color="#fffcf5" size={28} />
            </span>
            <span
              className="navbar__hamburger-icon"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen
                  ? "rotate(0deg) scale(1)"
                  : "rotate(-90deg) scale(0.5)",
                position: mobileOpen ? "relative" : "absolute",
                top: 0,
                left: 0,
              }}
            >
              <X color="#fffcf5" size={28} />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        activeSection={activeSection}
        onClose={() => setMobileOpen(false)}
        onNav={scrollTo}
      />

      <HeroSection onScrollTo={scrollTo} />
      <MetricsSection />
      <ServicesSection onScrollTo={scrollTo} />
      <SpecialtySection onScrollTo={scrollTo} />
      <AboutSection />
      <ReviewsSection />
      <FaqSection />
      <OfficeSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
