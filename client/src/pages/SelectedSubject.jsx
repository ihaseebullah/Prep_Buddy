import { Grid, Typography } from "@mui/material";
import Page from "../components/Page";
import math from "../assets/img/think.png";
import biology from "../assets/img/plant-cell.png";
import chemistry from "../assets/img/chemistry.png";
import physics from "../assets/img/relativity.png";
import english from "../assets/img/eng.png";
import SubjectHeader from "../components/SubjectHeader";
import ChapersList from "../components/ChaptersList";
import background from "../assets/img/background.jpg";
import OptionsPage from "../components/OptionsPage";
import Authenticator from "../components/Authenticator";
export default function SelectedSubject({ subject }) {
  return (
    <Authenticator>
      <Page>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: false,
            margin: "-1rem",
            marginTop: "-3.5rem",
            zIndex: -1,
          }}
        >
          <OptionsPage subject={subject} />
        </div>
      </Page>
    </Authenticator>
  );
}
