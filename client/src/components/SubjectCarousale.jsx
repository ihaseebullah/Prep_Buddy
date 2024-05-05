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
    title: "Biology",
    description: "3.98M views",
    icon: bio,
  },
  {
    title: "Math",
    description: "3.98M views",
    icon: math,
  },
  {
    title: "English",
    description: "4.21M views",
    icon: eng,
  },
  {
    title: "Physics",
    description: "4.74M views",
    icon: phy,
  },
  {
    title: "Chemistry",
    description: "3.98M views",
    icon: chem,
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
      {data.map((item) => (
        <button
          onClick={() => {
            NavigateTo(`/selectedSubject/${item.title}`);
            setValue(false);
          }}
        >
          <Card
            className="shadow-md"
            orientation="vertical"
            size="lg"
            key={item.title}
            variant="outlined"
          >
            <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
              <img src={`${item.icon}`} alt={item.title} />
            </AspectRatio>
            <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
              <Typography level="title-md">{item.title}</Typography>
              <Typography level="body-sm">{item.description}</Typography>
            </Box>
          </Card>
        </button>
      ))}
    </Box>
  );
}

export default function SubjectCarousaleWrapper() {
  return (
    <div>
      <h1
        style={{ fontFamily: "Roboto,Kanit", fontSize: "1rem" }}
        className="pt-2"
      >
        Subject Assesments
      </h1>
      <SubjectCarousale />
    </div>
  );
}
