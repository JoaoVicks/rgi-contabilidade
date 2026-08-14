import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./faq-section.css";
import svgPaths from "../../../imports/Faq/svg-9cc3j0lunl";

const CATEGORIES = [
  "perguntas gerais",
  "construção civil",
  "abertura de empresa",
  "serviço de imposto",
  "folha de pagamento",
  "Business Compliance & Legalization",
] as const;

type Category = (typeof CATEGORIES)[number];

interface FaqEntry {
  q: string;
  a: string;
}

const FAQ_DATA: Record<Category, FaqEntry[]> = {
  "perguntas gerais": [
    {
      q: "O que é contabilidade empresarial?",
      a: "A contabilidade empresarial abrange o registro, análise e interpretação das informações financeiras de uma empresa. Ela garante o cumprimento das obrigações fiscais e fornece dados fundamentais para a tomada de decisões estratégicas. A RGI oferece suporte especializado em todas essas áreas.",
    },
    {
      q: "Por que contratar um escritório de contabilidade?",
      a: "Contar com um escritório especializado garante que sua empresa cumpra todas as obrigações legais com segurança e eficiência. Isso libera o empreendedor para focar no crescimento do negócio, enquanto profissionais qualificados cuidam da parte fiscal, trabalhista e financeira.",
    },
    {
      q: "Como a RGI pode ajudar meu negócio?",
      a: "A RGI oferece um portfólio completo de serviços contábeis, fiscais e de consultoria, adaptados ao perfil e às necessidades de cada cliente. Entre em contato para conhecer as soluções disponíveis para o seu segmento.",
    },
    {
      q: "Quais setores a RGI atende?",
      a: "A RGI atende múltiplos setores, incluindo construção civil, comércio, prestação de serviços, tecnologia e muito mais. Consulte nossa equipe para verificar a disponibilidade de atendimento para o seu segmento.",
    },
    {
      q: "Como entro em contato com a RGI?",
      a: "Você pode entrar em contato com a RGI pelos canais disponíveis no site. Nossa equipe está pronta para atender suas dúvidas e apresentar as melhores soluções para o seu negócio.",
    },
  ],
  "construção civil": [
    {
      q: "Quais são as particularidades contábeis da construção civil?",
      a: "A construção civil possui regime de tributação específico e obrigações acessórias próprias. A RGI tem experiência comprovada no setor e pode orientar sua empresa em todas as etapas do processo contábil e fiscal.",
    },
    {
      q: "Como funciona a tributação para construtoras?",
      a: "Construtoras e incorporadoras podem optar por diferentes regimes tributários conforme o faturamento e as características da empresa. A escolha correta do regime pode representar economia significativa para o negócio.",
    },
    {
      q: "O que é o RET na construção civil?",
      a: "O Regime Especial de Tributação (RET) é uma opção para incorporações imobiliárias que pode simplificar e reduzir a carga tributária. A adesão ao RET pode ser vantajosa dependendo do perfil do empreendimento.",
    },
    {
      q: "Como registrar obras e contratos no sistema contábil?",
      a: "O registro adequado de obras e contratos envolve a apropriação de custos por obra, controle de medições e conformidade com as normas contábeis aplicáveis ao setor. A RGI orienta sua empresa em todo esse processo.",
    },
    {
      q: "Quais obrigações acessórias são exigidas de empresas do setor?",
      a: "Empresas do setor de construção civil possuem obrigações acessórias específicas além das obrigações gerais. A RGI garante o cumprimento de todas essas obrigações dentro dos prazos estabelecidos.",
    },
  ],
  "abertura de empresa": [
    {
      q: "Como eu faço para abrir uma empresa?",
      a: "O processo de abertura de empresa envolve a escolha do tipo jurídico, registro na Junta Comercial, obtenção do CNPJ, inscrições estadual e municipal, e obtenção dos alvarás necessários. A RGI acompanha cada etapa para garantir um processo ágil e sem complicações.",
    },
    {
      q: "Quais documentos são necessários para registro?",
      a: "Os documentos necessários variam conforme o tipo societário escolhido, mas geralmente incluem documentos de identificação dos sócios, comprovante de endereço e o contrato social ou requerimento de empresário. A RGI orienta sobre a documentação completa para cada caso.",
    },
    {
      q: "Qual é o custo para abrir uma empresa?",
      a: "Os custos para abrir uma empresa podem variar amplamente, dependendo do tipo de negócio e da localização. Geralmente incluem taxas de registro, licenças necessárias, serviços de contabilidade e consultoria. É importante fazer um planejamento financeiro detalhado para evitar surpresas.",
    },
    {
      q: "Como posso escolher o tipo de empresa ideal?",
      a: "A escolha do tipo empresarial — MEI, ME, EPP, LTDA, S.A., entre outros — depende do faturamento esperado, número de sócios, atividade exercida e objetivos do negócio. A RGI realiza uma análise personalizada para indicar a melhor opção para o seu perfil.",
    },
    {
      q: "Quais são as obrigações fiscais de uma nova empresa?",
      a: "Uma empresa recém-aberta deve cumprir obrigações fiscais mensais, trimestrais e anuais, que variam conforme o regime tributário adotado. Entre as principais estão o recolhimento de impostos, entrega de declarações ao Fisco e cumprimento de obrigações trabalhistas. A RGI garante que sua empresa esteja sempre em dia.",
    },
  ],
  "serviço de imposto": [
    {
      q: "Quais impostos uma empresa precisa pagar?",
      a: "Os impostos variam conforme o regime tributário e a atividade da empresa. A RGI realiza um planejamento tributário para minimizar a carga fiscal dentro dos limites da legislação vigente.",
    },
    {
      q: "O que é planejamento tributário?",
      a: "Planejamento tributário é o conjunto de estratégias legais utilizadas para reduzir a carga de impostos de uma empresa. Envolve a escolha do regime tributário mais adequado e o aproveitamento de incentivos fiscais disponíveis.",
    },
    {
      q: "Qual a diferença entre Simples Nacional, Lucro Presumido e Lucro Real?",
      a: "São os três principais regimes tributários no Brasil. Cada um possui regras próprias de apuração e é mais adequado a determinados perfis de empresa. A RGI analisa qual regime é mais vantajoso para o seu negócio.",
    },
    {
      q: "Como declarar o Imposto de Renda da empresa?",
      a: "A declaração do Imposto de Renda da Pessoa Jurídica varia conforme o regime tributário adotado. A RGI cuida de toda a apuração e entrega das declarações nos prazos estabelecidos pela Receita Federal.",
    },
    {
      q: "O que é a nota fiscal e como emiti-la?",
      a: "A nota fiscal é o documento que comprova operações comerciais ou prestação de serviços. A emissão eletrônica deve seguir as regras estabelecidas pela legislação estadual e municipal. A RGI orienta sobre o processo correto para sua atividade.",
    },
  ],
  "folha de pagamento": [
    {
      q: "O que é a folha de pagamento?",
      a: "A folha de pagamento é o documento que registra todas as remunerações, descontos e encargos relacionados aos colaboradores de uma empresa. Sua correta elaboração é fundamental para cumprir as obrigações trabalhistas e previdenciárias.",
    },
    {
      q: "Quais são os encargos trabalhistas obrigatórios?",
      a: "Os principais encargos trabalhistas incluem FGTS, INSS, férias, 13º salário e outros benefícios previstos em lei ou em convenção coletiva. A RGI garante o correto recolhimento de todos os encargos dentro dos prazos.",
    },
    {
      q: "Como funciona o eSocial para empresas?",
      a: "O eSocial é o sistema do governo federal que unifica o envio de informações trabalhistas, previdenciárias e fiscais. A RGI gerencia todo o processo de envio das informações, garantindo conformidade e pontualidade.",
    },
    {
      q: "Como calcular as férias e o 13º salário?",
      a: "O cálculo de férias e 13º salário segue regras específicas da legislação trabalhista vigente. A RGI realiza todos esses cálculos com precisão para garantir os direitos dos colaboradores e a conformidade da empresa.",
    },
    {
      q: "Quais são as obrigações mensais relacionadas à folha?",
      a: "Entre as principais obrigações mensais estão o recolhimento do FGTS, INSS, IR retido na fonte e o envio dos eventos periódicos do eSocial. A RGI assegura o cumprimento de todas essas obrigações dentro dos prazos legais.",
    },
  ],
  "Business Compliance & Legalization": [
    {
      q: "O que é compliance empresarial?",
      a: "Compliance empresarial é o conjunto de práticas e controles que garantem que a empresa esteja em conformidade com todas as leis, regulamentos e normas aplicáveis ao seu setor de atuação. É fundamental para evitar riscos legais e reputacionais.",
    },
    {
      q: "Como regularizar uma empresa com pendências fiscais?",
      a: "A regularização fiscal envolve a identificação e pagamento de débitos, a entrega de declarações em atraso e a obtenção de certidões de regularidade. A RGI assessora todo o processo de forma eficiente e segura.",
    },
    {
      q: "O que é a Certidão Negativa de Débitos (CND)?",
      a: "A CND é um documento que comprova que a empresa está em dia com suas obrigações fiscais. É frequentemente exigida em licitações, financiamentos e contratos comerciais. A RGI auxilia na obtenção e manutenção da regularidade fiscal da sua empresa.",
    },
    {
      q: "Quais são os riscos de não estar em compliance?",
      a: "Empresas fora de compliance podem enfrentar multas, autuações fiscais, restrições operacionais e danos à reputação. Manter-se em conformidade é um investimento na sustentabilidade e credibilidade do negócio.",
    },
    {
      q: "Como a RGI ajuda no processo de legalização?",
      a: "A RGI oferece suporte completo no processo de legalização empresarial, desde a escolha do tipo jurídico até a obtenção de todas as licenças necessárias para operar. Nossa equipe acompanha cada etapa para garantir agilidade e segurança.",
    },
  ],
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.055, delayChildren: 0 },
  },
  exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" } } as const,
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: "easeOut" } as const,
  },
};

