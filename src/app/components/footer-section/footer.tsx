import "./footer.css";
import svgPaths from "../../../imports/Frame4578/svg-ti0h6aup3v";

function RgiLogo() {
  return (
    <div className="footer__logo">
      <svg
        fill="none"
        viewBox="0 0 91.253 48.8032"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <path d={svgPaths.p4fd6200} fill="#FFFCF5" />
        <path d={svgPaths.p2946f880} fill="#FFFCF5" />
      </svg>
    </div>
  );
}

function MapIcon() {
  return (
    <div className="footer__contact-icon footer__contact-icon--map">
      <div className="footer__contact-icon-inner">
        <svg
          fill="none"
          viewBox="0 0 25.8481 25.8461"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <path
            d={svgPaths.p3ad7bb00}
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.84585"
          />
          <path
            d={svgPaths.p16657100}
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.84585"
          />
          <path
            d={svgPaths.p20b9700}
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.84585"
          />
        </svg>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="footer__contact-icon footer__contact-icon--phone">
      <div className="footer__contact-icon-inner">
        <svg
          fill="none"
          viewBox="0 0 23.7287 23.6949"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <path
            d={svgPaths.p37114fc0}
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.69491"
          />
        </svg>
      </div>
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="footer__contact-icon footer__contact-icon--email">
      <div
        style={{ position: "absolute", inset: "-3.84% -3.86% -3.85% -3.86%" }}
      >
        <svg
          fill="none"
          viewBox="0 0 23.697 23.7607"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <path
            d={svgPaths.p19b51c00}
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.69719"
          />
          <path
            d={svgPaths.p1a386640}
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.69719"
          />
        </svg>
      </div>
    </div>
  );
}

function DevLogo() {
  return (
    <div className="footer__dev-logo">
      <div className="footer__dev-logo-inner">
        <div style={{ transform: "rotate(-0.38deg)" }}>
          <svg
            fill="none"
            viewBox="0 0 30.7663 42.7172"
            style={{ display: "block", width: "30.768px", height: "42.717px" }}
          >
            <path d={svgPaths.p17f8b500} fill="#1F1F1F" />
            <path d={svgPaths.p2c900b80} fill="#1F1F1F" />
            <path d={svgPaths.p13821800} fill="#1F1F1F" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const NAV_LINKS = [
  { label: "Resultados", id: "resultados" },
  { label: "Serviços", id: "servicos" },
  { label: "Sobre Nós", id: "sobre" },
  { label: "FAQ", id: "faq" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Main columns */}
        <div className="footer__columns">
          {/* LEFT — Brand */}
          <div className="footer__brand">
            <button
              className="footer__logo-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Ir para o topo"
            >
              <RgiLogo />
            </button>
            <p className="footer__tagline">
              Ajudando empresas a crescer com segurança.
            </p>
          </div>

          {/* RIGHT — Quick links + Contact */}
          <div className="footer__right">
            {/* Quick links */}
            <div className="footer__links">
              <p className="footer__links-heading">Links rápidos</p>
              <div className="footer__links-list">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    className="footer__nav-link"
                    onClick={() => scrollTo(link.id)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="footer__contact">
              {/* Address */}
              <a
                className="footer__contact-item footer__contact-item--address"
                href="https://www.google.com/maps/search/Praia+Grande+SP+Brasil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapIcon />
                <span className="footer__contact-text">
                  Avenida Domenico Perella, 53
                </span>
              </a>

              {/* Phone */}
              <a
                className="footer__contact-item footer__contact-item--phone"
                href="tel:+5511919507333"
              >
                <PhoneIcon />
                <span className="footer__contact-text footer__contact-text--nowrap">
                  11 91950-7333
                </span>
              </a>

              {/* Email */}
              <a
                className="footer__contact-item footer__contact-item--email"
                href="mailto:joaopedro@rgicontabilidade.com"
              >
                <EmailIcon />
                <span className="footer__contact-text footer__contact-text--email">
                  joaopedro@rgicontabilidade.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Developer credit */}
        <div className="footer__dev-credit">
          <span className="footer__dev-label">desenvolvido por</span>
          <DevLogo />
        </div>
      </div>
    </footer>
  );
}
