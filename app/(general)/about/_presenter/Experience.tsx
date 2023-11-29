import ExperienceContainer from "../_components/ExperienceContainer";
import Highlight from "../_components/Highlight";
import List from "../_components/List";
import Timeline from "../_components/Timeline";

export default function Experience() {
  return (
    <>
      <p className="py-[16px] text-[20px] font-semibold">Experience</p>
      <ExperienceContainer>
        <Timeline
          title="株式会社キベ"
          subtitle="- System Engineer"
          term="02/2022 - 現在"
          last={false}
          experience={true}
        >
          <Highlight experience={true}>
            <li className="flex">
              <List experience={true} />
              Developed a program using Python to automatically generate AutoCAD
              drawings (.scr).
            </li>
          </Highlight>
        </Timeline>
        <Timeline
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
        </Timeline>
      </ExperienceContainer>
    </>
  );
}
