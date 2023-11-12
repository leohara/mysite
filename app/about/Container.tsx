import ExperienceContainer from "./ExperienceContainer";
import Experience from "./Experience";
import Highlight from "./Highlight";
import Stack from "./Stack";
import Favorite from "./Favorite";

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
        <Favorite />
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
