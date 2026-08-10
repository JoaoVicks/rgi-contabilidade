import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./office-section.css";
import imgBasemapImage from "figma:asset/5e12c064187e9071aa9637607e9ceb0321ea1233.png";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Praia+Grande,+SP,+Brasil";

export function OfficeSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="escritorio" ref={sectionRef} className="office">
      <div className="office__inner">
        {/* Header area */}
        <motion.div
          className="office__header"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="office__title">Visite nosso escritório</h2>

          <motion.a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="office__btn-link"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            <button className="office__btn">
              <span className="office__btn-label">como chegar</span>
            </button>
          </motion.a>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          className="office__subtext"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
        >
          Prefere conversar pessoalmente? Nossa equipe está pronta para
          recebê-lo e ajudar com suas necessidades contábeis.
        </motion.p>

        {/* Map */}
        <motion.div
          className="office__map"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          aria-label="Mapa da localização do escritório RGI em Praia Grande, SP"
        >
          <img
            src={imgBasemapImage}
            alt="Mapa do escritório RGI Contabilidade em Praia Grande, SP"
            className="office__map-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
