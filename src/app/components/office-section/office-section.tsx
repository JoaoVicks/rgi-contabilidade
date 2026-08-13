import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./office-section.css";

const OFFICE_ADDRESS =
  "RGI contabilidade Av. Brasil, 600 - Sl 709 - Boqueirão, Praia Grande - SP, 11701-090";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=RGI+contabilidade+Av.+Brasil,+600+-+Sl+709+-+Boqueirão,+Praia+Grande+-+SP,+11701-090";

export function OfficeSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <section id="escritorio" ref={sectionRef} className="office">
      <div className="office__inner">
        <motion.div
          className="office__header"
          initial={{ opacity: 0, y: 16 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 16 }
          }
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="office__title">
            Visite nosso escritório
          </h2>

          <motion.a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="office__btn-link"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.12,
              ease: "easeOut",
            }}
          >
            <button className="office__btn">
              <span className="office__btn-label">
                como chegar
              </span>
            </button>
          </motion.a>
        </motion.div>

        <motion.p
          className="office__subtext"
          initial={{ opacity: 0, y: 10 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 10 }
          }
          transition={{
            duration: 0.5,
            delay: 0.18,
            ease: "easeOut",
          }}
        >
          Prefere conversar pessoalmente? Nossa equipe está pronta
          para recebê-lo e ajudar com suas necessidades contábeis.
        </motion.p>

        <motion.div
          className="office__map"
          initial={{ opacity: 0, y: 14 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 14 }
          }
          transition={{
            duration: 0.6,
            delay: 0.28,
            ease: "easeOut",
          }}
          aria-label={`Mapa da localização do escritório RGI em ${OFFICE_ADDRESS}`}
        >
          <iframe
            title="Localização da RGI Contabilidade no Google Maps"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${encodeURIComponent(
              OFFICE_ADDRESS
            )}`}
          />
        </motion.div>
      </div>
    </section>
  );
}