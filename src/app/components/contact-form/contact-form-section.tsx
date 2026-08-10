import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import "./contact-form-section.css";
import backgroundImage from "../../../assets/background-contact-form.png"


const PLACEHOLDER_CSS = `
  .rgi-field::placeholder { color: #c8c6c2; }
  .rgi-field::-webkit-input-placeholder { color: #c8c6c2; }
  .rgi-field::-moz-placeholder { color: #c8c6c2; }
`;

type FormValues = {
  email: string;
  nome: string;
  telefone: string;
  mensagem: string;
};

type SubmitStatus = "idle" | "submitting" | "success";

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function FocusInput({
  id,
  type = "text",
  placeholder,
  hasError,
  autoComplete,
  registration,
}: {
  id: string;
  type?: string;
  placeholder: string;
  hasError?: boolean;
  autoComplete?: string;
  registration: UseFormRegisterReturn;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="rgi-field contact__input"
      {...registration}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        setFocused(false);
        registration.onBlur(e);
      }}
      style={{
        borderBottom: `1.397px solid ${hasError ? "#c0392b" : focused ? "#510718" : "#ededed"}`,
      }}
    />
  );
}

function FocusTextarea({
  id,
  placeholder,
  hasError,
  registration,
}: {
  id: string;
  placeholder: string;
  hasError?: boolean;
  registration: UseFormRegisterReturn;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className="rgi-field contact__textarea"
      rows={5}
      {...registration}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        setFocused(false);
        registration.onBlur(e);
      }}
      style={{
        border: `0.97px solid ${hasError ? "#c0392b" : focused ? "#510718" : "#ededed"}`,
      }}
    />
  );
}

function FieldGroup({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="contact__field-group">
      <label htmlFor={htmlFor} className="contact__label">
        {label}
      </label>
      {children}
      {error && (
        <span role="alert" className="contact__field-error">
          {error}
        </span>
      )}
    </div>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="contact__success">
      <div className="contact__success-icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={{ width: "28px", height: "28px" }}
        >
          <path
            d="M5 13l4 4L19 7"
            stroke="#eadbba"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="contact__success-title">Mensagem enviada com sucesso!</p>
      <p className="contact__success-subtitle">
        Obrigado pelo contato. Nossa equipe entrará em contato em breve.
      </p>
      <button onClick={onReset} className="contact__success-reset">
        Enviar nova mensagem
      </button>
    </div>
  );
}

export function ContactFormSection() {
  const [inView, setInView] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [submitBtnHover, setSubmitBtnHover] = useState(false);
  const [submitBtnPressed, setSubmitBtnPressed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({ mode: "onBlur" });

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
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onSubmit = async (_data: FormValues) => {
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  const handleReset = () => {
    reset();
    setStatus("idle");
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setValue("telefone", formatted, { shouldValidate: false });
  };

  return (
    <section id="contato" ref={sectionRef} className="contact">
      <style>{PLACEHOLDER_CSS}</style>

      {/* Background image */}
      <div aria-hidden className="contact__bg-wrap">
        <img alt="" src={backgroundImage} className="contact__bg-img" />
      </div>

      {/* Content wrapper */}
      <div className="contact__content">
        {/* Form panel */}
        <motion.div
          className="contact__panel"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ width: "100%" }}
              >
                <SuccessMessage onReset={handleReset} />
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "40.456px",
                }}
              >
                {/* Form header */}
                <div className="contact__panel-header">
                  <p className="contact__panel-title">Envio de Mensagem</p>
                  <p className="contact__panel-subtitle">
                    Envie sua mensagem diretamente para o nosso e-mail. Estamos
                    prontos para ouvir você!
                  </p>
                </div>

                {/* Form fields */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact__form"
                  noValidate
                >
                  <FieldGroup
                    label="E-mail"
                    htmlFor="cf-email"
                    error={errors.email?.message}
                  >
                    <FocusInput
                      id="cf-email"
                      type="email"
                      placeholder="digite o seu melhor e-mail"
                      hasError={!!errors.email}
                      autoComplete="email"
                      registration={register("email", {
                        required: "Por favor, insira um e-mail válido",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Por favor, insira um e-mail válido",
                        },
                      })}
                    />
                  </FieldGroup>

                  <FieldGroup
                    label="Nome"
                    htmlFor="cf-nome"
                    error={errors.nome?.message}
                  >
                    <FocusInput
                      id="cf-nome"
                      type="text"
                      placeholder="digite o seu nome"
                      hasError={!!errors.nome}
                      autoComplete="name"
                      registration={register("nome", {
                        required: "Por favor, insira o seu nome",
                        minLength: {
                          value: 2,
                          message: "Por favor, insira o seu nome",
                        },
                      })}
                    />
                  </FieldGroup>

                  <FieldGroup
                    label="Número de telefone"
                    htmlFor="cf-telefone"
                    error={errors.telefone?.message}
                  >
                    <FocusInput
                      id="cf-telefone"
                      type="tel"
                      placeholder="digite o seu número de telefone"
                      hasError={!!errors.telefone}
                      autoComplete="tel"
                      registration={{
                        ...register("telefone"),
                        onChange: handlePhoneInput,
                      }}
                    />
                  </FieldGroup>

                  <FieldGroup
                    label="Mensagem"
                    htmlFor="cf-mensagem"
                    error={errors.mensagem?.message}
                  >
                    <FocusTextarea
                      id="cf-mensagem"
                      placeholder="digite a sua mensagem"
                      hasError={!!errors.mensagem}
                      registration={register("mensagem", {
                        required: "Por favor, insira uma mensagem",
                      })}
                    />
                  </FieldGroup>

                  {/* Submit button */}
                  <div className="contact__submit-row">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="contact__submit"
                      onMouseEnter={() => setSubmitBtnHover(true)}
                      onMouseLeave={() => {
                        setSubmitBtnHover(false);
                        setSubmitBtnPressed(false);
                      }}
                      onMouseDown={() => setSubmitBtnPressed(true)}
                      onMouseUp={() => setSubmitBtnPressed(false)}
                      onFocus={() => setSubmitBtnHover(true)}
                      onBlur={() => {
                        setSubmitBtnHover(false);
                        setSubmitBtnPressed(false);
                      }}
                      style={{
                        background:
                          status === "submitting"
                            ? "rgba(136,8,37,0.6)"
                            : submitBtnPressed
                              ? "#510718"
                              : submitBtnHover
                                ? "#6a0920"
                                : "#880825",
                        transform: submitBtnPressed
                          ? "scale(0.98) translateY(1px)"
                          : "scale(1)",
                      }}
                    >
                      {status === "submitting" && (
                        <svg
                          viewBox="0 0 20 20"
                          className="contact__spinner-svg"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="7"
                            fill="none"
                            stroke="rgba(234,219,186,0.4)"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M10 3 a7 7 0 0 1 7 7"
                            fill="none"
                            stroke="#eadbba"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                      <span className="contact__submit-label">
                        {status === "submitting"
                          ? "enviando..."
                          : "enviar e-mail"}
                      </span>
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
