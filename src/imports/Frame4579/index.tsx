import imgBasemapImage from "./5e12c064187e9071aa9637607e9ceb0321ea1233.png";

function ContactContainer() {
  return (
    <div className="bg-[#510718] content-stretch flex h-[57px] items-center justify-center px-[8px] py-[16px] relative rounded-[7.592px] shrink-0 w-[243px]" data-name="Contact Container">
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        como chegar
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[38px] items-center relative shrink-0 w-[1172px]">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#880825] text-[48px] whitespace-nowrap">Visite nosso escritório</p>
      <ContactContainer />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame1 />
      <p className="[word-break:break-word] font-['Noto_Sans_Khmer:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7e7e7e] text-[24px] w-[1162px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Prefere conversar pessoalmente? Nossa equipe está pronta para recebê-lo e ajudar com suas necessidades contábeis.
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[66px] items-start px-[115px] py-[65px] relative size-full">
      <Frame2 />
      <div className="h-[698px] relative rounded-[10px] shrink-0 w-[1553px]" data-name="Basemap image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[133.5%] left-0 max-w-none top-[0.01%] w-full" src={imgBasemapImage} />
        </div>
      </div>
    </div>
  );
}