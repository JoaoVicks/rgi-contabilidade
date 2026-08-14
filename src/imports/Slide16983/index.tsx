import { motion } from "motion/react";
import svgPaths from "./svg-v88ao4ca6y";
import imgBasemapImage from "./5e12c064187e9071aa9637607e9ceb0321ea1233.png";
import imgImage from "./0fa4391e26a2b546a6b9a57c76526c9e03ac6df7.png";
import imgImage1 from "./745585c64759943b9248a68814b62e22c64ea49d.png";
import imgImage2 from "./69e97081852d28bbb53a441da4e9c928af7f6f66.png";
import imgImage3 from "./b182cd160195a0ef3f95532b5c197037e8338de7.png";
import imgImage4 from "./dd79c956c6b5c0d106a810f20218718dd93a02d1.png";
import imgImage5 from "./36653f04cb6e522c641c93a1a5a8e8cf072360a5.png";
import imgImage6 from "./aa75179fae714d60a6780ebb17691b232dd0aad2.png";
import imgImage7 from "./0bc23153eaec6dd82bbac6fb57d6fb96a7c01b49.png";
import imgImage8 from "./f2516357fec6b6264ee5fcabd74bf38b27b8da4d.png";
import imgImage9 from "./cdb62d4fcf204ec7c650342e3342cd62df719c5b.png";
import imgImage10 from "./d9791798947f3c295ad5ca1bb71837c854c172b1.png";
import imgImage11 from "./72696884c65856ae208e78f6ffa451e7ee834ccf.png";
import imgFrame70 from "./2bcd7476925af0db29c692f819322fed2a61c89e.png";
import imgImage12 from "./f8fd041d4f415a54349e141dba6a2f468fdc0fdf.png";
import imgImageContainer from "./2c1d9e559c049a61d7ec69835bff2dd2f774bf48.png";
import imgPrincessCareersUpscayl5XHighFidelity4X1 from "./722aebee7f1b7f5de339f59a103d21684f2ceeb1.png";
import imgHeader from "./fc6f4006cbd372456957bb05b9f62ba00ed4eac5.png";
import imgImage13 from "./7c69e67b914a3cdf6153a715e771f9fc6a16b3d4.png";
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

function ContactContainer() {
  return (
    <div className="bg-[#510718] content-stretch flex h-[57px] items-center justify-center px-[8px] py-[16px] relative rounded-[7.592px] shrink-0 w-[243px]" data-name="Contact Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        como chegar
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[38px] items-center relative shrink-0 w-[1172px]">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#880825] text-[48px] whitespace-nowrap">Visite nosso escritório</p>
      <ContactContainer />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame73 />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7e7e7e] text-[24px] w-[1162px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Prefere conversar pessoalmente? Nossa equipe está pronta para recebê-lo e ajudar com suas necessidades contábeis.
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[66px] items-start left-[calc(50%+2.5px)] overflow-clip px-[115px] py-[65px] top-[7791px] w-[1783px]">
      <Frame74 />
      <div className="h-[698px] relative rounded-[10px] shrink-0 w-[1553px]" data-name="Basemap image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[133.5%] left-0 max-w-none top-[0.01%] w-full" src={imgBasemapImage} />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#880825] content-stretch flex items-center justify-center left-[1464px] px-[22.229px] py-[11.787px] rounded-[9.43px] top-[966px]" data-name="button">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#fff0ce] text-[21.847px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        ver todas as avaliações
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[907px]" data-name="title">
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[86.768px] relative shrink-0 text-[#880825] text-[46px] text-center w-[891px]">Confiável por empreendedores e empresas</p>
    </div>
  );
}

function WheatCookPlantBreadGlutenGrainCookingNutritionWheat() {
  return (
    <div className="col-1 flex h-[108.469px] items-center justify-center ml-0 mt-[5.07px] relative row-1 w-[108.642px]">
      <div className="flex-none rotate-[-62.7deg]">
        <div className="h-[80.776px] relative w-[80.375px]" data-name="wheat--cook-plant-bread-gluten-grain-cooking-nutrition-wheat">
          <div className="absolute inset-[-1.73%_-1.74%]">
            <svg className="block size-full" fill="none" height="83.5745" preserveAspectRatio="none" viewBox="0 0 83.1701 83.5745" width="83.1701">
              <g id="wheat--cook-plant-bread-gluten-grain-cooking-nutrition-wheat">
                <path d={svgPaths.p1f281600} fill="#EADBBA" id="Rectangle 812" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1dd4280} fill="#EADBBA" id="Rectangle 813" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p111d8c00} fill="#EADBBA" id="Rectangle 814" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.pef0c800} fill="#EADBBA" id="Rectangle 815" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p10878f00} fill="#EADBBA" id="Rectangle 816" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1504b780} fill="#EADBBA" id="Rectangle 817" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p20bac000} fill="#EADBBA" id="Rectangle 818" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p83ab700} id="Vector 1419" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p39a86200} fill="#EADBBA" id="Rectangle 805" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p2ebd41e0} fill="#EADBBA" id="Rectangle 802" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p36dce700} fill="#EADBBA" id="Rectangle 808" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p2bc92c00} fill="#EADBBA" id="Rectangle 806" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p5468f00} fill="#EADBBA" id="Rectangle 809" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p2f5ca200} fill="#EADBBA" id="Rectangle 810" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p3ab42d80} fill="#EADBBA" id="Rectangle 811" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="col-1 flex h-[108.468px] items-center justify-center ml-[251.57px] mt-0 relative row-1 w-[108.645px]">
      <div className="-scale-y-100 flex-none rotate-[-117.3deg]">
        <div className="h-[80.781px] relative w-[80.371px]" data-name="Icon">
          <div className="absolute inset-[-1.73%_-1.74%]">
            <svg className="block size-full" fill="none" height="83.5728" preserveAspectRatio="none" viewBox="0 0 83.1701 83.5728" width="83.1701">
              <g id="Icon">
                <path d={svgPaths.p3e787900} fill="#EADBBA" id="Rectangle 812" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p34a4c800} fill="#EADBBA" id="Rectangle 813" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1dcdd300} fill="#EADBBA" id="Rectangle 814" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p3cdb5d20} fill="#EADBBA" id="Rectangle 815" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1bb9e800} fill="#EADBBA" id="Rectangle 816" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p30e72900} fill="#EADBBA" id="Rectangle 817" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p34e09c00} fill="#EADBBA" id="Rectangle 818" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1397cf00} id="Vector 1419" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p321ab100} fill="#EADBBA" id="Rectangle 805" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p3fb09800} fill="#EADBBA" id="Rectangle 802" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p16c95f00} fill="#EADBBA" id="Rectangle 808" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.pf93f552} fill="#EADBBA" id="Rectangle 806" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.pf95540} fill="#EADBBA" id="Rectangle 809" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.pa220700} fill="#EADBBA" id="Rectangle 810" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p2f200280} fill="#EADBBA" id="Rectangle 811" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Container">
      <p className="[word-break:break-word] col-1 font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#651628] text-[42.025px] text-center w-[301.215px]">{`Multiplos `}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[26.82px] mt-[12.33px] place-items-start relative row-1" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <WheatCookPlantBreadGlutenGrainCookingNutritionWheat />
      <Icon />
      <Container1 />
      <p className="[word-break:break-word] col-1 font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[21.438px] ml-[110.22px] mt-[71.07px] relative row-1 text-[#510718] text-[23.098px] text-center w-[134.887px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        setores de
        <br aria-hidden />
        negócio
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="col-1 flex h-[108.469px] items-center justify-center ml-0 mt-[29.01px] relative row-1 w-[108.638px]">
      <div className="flex-none rotate-[-62.7deg]">
        <div className="h-[80.769px] relative w-[80.378px]" data-name="Icon">
          <div className="absolute inset-[-1.73%_-1.74%]">
            <svg className="block size-full" fill="none" height="83.5679" preserveAspectRatio="none" viewBox="0 0 83.1735 83.5679" width="83.1735">
              <g id="Icon">
                <path d={svgPaths.p289ab800} fill="#EADBBA" id="Rectangle 812" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p3a084000} fill="#EADBBA" id="Rectangle 813" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p228fbff0} fill="#EADBBA" id="Rectangle 814" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1c474800} fill="#EADBBA" id="Rectangle 815" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p363e1180} fill="#EADBBA" id="Rectangle 816" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p22e088c0} fill="#EADBBA" id="Rectangle 817" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p17797800} fill="#EADBBA" id="Rectangle 818" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p95950c0} id="Vector 1419" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p39d0c600} fill="#EADBBA" id="Rectangle 805" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p8a1e480} fill="#EADBBA" id="Rectangle 802" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.pf62b180} fill="#EADBBA" id="Rectangle 808" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p14ecff80} fill="#EADBBA" id="Rectangle 806" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p307be400} fill="#EADBBA" id="Rectangle 809" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p3d5b1800} fill="#EADBBA" id="Rectangle 810" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p20e16880} fill="#EADBBA" id="Rectangle 811" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="col-1 flex h-[108.469px] items-center justify-center ml-[184.2px] mt-[26.83px] relative row-1 w-[108.642px]">
      <div className="-scale-y-100 flex-none rotate-[-117.3deg]">
        <div className="h-[80.776px] relative w-[80.374px]" data-name="Icon">
          <div className="absolute inset-[-1.73%_-1.74%]">
            <svg className="block size-full" fill="none" height="83.5745" preserveAspectRatio="none" viewBox="0 0 83.1701 83.5745" width="83.1701">
              <g id="Icon">
                <path d={svgPaths.pe789c00} fill="#EADBBA" id="Rectangle 812" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p28667200} fill="#EADBBA" id="Rectangle 813" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p111d8c00} fill="#EADBBA" id="Rectangle 814" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p2a4a380} fill="#EADBBA" id="Rectangle 815" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p10878f00} fill="#EADBBA" id="Rectangle 816" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1504b780} fill="#EADBBA" id="Rectangle 817" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1e276480} fill="#EADBBA" id="Rectangle 818" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p83ab700} id="Vector 1419" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p15992200} fill="#EADBBA" id="Rectangle 805" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p28947b00} fill="#EADBBA" id="Rectangle 802" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p36dce700} fill="#EADBBA" id="Rectangle 808" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p16c72280} fill="#EADBBA" id="Rectangle 806" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p5468f00} fill="#EADBBA" id="Rectangle 809" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p2f5ca200} fill="#EADBBA" id="Rectangle 810" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.pfe3a00} fill="#EADBBA" id="Rectangle 811" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="col-1 h-[22.368px] ml-[110.95px] mt-[129.09px] relative row-1 w-[68.169px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="22.3678" preserveAspectRatio="none" viewBox="0 0 68.1686 22.3678" width="68.1686">
        <g clipPath="url(#clip0_0_257)" id="Logo">
          <path d={svgPaths.p16fbb900} fill="#FF302F" id="Vector" />
          <path d={svgPaths.p370abd00} fill="#20B15A" id="Vector_2" />
          <path d={svgPaths.p15915a00} fill="#3686F7" id="Vector_3" />
          <path d={svgPaths.p15fdd380} fill="#FF302F" id="Vector_4" />
          <path d={svgPaths.p10c30af0} fill="#FFBA40" id="Vector_5" />
          <path d={svgPaths.p3c7cc000} fill="#3686F7" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_0_257">
            <rect fill="white" height="22.3678" width="68.1686" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star() {
  return (
    <div className="h-[17.514px] relative shrink-0 w-[18.263px]" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.5141" preserveAspectRatio="none" viewBox="0 0 18.2631 17.5141" width="18.2631">
        <g id="Star">
          <path d={svgPaths.p34221f80} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="h-[17.514px] relative shrink-0 w-[18.263px]" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.5141" preserveAspectRatio="none" viewBox="0 0 18.2631 17.5141" width="18.2631">
        <g id="Star">
          <path d={svgPaths.p34221f80} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star2() {
  return (
    <div className="h-[17.514px] relative shrink-0 w-[18.263px]" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.5141" preserveAspectRatio="none" viewBox="0 0 18.2631 17.5141" width="18.2631">
        <g id="Star">
          <path d={svgPaths.p34221f80} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star3() {
  return (
    <div className="h-[17.514px] relative shrink-0 w-[18.263px]" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.5141" preserveAspectRatio="none" viewBox="0 0 18.2631 17.5141" width="18.2631">
        <g id="Star">
          <path d={svgPaths.p34221f80} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="h-[17.514px] relative shrink-0 w-[18.263px]" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.5141" preserveAspectRatio="none" viewBox="0 0 18.2631 17.5141" width="18.2631">
        <g id="Star">
          <path d={svgPaths.p34221f80} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-1 content-stretch flex gap-[2.19px] items-center ml-0 mt-0 relative row-1" data-name="Container">
      <Star />
      <Star1 />
      <Star2 />
      <Star3 />
      <Star4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[96.44px] mt-[105.88px] place-items-start relative row-1" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <Icon1 />
      <Icon2 />
      <Logo />
      <Container4 />
      <p className="[word-break:break-word] col-1 font-['Playfair_Display:Regular',sans-serif] font-normal h-[98.627px] leading-[normal] ml-[101.52px] mt-0 relative row-1 text-[#651628] text-[74.89px] text-center w-[95.001px]">5.0</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="col-1 flex h-[108.469px] items-center justify-center ml-0 mt-[21.75px] relative row-1 w-[108.642px]">
      <div className="flex-none rotate-[-62.7deg]">
        <div className="h-[80.776px] relative w-[80.374px]" data-name="Icon">
          <div className="absolute inset-[-1.73%_-1.74%]">
            <svg className="block size-full" fill="none" height="83.5745" preserveAspectRatio="none" viewBox="0 0 83.1701 83.5745" width="83.1701">
              <g id="Icon">
                <path d={svgPaths.pe789c00} fill="#EADBBA" id="Rectangle 812" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1dd4280} fill="#EADBBA" id="Rectangle 813" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p111d8c00} fill="#EADBBA" id="Rectangle 814" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p29700700} fill="#EADBBA" id="Rectangle 815" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p10878f00} fill="#EADBBA" id="Rectangle 816" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1504b780} fill="#EADBBA" id="Rectangle 817" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1e276480} fill="#EADBBA" id="Rectangle 818" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p83ab700} id="Vector 1419" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p39a86200} fill="#EADBBA" id="Rectangle 805" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p984a300} fill="#EADBBA" id="Rectangle 802" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p36dce700} fill="#EADBBA" id="Rectangle 808" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p16c72280} fill="#EADBBA" id="Rectangle 806" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p5468f00} fill="#EADBBA" id="Rectangle 809" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p2f5ca200} fill="#EADBBA" id="Rectangle 810" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.pfe3a00} fill="#EADBBA" id="Rectangle 811" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="col-1 flex h-[108.468px] items-center justify-center ml-[212.49px] mt-[18.13px] relative row-1 w-[108.645px]">
      <div className="-scale-y-100 flex-none rotate-[-117.3deg]">
        <div className="h-[80.781px] relative w-[80.371px]" data-name="Icon">
          <div className="absolute inset-[-1.73%_-1.74%_-1.74%_-1.74%]">
            <svg className="block size-full" fill="none" height="83.5745" preserveAspectRatio="none" viewBox="0 0 83.1702 83.5745" width="83.1702">
              <g id="Icon">
                <path d={svgPaths.pe789c00} fill="#EADBBA" id="Rectangle 812" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p28667200} fill="#EADBBA" id="Rectangle 813" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p111d8c00} fill="#EADBBA" id="Rectangle 814" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.pafacc00} fill="#EADBBA" id="Rectangle 815" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p10878f00} fill="#EADBBA" id="Rectangle 816" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p1504b780} fill="#EADBBA" id="Rectangle 817" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p13ff0a00} fill="#EADBBA" id="Rectangle 818" stroke="#EADBBA" strokeWidth="2.79756" />
                <path d={svgPaths.p83ab700} id="Vector 1419" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p39a86200} fill="#EADBBA" id="Rectangle 805" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p7b70900} fill="#EADBBA" id="Rectangle 802" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p24e68100} fill="#EADBBA" id="Rectangle 808" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p301ce900} fill="#EADBBA" id="Rectangle 806" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p5468f00} fill="#EADBBA" id="Rectangle 809" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.p2f5ca200} fill="#EADBBA" id="Rectangle 810" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
                <path d={svgPaths.pc0fa070} fill="#EADBBA" id="Rectangle 811" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79756" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.18px] mt-0 place-items-start relative row-1" data-name="Container">
      <p className="col-1 font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] ml-[32.63px] mt-0 relative row-1 text-[#651628] text-[71.091px] text-center">100</p>
      <p className="col-1 font-['Noto_Sans_Khmer:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] ml-0 mt-[16.68px] relative row-1 text-[#641628] text-[52.816px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        +
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="[word-break:break-word] col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.57px] mt-0 place-items-start relative row-1 whitespace-nowrap" data-name="Container">
      <Container8 />
      <p className="col-1 font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] ml-0 mt-[84.12px] relative row-1 text-[#510718] text-[26.107px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        avaliações
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <Icon3 />
      <Icon4 />
      <Container7 />
    </div>
  );
}

