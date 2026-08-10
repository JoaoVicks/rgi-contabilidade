import svgPaths from "./svg-p1tbeb06bf";
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

export default function Nav() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="nav">
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