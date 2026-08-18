import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./about-section.css";
import svgPaths from "../../../imports/About/svg-fk28xpni3o";
import imgImage from "figma:asset/0bc23153eaec6dd82bbac6fb57d6fb96a7c01b49.png";
import imgImage1 from "figma:asset/f2516357fec6b6264ee5fcabd74bf38b27b8da4d.png";
import imgImage2 from "figma:asset/cdb62d4fcf204ec7c650342e3342cd62df719c5b.png";
import imgImage3 from "figma:asset/d9791798947f3c295ad5ca1bb71837c854c172b1.png";
import imgImage4 from "figma:asset/72696884c65856ae208e78f6ffa451e7ee834ccf.png";
import imgFrame70 from "figma:asset/2bcd7476925af0db29c692f819322fed2a61c89e.png";

const CANVAS_W = 1920;
const CANVAS_H = 1162;

function SvgWallet() {
  return (
    <svg
      fill="none"
      viewBox="0 0 64.9458 64.9458"
      width="64.9458"
      height="64.9458"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <circle cx="32.4729" cy="32.4729" r="32.4729" fill="#FFF4DB" />
      <path
        d={svgPaths.p3198d080}
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.19456"
      />
      <path
        d={svgPaths.p29f0f940}
        fill="#FFF4DB"
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.19456"
      />
      <path
        d={svgPaths.p1175a500}
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.19456"
      />
    </svg>
  );
}

function SvgCoin() {
  return (
    <svg
      fill="none"
      viewBox="0 0 64.9458 64.9458"
      width="64.9458"
      height="64.9458"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <circle cx="32.4729" cy="32.4729" r="32.4729" fill="#FFF4DB" />
      <path
        d={svgPaths.pdafa280}
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.65433"
      />
      <path
        d="M36.3516 24.1921V21.9023"
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.65433"
      />
      <path
        d="M36.3516 35.6335V33.3438"
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.65433"
      />
      <path
        d={svgPaths.p1634c480}
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.65433"
      />
      <path
        d={svgPaths.p2d937900}
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.65433"
      />
    </svg>
  );
}

function SvgBank() {
  return (
    <svg
      fill="none"
      viewBox="0 0 64.9458 64.9458"
      width="64.9458"
      height="64.9458"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <circle cx="32.4729" cy="32.4729" r="32.4729" fill="#FFF4DB" />
      <g transform="translate(18.294, 20.626)">
        <path
          d={svgPaths.pda3ef00}
          fill="#FFF4DB"
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.06952"
        />
        <path
          d={svgPaths.p17ff5300}
          fill="#FFF4DB"
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.06952"
        />
        <path
          d="M3.97226 9.40976V18.8766"
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.06952"
        />
        <path
          d="M10.5113 9.40976V18.8766"
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.06952"
        />
        <path
          d="M17.0582 9.40976V18.8766"
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.06952"
        />
        <path
          d="M23.6051 9.40976V18.8766"
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.06952"
        />
      </g>
    </svg>
  );
}

function SvgLaw() {
  return (
    <svg
      fill="none"
      viewBox="0 0 64.9458 64.9458"
      width="64.9458"
      height="64.9458"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <circle cx="32.4729" cy="32.4729" r="32.4729" fill="#FFF4DB" />
      <path d={svgPaths.p2b513b00} fill="#FFF4DB" />
      <path
        d={svgPaths.p2b18f000}
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.09551"
      />
      <path d={svgPaths.p12f6c200} fill="#FFF4DB" />
      <path
        d={svgPaths.p2bd16e00}
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.09551"
      />
      <path
        d="M20.5469 25.3633H42.4127"
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.09551"
      />
      <path
        d="M31.4766 25.3604V20.875"
        stroke="#880825"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.09551"
      />
    </svg>
  );
}

function SvgDiamond() {
  return (
    <svg
      fill="none"
      viewBox="0 0 64.9458 64.9458"
      width="64.9458"
      height="64.9458"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <circle cx="32.4729" cy="32.4729" r="32.4729" fill="#FFF4DB" />
      <g transform="translate(18.236, 19.787)">
        <path
          d={svgPaths.p3d73de00}
          fill="#FFF4DB"
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.16536"
        />
        <path
          d={svgPaths.p7ca1b80}
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.16536"
        />
        <path
          d={svgPaths.p193efa00}
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.16536"
        />
        <path
          d="M1.12955 9.07892H27.7433"
          stroke="#880825"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.16536"
        />
      </g>
    </svg>
  );
}

