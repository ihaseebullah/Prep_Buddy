import { Button, Carousel, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { quotes } from "../assets/data/qoutes";
export function CarouselTransition() {
  const [qoutesData, setQoutesData] = useState(quotes);
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      {[1, 2, 3, 4, 5].map((qoute) => {
        return (
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  style={{ fontSize: "1rem" }}
                  variant="h1"
                  color="white"
                  className="mb-1 text-3xl md:text-4xl lg:text-5xl"
                >
                  {qoutesData[Math.floor(Math.random() * 100)].title}
                </Typography>
                <Typography
                  style={{ fontSize: "0.7rem" }}
                  variant="lead"
                  color="white"
                  className="mb-2 opacity-90"
                >
                  {qoutesData[Math.floor(Math.random() * 100)].quote}
                </Typography>
                <Typography
                  style={{ fontSize: "0.7rem" }}
                  variant="lead"
                  color="white"
                  className="mb-2 opacity-70"
                >
                  {qoutesData[Math.floor(Math.random() * 100)].author}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
