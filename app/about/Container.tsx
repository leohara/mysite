import ExperienceContainer from "./ExperienceContainer";
import Experience from "./Experience";
import Highlight from "./Highlight";
import {
  AWS,
  CPlus,
  CSS,
  Django,
  Docker,
  Figma,
  HTML,
  JS,
  Mongo,
  Nextjs,
  Python,
  Reactjs,
  Restframework,
  Tailwind,
  TensorFlow,
  TS,
  Vercel,
} from "./icons";
import Rating from "./Rating";
import Favorite from "./Favorite";

export default function Container() {
  return (
    <div>
      <p className="pb-[16px] text-[20px] font-semibold ">Profile 🍻</p>
      <div className="pl-[20px]">
        はじめまして. 原田零生 (はらだれお) と申します.
        プロダクトエンジニアを目指す日本の学生です.
        幅広い情報科学の領域に興味があります. 最近はOSの勉強をしています.
        クラフトビール巡りと音楽鑑賞が趣味です.
        人生の究極の目標は宇宙飛行士になることです.
      </div>

      <p className="py-[16px] text-[20px] font-semibold ">Stack</p>
      <div className="grid grid-cols-1 flex-col gap-[12px] pl-[20px] md:grid-cols-2">
        <Rating rating={5} name={"HTML"}>
          <HTML />
        </Rating>
        <Rating rating={5} name={"CSS"}>
          <CSS />
        </Rating>
        <Rating rating={4} name={"JavaScript"}>
          <JS />
        </Rating>
        <Rating rating={3} name={"TypeScript"}>
          <TS />
        </Rating>
        <Rating rating={4} name={"React"}>
          <Reactjs />
        </Rating>
        <Rating rating={4} name={"Next.js"}>
          <Nextjs />
        </Rating>
        <Rating rating={4} name={"tailwind"}>
          <Tailwind />
        </Rating>
        <Rating rating={1} name={"Figma"}>
          <Figma />
        </Rating>
        <Rating rating={4} name={"Django"}>
          <Django />
        </Rating>
        <Rating rating={4} name={"DRF"}>
          <Restframework />
        </Rating>
        <Rating rating={2} name={"MongoDB"}>
          <Mongo />
        </Rating>
        <Rating rating={5} name={"Python"}>
          <Python />
        </Rating>
        <Rating rating={3} name={"TensorFlow"}>
          <TensorFlow />
        </Rating>
        <Rating rating={3} name={"C++"}>
          <CPlus />
        </Rating>
        <Rating rating={2} name={"AWS"}>
          <AWS />
        </Rating>
        <Rating rating={4} name={"Vercel"}>
          <Vercel />
        </Rating>
        <Rating rating={3} name={"Docker"}>
          <Docker />
        </Rating>
      </div>

      <p className="py-[16px] text-[20px] font-semibold">Favorite</p>
      <Favorite />

      <div className="pb-[16px]">
        <p className="py-[16px] text-[20px] font-semibold">Experience</p>
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
                Pythonを用いてAutoCadの図面(.scr)を自動生成するプログラムを開発しました.
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
        <p className="py-[16px] text-[20px] font-semibold">Education</p>
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