function ContainerRewards() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-[1233px]" data-name="container-rewards">
      <Container />
      <Container3 />
      <Container6 />
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(50%-10.83px)] top-[24px] w-[1647.344px]" data-name="header">
      <Title />
      <ContainerRewards />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Alessandra
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars1() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars2() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars3() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars4() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars1 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars2 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars3 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.37px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame3 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.76px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Profissionais dedicados e qualificados, prestam um ótimo atendimento.
        <br aria-hidden />
        Indico com total confiança!
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage1} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Isabella
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars5() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars6() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars7() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars8() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars9() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars5 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars6 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars7 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars8 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.38px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame8 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.76px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Profissionais altamente capacitados e comprometidos, oferecem um atendimento excepcional. Recomendo sem hesitação!
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage2} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Bruno
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars10() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars11() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars12() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars13() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars14() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars10 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars11 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars12 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars13 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame16 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.38px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame13 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.75px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Especialistas que realmente entendem do assunto. Fui atendido com muita atenção e cuidado.
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage3} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Carla
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars15() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars16() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars17() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars18() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars19() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars15 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars16 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars17 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars18 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame21 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.37px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame18 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.76px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Serviço excepcional! Recomendo a todos que buscam qualidade e eficiência na entrega.
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Carla
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars20() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars21() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars22() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars23() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars24() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars20 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars21 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars22 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars23 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame26 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.38px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame23 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.75px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Serviço excepcional! Recomendo a todos que buscam qualidade e eficiência na entrega.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[26.211px] items-center left-0 top-0" data-name="Frame">
      <Frame2 />
      <Frame7 />
      <Frame12 />
      <Frame17 />
      <Frame22 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Carlos
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars25() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars26() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars27() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars28() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars29() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars25 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars26 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars27 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars28 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame32 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.38px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame29 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.75px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Uma experiência incrível desde o início, a equipe é atenciosa e muito capacitada.
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage4} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Fernanda
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars30() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars31() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars32() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars33() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars34() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars30 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars31 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars32 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars33 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame37 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.38px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame34 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.76px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Os serviços prestados superaram minhas expectativas, recomendo sem pensar duas vezes.
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage5} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Juliano
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars35() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars36() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars37() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars38() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars39() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars35 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars36 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars37 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars38 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame42 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.38px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame39 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.76px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Profissionais competentes e um ambiente acolhedor. Voltarei com certeza.
      </p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage6} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Mariana
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars40() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars41() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars42() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars43() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars44() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars40 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars41 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars42 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars43 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars44 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame47 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.38px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame44 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.76px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Atendimento excelente, equipe sempre pronta para ajudar. Fui muito bem tratada.
      </p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[11.854px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[7.408px] shrink-0 size-[39.265px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.408px] size-full" src={imgImage} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f7232] text-[22.091px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Roberto
      </p>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars45() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars46() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars47() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars48() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1RewardRatingRateSocialStarMediaFavoriteLikeStars49() {
  return (
    <div className="h-[17.892px] relative shrink-0 w-[18.657px]" data-name="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.892" preserveAspectRatio="none" viewBox="0 0 18.6572 17.892" width="18.6572">
        <g id="star-1--reward-rating-rate-social-star-media-favorite-like-stars">
          <path d={svgPaths.p2aec800} fill="#FFC765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="col-1 content-stretch flex gap-[2.238px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars45 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars46 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars47 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars48 />
      <Star1RewardRatingRateSocialStarMediaFavoriteLikeStars49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Frame">
      <Frame52 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14.38px] top-[12.68px] w-[463.342px]" data-name="Frame">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#fff8e8] h-[240.972px] overflow-clip relative rounded-[10.146px] shrink-0 w-[492.935px]" data-name="Frame">
      <Frame49 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] left-[17.76px] text-[#866f3a] text-[20.14px] top-[78.63px] w-[459.96px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Serviço de alta qualidade e dedicação total ao cliente. Uma ótima escolha!
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex gap-[26.211px] items-center left-[75.25px] top-[268.03px]" data-name="Frame">
      <Frame28 />
      <Frame33 />
      <Frame38 />
      <Frame43 />
      <Frame48 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Frame">
      <Frame1 />
      <Frame27 />
    </div>
  );
}

function Reviews1() {
  return (
    <div className="absolute h-[509px] left-[-332.57px] top-[390px] w-[2555.146px]" data-name="reviews">
      <Frame />
    </div>
  );
}

function Reviews() {
  return (
    <div className="-translate-x-1/2 absolute h-[1044px] left-[calc(50%+0.5px)] top-[5565px] w-[1927px]" data-name="Reviews">
      <Button />
      <Header />
      <Reviews1 />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(50%+0.34px)] text-center top-0 w-[1350.686px]" data-name="Header Container">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[55px] relative shrink-0 text-[#880825] text-[46px] w-[725px]">Mais do que números, construímos relações de confiança</p>
      <p className="font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#71706d] text-[22px] w-[1037px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        A RGI foi criada para simplificar a contabilidade, tornando-a mais acessível e transparente. Acreditamos que a contabilidade deve ser uma aliada na tomada de decisões, oferecendo segurança e clareza.
      </p>
    </div>
  );
}

function Image() {
  return (
    <motion.div className="absolute left-[1404.66px] overflow-clip rounded-[8.375px] size-[129.118px] top-[292.84px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8.375px]">
        <img alt="" className="absolute h-full left-[-47.91%] max-w-none top-[-0.1%] w-[154.55%]" src={imgImage7} />
      </div>
      <div className="absolute flex h-[149.774px] items-center justify-center left-[0.01px] top-[-0.23px] w-[130.443px]">
        <div className="flex-none rotate-[-0.32deg]">
          <div className="h-[149.058px] relative w-[129.619px]" style={{ backgroundImage: "linear-gradient(179.96383069373377deg, rgba(0, 0, 0, 0) 0.84317%, rgb(136, 8, 37) 161.54%)" }} data-name="Rounded Rectangle" />
        </div>
      </div>
    </motion.div>
  );
}

function IconWallet() {
  return (
    <div className="absolute left-0 size-[64.946px] top-0" data-name="icon wallet">
      <svg className="absolute block inset-0 size-full" fill="none" height="64.9458" preserveAspectRatio="none" viewBox="0 0 64.9458 64.9458" width="64.9458">
        <g id="icon wallet">
          <circle cx="32.4729" cy="32.4729" fill="#FFF4DB" id="Ellipse 10" r="32.4729" />
          <g id="wallet--money-payment-finance-wallet">
            <path d={svgPaths.p3198d080} id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19456" />
            <path d={svgPaths.p29f0f940} fill="#FFF4DB" id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19456" />
            <path d={svgPaths.p1175a500} id="Vector_3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19456" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="absolute left-[1198.99px] size-[64.946px] top-[664.73px]">
      <IconWallet />
    </div>
  );
}

function IconCoin() {
  return (
    <div className="absolute left-0 size-[64.946px] top-0" data-name="Icon coin">
      <svg className="absolute block inset-0 size-full" fill="none" height="64.9458" preserveAspectRatio="none" viewBox="0 0 64.9458 64.9458" width="64.9458">
        <g id="Icon coin">
          <circle cx="32.4729" cy="32.4729" fill="#FFF4DB" id="Ellipse 10" r="32.4729" />
          <g id="dollar-coin-1--accounting-billing-payment-cash-coin-currency-money-finance">
            <path d={svgPaths.pdafa280} id="Vector 3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
            <path d="M36.3516 24.1921V21.9023" id="Vector 2489" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
            <path d="M36.3516 35.6335V33.3438" id="Vector 2490" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
            <path d={svgPaths.p1634c480} id="Ellipse 19" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
            <path d={svgPaths.p2d937900} id="Ellipse 20" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="absolute left-[1444.85px] size-[64.946px] top-[448.25px]">
      <IconCoin />
    </div>
  );
}

