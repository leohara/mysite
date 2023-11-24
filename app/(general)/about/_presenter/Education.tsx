import ExperienceContainer from "../_components/ExperienceContainer";
import Highlight from "../_components/Highlight";
import List from "../_components/List";
import Timeline from "../_components/Timeline";

export default function Education() {
  return (
    <div className="py-[16px]">
      <p className="py-[16px] text-[20px] font-semibold">Education</p>
      <ExperienceContainer>
        <Timeline
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
        </Timeline>
        <Timeline
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
              Member of a lab specializing in computer architecture, focusing on
              research in video image compression efficiency, especially in
              reducing computational load in inter-frame prediction.
            </li>
            <li className="flex">
              <List experience={false} />
              Served as the chief of wings for a human-powered airplane. Won the
              44th Birdman Rally (鳥人間コンテスト) in the Human-powered
              Propeller Aircraft Category.
            </li>
          </Highlight>
        </Timeline>
      </ExperienceContainer>
    </div>
  );
}
