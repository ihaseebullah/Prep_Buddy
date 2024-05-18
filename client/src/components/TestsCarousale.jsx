import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import book from "../assets/img/icons8-open-book.gif";
import eng from "../assets/img/eng.png";
import phy from "../assets/img/relativity.png";
import bio from "../assets/img/plant-cell.png";
import math from "../assets/img/think.png";
import chem from "../assets/img/chemistry.png";
import { button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../Context/Context";
const data = [
  {
    title: "National MDCAT",
    description: "3.98M MCQS",
    icon: bio,
  },
  {
    title: "ETEA Past papers (Medical)",
    description: "3.98M MCQS",
    icon: bio,
  },
  {
    title: "ETEA Past papers (Engineering)",
    description: "3.98M MCQS",
    icon: bio,
  },
  {
    title: "PMC Past papers (Medical)",
    description: "3.98M MCQS",
    icon: bio,
  },
];

function SubjectCarousale() {
  const NavigateTo = useNavigate();
  const { value, setValue } = React.useContext(MainContext);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        py: 1,
        overflow: "auto",
        width: 343,
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "hidden" },
      }}
    >
      {data.map((item, i) => (
        <button
          onClick={() => {
            NavigateTo(`/selectedSubject/${item.title}`);
            setValue(false);
          }}
          key={i}
        >
          <Card
            className="shadow-md "
            orientation="vertical"
            size="lg"
            sx={{ backgroundColor: "#3B4483", minWidth: "100%" }}
            key={item.title}
            variant="outlined"
          >
            <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
              <Typography sx={{ color: "white" }} level="title-lg">
                {item.title.toUpperCase()}
              </Typography>
              <Typography
                sx={{ color: "#E1E1E1", paddingTop: "0.3rem" }}
                level="title-lg"
              >
                {item.description}
              </Typography>
            </Box>
          </Card>
        </button>
      ))}
    </Box>
  );
}

export default function TestsCarousale() {
  return (
    <div>
      <h1
        style={{ fontFamily: "Roboto,Kanit", fontSize: "1rem" }}
        className="pt-2"
      >
        Tests Pattrens & Past Papers
      </h1>
      <SubjectCarousale />
    </div>
  );
}
