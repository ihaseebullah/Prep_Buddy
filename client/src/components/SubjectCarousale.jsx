import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import book from "../assets/img/icons8-open-book.gif";
const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "English",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Physics",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Biology",
    description: "3.98M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mathematics",
    description: "3.98M views",
  },
];

export default function SubjectCarousale() {
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
        <Card
          className="shadow-md"
          orientation="vertical"
          size="lg"
          key={item.title}
          variant="outlined"
        >
          <AspectRatio ratio="1.2" sx={{ minWidth: 60 }}>
            <img
              srcSet={`${book}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${book}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
            <Typography level="title-md">{item.title}</Typography>
            <Typography level="body-sm">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
