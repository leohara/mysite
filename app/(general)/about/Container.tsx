import Album from "./Album";
import Experience from "./Experience";
import ExperienceContainer from "./ExperienceContainer";
import Favorite from "./Favorite";
import Highlight from "./Highlight";
import Stack from "./Stack";

function List({ experience }: { experience: boolean }) {
  return (
    <p
      className={`
    ${"mr-[4px] font-bold"}
    ${experience ? "text-[#6081a2]" : "text-[#5a9a92]"}
    `}
    >
      -
    </p>
  );
}

export default function Container() {
  return (
    <>
      <p className="pb-[16px] text-[20px] font-semibold ">Profile 🍻</p>
      <div className="pl-[20px]">
        leohara is a Japanese student who wants to be a product engineer.
        I&apos;m interested in web development, especially in the frontend. I
        also like to drink craft beer and listen to music. My ultimate goal in
        life is to become an astronaut.
      </div>

      <p className="py-[16px] text-[20px] font-semibold">Favorite</p>
      <div className="pl-[20px]">
        <Favorite title={"My Hall of Fame"}>
          <Album name="revolver.jpg">
            <p>Revolver</p>
            <p>The Beatles (1966)</p>
          </Album>
          <Album name="dog_caravan.jpg">
            <p>犬は吠えるがキャラバンは進む</p>
            <p>小沢健二 (1993)</p>
          </Album>
          <Album name="odessey_and_oracle.jpg">
            <p>Odessey & Oracle</p>
            <p>The Zombies (1968)</p>
          </Album>
          <Album name="white_album.png">
            <p>The Beatles (The White Album)</p>
            <p>The Beatles (1968)</p>
          </Album>
          <Album name="the_invisible_band.jpg">
            <p>The Invisible Band</p>
            <p>Travis (2001)</p>
          </Album>
          <Album name="brushfire_fairytale.jpg">
            <p>Brushfire Fairytales</p>
            <p>Jack Johnson (2001)</p>
          </Album>
        </Favorite>
        <Favorite title={"Albums I Listened to a Lot in 2023"}>
          <Album name="cafe_blue.jpg">
            <p>Café Bleu</p>
            <p>The Style Council (1984)</p>
          </Album>
          <Album name="golden_picnics.jpg">
            <p>ゴールデン・ピクニックス</p>
            <p>四人囃子 (1976)</p>
          </Album>
          <Album name="chet_baker_sings.jpg">
            <p>Chet Baker Sings</p>
            <p>Chet Baker (1956)</p>
          </Album>
          <Album name="cobalt_hour.jpg">
            <p>COBALT_HOUR</p>
            <p>荒井由美 (1975)</p>
          </Album>
          <Album name="memai.jpg">
            <p>ゆらゆら帝国のめまい</p>
            <p>ゆらゆら帝国 (2003)</p>
          </Album>
          <Album name="route20.jpg">
            <p>ROUTE 20 HIT ROAD</p>
            <p>EGO-WRAPPIN&apos; (2016)</p>
          </Album>
        </Favorite>
        <Favorite title={"Albums I Listened to a Lot in 2022"}>
          <Album name="3x3x3.jpg">
            <p>3×3×3</p>
            <p>ゆらゆら帝国 (1998)</p>
          </Album>
          <Album name="rubber_soul.jpg">
            <p>Rubber Soul</p>
            <p>The Beatles (1965)</p>
          </Album>
          <Album name="donny_hathaway.jpg">
            <p>R. Flack & D. Hathaway</p>
            <p>R. Flack & D. Hathaway (1972)</p>
          </Album>
          <Album name="siren.jpg">
            <p>Siren</p>
            <p>Roxy Music (1975)</p>
          </Album>
          <Album name="hunky_dory.jpg">
            <p>Hunky Dory</p>
            <p>David Bowie (1971)</p>
          </Album>
          <Album name="hukamidori.jpg">
            <p>深緑</p>
            <p>AJICO (2001)</p>
          </Album>
        </Favorite>
      </div>

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
              <li className="flex">
                <List experience={true} />
                Developed a program using Python to automatically generate
                AutoCAD drawings (.scr).
              </li>
            </Highlight>
          </Experience>
          <Experience
            title="株式会社うるる"
            subtitle="- AI & Backend Engineer"
            term="10/2022 - 06/2023"
            last={true}
            experience={true}
          >
            <Highlight experience={true}>
              <li className="flex">
                <List experience={true} />
                Developed a document classification model using natural language
                processing with Transformers.
              </li>
              <li className="flex">
                <List experience={true} />
                Developed an application using ChatGPT&apos;s API to extract
                specific items from documents.
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
              <li className="flex">
                <List experience={false} />
                Planning to pursue a master&apos;s degree.
              </li>
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
              <li className="flex">
                <List experience={false} />
                Studied four mechanics (materials, thermal, fluids, mechanical),
                control engineering, aerospace engineering, and programming.
              </li>
              <li className="flex">
                <List experience={false} />
                Member of a lab specializing in computer architecture, focusing
                on research in video image compression efficiency, especially in
                reducing computational load in inter-frame prediction.
              </li>
              <li className="flex">
                <List experience={false} />
                Served as the chief of wings for a human-powered airplane. Won
                the 44th Birdman Rally (鳥人間コンテスト) in the Human-powered
                Propeller Aircraft Category.
              </li>
            </Highlight>
          </Experience>
        </ExperienceContainer>
      </div>

      <Stack />
    </>
  );
}
