// 最後のコンテンツは少し変更することでtimelineの棒を非表示にしている

export default function Container() {
  return (
    <>
      <div>
        <p>Leo Harada</p>

        <p>Experience</p>

        <div className="flex grid-cols-4 flex-col text-[#000] md:grid">
          <div className="flex md:contents">
            <div className="relative col-start-1 col-end-2 mr-[16px] md:mx-auto">
              <div className="absolute top-0 h-[16px] w-[16px] rounded-full bg-[#6081a2] text-center shadow">
                <div className="absolute left-[3px] top-[3px] h-[10px] w-[10px] rounded-full bg-[#fff] text-center shadow"></div>
              </div>
              <div className="flex h-full w-[16px] items-center justify-center">
                <div className="pointer-events-none h-[100%] w-[4px] bg-[#6081a2]"></div>
              </div>
            </div>
            <div className="col-start-2 col-end-5 mt-[-5px] flex-col">
              <h3 className="text-lg font-semibold text-[black]">
                株式会社うるる
              </h3>
              <p>AI Engineer</p>
              <p className="w-full text-justify leading-tight">
                10/2022 - 06/2023
              </p>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative col-start-1 col-end-2 mr-[16px] md:mx-auto">
              <div className="absolute top-[10px] z-10 h-[16px] w-[16px] rounded-full bg-[#6081a2] text-center shadow">
                <div className="absolute left-[3px] top-[3px] h-[10px] w-[10px] rounded-full bg-[#fff] text-center shadow"></div>
              </div>
              <div className="relative flex h-full w-[16px] items-center justify-center">
                <div className="pointer-events-none absolute top-0 h-[20px] w-[4px] bg-[#6081a2]"></div>
              </div>
            </div>
            <div className="col-start-2 col-end-5 mt-[5px] flex-col">
              <h3 className="text-lg font-semibold text-[black]">
                株式会社キベ
              </h3>
              <p>System Engineer</p>
              <p className="w-full text-justify leading-tight">
                02/2022 - present
              </p>
            </div>
          </div>
        </div>

        <p>Education</p>
        <div className="flex grid-cols-4 flex-col text-[#000] md:grid">
          <div className="flex md:contents">
            <div className="relative col-start-1 col-end-2 mr-[16px] md:mx-auto">
              <div className="absolute h-[16px] w-[16px] rounded-full bg-[#6081a2] text-center shadow">
                <div className="absolute left-[3px] top-[3px] h-[10px] w-[10px] rounded-full bg-[#fff] text-center shadow"></div>
              </div>
              <div className="flex h-full w-[16px] items-center justify-center">
                <div className="pointer-events-none h-full w-[4px] bg-[#6081a2]"></div>
              </div>
            </div>
            <div className="col-start-2 col-end-5 mt-[-6px] flex-col">
              <p className="mb-1 text-lg font-semibold text-[black]">
                東京大学 情報理工学系研究科 コンピュータ科学専攻
              </p>
              <p className="w-full text-justify leading-tight">
                04/2024 - | Tokyo, Japan
              </p>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative col-start-1 col-end-2 mr-[16px] md:mx-auto">
              <div className="absolute top-[10px] z-10 h-[16px] w-[16px] rounded-full bg-[#6081a2] text-center shadow">
                <div className="absolute left-[3px] top-[3px] h-[10px] w-[10px] rounded-full bg-[#fff] text-center shadow"></div>
              </div>
              <div className="relative flex w-[16px] items-center justify-center">
                <div className="pointer-events-none absolute top-0 h-[20px] w-[4px] bg-[#6081a2]"></div>
              </div>
            </div>
            <div className="col-start-2 col-end-5 mt-[5px] flex-col">
              <p className="mb-1 text-lg font-semibold text-[black]">
                東北大学 工学部 機械知能・航空工学科
              </p>
              <p className="w-full text-justify leading-tight">
                04/2020 - present |Sendai, Japan
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
