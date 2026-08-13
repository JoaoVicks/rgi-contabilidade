import React, { useState, useEffect, useRef } from "react";
import "./reviews-section.css";
import svgPaths from "../../../imports/Reviews/svg-we0oabu3k7";
import imgImage from "figma:asset/0fa4391e26a2b546a6b9a57c76526c9e03ac6df7.png";
import imgImage1 from "figma:asset/745585c64759943b9248a68814b62e22c64ea49d.png";
import imgImage2 from "figma:asset/69e97081852d28bbb53a441da4e9c928af7f6f66.png";
import imgImage3 from "figma:asset/b182cd160195a0ef3f95532b5c197037e8338de7.png";
import imgImage4 from "figma:asset/dd79c956c6b5c0d106a810f20218718dd93a02d1.png";
import imgImage5 from "figma:asset/36653f04cb6e522c641c93a1a5a8e8cf072360a5.png";
import imgImage6 from "figma:asset/aa75179fae714d60a6780ebb17691b232dd0aad2.png";

interface Review {
  name: string;
  avatar: string;
  text: string;
}

const ROW1: Review[] = [
  {
    name: "Alessandra",
    avatar: imgImage,
    text: "Profissionais dedicados e qualificados, prestam um ótimo atendimento. Indico com total confiança!",
  },
  {
    name: "Isabella",
    avatar: imgImage1,
    text: "Profissionais altamente capacitados e comprometidos, oferecem um atendimento excepcional. Recomendo sem hesitação!",
  },
  {
    name: "Bruno",
    avatar: imgImage2,
    text: "Especialistas que realmente entendem do assunto. Fui atendido com muita atenção e cuidado.",
  },
  {
    name: "Carla",
    avatar: imgImage3,
    text: "Serviço excepcional! Recomendo a todos que buscam qualidade e eficiência na entrega.",
  },
  {
    name: "Carla",
    avatar: imgImage,
    text: "Serviço excepcional! Recomendo a todos que buscam qualidade e eficiência na entrega.",
  },
];

const ROW2: Review[] = [
  {
    name: "Carlos",
    avatar: imgImage,
    text: "Uma experiência incrível desde o início, a equipe é atenciosa e muito capacitada.",
  },
  {
    name: "Fernanda",
    avatar: imgImage4,
    text: "Os serviços prestados superaram minhas expectativas, recomendo sem pensar duas vezes.",
  },
  {
    name: "Juliano",
    avatar: imgImage5,
    text: "Profissionais competentes e um ambiente acolhedor. Voltarei com certeza.",
  },
  {
    name: "Mariana",
    avatar: imgImage6,
    text: "Atendimento excelente, equipe sempre pronta para ajudar. Fui muito bem tratada.",
  },
  {
    name: "Roberto",
    avatar: imgImage,
    text: "Serviço de alta qualidade e dedicação total ao cliente. Uma ótima escolha!",
  },
];

function FiveStars() {
  return (
    <div className="reviews__stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          fill="none"
          viewBox="0 0 18.6572 17.892"
          width="18.657"
          height="17.892"
          style={{ display: "block", flexShrink: 0 }}
        >
          <path d={svgPaths.p2aec800} fill="#FFC765" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg
      fill="none"
      viewBox="0 0 68.1686 22.3678"
      width="68.169"
      height="22.368"
      style={{ display: "block" }}
    >
      <defs>
        <clipPath id="reviews_google_clip">
          <rect fill="white" height="22.3678" width="68.1686" />
        </clipPath>
      </defs>
      <g clipPath="url(#reviews_google_clip)">
        <path d={svgPaths.p16fbb900} fill="#FF302F" />
        <path d={svgPaths.p370abd00} fill="#20B15A" />
        <path d={svgPaths.p15915a00} fill="#3686F7" />
        <path d={svgPaths.p15fdd380} fill="#FF302F" />
        <path d={svgPaths.p10c30af0} fill="#FFBA40" />
        <path d={svgPaths.p3c7cc000} fill="#3686F7" />
      </g>
    </svg>
  );
}

