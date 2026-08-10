import React, { useState, useEffect, useRef } from "react";
import "./specialty-section.css";

import skyline from "../../../assets/icons/svg-skyline.svg";
import badgeRed from "../../../assets/icons/badge-rgi-red.svg";
import badgeWhite from "../../../assets/icons/badge-white.svg";

function BuildingIcon() {
  return (
    <div
      className="specialty__icon"
      style={{ width: "25.065px", height: "25.065px" }}
    >
      <div className="specialty__icon-inner">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1714 20.9202H0.773438V6.19756L6.97243 0.773438L13.1714 6.19756V20.9202Z"
            stroke="#880825"
            stroke-width="1.54975"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.1719 20.9185H20.9206V10.0703H13.1719"
            stroke="#880825"
            stroke-width="1.54975"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.98438 20.9198V17.8203"
            stroke="#880825"
            stroke-width="1.54975"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.65625 13.1758H9.30549"
            stroke="#880825"
            stroke-width="1.54975"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.65625 8.52344H9.30549"
            stroke="#880825"
            stroke-width="1.54975"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function ScriptIcon() {
  return (
    <div
      className="specialty__icon"
      style={{ width: "19.068px", height: "19.064px" }}
    >
      <div className="specialty__icon-inner">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6656 5.13371V16.8653C14.6656 17.6431 14.3566 18.3891 13.8066 18.9391C13.2566 19.4892 12.5106 19.7982 11.7327 19.7982H0.734375C1.51222 19.7982 2.25822 19.4892 2.80824 18.9391C3.35827 18.3891 3.66727 17.6431 3.66727 16.8653V3.66727C3.66727 2.88942 3.97626 2.14342 4.5263 1.5934C5.07631 1.04338 5.82231 0.734375 6.60016 0.734375H17.2319"
            stroke="#880825"
            stroke-width="1.46645"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.2303 0.734375C17.9109 0.734375 18.5636 1.00475 19.0449 1.48602C19.5262 1.96729 19.7966 2.62003 19.7966 3.30065V4.40049C19.7966 4.59495 19.7193 4.78146 19.5819 4.91895C19.4444 5.05646 19.2578 5.13371 19.0634 5.13371H14.6641V3.30065C14.6641 2.62003 14.9345 1.96729 15.4158 1.48602C15.897 1.00475 16.5498 0.734375 17.2303 0.734375Z"
            stroke="#880825"
            stroke-width="1.46645"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.79688 5.87109H10.9965"
            stroke="#880825"
            stroke-width="1.46645"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.33594 10.2695H11.0021"
            stroke="#880825"
            stroke-width="1.46645"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.33594 14.668H11.0021"
            stroke="#880825"
            stroke-width="1.46645"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function GraphIcon() {
  return (
    <div
      className="specialty__icon"
      style={{ width: "19.017px", height: "19.786px" }}
    >
      <div
        style={{
          position: "absolute",
          top: "-3.85%",
          right: "-4%",
          bottom: "-3.85%",
          left: "-4%",
        }}
      >
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.50781 9.95519L19.0087 1.99609"
            stroke="#880825"
            stroke-width="1.52182"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.7266 0.761719L18.9985 1.99439L17.781 5.26629"
            stroke="#880825"
            stroke-width="1.52182"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.7733 20.5464H15.9688V9.89372C15.9688 9.69191 16.049 9.49837 16.1915 9.35568C16.3343 9.21298 16.5279 9.13281 16.7297 9.13281H19.0124C19.2142 9.13281 19.4077 9.21298 19.5505 9.35568C19.6931 9.49837 19.7733 9.69191 19.7733 9.89372V20.5464Z"
            stroke="#880825"
            stroke-width="1.52182"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.1717 20.5489H8.36719V12.1789C8.36719 11.9771 8.44736 11.7835 8.59006 11.6408C8.73274 11.4981 8.92629 11.418 9.1281 11.418H11.4108C11.6126 11.418 11.8062 11.4981 11.9489 11.6408C12.0916 11.7835 12.1717 11.9771 12.1717 12.1789V20.5489Z"
            stroke="#880825"
            stroke-width="1.52182"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.56235 20.5474H0.757812V14.4601C0.757812 14.2583 0.83798 14.0648 0.980678 13.9221C1.12338 13.7794 1.31691 13.6992 1.51872 13.6992H3.80144C4.00325 13.6992 4.1968 13.7794 4.33948 13.9221C4.48218 14.0648 4.56235 14.2583 4.56235 14.4601V20.5474Z"
            stroke="#880825"
            stroke-width="1.52182"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function JusticeIcon() {
  return (
    <div
      className="specialty__icon"
      style={{ width: "20.026px", height: "20.025px" }}
    >
      <div className="specialty__icon-inner">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.773438 16.9454C0.773438 17.9666 1.17916 18.9462 1.90135 19.6683C2.62354 20.3906 3.60305 20.7963 4.62438 20.7963C5.64571 20.7963 6.62522 20.3906 7.34741 19.6683C8.0696 18.9462 8.47532 17.9666 8.47532 16.9454L4.62438 7.42578L0.773438 16.9454ZM8.47532 16.9454H0.773438"
            stroke="#880825"
            stroke-width="1.54038"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.0938 10.7892C13.0938 11.8105 13.4995 12.7901 14.2217 13.5122C14.9439 14.2344 15.9234 14.6402 16.9447 14.6402C17.966 14.6402 18.9455 14.2344 19.6678 13.5122C20.3899 12.7901 20.7956 11.8105 20.7956 10.7892L16.9447 1.82422L13.0938 10.7892ZM20.7956 10.7892H13.0938"
            stroke="#880825"
            stroke-width="1.54038"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.32812 8.47142L19.2723 0.769531"
            stroke="#880825"
            stroke-width="1.54038"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.7891 4.62047V0.769531"
            stroke="#880825"
            stroke-width="1.54038"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div
      className="specialty__icon"
      style={{ width: "17.438px", height: "17.438px" }}
    >
      <div className="specialty__icon-inner">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.773438 16.9454C0.773438 17.9666 1.17916 18.9462 1.90135 19.6683C2.62354 20.3906 3.60305 20.7963 4.62438 20.7963C5.64571 20.7963 6.62522 20.3906 7.34741 19.6683C8.0696 18.9462 8.47532 17.9666 8.47532 16.9454L4.62438 7.42578L0.773438 16.9454ZM8.47532 16.9454H0.773438"
            stroke="#880825"
            stroke-width="1.54038"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.0938 10.7892C13.0938 11.8105 13.4995 12.7901 14.2217 13.5122C14.9439 14.2344 15.9234 14.6402 16.9447 14.6402C17.966 14.6402 18.9455 14.2344 19.6678 13.5122C20.3899 12.7901 20.7956 11.8105 20.7956 10.7892L16.9447 1.82422L13.0938 10.7892ZM20.7956 10.7892H13.0938"
            stroke="#880825"
            stroke-width="1.54038"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.32812 8.47142L19.2723 0.769531"
            stroke="#880825"
            stroke-width="1.54038"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.7891 4.62047V0.769531"
            stroke="#880825"
            stroke-width="1.54038"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="specialty__chip">
      {icon}
      <span className="specialty__chip-label">{label}</span>
    </div>
  );
}

export function SpecialtySection({
  onScrollTo,
}: {
  onScrollTo: (id: string) => void;
}) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.06 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Entrance fade-up helper (static transition + dynamic opacity/transform)
  const fadeUp = (delayMs: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 320ms ease-out ${delayMs}ms, transform 320ms ease-out ${delayMs}ms`,
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Nossa Especialidade"
      className="specialty"
    >
      {/* Left badge */}
      <div
        aria-hidden
        className="specialty__badge specialty__badge--left"
        style={{
          opacity: inView ? 1 : 0,
          animation: inView ? "specialtyFloat 8s ease-in-out infinite" : "none",
        }}
      >
        <img src={badgeRed} alt="RGI" />
      </div>

      {/* Right badge */}
      <div
        aria-hidden
        className="specialty__badge specialty__badge--right"
        style={{
          opacity: inView ? 1 : 0,
          animation: inView
            ? "specialtyFloat 9s ease-in-out infinite 1s"
            : "none",
        }}
      >
        <img src={badgeWhite} alt="RGI" />
      </div>

      {/* Main content */}
      <div className="specialty__content">
        <h2 className="specialty__title" style={fadeUp(80)}>
          Nossa Especialidade
        </h2>

        <p className="specialty__quote" style={fadeUp(180)}>
          "Com mais de dez anos de experiência, ajudamos empresas da construção
          civil a expandir suas operações de maneira segura e sustentável,
          assegurando resultados duradouros."
        </p>

        <div className="specialty__chips" style={fadeUp(280)}>
          <Chip
            icon={<BuildingIcon />}
            label="Especialistas em construção civil"
          />
          <Chip icon={<ScriptIcon />} label="Gestão de obrigações fiscais" />
          <Chip icon={<GraphIcon />} label="Acompanhamento estratégico" />
          <Chip icon={<JusticeIcon />} label="Tributação especializada" />
          <Chip
            icon={<BuildingIcon />}
            label="Consultoria em planejamento tributário"
          />
        </div>
      </div>

      {/* Skyline + CTA area */}
      <div className="specialty__scene">
        {/* Skyline strip */}
        <div
          className="specialty__skyline-strip"
          style={{ opacity: inView ? 1 : 0 }}
        >
          <div className="specialty__skyline-canvas">
            <img src={skyline} alt="Skyline" />
          </div>
        </div>

        {/* CTA band */}
        <div
          className="specialty__cta-band"
          style={{ opacity: inView ? 1 : 0 }}
        >
          <div className="specialty__cta-inner">
            <p className="specialty__cta-text">
              Agende uma reunião para discutir seu projeto
            </p>
            <button
              className="specialty__cta-btn"
              onClick={() => onScrollTo("contato")}
            >
              <span className="specialty__cta-btn-label">agendar reunião</span>
              <CalendarIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
