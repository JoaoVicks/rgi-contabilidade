import { useState, useEffect, useRef } from "react";
import "./metrics-section.css";
import imgAtendimento from "../../../assets/relacionamento.png";
import imgRelacionamento from "../../../assets/atendimento.png";

function useInView(threshold = 0.12) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(target: number, durationMs: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t0 = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, durationMs]);
  return val;
}

function usePressHover() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  return {
    hovered,
    pressed,
    bind: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => {
        setHovered(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
    },
  };
}

// Card hover/press transform/shadow (JS-driven to blend with entrance stagger)
function cardDynamicStyle(
  inView: boolean,
  delay: number,
  hovered: boolean,
  pressed: boolean,
  extra: React.CSSProperties = {},
): React.CSSProperties {
  const interacting = hovered || pressed;
  return {
    ...extra,
    opacity: inView ? 1 : 0,
    transform: (() => {
      if (!inView) return "translateY(32px)";
      if (pressed) return "scale(0.985) translateY(1px)";
      if (hovered) return "scale(1.025) translateY(-5px)";
      return "scale(1) translateY(0)";
    })(),
    boxShadow: (() => {
      if (pressed) return (extra.boxShadow as string) ?? "none";
      if (hovered)
        return "0 20px 48px rgba(0,0,0,0.18), 0 6px 16px rgba(0,0,0,0.1)";
      return (extra.boxShadow as string) ?? "0 2px 10px rgba(0,0,0,0.07)";
    })(),
    transition: interacting
      ? "transform 150ms ease-out, box-shadow 200ms ease-out, opacity 0ms"
      : `opacity 480ms ease-out ${delay}ms, transform 480ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, box-shadow 200ms ease-out`,
    cursor: "default",
  };
}

function CardYears({ inView }: { inView: boolean }) {
  const years = useCountUp(10, 1800, inView);
  const { hovered, pressed, bind } = usePressHover();
  return (
    <div
      {...bind}
      className="metrics__card metrics__card--years"
      style={cardDynamicStyle(inView, 400, hovered, pressed)}
    >
      <div
        className="metrics__years-number"
        style={{ left: "clamp(12px, 1.5vw, 20px)" }}
      >
        <span
          className="metrics__years-num-text"
          style={{ fontSize: "clamp(90px, 12vw, 166px)" }}
        >
          <span style={{ fontSize: "0.78em" }}>+</span>
          {years}
        </span>
      </div>
      <p className="metrics__years-label">anos de experiência</p>
    </div>
  );
}

function CardAtendimento({ inView }: { inView: boolean }) {
  const { hovered, pressed, bind } = usePressHover();
  return (
    <div
      {...bind}
      className="metrics__card metrics__card--photo"
      style={cardDynamicStyle(inView, 530, hovered, pressed)}
    >
      <img
        src={imgAtendimento}
        alt="Atendimento personalizado"
        className="metrics__card__img"
      />
      <div
        aria-hidden
        className="metrics__card__gradient"
        style={{
          background:
            "linear-gradient(179.97deg, rgba(0,0,0,0) 0.84%, rgba(136,8,37,0.92) 100%)",
        }}
      />
      <div
        className="metrics__card__label"
        style={{
          bottom: "clamp(12px, 1.5vw, 20px)",
          left: "clamp(14px, 1.5vw, 18px)",
        }}
      >
        <p
          className="metrics__card__label-text"
          style={{ fontSize: "clamp(13px, 1.5vw, 29px)" }}
        >
          atendimento
        </p>
        <p
          className="metrics__card__label-text"
          style={{ fontSize: "clamp(12px, 1.4vw, 27px)" }}
        >
          personalizado
        </p>
      </div>
    </div>
  );
}