function IconSpot({
  left,
  top,
  delay,
  inView,
  children,
}: {
  left: number;
  top: number;
  delay: number;
  inView: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="about__icon-spot"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: "64.946px",
        height: "64.946px",
      }}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function PhotoCard({
  left,
  top,
  width,
  height,
  borderRadius,
  src,
  imgLeft,
  imgWidth,
  imgTop,
  inView,
  delay,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  borderRadius: number;
  src: string;
  imgLeft: string;
  imgWidth: string;
  imgTop: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      className="about__photo-card"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -3 }}
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      <img
        alt=""
        src={src}
        className="about__photo-card-img"
        style={{ left: imgLeft, top: imgTop, width: imgWidth }}
      />
      <div aria-hidden className="about__photo-card-gradient" />
    </motion.div>
  );
}

function DesktopCanvas({ inView, scale }: { inView: boolean; scale: number }) {
  return (
    <div className="about__canvas" style={{ height: `${CANVAS_H * scale}px` }}>
      <div
        className="about__canvas-inner"
        style={{
          width: `${CANVAS_W}px`,
          height: `${CANVAS_H}px`,
          transform: `scale(${scale})`,
        }}
      >
        {/* Header */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "center",
            textAlign: "center",
            paddingTop: "50px",
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="about__heading">
            Mais do que números, construímos relações de confiança
          </p>
          <motion.p
            className="about__body"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
          >
            A RGI foi criada para simplificar a contabilidade, tornando-a mais
            acessível e transparente. Acreditamos que a contabilidade deve ser
            uma aliada na tomada de decisões, oferecendo segurança e clareza.
          </motion.p>
        </motion.div>

        {/* Curved journey path */}
        <div
          style={{
            position: "absolute",
            marginTop: "1rem",
            left: 0,
            top: "261px",
            width: "100%",
            height: "900px",
          }}
        >
          <div style={{ position: "absolute", inset: "-0.39% -0.18%" }}>
            <svg
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1976.96 908.074"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <motion.path
                d={svgPaths.p3f2f9a00}
                pathLength={1}
                stroke="url(#about_path_grad)"
                strokeLinecap="round"
                strokeWidth="6.95848"
                initial={{ strokeDasharray: "0 1", strokeDashoffset: 0 }}
                animate={
                  inView
                    ? { strokeDasharray: "1 0" }
                    : { strokeDasharray: "0 1" }
                }
                transition={{
                  duration: 2.4,
                  delay: 0.3,
                  ease: [0.5, 0, 0.5, 1],
                }}
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="about_path_grad"
                  x1="1615.73"
                  x2="-160.66"
                  y1="144.339"
                  y2="1122.2"
                >
                  <stop stopColor="#FFE5AA" />
                  <stop offset="1" stopColor="#EFE2C6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Dashed horizontal guide line */}
        <div
          style={{
            position: "absolute",
            top: "793px",
            left: "50%",
            transform: "translateX(calc(-50% + 14px))",
            width: "1918px",
            height: 0,
            zIndex: 0,
          }}
        >
          <div
            style={{ position: "absolute", top: "-6.96px", left: 0, right: 0 }}
          >
            <svg
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1918 6.95848"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <motion.line
                stroke="#E2D3B4"
                strokeDasharray="10 20"
                strokeLinecap="round"
                strokeOpacity="0.43"
                strokeWidth="6.95848"
                x1="3.47924"
                x2="1914.52"
                y1="3.47924"
                y2="3.47924"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Photos */}
        <PhotoCard
          left={283}
          top={599}
          width={205.77}
          height={205.77}
          borderRadius={13.347}
          src={imgImage1}
          imgLeft="-24.87%"
          imgWidth="149.19%"
          imgTop="0"
          inView={inView}
          delay={0.55}
        />
        <PhotoCard
          left={674.02}
          top={494.64}
          width={175.508}
          height={175.508}
          borderRadius={11.384}
          src={imgImage2}
          imgLeft="-47.91%"
          imgWidth="154.55%"
          imgTop="-0.1%"
          inView={inView}
          delay={0.82}
        />
        <PhotoCard
          left={935.17}
          top={379}
          width={162.029}
          height={162.029}
          borderRadius={10.51}
          src={imgImage3}
          imgLeft="-47.91%"
          imgWidth="154.55%"
          imgTop="-0.1%"
          inView={inView}
          delay={1.08}
        />
        <PhotoCard
          left={1164.2}
          top={497.22}
          width={121.387}
          height={125.065}
          borderRadius={8.026}
          src={imgImage4}
          imgLeft="-19.49%"
          imgWidth="154.55%"
          imgTop="0.1%"
          inView={inView}
          delay={1.28}
        />
        <PhotoCard
          left={1404.66}
          top={292.84}
          width={129.118}
          height={129.118}
          borderRadius={8.375}
          src={imgImage}
          imgLeft="-47.91%"
          imgWidth="154.55%"
          imgTop="-0.1%"
          inView={inView}
          delay={1.46}
        />
        <PhotoCard
          left={1659}
          top={235}
          width={128.118}
          height={132}
          borderRadius={8.471}
          src={imgFrame70}
          imgLeft="-47.91%"
          imgWidth="154.55%"
          imgTop="-0.1%"
          inView={inView}
          delay={1.62}
        />

        {/* Milestone icons */}
        <IconSpot left={355} top={842} delay={0.7} inView={inView}>
          <SvgLaw />
        </IconSpot>
        <IconSpot left={731} top={688} delay={0.97} inView={inView}>
          <SvgDiamond />
        </IconSpot>
        <IconSpot left={989.46} top={564.22} delay={1.2} inView={inView}>
          <SvgBank />
        </IconSpot>
        <IconSpot left={1198.99} top={664.73} delay={1.38} inView={inView}>
          <SvgWallet />
        </IconSpot>
        <IconSpot left={1444.85} top={448.25} delay={1.55} inView={inView}>
          <SvgCoin />
        </IconSpot>
        <IconSpot left={1697} top={401} delay={1.7} inView={inView}>
          <SvgCoin />
        </IconSpot>
      </div>
    </div>
  );
}