function BankInstitutionSavingBankPaymentFinance() {
  return (
    <div className="absolute inset-[33.34%_30.94%_32.56%_29.77%]" data-name="bank--institution-saving-bank-payment-finance">
      <div className="absolute inset-[-4.67%_-4.06%]">
        <svg className="block size-full" fill="none" height="24.2164" preserveAspectRatio="none" viewBox="0 0 27.5839 24.2164" width="27.5839">
          <g id="bank--institution-saving-bank-payment-finance">
            <path d={svgPaths.pda3ef00} fill="#FFF4DB" id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06952" />
            <path d={svgPaths.p17ff5300} fill="#FFF4DB" id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06952" />
            <path d="M3.97226 9.40976V18.8766" id="Vector_3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06952" />
            <path d="M10.5113 9.40976V18.8766" id="Vector_4" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06952" />
            <path d="M17.0582 9.40976V18.8766" id="Vector_5" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06952" />
            <path d="M23.6051 9.40976V18.8766" id="Vector_6" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06952" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function JusticeScale1OfficeWorkScaleJusticeCompanyArbitrationBalanceCourt() {
  return (
    <div className="absolute contents inset-[33.34%_30.94%_32.56%_29.77%]" data-name="justice-scale-1--office-work-scale-justice-company-arbitration-balance-court">
      <BankInstitutionSavingBankPaymentFinance />
    </div>
  );
}

function IconBank() {
  return (
    <div className="absolute contents left-0 top-0" data-name="icon bank">
      <div className="absolute left-0 size-[64.946px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" height="64.9458" preserveAspectRatio="none" viewBox="0 0 64.9458 64.9458" width="64.9458">
          <circle cx="32.4729" cy="32.4729" fill="#FFF4DB" id="Ellipse 10" r="32.4729" />
        </svg>
      </div>
      <JusticeScale1OfficeWorkScaleJusticeCompanyArbitrationBalanceCourt />
    </div>
  );
}

function Frame88() {
  return (
    <div className="absolute left-[989.46px] size-[64.946px] top-[564.22px]">
      <IconBank />
    </div>
  );
}

function IconLaw() {
  return (
    <div className="absolute left-0 size-[64.946px] top-0" data-name="icon law">
      <svg className="absolute block inset-0 size-full" fill="none" height="64.9458" preserveAspectRatio="none" viewBox="0 0 64.9458 64.9458" width="64.9458">
        <g id="icon law">
          <circle cx="32.4729" cy="32.4729" fill="#FFF4DB" id="Ellipse 6" r="32.4729" />
          <g id="justice-scale-1--office-work-scale-justice-company-arbitration-balance-court">
            <g id="Vector">
              <path d={svgPaths.p2b513b00} fill="#FFF4DB" />
              <path d={svgPaths.p2b18f000} stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.09551" />
            </g>
            <g id="Vector_2">
              <path d={svgPaths.p12f6c200} fill="#FFF4DB" />
              <path d={svgPaths.p2bd16e00} stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.09551" />
            </g>
            <path d="M20.5469 25.3633H42.4127" id="Vector_3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.09551" />
            <path d="M31.4766 25.3604V20.875" id="Vector_4" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.09551" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute left-[355px] size-[64.946px] top-[842px]">
      <IconLaw />
    </div>
  );
}

function Diamond2DiamondMoneyPaymentFinanceWealthJewelry() {
  return (
    <div className="absolute inset-[32.14%_29.13%_32.18%_29.76%]" data-name="diamond-2--diamond-money-payment-finance-wealth-jewelry">
      <div className="absolute inset-[-4.67%_-4.06%]">
        <svg className="block size-full" fill="none" height="25.3383" preserveAspectRatio="none" viewBox="0 0 28.8613 25.3383" width="28.8613">
          <g id="diamond-2--diamond-money-payment-finance-wealth-jewelry">
            <path d={svgPaths.p3d73de00} fill="#FFF4DB" id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16536" />
            <path d={svgPaths.p7ca1b80} id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16536" />
            <path d={svgPaths.p193efa00} id="Vector_3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16536" />
            <path d="M1.12955 9.07892H27.7433" id="Vector_4" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16536" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function JusticeScale1OfficeWorkScaleJusticeCompanyArbitrationBalanceCourt1() {
  return (
    <div className="absolute contents inset-[32.14%_29.13%_32.18%_29.76%]" data-name="justice-scale-1--office-work-scale-justice-company-arbitration-balance-court">
      <Diamond2DiamondMoneyPaymentFinanceWealthJewelry />
    </div>
  );
}

function IconDiamond() {
  return (
    <div className="absolute contents left-0 top-0" data-name="icon diamond">
      <div className="absolute left-0 size-[64.946px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" height="64.9458" preserveAspectRatio="none" viewBox="0 0 64.9458 64.9458" width="64.9458">
          <circle cx="32.4729" cy="32.4729" fill="#FFF4DB" id="Ellipse 10" r="32.4729" />
        </svg>
      </div>
      <JusticeScale1OfficeWorkScaleJusticeCompanyArbitrationBalanceCourt1 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="absolute left-[731px] size-[64.946px] top-[688px]">
      <IconDiamond />
    </div>
  );
}

function Image1() {
  return (
    <motion.div className="absolute left-[283px] overflow-clip rounded-[13.347px] size-[205.77px] top-[599px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.347px]">
        <img alt="" className="absolute h-full left-[-24.87%] max-w-none top-0 w-[149.19%]" src={imgImage8} />
      </div>
      <div className="absolute flex h-[242.063px] items-center justify-center left-[0.03px] top-[-0.51px] w-[235.18px]">
        <div className="flex-none rotate-[-0.32deg]">
          <div className="h-[240.771px] relative w-[233.849px]" style={{ backgroundImage: "linear-gradient(179.9676167133088deg, rgba(0, 0, 0, 0) 0.84317%, rgb(136, 8, 37) 161.54%)" }} data-name="Rounded Rectangle" />
        </div>
      </div>
    </motion.div>
  );
}

function Image2() {
  return (
    <motion.div className="absolute left-[674.02px] overflow-clip rounded-[11.384px] size-[175.508px] top-[494.64px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[11.384px]">
        <img alt="" className="absolute h-full left-[-47.91%] max-w-none top-[-0.1%] w-[154.55%]" src={imgImage9} />
      </div>
      <div className="absolute flex h-[180.248px] items-center justify-center left-[0.01px] top-[-0.3px] w-[177.179px]">
        <div className="flex-none rotate-[-0.32deg]">
          <div className="h-[179.275px] relative w-[176.188px]" style={{ backgroundImage: "linear-gradient(179.9679967893199deg, rgba(0, 0, 0, 0) 0.84317%, rgb(136, 8, 37) 161.54%)" }} data-name="Rounded Rectangle" />
        </div>
      </div>
    </motion.div>
  );
}

function Image3() {
  return (
    <motion.div className="absolute left-[935.17px] overflow-clip rounded-[10.51px] size-[162.029px] top-[379px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10.51px]">
        <img alt="" className="absolute h-full left-[-47.91%] max-w-none top-[-0.1%] w-[154.55%]" src={imgImage10} />
      </div>
      <div className="absolute flex h-[183.14px] items-center justify-center left-[0.02px] top-[-0.28px] w-[163.664px]">
        <div className="flex-none rotate-[-0.32deg]">
          <div className="h-[182.242px] relative w-[162.657px]" style={{ backgroundImage: "linear-gradient(179.96476063374604deg, rgba(0, 0, 0, 0) 0.84317%, rgb(136, 8, 37) 161.54%)" }} data-name="Rounded Rectangle" />
        </div>
      </div>
    </motion.div>
  );
}

function Image4() {
  return (
    <motion.div className="absolute h-[125.065px] left-[1164.2px] overflow-clip rounded-[8.026px] top-[497.22px] w-[121.387px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8.026px]">
        <img alt="" className="absolute h-full left-[-19.49%] max-w-none top-[0.1%] w-[154.55%]" src={imgImage11} />
      </div>
      <div className="absolute flex h-[144.711px] items-center justify-center left-[0.01px] top-[-0.21px] w-[125.003px]">
        <div className="flex-none rotate-[-0.32deg]">
          <div className="h-[144.025px] relative w-[124.207px]" style={{ backgroundImage: "linear-gradient(179.9635292902607deg, rgba(0, 0, 0, 0) 0.84317%, rgb(136, 8, 37) 161.54%)" }} data-name="Rounded Rectangle" />
        </div>
      </div>
    </motion.div>
  );
}

function Container9() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+24px)] top-[261px]" data-name="Container">
      <Image />
      <div className="absolute h-[901.115px] left-0 top-[261px] w-[1970px]" data-name="Vector">
        <div className="absolute inset-[-0.39%_-0.18%]">
          <svg className="block size-full" fill="none" height="908.074" preserveAspectRatio="none" viewBox="0 0 1976.96 908.074" width="1976.96">
            <path d={svgPaths.p3f2f9a00} id="Vector" pathLength="1" stroke="url(#paint0_linear_0_133)" strokeDasharray="1 1" strokeLinecap="round" strokeWidth="6.95848" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_133" x1="1615.73" x2="-160.66" y1="144.339" y2="1122.2">
                <stop stopColor="#FFE5AA" />
                <stop offset="1" stopColor="#EFE2C6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame89 />
      <Frame90 />
      <Frame88 />
      <Frame86 />
      <Frame87 />
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+14px)] top-[793px] w-[1918px]">
        <div className="absolute inset-[-6.96px_0_0_0]">
          <svg className="block size-full" fill="none" height="6.95848" preserveAspectRatio="none" viewBox="0 0 1918 6.95848" width="1918">
            <line id="Line 1" pathLength="1" stroke="#E2D3B4" strokeDasharray="1 1" strokeLinecap="round" strokeOpacity="0.43" strokeWidth="6.95848" x1="3.47924" x2="1914.52" y1="3.47924" y2="3.47924" />
          </svg>
        </div>
      </div>
      <Image1 />
      <Image2 />
      <Image3 />
      <Image4 />
    </div>
  );
}

function IconCoin1() {
  return (
    <div className="absolute left-0 size-[64.946px] top-0" data-name="Icon coin">
      <svg className="absolute block inset-0 size-full" fill="none" height="64.9458" preserveAspectRatio="none" viewBox="0 0 64.9458 64.9458" width="64.9458">
        <g id="Icon coin">
          <circle cx="32.4729" cy="32.4729" fill="#FFF4DB" id="Ellipse 10" r="32.4729" />
          <g id="dollar-coin-1--accounting-billing-payment-cash-coin-currency-money-finance">
            <path d={svgPaths.pdafa280} id="Vector 3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
            <path d="M36.3516 24.1921V21.9023" id="Vector 2489" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
            <path d="M36.3516 35.6335V33.3438" id="Vector 2490" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
            <path d={svgPaths.p1634c480} id="Ellipse 19" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
            <path d={svgPaths.p2d937900} id="Ellipse 20" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65433" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="absolute left-[1697px] size-[64.946px] top-[401px]">
      <IconCoin1 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute h-[132px] left-[1659px] overflow-clip rounded-[8.471px] top-[235px] w-[128.118px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8.471px]">
        <img alt="" className="absolute h-full left-[-47.91%] max-w-none top-[-0.1%] w-[154.55%]" src={imgFrame70} />
      </div>
      <div className="absolute flex h-[153.526px] items-center justify-center left-[0.02px] top-[-0.23px] w-[131.939px]">
        <div className="flex-none rotate-[-0.32deg]">
          <div className="h-[152.802px] relative w-[131.094px]" style={{ backgroundImage: "linear-gradient(179.96333966493455deg, rgba(0, 0, 0, 0) 0.84317%, rgb(136, 8, 37) 161.54%)" }} />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="-translate-x-1/2 absolute h-[1142px] left-[calc(50%-5px)] top-[4444px] w-[1922px]" data-name="About">
      <HeaderContainer />
      <Container9 />
      <Frame91 />
      <Frame55 />
    </div>
  );
}

