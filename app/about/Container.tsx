import ExperienceContainer from "./ExperienceContainer";
import Experience from "./Experience";
import Highlight from "./Highlight";

export default function Container() {
  return (
    <div>
      <p className="py-[16px] text-[20px] font-semibold md:pl-[60px]">
          Profile 🍻
      </p>
      <div className="md:pl-[80px]" >
        はじめまして. 原田零生 (はらだれお) と申します.
        プロダクトエンジニアを目指す日本の学生です.
        幅広い情報科学の領域に興味があります.
        最近はOSの勉強をしています.
        人生の究極の目標は宇宙飛行士になることです.
      </div>
      <p className="py-[16px] text-[20px] font-semibold md:pl-[60px]">
          Stack
      </p>
      <p className="py-[16px] text-[20px] font-semibold md:pl-[60px]">
          Favorite
      </p>
      <div className="pb-[16px]">
        <p className="py-[16px] text-[20px] font-semibold md:pl-[60px]">
          Experience
        </p>
        <ExperienceContainer>
          <Experience
            title="株式会社キベ"
            subtitle="- System Engineer"
            term="02/2022 - 現在"
            last={false}
            experience={true}
          >
            <Highlight experience={true}>
              <li>
                Pythonを用いてAutoCadの図面を自動生成するプログラムを開発しました.
              </li>
            </Highlight>
          </Experience>
          <Experience
            title="株式会社うるる"
            subtitle="- AI Engineer"
            term="10/2022 - 06/2023"
            last={true}
            experience={true}
          >
            <Highlight experience={true}>
              <li>
                Transformerを用いた自然言語処理で文書の分類モデルを開発しました.
              </li>
              <li>
                ChatGPTのAPIを用いて文書内の特定の項目を抽出するアプリケーションを開発しました.
              </li>
            </Highlight>
          </Experience>
        </ExperienceContainer>
      </div>
      <hr />
      <div className="py-[16px]">
        <p className="py-[16px] text-[20px] font-semibold md:pl-[60px]">
          Education
        </p>
        <ExperienceContainer>
          <Experience
            title="東京大学 情報理工学系研究科"
            subtitle="- コンピュータ科学専攻"
            term="04/2024 - "
            last={false}
            experience={false}
          >
            <Highlight experience={false}>
              <li>修士課程で進学する予定です.</li>
            </Highlight>
          </Experience>
          <Experience
            title="東北大学 工学部"
            subtitle="- 機械知能・航空工学科"
            term="04/2020 - 現在"
            last={true}
            experience={false}
          >
            <Highlight experience={false}>
              <li>
                4力学 (材料, 熱, 流体, 機械) や制御工学, 宇宙工学,
                プログラミングなどを学びました.
              </li>
              <li>
                コンピュータアーキテクチャのラボに所属しています.
                専門は動画像圧縮の効率化,
                特にフレーム間予測における演算量削減に関する研究です.
              </li>
              <li>
                人力飛行機の翼の主任をしていました. 鳥人間コンテスト (第44回,
                人力プロペラ機ディスタンス部門) に出場して優勝しました.
              </li>
            </Highlight>
          </Experience>
        </ExperienceContainer>
      </div>
    </div>
  );
}
