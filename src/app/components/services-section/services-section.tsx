import { useState, useEffect, useRef, useCallback } from "react";
import "./services-section.css";
import backgroundImage from "../../../assets/background-service.png";

const SERVICES = [
  {
    title: "Serviços de Contabilidade",
    description:
      "Mantenha seu negócio financeiramente organizado com contabilidade precisa e confiável.",
    tags: [
      "Registros e demonstrações financeiras",
      "Contabilidade e relatórios",
      "Insights financeiros estratégicos",
    ],
  },
  {
    title: "Planejamento Tributário",
    description:
      "Reduza legalmente sua carga tributária com estratégias fiscais personalizadas para o seu negócio.",
    tags: [
      "Análise de regime tributário",
      "Otimização de impostos",
      "Compliance fiscal",
    ],
  },
  {
    title: "Departamento Pessoal",
    description:
      "Gerencie folha de pagamento e obrigações trabalhistas com eficiência e total conformidade.",
    tags: ["Folha de pagamento", "Admissão e demissão", "eSocial e obrigações"],
  },
  {
    title: "Abertura de Empresa",
    description:
      "Formalize seu negócio com agilidade, do registro empresarial ao alvará de funcionamento.",
    tags: [
      "Registro empresarial",
      "Escolha do regime societário",
      "Alvarás e licenças",
    ],
  },
  {
    title: "Consultoria Financeira",
    description:
      "Tome decisões mais inteligentes com análises financeiras personalizadas para o seu negócio.",
    tags: [
      "Análise de fluxo de caixa",
      "Relatórios gerenciais",
      "Planejamento financeiro",
    ],
  },
  {
    title: "Obrigações Acessórias",
    description:
      "Entregue todas as declarações nos prazos corretos, sem preocupações ou penalidades.",
    tags: ["SPED Contábil e Fiscal", "ECF e ECD", "Declarações mensais"],
  },
];