function CoinIconContainer() {
  return (
    <div className="h-[32.863px] relative shrink-0 w-[32.085px]" data-name="coin-icon-container">
      <div className="absolute inset-[-3.91%_-4%_-3.91%_-4.02%]">
        <svg className="block size-full" fill="none" height="35.4355" preserveAspectRatio="none" viewBox="0 0 34.6576 35.4355" width="34.6576">
          <g id="coin-icon-container">
            <path d={svgPaths.p1b9c1b70} id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.57312" />
            <path d="M23.5006 13.9261V8.87012" id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.57312" />
            <path d={svgPaths.p3370c200} id="Vector 294" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.57312" />
            <path d={svgPaths.p157b9c00} id="Vector 295" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.57312" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10.953px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Playfair_Display:Bold',sans-serif] font-bold relative shrink-0 text-[#880825] text-[35.387px] w-full">Accounting Services</p>
      <p className="font-['Noto_Sans_Khmer:Condensed','Noto_Sans:Regular',sans-serif] relative shrink-0 text-[#7c7c7c] text-[15.166px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Keep your business financially organized with accurate and reliable accounting.
      </p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#fff0ce] content-stretch flex items-center justify-center px-[10.111px] py-[8.426px] relative rounded-[5.055px] shrink-0">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[15.41px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Financial records and statements
      </p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-[#fff0ce] content-stretch flex items-center justify-center px-[10.111px] py-[8.426px] relative rounded-[5.055px] shrink-0">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Condensed','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[15.41px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Bookkeeping and reporting
      </p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#fff0ce] content-center flex flex-wrap gap-y-[8.425544738769531px] items-center justify-center px-[10.111px] py-[8.426px] relative rounded-[5.055px] shrink-0">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Condensed','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[15.41px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Strategic financial insights
      </p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[16.851px] items-start relative shrink-0 w-full">
      <Frame77 />
      <Frame78 />
      <Frame79 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[37.072px] items-start relative shrink-0 w-full">
      <Frame76 />
      <Frame80 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[26.962px] items-start relative shrink-0 w-full">
      <CoinIconContainer />
      <Frame81 />
    </div>
  );
}

function ArrowUpIconContainer() {
  return (
    <div className="flex h-[7.745px] items-center justify-center relative shrink-0 w-[14.384px]">
      <div className="flex-none rotate-90">
        <div className="h-[14.384px] relative w-[7.745px]" data-name="arrow-up-icon-container">
          <div className="absolute inset-[-3.84%_-7.14%_-3.86%_-7.14%]">
            <svg className="block size-full" fill="none" height="15.4901" preserveAspectRatio="none" viewBox="0 0 8.85151 15.4901" width="8.85151">
              <g id="arrow-up-icon-container">
                <path d="M4.42667 14.9369V0.553219" id="Vector" stroke="#FFFEFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.10644" />
                <path d={svgPaths.pde937c0} id="Vector_2" stroke="#FFFEFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.10644" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#880825] content-stretch flex gap-[6.164px] items-center justify-center px-[12.328px] py-[8.219px] relative rounded-[5.898px] shrink-0 w-[169.353px]" data-name="Button Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Condensed_Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#fffefd] text-[15.41px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        conhecer mais
      </p>
      <ArrowUpIconContainer />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[52.238px] items-end justify-center relative shrink-0 w-full">
      <Frame82 />
      <ButtonContainer />
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="absolute bg-[#fffefd] blur-[3.37px] content-stretch flex flex-col gap-[8.426px] items-start left-[1754.11px] overflow-clip px-[35.387px] py-[40.443px] right-[-309.31px] rounded-[10.111px] top-[137px]" data-name="Info Container">
      <Frame83 />
      <div className="absolute bg-[rgba(0,0,0,0.01)] h-[493.737px] left-0 top-0 w-[475.201px]" />
    </div>
  );
}

function CoinIconContainer1() {
  return (
    <div className="h-[39.001px] relative shrink-0 w-[38.077px]" data-name="coin-icon-container">
      <div className="absolute inset-[-3.92%_-4%_-3.91%_-4.01%]">
        <svg className="block size-full" fill="none" height="42.054" preserveAspectRatio="none" viewBox="0 0 41.1285 42.054" width="41.1285">
          <g id="coin-icon-container">
            <path d={svgPaths.p2c71d780} id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.05395" />
            <path d="M27.8826 16.5269V10.5262" id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.05395" />
            <path d={svgPaths.p2dc74f80} id="Vector 294" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.05395" />
            <path d={svgPaths.p5b9ef40} id="Vector 295" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.05395" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[13px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Playfair_Display:Bold',sans-serif] font-bold relative shrink-0 text-[#880825] text-[38px] w-full">Serviços de Contabilidade</p>
      <p className="font-['Noto_Sans_Khmer:Condensed','Noto_Sans:Regular',sans-serif] relative shrink-0 text-[#7c7c7c] text-[18px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Mantenha seu negócio financeiramente organizado com contabilidade precisa e confiável.
      </p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#fff0ce] content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[18.29px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Registros e demonstrações financeiras
      </p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#fff0ce] content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Condensed','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[18.29px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Contabilidade e relatórios
      </p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#fff0ce] content-center flex flex-wrap gap-y-[10px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Condensed','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[18.29px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Insights financeiros estratégicos
      </p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame95 />
      <Frame96 />
      <Frame97 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full">
      <Frame93 />
      <Frame94 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <CoinIconContainer1 />
      <Frame92 />
    </div>
  );
}

function ArrowUpIconContainer1() {
  return (
    <div className="flex h-[9.192px] items-center justify-center relative shrink-0 w-[17.072px]">
      <div className="flex-none rotate-90">
        <div className="h-[17.072px] relative w-[9.192px]" data-name="arrow-up-icon-container">
          <div className="absolute inset-[-3.84%_-7.13%_-3.85%_-7.15%]">
            <svg className="block size-full" fill="none" height="18.3847" preserveAspectRatio="none" viewBox="0 0 10.5056 18.3847" width="10.5056">
              <g id="arrow-up-icon-container">
                <path d="M5.25451 17.7281V0.656598" id="Vector" stroke="#FFFEFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3132" />
                <path d={svgPaths.p5290880} id="Vector_2" stroke="#FFFEFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3132" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="bg-[#880825] content-stretch flex gap-[7.316px] items-center justify-center px-[14.632px] py-[9.755px] relative rounded-[7px] shrink-0 w-[201px]" data-name="Button Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Condensed_Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#fffefd] text-[18.29px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        conhecer mais
      </p>
      <ArrowUpIconContainer1 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[62px] items-end justify-center relative shrink-0 w-full">
      <Frame85 />
      <ButtonContainer1 />
    </div>
  );
}

function InfoContainer1() {
  return (
    <div className="absolute bg-[#fffefd] content-stretch flex flex-col items-start left-[1145px] overflow-clip px-[42px] py-[48px] right-[211px] rounded-[12px] shadow-[0px_4px_50px_10px_rgba(0,0,0,0.1)] top-[85px]" data-name="Info Container">
      <Frame84 />
    </div>
  );
}

function NumberBackground() {
  return (
    <div className="bg-[#880825] overflow-clip relative rounded-[6.734px] shrink-0 size-[39.346px]" data-name="Number Background">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[12.08px] text-[#fff0ce] text-[26.344px] top-[1.79px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        1
      </p>
    </div>
  );
}

function NumberBackground1() {
  return (
    <div className="bg-[#fff0ce] overflow-clip relative rounded-[6.734px] shrink-0 size-[39.346px]" data-name="Number Background">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[12.08px] text-[#880825] text-[26.344px] top-[1.79px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        2
      </p>
    </div>
  );
}

function NumberBackground2() {
  return (
    <div className="bg-[#fff0ce] overflow-clip relative rounded-[6.734px] shrink-0 size-[39.346px]" data-name="Number Background">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[12.08px] text-[#880825] text-[26.344px] top-[1.79px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        3
      </p>
    </div>
  );
}

function NumberBackground3() {
  return (
    <div className="bg-[#fff0ce] overflow-clip relative rounded-[6.734px] shrink-0 size-[39.346px]" data-name="Number Background">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[12.07px] text-[#880825] text-[26.344px] top-[1.79px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        4
      </p>
    </div>
  );
}

function NumberBackground4() {
  return (
    <div className="bg-[#fff0ce] overflow-clip relative rounded-[6.734px] shrink-0 size-[39.346px]" data-name="Number Background">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[12.07px] text-[#880825] text-[26.344px] top-[1.79px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        5
      </p>
    </div>
  );
}

function NumberBackground5() {
  return (
    <div className="bg-[#fff0ce] overflow-clip relative rounded-[6.734px] shrink-0 size-[39.346px]" data-name="Number Background">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[12.06px] text-[#880825] text-[26.344px] top-[1.79px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        6
      </p>
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="absolute content-stretch flex gap-[11.937px] items-center left-[1144px] top-[706px]" data-name="Number Container">
      <NumberBackground />
      <NumberBackground1 />
      <NumberBackground2 />
      <NumberBackground3 />
      <NumberBackground4 />
      <NumberBackground5 />
    </div>
  );
}

function Image5() {
  return (
    <div className="-translate-x-1/2 absolute h-[829px] left-[calc(50%+6.5px)] overflow-clip top-0 w-[1920px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.25%] left-[-10.12%] max-w-none top-[0.02%] w-[110.11%]" src={imgImage12} />
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[13.048px] bg-gradient-to-b from-[71.619%] from-[rgba(29,0,7,0)] h-[829px] left-1/2 to-[103.38%] to-[rgba(131,0,30,0.31)] top-0 w-[1920px]" data-name="Rounded Rectangle" />
      <InfoContainer />
      <InfoContainer1 />
      <NumberContainer />
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="absolute bg-[#510718] content-stretch flex items-center justify-center left-[215px] overflow-clip px-[43.732px] py-[20.991px] rounded-[11.657px] top-[-48px] w-[376px]" data-name="Header Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#fff0ce] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Como ajudamos você
      </p>
    </div>
  );
}

function Services1() {
  return (
    <div className="-translate-x-1/2 absolute h-[829px] left-[calc(50%-6.5px)] top-[2217px] w-[1933px]" data-name="SERVICES">
      <Image5 />
      <HeaderContainer1 />
    </div>
  );
}

function LogoContainer1() {
  return (
    <div className="absolute flex h-[208.664px] items-center justify-center left-[-53px] top-[200px] w-[211.12px]">
      <div className="flex-none rotate-[-9.04deg]">
        <div className="h-[181.884px] relative w-[184.841px]" data-name="Logo container 2">
          <svg className="absolute block inset-0 size-full" fill="none" height="181.884" preserveAspectRatio="none" viewBox="0 0 184.841 181.884" width="184.841">
            <g id="Logo container 2">
              <rect fill="#880825" height="181.884" rx="90.942" width="184.841" />
              <g id="Vector">
                <path d={svgPaths.p146cd9f0} fill="#FFF0CE" />
                <path d={svgPaths.p1e73fb80} fill="#FFF0CE" />
              </g>
              <path d={svgPaths.p3d88c180} fill="#FFF0CE" id="contabilidade contabilidade contabilidade contabilidade" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-center justify-center leading-[normal] relative shrink-0 text-center w-full" data-name="Header container">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Playfair_Display:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#880825] text-[46px] w-[min-content]">Nossa Especialidade</p>
      <p className="font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] relative shrink-0 text-[#71706d] text-[22px] w-[910px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`"Com mais de dez anos de experiência, ajudamos empresas da construção civil a expandir suas operações de maneira segura e sustentável, assegurando resultados duradouros."`}</p>
    </div>
  );
}

function Building2RealHomeTowerBuildingHouseEstate() {
  return (
    <div className="absolute inset-[0_19.62%_19.62%_0]" data-name="building-2--real-home-tower-building-house-estate">
      <div className="absolute inset-[-3.85%]">
        <svg className="block size-full" fill="none" height="21.6965" preserveAspectRatio="none" viewBox="0 0 21.6969 21.6965" width="21.6969">
          <g id="building-2--real-home-tower-building-house-estate">
            <path d={svgPaths.pe0cf400} id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
            <path d={svgPaths.p97a2200} id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
            <path d="M6.98581 20.9212V17.8217" id="Vector_3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
            <path d="M4.65769 13.1772H9.30693" id="Vector_4" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
            <path d="M4.65769 8.52487H9.30693" id="Vector_5" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="relative shrink-0 size-[25.065px]" data-name="Icon container">
      <Building2RealHomeTowerBuildingHouseEstate />
    </div>
  );
}

function ServiceItemContainer() {
  return (
    <div className="bg-[#fffaed] content-stretch flex gap-[14.391px] items-center px-[14.391px] py-[16.789px] relative rounded-[5.756px] shrink-0" data-name="Service item container">
      <IconContainer />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#880825] text-[17.549px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Especialistas em construção civil
      </p>
    </div>
  );
}

function Script2LanguageProgrammingCode() {
  return (
    <div className="h-[19.064px] relative shrink-0 w-[19.062px]" data-name="script-2--language-programming-code">
      <div className="absolute inset-[-3.84%_-3.86%_-3.85%_-3.86%]">
        <svg className="block size-full" fill="none" height="20.5302" preserveAspectRatio="none" viewBox="0 0 20.5349 20.5302" width="20.5349">
          <g id="script-2--language-programming-code">
            <path d={svgPaths.p13390f00} id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46645" />
            <path d={svgPaths.p223279f0} id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46645" />
            <path d="M8.79948 5.86824H10.9991" id="Vector_3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46645" />
            <path d="M7.33743 10.2687H11.0035" id="Vector_4" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46645" />
            <path d="M7.33743 14.6655H11.0035" id="Vector_5" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46645" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ServiceItemContainer1() {
  return (
    <div className="bg-[#fffaed] content-stretch flex gap-[14.391px] items-center px-[14.391px] py-[16.789px] relative rounded-[5.756px] shrink-0" data-name="Service item container">
      <Script2LanguageProgrammingCode />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#880825] text-[17.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Gestão de obrigações fiscais
      </p>
    </div>
  );
}

function GraphBarIncreaseUpProductPerformanceIncreaseArrowGraphBusinessChart() {
  return (
    <div className="h-[19.787px] relative shrink-0 w-[19.015px]" data-name="graph-bar-increase--up-product-performance-increase-arrow-graph-business-chart">
      <div className="absolute inset-[-3.85%_-4.02%_-3.84%_-3.99%]">
        <svg className="block size-full" fill="none" height="21.3086" preserveAspectRatio="none" viewBox="0 0 20.5388 21.3086" width="20.5388">
          <g id="graph-bar-increase--up-product-performance-increase-arrow-graph-business-chart">
            <path d={svgPaths.p265df680} id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.52182" />
            <path d={svgPaths.p38722b80} id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.52182" />
            <path d={svgPaths.p1b04dc80} id="Vector_3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.52182" />
            <path d={svgPaths.p16880c80} id="Vector_4" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.52182" />
            <path d={svgPaths.p3b602400} id="Vector_5" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.52182" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ServiceItemContainer2() {
  return (
    <div className="bg-[#fffaed] content-stretch flex gap-[14.391px] items-center px-[14.391px] py-[16.789px] relative rounded-[5.756px] shrink-0" data-name="Service item container">
      <GraphBarIncreaseUpProductPerformanceIncreaseArrowGraphBusinessChart />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#880825] text-[17.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Acompanhamento estratégico
      </p>
    </div>
  );
}

function JusticeScale2OfficeWorkScaleJusticeUnequalCompanyArbitrationUnbalanceCourt() {
  return (
    <div className="h-[20.027px] relative shrink-0 w-[20.022px]" data-name="justice-scale-2--office-work-scale-justice-unequal-company-arbitration-unbalance-court">
      <div className="absolute inset-[-3.84%_-3.86%_-3.84%_-3.85%]">
        <svg className="block size-full" fill="none" height="21.5652" preserveAspectRatio="none" viewBox="0 0 21.5663 21.5652" width="21.5663">
          <g id="justice-scale-2--office-work-scale-justice-unequal-company-arbitration-unbalance-court">
            <path d={svgPaths.p136ff280} id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54038" />
            <path d={svgPaths.p19dfe300} id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54038" />
            <path d={svgPaths.p13989700} id="Vector_3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54038" />
            <path d="M10.7835 4.62132V0.770377" id="Vector_4" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54038" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ServiceItemContainer3() {
  return (
    <div className="bg-[#fffaed] content-stretch flex gap-[14.391px] items-center px-[14.391px] py-[16.789px] relative rounded-[5.756px] shrink-0" data-name="Service item container">
      <JusticeScale2OfficeWorkScaleJusticeUnequalCompanyArbitrationUnbalanceCourt />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#880825] text-[17.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Tributação especializada
      </p>
    </div>
  );
}

function Building2RealHomeTowerBuildingHouseEstate1() {
  return (
    <div className="absolute inset-[0_19.59%_19.62%_0]" data-name="building-2--real-home-tower-building-house-estate">
      <div className="absolute inset-[-3.85%_-3.84%]">
        <svg className="block size-full" fill="none" height="21.6965" preserveAspectRatio="none" viewBox="0 0 21.7047 21.6965" width="21.7047">
          <g id="building-2--real-home-tower-building-house-estate">
            <path d={svgPaths.pe0cf400} id="Vector" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
            <path d={svgPaths.p1d2d1180} id="Vector_2" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
            <path d="M6.98581 20.9173V17.8178" id="Vector_3" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
            <path d="M4.6655 13.1733H9.31474" id="Vector_4" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
            <path d="M4.6655 8.52487H9.31474" id="Vector_5" stroke="#880825" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54975" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="relative shrink-0 size-[25.065px]" data-name="Icon container">
      <Building2RealHomeTowerBuildingHouseEstate1 />
    </div>
  );
}

function ServiceItemContainer4() {
  return (
    <div className="bg-[#fffaed] content-stretch flex gap-[14.391px] items-center px-[14.391px] py-[16.789px] relative rounded-[5.756px] shrink-0" data-name="Service item container">
      <IconContainer1 />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#880825] text-[17.549px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Consultoria em planejamento tributário
      </p>
    </div>
  );
}

function ServicesContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[13.43118667602539px_13.431px] items-center justify-center relative shrink-0 w-[1048px]" data-name="Services container">
      <ServiceItemContainer />
      <ServiceItemContainer1 />
      <ServiceItemContainer2 />
      <ServiceItemContainer3 />
      <ServiceItemContainer4 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-center left-[388px] top-[249px] w-[1148px]">
      <HeaderContainer2 />
      <ServicesContainer />
    </div>
  );
}

function BlankCalendarBlankCalendarDateDayMonthEmpty() {
  return (
    <div className="h-[17.437px] relative shrink-0 w-[17.438px]" data-name="blank-calendar--blank-calendar-date-day-month-empty">
      <div className="absolute inset-[-3.85%]">
        <svg className="block size-full" fill="none" height="18.7788" preserveAspectRatio="none" viewBox="0 0 18.7788 18.7788" width="18.7788">
          <g id="blank-calendar--blank-calendar-date-day-month-empty">
            <path d={svgPaths.p3a49f740} id="Vector" stroke="#510718" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34135" />
            <path d="M0.670673 7.3774H18.1082" id="Vector_2" stroke="#510718" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34135" />
            <path d="M4.69471 0.670673V4.69471" id="Vector_3" stroke="#510718" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34135" />
            <path d="M14.0841 0.670673V4.69471" id="Vector_4" stroke="#510718" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34135" />
            <path d="M4.69471 2.68269H11.4014" id="Vector_5" stroke="#510718" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34135" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="bg-[#eadbba] content-stretch drop-shadow-[0px_4px_10px_rgba(0,0,0,0.3)] flex gap-[11.444px] items-center justify-center px-[21.583px] py-[11.444px] relative rounded-[9.156px] shrink-0 w-[244px]" data-name="Button container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[21.212px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        agendar reunião
      </p>
      <BlankCalendarBlankCalendarDateDayMonthEmpty />
    </div>
  );
}

function CallToActionTextContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-y-[63.16641616821289px] items-center justify-between left-[calc(50%+8.5px)] top-[calc(50%-13.05px)] w-[1136px]" data-name="Call to action text container">
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[71.137px] relative shrink-0 text-[#fff0ce] text-[38px] whitespace-nowrap">Agende uma reunião para discutir seu projeto</p>
      <ButtonContainer2 />
    </div>
  );
}

function CallToActionContainer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#510718] h-[223.896px] left-[calc(50%+6.5px)] overflow-clip top-[413.11px] w-[1935px]" data-name="Call to action container">
      <CallToActionTextContainer />
    </div>
  );
}

function Image2Vectorized() {
  return (
    <div className="absolute h-[414.572px] left-[-26px] top-0 w-[1194.598px]" data-name="image 2 [Vectorized]">
      <svg className="absolute block inset-0 size-full" fill="none" height="414.577" preserveAspectRatio="none" viewBox="0 0 1194.6 414.577" width="1194.6">
        <g id="image 2 [Vectorized]">
          <path d={svgPaths.p2c728200} fill="#510718" id="Vector" />
          <path d={svgPaths.p7a2ef00} fill="url(#paint0_linear_0_65)" id="Vector_2" />
          <path d={svgPaths.p21ef6d80} fill="url(#paint1_linear_0_65)" id="Vector_3" />
          <path d={svgPaths.p1179b00} fill="url(#paint2_linear_0_65)" id="Vector_4" />
          <path d={svgPaths.pa09d280} fill="url(#paint3_linear_0_65)" id="Vector_5" />
          <path d={svgPaths.p1d406870} fill="url(#paint4_linear_0_65)" id="Vector_6" />
          <path d={svgPaths.p24240440} fill="url(#paint5_linear_0_65)" id="Vector_7" />
          <path d={svgPaths.pd12f980} fill="url(#paint6_linear_0_65)" id="Vector_8" />
          <path d={svgPaths.p14ee8580} fill="url(#paint7_linear_0_65)" id="Vector_9" />
          <path d={svgPaths.p12e04600} fill="url(#paint8_linear_0_65)" id="Vector_10" />
          <path d={svgPaths.p2d01fa80} fill="url(#paint9_linear_0_65)" id="Vector_11" />
          <path d={svgPaths.p12136200} fill="url(#paint10_linear_0_65)" id="Vector_12" />
          <path d={svgPaths.p33c84b00} fill="url(#paint11_linear_0_65)" id="Vector_13" />
          <path d={svgPaths.p8f98900} fill="url(#paint12_linear_0_65)" id="Vector_14" />
          <path d={svgPaths.p1fbfe100} fill="url(#paint13_linear_0_65)" id="Vector_15" />
          <path d={svgPaths.p2f78f900} fill="url(#paint14_linear_0_65)" id="Vector_16" />
          <path d={svgPaths.pec8f00} fill="url(#paint15_linear_0_65)" id="Vector_17" />
          <path d={svgPaths.p1b531c00} fill="url(#paint16_linear_0_65)" id="Vector_18" />
          <path d={svgPaths.p1ca17a00} fill="url(#paint17_linear_0_65)" id="Vector_19" />
          <path d={svgPaths.p36d8b400} fill="url(#paint18_linear_0_65)" id="Vector_20" />
          <path d={svgPaths.p84e3f00} fill="url(#paint19_linear_0_65)" id="Vector_21" />
          <path d={svgPaths.p25bfa00} fill="url(#paint20_linear_0_65)" id="Vector_22" />
          <path d={svgPaths.pf68bc00} fill="url(#paint21_linear_0_65)" id="Vector_23" />
          <path d={svgPaths.p85fd300} fill="url(#paint22_linear_0_65)" id="Vector_24" />
          <path d={svgPaths.p31277200} fill="url(#paint23_linear_0_65)" id="Vector_25" />
          <path d={svgPaths.p5659b00} fill="url(#paint24_linear_0_65)" id="Vector_26" />
          <path d={svgPaths.p26d3e300} fill="url(#paint25_linear_0_65)" id="Vector_27" />
          <path d={svgPaths.p194b4080} fill="url(#paint26_linear_0_65)" id="Vector_28" />
          <path d={svgPaths.p14f95380} fill="#510718" id="Vector_29" />
          <path d={svgPaths.p12e87d00} fill="#510718" id="Vector_30" />
          <path d={svgPaths.p2c1f5900} fill="url(#paint27_linear_0_65)" id="Vector_31" />
          <path d={svgPaths.p5afdcf0} fill="#510718" id="Vector_32" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_65" x1="688.292" x2="688.292" y1="145.285" y2="327.557">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_65" x1="672.401" x2="672.401" y1="224.809" y2="327.558">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_65" x1="269.103" x2="269.103" y1="169.777" y2="339.961">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_65" x1="920.203" x2="920.203" y1="169.84" y2="339.922">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_65" x1="83.154" x2="83.154" y1="140.672" y2="313.23">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_0_65" x1="165.888" x2="165.888" y1="140.926" y2="331.455">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_0_65" x1="55.4638" x2="55.4638" y1="169.766" y2="343.352">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_0_65" x1="1106.85" x2="1106.85" y1="156.973" y2="297.371">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_0_65" x1="418.46" x2="418.46" y1="148.73" y2="320.61">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_0_65" x1="1023.54" x2="1023.54" y1="183.777" y2="331.489">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_0_65" x1="772.967" x2="772.967" y1="183.652" y2="321.094">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_0_65" x1="557.625" x2="557.625" y1="177.219" y2="325.429">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_0_65" x1="213.774" x2="213.774" y1="217.348" y2="343.092">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_0_65" x1="976.214" x2="976.214" y1="217.688" y2="342.997">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_0_65" x1="1122.03" x2="1122.03" y1="257.621" y2="342.857">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_0_65" x1="138.551" x2="138.551" y1="269.359" y2="378.751">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_0_65" x1="1050.41" x2="1050.41" y1="264.578" y2="378.763">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_0_65" x1="627.423" x2="627.423" y1="242.262" y2="312.247">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_0_65" x1="1186.1" x2="1186.1" y1="234.242" y2="307.659">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_0_65" x1="327.477" x2="327.477" y1="272.531" y2="355.232">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_0_65" x1="861.293" x2="861.293" y1="273.754" y2="355.274">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_0_65" x1="568.178" x2="568.178" y1="324.809" y2="339.665">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_0_65" x1="473.536" x2="473.536" y1="43.1953" y2="280.546">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_0_65" x1="517.105" x2="517.105" y1="126.148" y2="327.511">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_0_65" x1="855.13" x2="855.13" y1="126.672" y2="279.21">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_0_65" x1="631.639" x2="631.639" y1="102.816" y2="270.162">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_0_65" x1="334.669" x2="334.669" y1="136.137" y2="279.223">
            <stop offset="0.177885" stopColor="#641628" />
            <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_0_65" x1="355.326" x2="355.326" y1="277.223" y2="285.341">
            <stop offset="0.365385" stopColor="#880825" />
            <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Image2Vectorized1() {
  return (
    <div className="absolute flex h-[397.185px] items-center justify-center left-[576.01px] top-[19.55px] w-[1358.987px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[397.185px] relative w-[1358.987px]" data-name="image 2 [Vectorized]">
          <div className="absolute inset-[-4.78%_0_0_0]">
            <svg className="block size-full" fill="none" height="416.158" preserveAspectRatio="none" viewBox="0 0 1358.99 416.158" width="1358.99">
              <g id="image 2 [Vectorized]">
                <path d={svgPaths.p17555c00} fill="#510718" id="Vector" />
                <path d={svgPaths.p14494d00} fill="url(#paint0_linear_0_32)" id="Vector_2" />
                <path d={svgPaths.p26602f00} fill="url(#paint1_linear_0_32)" id="Vector_3" />
                <path d={svgPaths.p2aebcc00} fill="url(#paint2_linear_0_32)" id="Vector_4" />
                <path d={svgPaths.p153beec0} fill="url(#paint3_linear_0_32)" id="Vector_5" />
                <path d={svgPaths.p2133ae80} fill="url(#paint4_linear_0_32)" id="Vector_6" />
                <path d={svgPaths.p3ef2df00} fill="url(#paint5_linear_0_32)" id="Vector_7" />
                <path d={svgPaths.p190d5680} fill="url(#paint6_linear_0_32)" id="Vector_8" />
                <path d={svgPaths.p7f6af80} fill="url(#paint7_linear_0_32)" id="Vector_9" />
                <path d={svgPaths.p236c4900} fill="url(#paint8_linear_0_32)" id="Vector_10" />
                <path d={svgPaths.p3bca4f00} fill="url(#paint9_linear_0_32)" id="Vector_11" />
                <path d={svgPaths.p17a48a00} fill="url(#paint10_linear_0_32)" id="Vector_12" />
                <path d={svgPaths.p2d0a1000} fill="url(#paint11_linear_0_32)" id="Vector_13" />
                <path d={svgPaths.pc570080} fill="url(#paint12_linear_0_32)" id="Vector_14" />
                <path d={svgPaths.p20663900} fill="url(#paint13_linear_0_32)" id="Vector_15" />
                <path d={svgPaths.p3cddc900} fill="url(#paint14_linear_0_32)" id="Vector_16" />
                <path d={svgPaths.p383b9280} fill="url(#paint15_linear_0_32)" id="Vector_17" />
                <path d={svgPaths.p6658d80} fill="url(#paint16_linear_0_32)" id="Vector_18" />
                <path d={svgPaths.p2a80d300} fill="url(#paint17_linear_0_32)" id="Vector_19" />
                <path d={svgPaths.p2e70e100} fill="url(#paint18_linear_0_32)" id="Vector_20" />
                <path d={svgPaths.pb767720} fill="url(#paint19_linear_0_32)" id="Vector_21" />
                <path d={svgPaths.p3158dba0} fill="url(#paint20_linear_0_32)" id="Vector_22" />
                <path d={svgPaths.p2f991200} fill="url(#paint21_linear_0_32)" id="Vector_23" />
                <path d={svgPaths.p1ef9fb80} fill="url(#paint22_linear_0_32)" id="Vector_24" />
                <path d={svgPaths.p3ca81f80} fill="url(#paint23_linear_0_32)" id="Vector_25" />
                <path d={svgPaths.p1c134a00} fill="url(#paint24_linear_0_32)" id="Vector_26" />
                <path d={svgPaths.p19731c80} fill="url(#paint25_linear_0_32)" id="Vector_27" />
                <path d={svgPaths.p27458280} fill="url(#paint26_linear_0_32)" id="Vector_28" />
                <path d={svgPaths.p1dfe6700} fill="#510718" id="Vector_29" />
                <path d={svgPaths.p3ae6be00} fill="#510718" id="Vector_30" />
                <path d={svgPaths.p24267900} fill="url(#paint27_linear_0_32)" id="Vector_31" />
                <path d={svgPaths.p1511dc00} fill="#510718" id="Vector_32" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_32" x1="783.015" x2="783.015" y1="114.398" y2="318.648">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_32" x1="764.937" x2="764.937" y1="203.508" y2="318.646">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_32" x1="306.138" x2="306.138" y1="141.84" y2="332.544">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_32" x1="1046.84" x2="1046.84" y1="141.906" y2="332.496">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_32" x1="94.5966" x2="94.5966" y1="109.227" y2="302.591">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_0_32" x1="188.709" x2="188.709" y1="109.508" y2="323.011">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_0_32" x1="63.0853" x2="63.0853" y1="141.828" y2="336.345">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_0_32" x1="1259.16" x2="1259.16" y1="127.484" y2="284.811">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_0_32" x1="476.02" x2="476.02" y1="118.262" y2="310.866">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_0_32" x1="1164.39" x2="1164.39" y1="157.535" y2="323.058">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_0_32" x1="879.339" x2="879.339" y1="157.395" y2="311.409">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_0_32" x1="634.372" x2="634.372" y1="150.188" y2="316.268">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_0_32" x1="243.177" x2="243.177" y1="195.152" y2="336.058">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_0_32" x1="1110.56" x2="1110.56" y1="195.531" y2="335.95">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_0_32" x1="1276.44" x2="1276.44" y1="240.281" y2="335.795">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_0_32" x1="157.612" x2="157.612" y1="253.434" y2="376.015">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_0_32" x1="1194.96" x2="1194.96" y1="248.078" y2="376.032">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_0_32" x1="713.763" x2="713.763" y1="223.074" y2="301.498">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_0_32" x1="1349.32" x2="1349.32" y1="214.074" y2="296.344">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_0_32" x1="372.54" x2="372.54" y1="256.992" y2="349.665">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_0_32" x1="979.817" x2="979.817" y1="258.363" y2="349.713">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_0_32" x1="646.378" x2="646.378" y1="315.57" y2="332.218">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_0_32" x1="538.706" x2="538.706" y1="0" y2="265.97">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_0_32" x1="588.268" x2="588.268" y1="92.9568" y2="318.599">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_0_32" x1="972.802" x2="972.802" y1="93.5469" y2="264.478">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_0_32" x1="718.56" x2="718.56" y1="66.8047" y2="254.329">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_0_32" x1="380.716" x2="380.716" y1="104.141" y2="264.48">
                  <stop offset="0.177885" stopColor="#641628" />
                  <stop offset="1" stopColor="#CB2D51" stopOpacity="0.73" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_0_32" x1="404.231" x2="404.231" y1="262.246" y2="271.344">
                  <stop offset="0.365385" stopColor="#880825" />
                  <stop offset="1" stopColor="#9C0A2B" stopOpacity="0.53" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundImageContainer() {
  return (
    <div className="absolute contents left-[-26px] top-0" data-name="Background image container">
      <Image2Vectorized />
      <Image2Vectorized1 />
    </div>
  );
}

function BackgroundContainer() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-6.5px)] top-0" data-name="Background container">
      <CallToActionContainer />
      <BackgroundImageContainer />
    </div>
  );
}

function Frame99() {
  return (
    <div className="-translate-x-1/2 absolute h-[637px] left-[calc(50%+1px)] overflow-clip top-[746px] w-[1922px]">
      <BackgroundContainer />
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="absolute flex h-[188.266px] items-center justify-center left-[1782px] top-[445px] w-[190.328px]">
      <div className="flex-none rotate-[10.97deg]">
        <div className="h-[160.201px] relative w-[162.806px]" data-name="Logo container">
          <svg className="absolute block inset-0 size-full" fill="none" height="160.201" preserveAspectRatio="none" viewBox="0 0 162.806 160.201" width="162.806">
            <g id="Logo container">
              <rect fill="#FFF0CE" height="160.201" rx="80.1007" width="162.806" />
              <g id="Vector">
                <path d={svgPaths.p1bb69b00} fill="#880825" />
                <path d={svgPaths.p24245671} fill="#880825" />
              </g>
              <path d={svgPaths.pd579500} fill="#880825" id="contabilidade contabilidade contabilidade contabilidade" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function EspecialidadeService() {
  return (
    <div className="-translate-x-1/2 absolute h-[1443px] left-1/2 top-[2953px] w-[1920px]" data-name="ESPECIALIDADE SERVICE">
      <LogoContainer1 />
      <Frame98 />
      <Frame99 />
      <LogoContainer />
    </div>
  );
}

function Services() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-6.5px)] top-[2217px]" data-name="Services">
      <Services1 />
      <EspecialidadeService />
    </div>
  );
}

function ImageContainer() {
  return <div className="absolute bg-[#880825] h-[184px] left-0 rounded-[7.295px] top-[13px] w-[227px]" data-name="Image Container" />;
}

function ImageContainer1() {
  return (
    <div className="absolute h-[343px] left-[533px] overflow-clip rounded-[7.295px] top-[238px] w-[338px]" data-name="Image Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.295px] size-full" src={imgImageContainer} />
      <div className="absolute h-[343.495px] left-0 top-0 w-[335.524px]" style={{ backgroundImage: "linear-gradient(179.96780048674276deg, rgba(0, 0, 0, 0) 0.84317%, rgb(136, 8, 37) 161.54%)" }} data-name="Background Shape" />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] left-[17.39px] text-[#fff0ce] text-[29.468px] top-[253.64px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        atendimento
      </p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] left-[17.95px] text-[#fff0ce] text-[27.067px] top-[281.88px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        personalizado
      </p>
    </div>
  );
}

function RightContainer() {
  return (
    <div className="absolute bg-[#fff0ce] h-[478px] left-[1266px] overflow-clip rounded-[7.295px] top-[66px] w-[338px]" data-name="Right Container">
      <div className="absolute h-[2489.969px] left-[-846.21px] top-[-947.11px] w-[1992.097px]" data-name="Princess Careers_upscayl_5x_high-fidelity-4x 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[40.62%] max-w-none size-1/4 top-[37.52%]" src={imgPrincessCareersUpscayl5XHighFidelity4X1} />
        </div>
      </div>
      <div className="absolute flex h-[550.313px] items-center justify-center left-[0.01px] top-[-1.48px] w-[427.399px]">
        <div className="flex-none rotate-[-0.32deg]">
          <div className="h-[547.97px] relative w-[424.369px]" style={{ backgroundImage: "linear-gradient(179.95938704172875deg, rgba(0, 0, 0, 0) 0.84317%, rgb(136, 8, 37) 161.54%)" }} data-name="Background Shape" />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] left-[16px] text-[#fff0ce] text-[35.472px] top-[360px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>{`relacionamento `}</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] left-[16px] text-[#fff0ce] text-[35.472px] top-[396px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        ao longo prazo
      </p>
    </div>
  );
}

function RightInnerContainer() {
  return (
    <div className="absolute contents left-[29.07px] top-[121.84px]" data-name="Right Inner Container">
      <div className="absolute flex h-[56.708px] items-center justify-center left-[29.07px] top-[121.84px] w-[186.212px]">
        <div className="flex-none rotate-[-0.22deg]">
          <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Bold','Noto_Sans:Bold',sans-serif] leading-[normal] relative text-[#fff0ce] text-[41.402px] tracking-[-2.0701px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
            empresas
          </p>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_Khmer:Bold','Noto_Sans:Bold',sans-serif] leading-[normal] left-[29.19px] text-[#fff0ce] text-[35.727px] top-[164.74px] tracking-[-1.7864px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        atendidas
      </p>
    </div>
  );
}

function RightContainer1() {
  return (
    <div className="absolute contents left-[19.45px] top-[18.23px]" data-name="Right Container">
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Noto_Sans_Khmer:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] from-[#fff0ce] from-[37.587%] leading-[0] left-[19.45px] text-[94.008px] text-[transparent] to-[#9a917d] to-[115.21%] top-[18.23px] tracking-[-7.5207px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        <span className="bg-clip-text bg-gradient-to-b from-[#fff0ce] from-[37.587%] leading-[normal] to-[#9a917d] to-[115.21%]">+</span>
        <span className="bg-clip-text bg-gradient-to-b from-[#fff0ce] from-[37.587%] leading-[normal] to-[#9a917d] to-[115.21%]">250</span>
      </p>
      <RightInnerContainer />
    </div>
  );
}

function MiddleContainer() {
  return (
    <div className="absolute bg-gradient-to-b from-[#880825] from-[65.665%] h-[526px] left-[890px] overflow-clip rounded-[7.295px] to-[#41000f] to-[107.34%] top-[105px] w-[356px]" data-name="Middle Container">
      <div className="absolute h-[152.584px] left-[-41.34px] top-[282.07px] w-[396.961px]" data-name="Vector">
        <div className="absolute inset-[-1.49%_-0.26%_-1.49%_0]">
          <svg className="block size-full" fill="none" height="157.139" preserveAspectRatio="none" viewBox="0 0 398.148 157.139" width="398.148">
            <path d={svgPaths.p1dfd0800} id="Vector" stroke="url(#paint0_linear_0_28)" strokeWidth="4.55927" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_28" x1="171.871" x2="171.871" y1="-26.8989" y2="325.077">
                <stop stopColor="#FFF4DA" />
                <stop offset="1" stopColor="#8B806A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <RightContainer1 />
      <div className="absolute h-0 left-[-10px] top-[319px] w-[352px]">
        <div className="absolute inset-[-3.04px_0_0_0]">
          <svg className="block size-full" fill="none" height="3.03951" preserveAspectRatio="none" viewBox="0 0 352 3.03951" width="352">
            <line id="Line 1" stroke="#FFF0CF" strokeDasharray="7.9 7.9" strokeLinecap="round" strokeOpacity="0.49" strokeWidth="3.03951" x1="1.51976" x2="350.48" y1="1.51976" y2="1.51976" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LeftInnerContainer() {
  return (
    <div className="absolute contents font-['Noto_Sans_Khmer:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] left-[170px] top-[13px]" data-name="Left Inner Container">
      <p className="absolute left-[227.39px] text-[166.217px] top-[13px] tracking-[-13.2973px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        10
      </p>
      <p className="absolute left-[170px] text-[130.635px] top-[51.02px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        +
      </p>
    </div>
  );
}

function LeftContainer() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fff0ce] h-[316px] leading-[normal] left-[87px] overflow-clip rounded-[7.295px] text-[#880825] top-[238px] w-[425px] whitespace-nowrap" data-name="Left Container">
      <LeftInnerContainer />
      <p className="absolute font-['Noto_Sans_Khmer:ExtraLight','Noto_Sans:Light',sans-serif] left-[138px] text-[34.784px] top-[202px] tracking-[-2.7827px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        anos de experiência
      </p>
    </div>
  );
}

function TopContainer() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col h-[194px] items-center left-[calc(50%-256px)] top-[13px] w-[511px]" data-name="Top Container">
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium h-[148px] leading-[73.38px] min-w-full relative shrink-0 text-[#880825] text-[73.38px] w-[min-content]">Nossas Conquistas</p>
      <p className="-translate-x-1/2 absolute font-['Noto_Sans_Khmer:Light','Noto_Sans:Light','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Light','Noto_Sans_Symbols2:Regular',sans-serif] h-[52.093px] leading-[normal] left-[415px] text-[#71706d] text-[26.39px] text-center top-[148px] w-[568px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        desde 2007
      </p>
    </div>
  );
}

function Metrics() {
  return (
    <div className="-translate-x-1/2 absolute h-[635px] left-[calc(50%+0.5px)] top-[1315px] w-[1611px]" data-name="Metrics">
      <ImageContainer />
      <ImageContainer1 />
      <RightContainer />
      <MiddleContainer />
      <LeftContainer />
      <TopContainer />
    </div>
  );
}

function RightContainer2() {
  return <div className="absolute bg-[#fff0ce] h-[261px] left-[1453px] rounded-[7.295px] top-[1074px] w-[315px]" data-name="Right Container" />;
}

function RightContainer3() {
  return <div className="absolute bg-[#880825] h-[261px] left-[1815px] rounded-[7.295px] top-[1314px] w-[315px]" data-name="Right Container" />;
}

function RightContainer4() {
  return <div className="absolute bg-[#36040f] h-[188.914px] left-[1806px] rounded-[5.28px] top-[1066px] w-[228px]" data-name="Right Container" />;
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

function ContactContainer1() {
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
      <ContactContainer1 />
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

function Title1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="title">
      <p className="font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] mb-[-4px] relative shrink-0 text-[33.305px] text-[rgba(255,255,255,0.75)] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>{`Seja bem vindo `}</p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[69.172px] relative shrink-0 text-[#fffcf5] text-[64.589px] w-full">{`A contabilidade que anda do seu lado `}</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#eadbba] content-stretch drop-shadow-[0px_2.44px_3.66px_rgba(0,0,0,0.26)] flex items-center justify-center p-[10.35px] relative rounded-[8.28px] shrink-0 w-[194.573px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[19.183px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Fale Conosco
      </p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[55.92px] h-[308px] items-start left-[228px] top-[337px] w-[632px]">
      <Title1 />
      <Container10 />
    </div>
  );
}

function Header1() {
  return (
    <div className="-translate-x-1/2 absolute h-[1091px] left-[calc(50%-2px)] overflow-clip top-0 w-[1924px]" data-name="Header">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.06%] left-[-2.05%] max-w-none top-[-0.05%] w-[108.34%]" src={imgHeader} />
      </div>
      <div className="absolute backdrop-blur-[27.5px] bg-gradient-to-t from-black h-[299px] left-0 to-[rgba(0,0,0,0)] top-[869px] w-[1967px]" data-name="Footer Background" />
      <Nav />
      <Partners />
      <Frame75 />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center relative shrink-0 text-center w-[1117px]" data-name="Title Container">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[86.22px] min-w-full relative shrink-0 text-[#880825] text-[46px] w-[min-content]">Ficou com alguma dúvida ?</p>
      <p className="font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[45.362px] relative shrink-0 text-[#71706d] text-[24px] w-[1117px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        separamos algumas das principais perguntas para te ajudar
      </p>
    </div>
  );
}

function TagContainer() {
  return (
    <div className="bg-[#fff9ed] content-stretch flex items-center justify-center px-[12.578px] py-[9.433px] relative rounded-[6.289px] shrink-0" data-name="Tag Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#6b5a36] text-[20.125px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        perguntas gerais
      </p>
    </div>
  );
}

function TagContainer1() {
  return (
    <div className="bg-[#fff9ed] content-stretch flex items-center justify-center px-[12.578px] py-[9.433px] relative rounded-[6.289px] shrink-0" data-name="Tag Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#6b5a36] text-[20.125px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`construção civil `}</p>
    </div>
  );
}

function TagContainer2() {
  return (
    <div className="bg-[#a92542] content-stretch flex items-center justify-center px-[12.578px] py-[9.433px] relative rounded-[6.289px] shrink-0" data-name="Tag Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#fffafa] text-[20.125px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        abertura de empresa
      </p>
    </div>
  );
}

function TagContainer3() {
  return (
    <div className="bg-[#fff9ed] content-stretch flex items-center justify-center px-[12.578px] py-[9.433px] relative rounded-[6.289px] shrink-0" data-name="Tag Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#6b5a36] text-[20.125px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        serviço de imposto
      </p>
    </div>
  );
}

function TagContainer4() {
  return (
    <div className="bg-[#fff9ed] content-stretch flex items-center justify-center px-[12.578px] py-[9.433px] relative rounded-[6.289px] shrink-0" data-name="Tag Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#6b5a36] text-[20.125px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        folha de pagamento
      </p>
    </div>
  );
}

function TagContainer5() {
  return (
    <div className="bg-[#fff9ed] content-stretch flex items-center justify-center px-[12.578px] py-[9.433px] relative rounded-[6.289px] shrink-0 w-[364.132px]" data-name="Tag Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] min-w-px relative text-[#6b5a36] text-[20.125px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`Business Compliance & Legalization`}</p>
    </div>
  );
}

function TagsContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[16.980260848999023px_16.98px] items-center justify-center relative shrink-0 w-[856px]" data-name="Tags Container">
      <TagContainer />
      <TagContainer1 />
      <TagContainer2 />
      <TagContainer3 />
      <TagContainer4 />
      <TagContainer5 />
    </div>
  );
}

function HeaderContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Header Container">
      <TitleContainer />
      <TagsContainer />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="relative rounded-[6.4px] shrink-0 size-[41.601px]" data-name="Icon Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[calc(50%-0.08px)] text-[#6b4900] text-[25.6px] text-center top-[calc(50%-17.18px)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
          1
        </p>
      </div>
      <div aria-hidden className="absolute border-[#6b4900] border-[1.92px] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[19.462px] items-center relative shrink-0">
      <IconContainer2 />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#6b4900] text-[21.76px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Como eu faço para abrir uma empresa ?
      </p>
    </div>
  );
}

function FaqItem() {
  return (
    <div className="bg-[#fffaef] relative rounded-[7.68px] shrink-0 w-full" data-name="FAQ Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[23.066px] relative size-full">
          <Frame68 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="h-[11.025px] relative w-[23.275px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.0249" preserveAspectRatio="none" viewBox="0 0 23.2748 11.0249" width="23.2748">
                  <path d={svgPaths.p3c26ba80} fill="#6B4900" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="relative rounded-[6.4px] shrink-0 size-[41.601px]" data-name="Icon Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[calc(50%-0.08px)] text-[#6b4900] text-[25.6px] text-center top-[calc(50%-17.18px)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
          2
        </p>
      </div>
      <div aria-hidden className="absolute border-[#6b4900] border-[1.92px] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[19.462px] items-center relative shrink-0">
      <IconContainer3 />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#6b4900] text-[21.76px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Quais documentos são necessários para registro?
      </p>
    </div>
  );
}

