import { useState, useEffect } from "react";
import "./hero-section.css";
import imgHeader from "../../../assets/background-header.png";
import svgPaths from "../../../imports/Header/svg-g3ut8bzgop";

const HEADER_HEIGHT = 83;

type Props = {
  onScrollTo: (id: string) => void;
};

export function HeroSection({ onScrollTo }: Props) {
  const [visible, setVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const [ctaHovered, setCtaHovered] = useState(false);
  const [ctaPressed, setCtaPressed] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onScroll = () => setParallaxY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Entrance fade-up: static transition defined in CSS, dynamic opacity/transform here
  const fadeUp = (delayMs: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(22px)",
    transition: `opacity 350ms ease-out ${delayMs}ms, transform 350ms ease-out ${delayMs}ms`,
  });

  return (
    <section aria-label="Hero" className="hero">
      {/* ── Background image with parallax ── */}
      <div
        className="hero__bg-wrap"
        style={{ transform: `translateY(${parallaxY * 0.28}px)` }}
      >
        <div className="hero__bg-float">
          <img src={imgHeader} alt="" className="hero__bg-img" />
        </div>
      </div>

      {/* ── Gradient overlays ── */}
      <div aria-hidden className="hero__gradient-left" />
      <div aria-hidden className="hero__gradient-bottom" />

      {/* ── Content block ── */}
      <div className="hero__content" style={{ top: HEADER_HEIGHT }}>
        <div className="hero__text-block">
          <p style={fadeUp(0)} className="hero__welcome">
            Seja bem-vindo
          </p>

          <p style={fadeUp(150)} className="hero__headline">
            A contabilidade que anda do seu lado
          </p>

          {/* CTA: entrance animation merges with hover, so we keep all state here */}
          <button
            className="hero__cta"
            onClick={() => onScrollTo("contato")}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => {
              setCtaHovered(false);
              setCtaPressed(false);
            }}
            onMouseDown={() => setCtaPressed(true)}
            onMouseUp={() => setCtaPressed(false)}
            onFocus={() => setCtaHovered(true)}
            onBlur={() => setCtaHovered(false)}
            style={{
              opacity: visible ? 1 : 0,
              boxShadow: ctaPressed
                ? "0 1px 4px rgba(0,0,0,0.28)"
                : ctaHovered
                  ? "0 10px 28px rgba(0,0,0,0.38), 0 3px 10px rgba(0,0,0,0.22)"
                  : "0 2.44px 3.66px rgba(0,0,0,0.26)",
              transform: (() => {
                if (ctaPressed) return "scale(0.965) translateY(1px)";
                if (ctaHovered) return "scale(1.025) translateY(-2px)";
                return visible ? "translateY(0px)" : "translateY(22px)";
              })(),
              transition:
                ctaPressed || ctaHovered
                  ? "transform 140ms ease-out, box-shadow 200ms ease-out"
                  : "opacity 350ms ease-out 300ms, transform 350ms ease-out 300ms, box-shadow 200ms ease-out",
            }}
          >
            <span className="hero__cta-label">Fale Conosco</span>
          </button>
        </div>
      </div>

      {/* ── Partner logos ── */}
      <div className="hero__partners">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 500ms ease-out 600ms",
          }}
        >
          <svg
            fill="none"
            height="54"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 981.529 54"
            width="100%"
          >
            <g id="partners">
              <path d={svgPaths.p1037bb00} fill="white" fillOpacity="0.14" />
              <path d={svgPaths.p29ad5600} fill="white" fillOpacity="0.14" />
              <path d={svgPaths.p2351bbc0} fill="white" fillOpacity="0.14" />
              <path d={svgPaths.p1a33db80} fill="white" fillOpacity="0.14" />
              <path d={svgPaths.p59af800} fill="white" fillOpacity="0.14" />
              <path d={svgPaths.p13ca4800} fill="white" fillOpacity="0.14" />
              <path d={svgPaths.pa0e9400} fill="white" fillOpacity="0.14" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
