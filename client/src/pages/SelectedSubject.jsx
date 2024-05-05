import { Grid, Typography } from "@mui/material";
import Page from "../components/Page";
import math from "../assets/img/think.png";
import biology from "../assets/img/plant-cell.png";
import chemistry from "../assets/img/chemistry.png";
import physics from "../assets/img/relativity.png";
import english from "../assets/img/eng.png";
import SubjectHeader from "../components/SubjectHeader";
import ChapersList from "../components/ChaptersList";
export default function SelectedSubject({ subject }) {
  return (
    <Page>
      <div
        style={{
          backgroundImage: `url(${
            subject === "Math"
              ? math
              : subject === "Biology"
              ? biology
              : subject === "Chemistry"
              ? chemistry
              : subject === "Physics"
              ? physics
              : subject === "English"
              ? english
              : null
          })`,
          margin: "-1rem",
          marginTop: "-3rem",
          zIndex: -1,
        }}
        className="min-h-screen"
      >
        <SubjectHeader subject={subject} />
        <ChapersList />
      </div>
    </Page>
  );
}
