import svgPaths from "./svg-g3ut8bzgop";
import imgHeader from "./fc6f4006cbd372456957bb05b9f62ba00ed4eac5.png";
type NavLinkProps = {
  className?: string;
  navLinkText?: string;
  propriedade1?: "Padrão" | "Variante 2";
};

function NavLink({ className, navLinkText = "Serviços", propriedade1 = "Padrão" }: NavLinkProps) {
  const isPadrao = propriedade1 === "Padrão";
  const isVariante2 = propriedade1 === "Variante 2";
  return (
    <div className={className || "h-[38px] overflow-clip relative w-[108px]"}>
      {isPadrao && (
        <>
          <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[calc(50%-45px)] text-[#fffcf5] text-[24px] top-0 whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
            {navLinkText}
          </p>
          <div className="-translate-x-1/2 absolute h-0 left-1/2 top-[60.5px] w-[50px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Line 7" />
            </svg>
          </div>
        </>
      )}
      {isVariante2 && (
        <>
          <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[calc(50%-45px)] text-[#fffcf5] text-[24px] top-0 whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
            Serviços
          </p>
          <div className="-translate-x-1/2 absolute h-0 left-1/2 top-[35px] w-[90px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 90 1" width="90">
                <line id="Line 7" stroke="white" strokeOpacity="0.67" x2="90" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function NavigationContainer() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[75px] h-full items-center relative shrink-0" data-name="Navigation Container">
        <p className="[word-break:break-word] font-['Noto_Sans_Khmer:ExtraLight','Noto_Sans:Light',sans-serif] leading-[normal] relative shrink-0 text-[#fffcf5] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
          Resultados
        </p>
        <NavLink className="h-[38px] overflow-clip relative shrink-0 w-[108px]" />
        <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] relative shrink-0 text-[#fffcf5] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>{`Sobre Nós `}</p>
        <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] relative shrink-0 text-[#fffcf5] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
          FAQ
        </p>
        <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] relative shrink-0 text-[#fffcf5] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
          Contato
        </p>
      </div>
    </div>
  );
}

function ContactContainer() {
  return (
    <div className="bg-[#880825] content-stretch flex h-[55.564px] items-center justify-center p-[9.748px] relative rounded-[7.799px] shrink-0 w-[201.786px]" data-name="Contact Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#eadbba] text-[20.94px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Fale Conosco
      </p>
    </div>
  );
}

function Nav() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-[calc(50%+6.5px)] top-[73px] w-[1445px]" data-name="nav">
      <div className="h-[43.088px] relative shrink-0 w-[80.566px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="43.0878" preserveAspectRatio="none" viewBox="0 0 80.5662 43.0878" width="80.5662">
          <g id="Vector">
            <path d={svgPaths.p35b24b00} fill="#FFFCF5" />
            <path d={svgPaths.p34de1100} fill="#FFFCF5" />
          </g>
        </svg>
      </div>
      <NavigationContainer />
      <ContactContainer />
    </div>
  );
}

function Partners() {
  return (
    <div className="-translate-x-1/2 absolute h-[54px] left-[calc(50%-0.24px)] top-[984px] w-[981.529px]" data-name="partners">
      <svg className="absolute block inset-0 size-full" fill="none" height="54" preserveAspectRatio="none" viewBox="0 0 981.529 54" width="981.529">
        <g id="partners">
          <path d={svgPaths.p1037bb00} fill="white" fillOpacity="0.14" id="Vector" />
          <path d={svgPaths.p29ad5600} fill="white" fillOpacity="0.14" id="Vector_2" />
          <path d={svgPaths.p2351bbc0} fill="white" fillOpacity="0.14" id="Vector_3" />
          <path d={svgPaths.p1a33db80} fill="white" fillOpacity="0.14" id="Vector_4" />
          <path d={svgPaths.p59af800} fill="white" fillOpacity="0.14" id="Vector_5" />
          <path d={svgPaths.p13ca4800} fill="white" fillOpacity="0.14" id="Vector_6" />
          <path d={svgPaths.pa0e9400} fill="white" fillOpacity="0.14" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="title">
      <p className="font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] mb-[-4px] relative shrink-0 text-[33.305px] text-[rgba(255,255,255,0.75)] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>{`Seja bem vindo `}</p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[69.172px] relative shrink-0 text-[#fffcf5] text-[64.589px] w-full">{`A contabilidade que anda do seu lado `}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#eadbba] content-stretch drop-shadow-[0px_2.44px_3.66px_rgba(0,0,0,0.26)] flex items-center justify-center p-[10.35px] relative rounded-[8.28px] shrink-0 w-[194.573px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[19.183px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Fale Conosco
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[55.92px] h-[308px] items-start left-[228px] top-[337px] w-[632px]">
      <Title />
      <Container />
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative size-full" data-name="Header">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.06%] left-[-2.05%] max-w-none top-[-0.05%] w-[108.34%]" src={imgHeader} />
      </div>
      <div className="absolute backdrop-blur-[27.5px] bg-gradient-to-t from-black h-[299px] left-0 to-[rgba(0,0,0,0)] top-[869px] w-[1967px]" data-name="Footer Background" />
      <Nav />
      <Partners />
      <Frame />
    </div>
  );
}