function FaqItem1() {
  return (
    <div className="bg-[#fffaef] relative rounded-[7.68px] shrink-0 w-full" data-name="FAQ Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[23.066px] relative size-full">
          <Frame69 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="h-[11.025px] relative w-[23.275px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.0249" preserveAspectRatio="none" viewBox="0 0 23.2748 11.0249" width="23.2748">
                  <path d={svgPaths.p3c26ba80} fill="#6B4900" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="relative rounded-[6.4px] shrink-0 size-[41.601px]" data-name="Icon Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[calc(50%-0.08px)] text-[#6b4900] text-[25.6px] text-center top-[calc(50%-17.18px)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
          3
        </p>
      </div>
      <div aria-hidden className="absolute border-[#6b4900] border-[1.92px] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[19.462px] items-center relative shrink-0">
      <IconContainer4 />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#6b4900] text-[21.76px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Qual é o custo para abrir uma empresa?
      </p>
    </div>
  );
}

function FaqItem2() {
  return (
    <div className="bg-[#fffaef] relative rounded-[7.68px] shrink-0 w-full" data-name="FAQ Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[23.066px] relative size-full">
          <Frame70 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="h-[11.025px] relative w-[23.275px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.0249" preserveAspectRatio="none" viewBox="0 0 23.2748 11.0249" width="23.2748">
                  <path d={svgPaths.p3c26ba80} fill="#6B4900" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="relative rounded-[6.4px] shrink-0 size-[41.601px]" data-name="Icon Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[calc(50%-0.08px)] text-[#6b4900] text-[25.6px] text-center top-[calc(50%-17.18px)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
          4
        </p>
      </div>
      <div aria-hidden className="absolute border-[#6b4900] border-[1.92px] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[19.462px] items-center relative shrink-0">
      <IconContainer5 />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#6b4900] text-[21.76px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Como posso escolher o tipo de empresa ideal?
      </p>
    </div>
  );
}