function LaurelLeft({ size = 80 }: { size?: number }) {
  return (
    <div
      className="reviews__laurel-wrap"
      style={{ width: `${size * 1.35}px`, height: `${size * 1.35}px` }}
    >
      <div style={{ flexShrink: 0, transform: "rotate(-62.7deg)" }}>
        <svg
          fill="none"
          viewBox="0 0 83.1701 83.5745"
          width={size}
          height={size}
          style={{ display: "block" }}
        >
          <path
            d={svgPaths.p1f281600}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p1dd4280}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p111d8c00}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.pef0c800}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p10878f00}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p1504b780}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p20bac000}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p83ab700}
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p39a86200}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p2ebd41e0}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p36dce700}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p2bc92c00}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p5468f00}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p2f5ca200}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p3ab42d80}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
        </svg>
      </div>
    </div>
  );
}

function LaurelRight({ size = 80 }: { size?: number }) {
  return (
    <div
      className="reviews__laurel-wrap"
      style={{ width: `${size * 1.35}px`, height: `${size * 1.35}px` }}
    >
      <div style={{ flexShrink: 0, transform: "scaleY(-1) rotate(-240.3deg)" }}>
        <svg
          fill="none"
          viewBox="0 0 83.1701 83.5728"
          width={size}
          height={size}
          style={{ display: "block" }}
        >
          <path
            d={svgPaths.p3e787900}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p34a4c800}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p1dcdd300}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p3cdb5d20}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p1bb9e800}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p30e72900}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p34e09c00}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p1397cf00}
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p321ab100}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p3fb09800}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p16c95f00}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.pf93f552}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.pf95540}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.pa220700}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
          <path
            d={svgPaths.p2f200280}
            fill="#EADBBA"
            stroke="#EADBBA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.79756"
          />
        </svg>
      </div>
    </div>
  );
}

function TrustMetric({
  children,
  size = 80,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <div className="reviews__trust-metric">
      <LaurelLeft size={size} />
      <div className="reviews__trust-metric-inner">{children}</div>
      <LaurelRight size={size} />
    </div>
  );
}

function TrustMetrics({ inView }: { inView: boolean }) {
  return (
    <div
      className="reviews__trust"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(10px)",
        transition:
          "opacity 450ms ease-out 220ms, transform 450ms ease-out 220ms",
      }}
    >
      <TrustMetric size={72}>
        <p className="reviews__trust-title">Múltiplos</p>
        <p className="reviews__trust-subtitle">
          setores de
          <br />
          negócio
        </p>
      </TrustMetric>

      <TrustMetric size={72}>
        <p className="reviews__trust-score">5.0</p>
        <div className="reviews__trust-stars">
          <FiveStars />
        </div>
        <div className="reviews__trust-logo">
          <GoogleLogo />
        </div>
      </TrustMetric>

      <TrustMetric size={72}>
        <div className="reviews__trust-count-row">
          <p className="reviews__trust-plus">+</p>
          <p className="reviews__trust-num">100</p>
        </div>
        <p className="reviews__trust-count-label">avaliações</p>
      </TrustMetric>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="reviews__card">
      <div className="reviews__card__header">
        <div className="reviews__card__identity">
          <div className="reviews__card__avatar">
            <img
              alt={review.name}
              src={review.avatar}
              className="reviews__card__avatar-img"
            />
          </div>
          <p className="reviews__card__name">{review.name}</p>
        </div>
        <FiveStars />
      </div>
      <p className="reviews__card__text">{review.text}</p>
    </div>
  );
}