const MOBILE_PHOTOS = [
  { src: imgImage1 },
  { src: imgImage2 },
  { src: imgImage3 },
  { src: imgImage4 },
  { src: imgImage },
];

const MOBILE_ICONS = [SvgLaw, SvgDiamond, SvgBank, SvgWallet, SvgCoin];

function MobileLayout({ inView }: { inView: boolean }) {
  return (
    <div className="about__mobile">
      <motion.div
        style={{ textAlign: "center", marginBottom: "52px" }}
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="about__mobile-heading">
          Mais do que números, construímos relações de confiança
        </p>
        <motion.p
          className="about__mobile-body"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
        >
          A RGI foi criada para simplificar a contabilidade, tornando-a mais
          acessível e transparente. Acreditamos que a contabilidade deve ser uma
          aliada na tomada de decisões, oferecendo segurança e clareza.
        </motion.p>
      </motion.div>

      <div className="about__mobile-journey">
        {MOBILE_PHOTOS.map((photo, i) => {
          const IconComp = MOBILE_ICONS[i];
          return (
            <React.Fragment key={i}>
              <motion.div
                className="about__mobile-photo"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: 0.45,
                  delay: 0.3 + i * 0.14,
                  ease: "easeOut",
                }}
                style={{
                  width: "min(280px, 72vw)",
                  height: "min(220px, 56.5vw)",
                }}
              >
                <img
                  alt=""
                  src={photo.src}
                  className="about__mobile-photo-img"
                />
                <div aria-hidden className="about__mobile-photo-gradient" />
              </motion.div>

              {i < MOBILE_PHOTOS.length - 1 && (
                <motion.div
                  className="about__mobile-connector"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45 + i * 0.14,
                    ease: "easeOut",
                  }}
                >
                  <div className="about__mobile-line about__mobile-line--down" />
                  <div className="about__mobile-icon-wrap">
                    <IconComp />
                  </div>
                  <div className="about__mobile-line about__mobile-line--up" />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export function AboutSection() {
  const [inView, setInView] = useState(false);
  const [viewportW, setViewportW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : CANVAS_W,
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => setViewportW(window.innerWidth);
    window.addEventListener("resize", update, { passive: true });
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
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isMobile = viewportW < 768;
  const scale = viewportW / CANVAS_W;

  return (
    <section id="sobre" ref={sectionRef} className="about">
      {isMobile ? (
        <MobileLayout inView={inView} />
      ) : (
        <DesktopCanvas inView={inView} scale={scale} />
      )}
    </section>
  );
}