function FaqItem3() {
  return (
    <div className="bg-[#fffaef] relative rounded-[7.68px] shrink-0 w-full" data-name="FAQ Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[23.066px] relative size-full">
          <Frame72 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="h-[11.025px] relative w-[23.275px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.0249" preserveAspectRatio="none" viewBox="0 0 23.2748 11.0249" width="23.2748">
                  <path d={svgPaths.p3c26ba80} fill="#6B4900" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="relative rounded-[6.4px] shrink-0 size-[41.601px]" data-name="Icon Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[calc(50%-0.08px)] text-[#6b4900] text-[25.6px] text-center top-[calc(50%-17.18px)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
          5
        </p>
      </div>
      <div aria-hidden className="absolute border-[#6b4900] border-[1.92px] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[19.462px] items-center relative shrink-0">
      <IconContainer6 />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Medium','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#6b4900] text-[21.76px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Quais são as obrigações fiscais de uma nova empresa?
      </p>
    </div>
  );
}

function FaqItem4() {
  return (
    <div className="bg-[#fffaef] relative rounded-[7.68px] shrink-0 w-full" data-name="FAQ Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[23.066px] relative size-full">
          <Frame101 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="h-[11.025px] relative w-[23.275px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.0249" preserveAspectRatio="none" viewBox="0 0 23.2748 11.0249" width="23.2748">
                  <path d={svgPaths.p3c26ba80} fill="#6B4900" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Questions() {
  return (
    <div className="content-stretch flex flex-col gap-[33.157px] items-center justify-center relative shrink-0 w-[1214.678px]" data-name="questions">
      <FaqItem />
      <FaqItem1 />
      <FaqItem2 />
      <FaqItem3 />
      <FaqItem4 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[70px] items-center left-[138px] top-0 w-[1648px]">
      <HeaderContainer3 />
      <Questions />
    </div>
  );
}

function Faq() {
  return (
    <div className="-translate-x-1/2 absolute h-[986px] left-[calc(50%+2.5px)] top-[6723px] w-[1923px]" data-name="FAQ">
      <Frame100 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-center leading-[normal] relative shrink-0 w-full">
      <p className="font-['Noto_Sans_Khmer:SemiBold','Noto_Sans:SemiBold',sans-serif] mb-[-1.991px] relative shrink-0 text-[#880825] text-[33.527px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 600' }}>
        Envio de Mensagem
      </p>
      <p className="font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] relative shrink-0 text-[#a9a9a9] text-[16.491px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Envie sua mensagem diretamente para o nosso e-mail. Estamos prontos para ouvir você!
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ededed] border-b-[1.397px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9.28px] py-[10.606px] relative size-full">
          <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#c8c6c2] text-[14.264px] w-[313.805px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
            digite o seu melhor e-mail
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[9.7px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[17.637px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        E-mail
      </p>
      <Frame56 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ededed] border-b-[1.397px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9.28px] py-[10.606px] relative size-full">
          <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#c8c6c2] text-[14.264px] w-[313.805px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`digite o seu nome `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[9.7px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[17.637px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Nome
      </p>
      <Frame60 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ededed] border-b-[1.397px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9.28px] py-[10.606px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] min-w-px relative text-[#c8c6c2] text-[14.264px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`digite o seu numero de telefone `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[9.7px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[17.637px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Número de telefone
      </p>
      <Frame62 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="h-[125.286px] relative rounded-[5.82px] shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ededed] border-b-[0.97px] border-solid inset-0 pointer-events-none rounded-[5.82px]" />
      <div className="content-stretch flex items-start px-[8.73px] py-[9.215px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] min-w-px relative text-[#c8c6c2] text-[14.264px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`digite o seu numero de telefone `}</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[9.7px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#510718] text-[17.637px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Mensagem
      </p>
      <Frame67 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[26.542px] items-start relative shrink-0 w-full">
      <Frame57 />
      <Frame59 />
      <Frame61 />
      <Frame66 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[47.497px] items-center relative shrink-0 w-full">
      <Frame63 />
      <Frame64 />
    </div>
  );
}

function ContactContainer2() {
  return (
    <div className="bg-[#880825] content-stretch flex items-center justify-center px-[7.964px] py-[12.742px] relative rounded-[6.969px] shrink-0 w-[367.937px]" data-name="Contact Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#eadbba] text-[22.649px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 600' }}>
        enviar e-mail
      </p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fffcf4] content-stretch flex flex-col gap-[40.456px] h-[897.551px] items-center left-[calc(50%+411.86px)] overflow-clip pb-[34.924px] pt-[54.482px] px-[41.909px] top-[112.27px] w-[726.423px]">
      <Frame65 />
      <ContactContainer2 />
    </div>
  );
}

function FormContact() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fff0ce] h-[1108px] left-[calc(50%-1px)] overflow-clip top-[8881px] w-[1922px]" data-name="FORM CONTACT">
      <div className="-translate-x-1/2 absolute h-[1183.975px] left-[calc(50%-20.89px)] rounded-[18.868px] top-0 w-[1963.228px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[18.868px]">
          <img alt="" className="absolute h-[128.42%] left-[-36.53%] max-w-none top-[-28.45%] w-[136.52%]" src={imgImage13} />
        </div>
      </div>
      <Frame53 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[17.43px] items-start relative shrink-0 w-full">
      <div className="h-[48.803px] relative shrink-0 w-[91.253px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="48.8032" preserveAspectRatio="none" viewBox="0 0 91.253 48.8032" width="91.253">
          <g id="Vector">
            <path d={svgPaths.p4fd6200} fill="#FFFCF5" />
            <path d={svgPaths.p2946f880} fill="#FFFCF5" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[21.262px] text-white w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Ajudando empresas a crescer com segurança.
      </p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[434px]">
      <Frame105 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] gap-[11px] items-start relative shrink-0 w-full">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Resultados
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Serviços
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Sobre Nós
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        FAQ
      </p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[normal] relative shrink-0 text-[22px] text-white w-[137px]">
      <p className="font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] relative shrink-0 w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Links rápidos
      </p>
      <Frame108 />
    </div>
  );
}