function CardEmpresas({ inView }: { inView: boolean }) {
  const count = useCountUp(250, 2000, inView);
  const { hovered, pressed, bind } = usePressHover();
  return (
    <div
      {...bind}
      className="metrics__card metrics__card--empresas"
      style={cardDynamicStyle(inView, 260, hovered, pressed, {
        boxShadow: "0 4px 18px rgba(136,8,37,0.22)",
      })}
    >
      <div>
        <p className="metrics__empresas-count">+{count}</p>
        <p className="metrics__empresas-label">
          empresas
          <br />
          atendidas
        </p>
      </div>

      <div className="metrics__empresas-spacer" />

      <div className="metrics__empresas-divider">
        <svg
          width="356"
          height="158"
          viewBox="0 0 356 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-41.3359 154.865L-37.6598 154.642C-33.9851 154.418 -26.6343 153.974 -19.2819 146.801C-11.9311 139.631 -4.58023 125.736 2.77062 119.189C10.1215 112.644 17.4738 113.449 24.8246 117.445C32.1755 121.442 39.5263 128.63 46.8772 135.076C54.2295 141.523 61.5804 147.225 68.9312 137.634C76.282 128.042 83.6329 103.155 90.9837 96.3517C98.3361 89.5484 105.687 100.829 113.038 94.7165C120.389 88.6056 127.739 65.1047 135.092 64.9604C142.443 64.8162 149.793 88.0317 157.144 87.4821C164.495 86.934 171.847 62.6223 179.198 59.3338C186.549 56.0438 193.9 73.7784 201.251 77.4814C208.603 81.1829 215.954 70.8543 223.305 66.711C230.656 62.5662 238.007 64.6067 245.359 54.4967C252.71 44.3852 260.061 22.1231 267.411 11.0506C274.762 -0.0204811 282.113 0.0964227 289.465 7.46447C296.816 14.834 304.167 29.4532 311.518 32.0449C318.869 34.6365 326.221 25.1991 333.572 22.3858C340.923 19.5725 348.274 23.3818 351.95 25.2872L355.625 27.1926"
            stroke="url(#paint0_linear_227_9798)"
            stroke-width="4.55927"
          />
          <defs>
            <linearGradient
              id="paint0_linear_227_9798"
              x1="130.397"
              y1="-26.8981"
              x2="130.397"
              y2="325.078"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFF4DA" />
              <stop offset="1" stop-color="#8B806A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CardRelacionamento({ inView }: { inView: boolean }) {
  const { hovered, pressed, bind } = usePressHover();
  return (
    <div
      {...bind}
      className="metrics__card metrics__card--photo-tall"
      style={cardDynamicStyle(inView, 380, hovered, pressed)}
    >
      <img
        src={imgRelacionamento}
        alt="Relacionamento ao longo prazo"
        className="metrics__card__img metrics__card__img--top"
      />
      <div
        aria-hidden
        className="metrics__card__gradient"
        style={{
          background:
            "linear-gradient(179.96deg, rgba(0,0,0,0) 0.84%, rgba(136,8,37,0.90) 100%)",
        }}
      />
      <div
        className="metrics__card__label"
        style={{
          bottom: "clamp(12px, 1.5vw, 20px)",
          left: "clamp(14px, 1.5vw, 16px)",
        }}
      >
        <p
          className="metrics__card__label-text"
          style={{ fontSize: "clamp(13px, 1.5vw, 26px)", lineHeight: 1.2 }}
        >
          relacionamento
          <br />
          ao longo prazo
        </p>
      </div>
    </div>
  );
}

export function MetricsSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="resultados"
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="metrics"
    >
      {/* Decorative background squares */}
      <div
        className="metrics__deco metrics__deco--cream-left"
        style={{ opacity: inView ? 0.85 : 0, transitionDelay: "100ms" }}
      />
      <div
        className="metrics__deco metrics__deco--red-left"
        style={{ opacity: inView ? 1 : 0, transitionDelay: "200ms" }}
      />
      <div
        className="metrics__deco metrics__deco--dark-right"
        style={{ opacity: inView ? 1 : 0, transitionDelay: "0ms" }}
      />
      <div
        className="metrics__deco metrics__deco--cream-right"
        style={{ opacity: inView ? 0.75 : 0, transitionDelay: "80ms" }}
      />
      <div
        className="metrics__deco metrics__deco--red-mid-right"
        style={{ opacity: inView ? 1 : 0, transitionDelay: "150ms" }}
      />

      <div className="metrics__inner">
        {/* Title row */}
        <div className="metrics__title-row">
          <div
            className="metrics__title-square"
            style={{
              width: "clamp(70px, 9vw, 132px)",
              height: "clamp(70px, 9vw, 132px)",
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.8)",
              transitionDelay: "0ms",
            }}
          />
          <div>
            <h2
              className="metrics__heading"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "110ms",
              }}
            >
              Nossos Conquistas
            </h2>
            <p
              className="metrics__subheading"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(14px)",
                transitionDelay: "220ms",
              }}
            >
              desde 2007
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="metrics__grid">
          <div className="metrics__col--1">
            <CardYears inView={inView} />
          </div>
          <div className="metrics__col--2">
            <CardAtendimento inView={inView} />
          </div>
          <div className="metrics__col--3">
            <CardEmpresas inView={inView} />
          </div>
          <div className="metrics__col--4">
            <CardRelacionamento inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}