function AccordionItem({
  item,
  num,
  isOpen,
  onToggle,
}: {
  item: FaqEntry;
  num: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div variants={itemVariants}>
      <div className="faq__item-card">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="faq__question-btn"
        >
          <div className="faq__question-inner">
            <div className="faq__number-box">
              <span className="faq__number-text">{num}</span>
            </div>
            <span className="faq__question-text">{item.q}</span>
          </div>
          {/* Chevron: transform is state-driven, transition in CSS */}
          <div
            className="faq__chevron-wrap"
            style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
          >
            <svg
              fill="none"
              viewBox="0 0 23.2748 11.0249"
              style={{ display: "block", width: "100%", height: "100%" }}
              aria-hidden
            >
              <path d={svgPaths.p3c26ba80} fill="#6B4900" />
            </svg>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              className="faq__answer-wrap"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.27, ease: "easeOut" }}
            >
              <div className="faq__answer-inner">
                <p className="faq__answer-text">{item.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function DecorativeRGI() {
  return (
    <div aria-hidden className="faq__watermark">
      <svg
        fill="none"
        viewBox="0 0 823.039 427"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <path d={svgPaths.pad3e600} fill="#FFF0CE" fillOpacity="0.81" />
        <path d={svgPaths.p126df200} fill="#FFF0CE" fillOpacity="0.81" />
      </svg>
    </div>
  );
}

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<Category>(
    "abertura de empresa",
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleCategorySelect = (cat: Category) => {
    setActiveCategory(cat);
    setOpenIndex(null);
  };

  const questions = FAQ_DATA[activeCategory];

  return (
    <section id="faq" ref={sectionRef} className="faq">
      <DecorativeRGI />

      <div className="faq__inner">
        {/* Heading */}
        <motion.h2
          className="faq__heading"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Ficou com alguma dúvida?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="faq__subtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          separamos algumas das principais perguntas para te ajudar
        </motion.p>

        {/* Category pills */}
        <motion.div
          className="faq__categories"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`faq__category-pill${isActive ? " faq__category-pill--active" : ""}`}
              >
                <span className="faq__category-label">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* FAQ list */}
        <div className="faq__list-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="faq__list"
              variants={listVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              exit="exit"
            >
              {questions.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  item={item}
                  num={i + 1}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