function MapFoldNavigationMapMapsGpsTravelFold() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-[24px]" data-name="map-fold--navigation-map-maps-gps-travel-fold">
      <div className="absolute inset-[-3.85%]">
        <svg className="block size-full" fill="none" height="25.8461" preserveAspectRatio="none" viewBox="0 0 25.8481 25.8461" width="25.8481">
          <g id="map-fold--navigation-map-maps-gps-travel-fold">
            <path d={svgPaths.p3ad7bb00} id="Vector" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.84585" />
            <path d={svgPaths.p16657100} id="Vector_2" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.84585" />
            <path d={svgPaths.p20b9700} id="Vector_3" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.84585" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <MapFoldNavigationMapMapsGpsTravelFold />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Noto_Sans_Khmer:Light','Noto_Sans:Light','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Light','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#eadbba] text-[22px] w-[298px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Avenida Domenico Perella, 53
      </p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="h-[22px] relative shrink-0 w-[22.034px]" data-name="Vector">
        <div className="absolute inset-[-3.85%]">
          <svg className="block size-full" fill="none" height="23.6949" preserveAspectRatio="none" viewBox="0 0 23.7287 23.6949" width="23.7287">
            <path d={svgPaths.p37114fc0} id="Vector" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69491" />
          </svg>
        </div>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Noto_Sans_Khmer:Light','Noto_Sans:Light','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Light','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#eadbba] text-[22px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        11 91950-7333
      </p>
    </div>
  );
}

function SignAtMailEmailAtSignReadAddress() {
  return (
    <div className="h-[22.063px] relative shrink-0 w-[22px]" data-name="sign-at--mail-email-at-sign-read-address">
      <div className="absolute inset-[-3.84%_-3.86%_-3.85%_-3.86%]">
        <svg className="block size-full" fill="none" height="23.7607" preserveAspectRatio="none" viewBox="0 0 23.697 23.7607" width="23.697">
          <g id="sign-at--mail-email-at-sign-read-address">
            <path d={svgPaths.p19b51c00} id="Vector" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69719" />
            <path d={svgPaths.p1a386640} id="Vector_2" stroke="#EADBBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69719" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
      <SignAtMailEmailAtSignReadAddress />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Noto_Sans_Khmer:Light','Noto_Sans:Light','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Light','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#eadbba] text-[22px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        joaopedro@rgicontabildiade.com
      </p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[372px]">
      <Frame110 />
      <Frame111 />
      <Frame112 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[118px] items-start relative shrink-0">
      <Frame107 />
      <Frame109 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[174px] top-[97px] w-[1575px]">
      <Frame104 />
      <Frame106 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute flex h-[42.921px] items-center justify-center left-[15.5px] top-[9.61px] w-[31.052px]">
      <div className="flex-none rotate-[-0.38deg]">
        <div className="h-[42.717px] relative w-[30.768px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="42.7172" preserveAspectRatio="none" viewBox="0 0 30.7663 42.7172" width="30.7663">
            <g id="Group 9">
              <path d={svgPaths.p17f8b500} fill="#1F1F1F" id="Ellipse 1" />
              <path d={svgPaths.p2c900b80} fill="#1F1F1F" id="Ellipse 2" />
              <path d={svgPaths.p13821800} fill="#1F1F1F" id="Ellipse 3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="backdrop-blur-[0.31px] bg-[#e9e9e9] overflow-clip relative rounded-[11.935px] shrink-0 size-[62px]">
      <Group />
    </div>
  );
}

function Frame113() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[1499px] top-[399px]">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Noto_Sans_Khmer:Light','Noto_Sans:Light',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>{`desenvolvido por `}</p>
      <Frame54 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="absolute bg-[#36040f] h-[508px] left-[-2px] overflow-clip top-[9989px] w-[1922px]">
      <Frame103 />
      <Frame113 />
    </div>
  );
}

function ImageContainer2() {
  return <div className="absolute bg-[#880825] h-[316px] left-[-69px] rounded-[7.295px] top-[1544px] w-[268px]" data-name="Image Container" />;
}

function RightContainer5() {
  return <div className="absolute bg-[#fff0ce] h-[261px] left-[-194px] rounded-[7.295px] top-[1255px] w-[315px]" data-name="Right Container" />;
}

export default function Slide() {
  return (
    <div className="bg-[#fffdf8] relative size-full" data-name="Slide 16:9 - 83">
      <div className="absolute h-[427px] left-[-74.16px] top-[7251px] w-[823.039px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="427" preserveAspectRatio="none" viewBox="0 0 823.039 427" width="823.039">
          <g id="Vector">
            <path d={svgPaths.pad3e600} fill="#FFF0CE" fillOpacity="0.81" />
            <path d={svgPaths.p126df200} fill="#FFF0CE" fillOpacity="0.81" />
          </g>
        </svg>
      </div>
      <Frame71 />
      <Reviews />
      <About />
      <Services />
      <Metrics />
      <RightContainer2 />
      <RightContainer3 />
      <RightContainer4 />
      <Header1 />
      <Faq />
      <FormContact />
      <Frame102 />
      <ImageContainer2 />
      <RightContainer5 />
    </div>
  );
}