function MarqueeRow({
  reviews,
  direction,
  duration,
  running,
}: {
  reviews: Review[];
  direction: "rtl" | "ltr";
  duration: number;
  running: boolean;
}) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="reviews__marquee-row"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`reviews__marquee-track reviews__marquee-track--${direction}`}
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationPlayState: !running || paused ? "paused" : "running",
          } as React.CSSProperties
        }
      >
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Mobile: unify reviews data and control active review
  const allReviews = [...ROW1, ...ROW2];
  const [activeReview, setActiveReview] = useState(0);
  const pointer = useRef<{startX: number; currentX: number; dragging: boolean}>({
    startX: 0,
    currentX: 0,
    dragging: false,
  });
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  const mobileInnerRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef(0); // current translateX in px
  const velRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = mobileTrackRef.current;
    if (!el) return;

    function onPointerDown(e: PointerEvent) {
      pointer.current.dragging = true;
      pointer.current.startX = e.clientX;
      el.setPointerCapture(e.pointerId);
    }

    function onPointerMove(e: PointerEvent) {
      if (!pointer.current.dragging) return;
      pointer.current.currentX = e.clientX;
    }

    function onPointerUp(e: PointerEvent) {
      if (!pointer.current.dragging) return;
      pointer.current.dragging = false;
      const delta = e.clientX - pointer.current.startX;
      const threshold = Math.max(40, window.innerWidth * 0.08);
      if (delta < -threshold) {
        setActiveReview((s) => Math.min(s + 1, allReviews.length - 1));
      } else if (delta > threshold) {
        setActiveReview((s) => Math.max(s - 1, 0));
      }
    }

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [allReviews.length]);

  // spring animation to animate translateX of mobileInnerRef towards target
  useEffect(() => {
    const inner = mobileInnerRef.current;
    const container = mobileTrackRef.current;
    if (!inner || !container) return;

    const stiffness = 320; // spring stiffness
    const damping = 28; // damping

    const getTarget = () => {
      const cw = container.clientWidth;
      return -activeReview * cw;
    };

    let lastTime = performance.now();

    function step(now: number) {
      const dt = Math.min(64, now - lastTime) / 1000; // seconds
      lastTime = now;

      const target = getTarget();
      const pos = posRef.current;
      const vel = velRef.current;

      const force = stiffness * (target - pos);
      const dampingForce = -damping * vel;
      const accel = (force + dampingForce);

      const newVel = vel + accel * dt;
      const newPos = pos + newVel * dt;

      posRef.current = newPos;
      velRef.current = newVel;

      // apply transform
      inner.style.transform = `translateX(${newPos}px)`;

      const done = Math.abs(newVel) < 0.5 && Math.abs(target - newPos) < 0.5;
      if (!done) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // snap to target
        posRef.current = target;
        velRef.current = 0;
        inner.style.transform = `translateX(${target}px)`;
        rafRef.current = null;
      }
    }

    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);

    const onResize = () => {
      // When resize, snap position to target
      const tgt = getTarget();
      posRef.current = tgt;
      velRef.current = 0;
      inner.style.transform = `translateX(${tgt}px)`;
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [activeReview]);

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
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="avaliacoes" ref={sectionRef} className="reviews">
      {/* Heading */}
      <div
        className="reviews__header"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 450ms ease-out, transform 450ms ease-out",
        }}
      >
        <h2 className="reviews__title">
          Confiável por empreendedores e empresas
        </h2>
        <TrustMetrics inView={inView} />
      </div>

      {/* Carousel rows */}
      <div
        className="reviews__tracks"
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 500ms ease-out 400ms",
        }}
        data-reviews-track
      >
        <MarqueeRow
          reviews={ROW1}
          direction="rtl"
          duration={40}
          running={inView}
        />
        <MarqueeRow
          reviews={ROW2}
          direction="ltr"
          duration={45}
          running={inView}
        />
      </div>

      {/* CTA */}
      {/* Mobile single-card presentation (visible only on max-width:767px) */}
      <div
        className="reviews__mobile"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(8px)",
          transition:
            "opacity 400ms ease-out 550ms, transform 400ms ease-out 550ms",
        }}
      >
        <div className="reviews__mobile-track" ref={mobileTrackRef}>
          <div className="reviews__mobile-track-inner" ref={mobileInnerRef}>
            {allReviews.map((review, i) => (
              <div className="reviews__mobile-slide" key={i}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <div className="reviews__mobile-pagination" role="tablist" aria-label="Avaliações">
          {allReviews.map((_, i) => (
            <button
              key={i}
              className={`reviews__mobile-dot ${i === activeReview ? "is-active" : ""}`}
              aria-label={`Mostrar avaliação ${i + 1}`}
              aria-pressed={i === activeReview}
              onClick={() => setActiveReview(i)}
            />
          ))}
        </div>

        <div className="reviews__mobile-cta-row">
          <button className="reviews__cta reviews__cta--mobile">
            <span className="reviews__cta-label">ver todas as avaliações</span>
          </button>
        </div>
      </div>

      {/* Desktop CTA (preserved, hidden on mobile via CSS) */}
      <div
        className="reviews__cta-row reviews__cta-row--desktop"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(8px)",
          transition:
            "opacity 400ms ease-out 550ms, transform 400ms ease-out 550ms",
        }}
      >
        <button className="reviews__cta">
          <span className="reviews__cta-label">ver todas as avaliações</span>
        </button>
      </div>
    </section>
  );
}