function CoinIcon() {
  return (
    <svg
      width="42"
      height="43"
      viewBox="0 0 42 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.8899 25.5303C34.3571 25.5303 39.6001 20.1571 39.6001 13.5288C39.6001 6.90059 34.3571 1.52734 27.8899 1.52734C21.4225 1.52734 16.1797 6.90059 16.1797 13.5288C16.1797 20.1571 21.4225 25.5303 27.8899 25.5303Z"
        stroke="#880825"
        stroke-width="3.05395"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.8828 16.5281V10.5273"
        stroke="#880825"
        stroke-width="3.05395"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.52344 33.0273L8.67758 39.1373C9.72983 40.0362 11.0562 40.5283 12.4259 40.5283H31.287C32.6342 40.5283 33.7265 39.4088 33.7265 38.0281C33.7265 35.2662 31.542 33.0273 28.8472 33.0273H15.7346"
        stroke="#880825"
        stroke-width="3.05395"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.3061 30.0283L12.5018 32.2785C13.7144 33.5213 15.6805 33.5213 16.8931 32.2785C18.1057 31.0358 18.1057 29.0208 16.8931 27.778L13.4848 24.2849C12.3867 23.1596 10.8975 22.5273 9.34459 22.5273H1.52344"
        stroke="#880825"
        stroke-width="3.05395"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="19"
      height="11"
      viewBox="0 0 19 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.655026 5.25391L17.7266 5.25391"
        stroke="#FFFEFD"
        stroke-width="1.3132"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1304 9.84862L17.7266 5.25243L13.1304 0.65625"
        stroke="#FFFEFD"
        stroke-width="1.3132"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function PaginationBtn({
  num,
  isActive,
  onClick,
}: {
  num: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`Serviço ${num}`}
      aria-current={isActive ? "true" : undefined}
      className={`services__page-btn ${isActive ? "services__page-btn--active" : "services__page-btn--inactive"}`}
    >
      <span
        className={`services__page-num ${isActive ? "services__page-num--active" : "services__page-num--inactive"}`}
      >
        {num}
      </span>
    </button>
  );
}

type Svc = (typeof SERVICES)[0];

function ServiceCard({
  svc,
  isActive,
  cardWidth,
  onScrollTo,
}: {
  svc: Svc;
  isActive: boolean;
  cardWidth: number;
  onScrollTo: (id: string) => void;
}) {
  return (
    <div
      className={`services__card${isActive ? " services__card--active" : ""}`}
      style={{
        width: `${cardWidth}px`,
        boxShadow: isActive
          ? "0px 4px 50px 10px rgba(0,0,0,0.1)"
          : "0px 2px 16px rgba(0,0,0,0.05)",
        filter: isActive ? "none" : "blur(2.5px) brightness(0.85)",
      }}
    >
      <div className="services__card__top">
        <CoinIcon />

        <div className="services__card__title-area">
          <h3 className="services__card__title">{svc.title}</h3>
          <p className="services__card__desc">{svc.description}</p>
        </div>

        <div className="services__tags">
          {svc.tags.map((tag, i) => (
            <div
              key={i}
              className="services__tag"
              style={{ opacity: isActive ? 1 : 0.6 }}
            >
              <span className="services__tag-text">{tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="services__card__footer">
        <button
          className="services__card-cta"
          onClick={() => onScrollTo("contato")}
        >
          <span className="services__card-cta-label">conhecer mais</span>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export function ServicesSection({
  onScrollTo,
}: {
  onScrollTo: (id: string) => void;
}) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [sectionW, setSectionW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1440,
  );

  const sectionRef = useRef<HTMLElement>(null);
  const dragRef = useRef({ isDragging: false, startX: 0, last: 0 });
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      if (sectionRef.current) setSectionW(sectionRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setActive((a) => Math.min(a + 1, SERVICES.length - 1));
      if (e.key === "ArrowLeft") setActive((a) => Math.max(a - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isMobile = sectionW < 680;
  const cardW = isMobile
    ? Math.max(sectionW - 48, 280)
    : Math.min(540, Math.max(340, sectionW * 0.37));
  const gap = 24;
  const slot = cardW + gap;
  const cardStart = isMobile ? 24 : Math.round(sectionW * 0.52);

  const onDragStart = useCallback((x: number) => {
    dragRef.current = { isDragging: true, startX: x, last: 0 };
  }, []);

  const onDragMove = useCallback((x: number) => {
    if (!dragRef.current.isDragging) return;
    const d = x - dragRef.current.startX;
    dragRef.current.last = d;
    setDragOffset(d);
  }, []);

  const onDragEnd = useCallback(() => {
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    const d = dragRef.current.last;
    if (d < -60 && active < SERVICES.length - 1) setActive((a) => a + 1);
    else if (d > 60 && active > 0) setActive((a) => a - 1);
    setDragOffset(0);
  }, [active]);

  const isDragging = dragOffset !== 0;
  const trackX = -active * slot + dragOffset;

  return (
    <section
      id="servicos"
      ref={sectionRef}
      aria-label="Serviços"
      className="services"
      style={{
        height: isMobile ? "auto" : "clamp(520px, 52vw, 880px)",
        minHeight: isMobile ? "680px" : "unset",
      }}
    >
      {/* Full-width background photo */}
      <img
        src={backgroundImage}
        alt=""
        className="services__bg"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "scale(1)" : "scale(1.04)",
        }}
      />

      <div aria-hidden className="services__overlay" />

      {/* "Como ajudamos você" label */}
      <div
        className="services__label"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        <span className="services__label-text">Como ajudamos você</span>
      </div>

      {/* Carousel */}
      <div
        className="services__carousel-wrap"
        style={{
          top: isMobile ? "clamp(80px, 14%, 120px)" : "clamp(80px, 12%, 112px)",
          bottom: isMobile ? "80px" : "clamp(90px, 13%, 108px)",
          left: `${cardStart}px`,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div
          className="services__drag-surface"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseMove={(e) => onDragMove(e.clientX)}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => {
            e.preventDefault();
            onDragMove(e.touches[0].clientX);
          }}
          onTouchEnd={onDragEnd}
        >
          <div
            className="services__track"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${trackX}px)`,
              transition: isDragging
                ? "none"
                : "transform 280ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {SERVICES.map((svc, i) => (
              <ServiceCard
                key={i}
                svc={svc}
                isActive={i === active}
                cardWidth={cardW}
                onScrollTo={onScrollTo}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div
        className="services__pagination"
        style={{
          bottom: isMobile
            ? "clamp(16px, 3%, 24px)"
            : "clamp(22px, 3.5%, 40px)",
          left: isMobile ? "50%" : `${cardStart}px`,
          width: isMobile ? "auto" : `${cardW}px`,
          transform: isMobile ? "translateX(-50%)" : "none",
          opacity: inView ? 1 : 0,
        }}
      >
        {SERVICES.map((_, i) => (
          <PaginationBtn
            key={i}
            num={i + 1}
            isActive={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
