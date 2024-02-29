'use client'

import { Box, Typography } from "@mui/material";
import PrimaryHeading from "../headings/PrimaryHeading";
import FlowerLine from "@/app/_assets/pngs/full-style.png"
import Image from "next/image";
import ExperienceImage from "@/app/_assets/pngs/experience.png"
import styles from "../ComponentsStyles.module.css"
import { useState } from "react";

const accordianData = [
  {
    title: "1. Narrative Fusion",
    data: "Turn your cherished memories into beautifully written chapters with a single click – no writing experience needed, especially perfect for seniors."
  },
  {
    title: "2. Assisted Editing",
    data: "Turn your cherished memories into beautifully written chapters with a single click – no writing experience needed, especially perfect for seniors."
  },
  {
    title: "3. Voice-to-Text",
    data: "Turn your cherished memories into beautifully written chapters with a single click – no writing experience needed, especially perfect for seniors."
  },
  {
    title: "4. Family Tree",
    data: "Turn your cherished memories into beautifully written chapters with a single click – no writing experience needed, especially perfect for seniors."
  },
  {
    title: "5. Formatting Feature",
    data: "Turn your cherished memories into beautifully written chapters with a single click – no writing experience needed, especially perfect for seniors."
  },
  {
    title: "5. Auto Photo Improvement",
    data: "Turn your cherished memories into beautifully written chapters with a single click – no writing experience needed, especially perfect for seniors."
  },
]

const Experience = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex(index === openAccordionIndex ? null : index);
  };
  return (
    <Box sx={{ margin: '220px 0  120px' }}
    >
      <Box sx={{ textAlign: "center" }}>
        <PrimaryHeading lineHeight="10px" showStyle={false} heading=" Experience the LifeScript Advantage" />
        <Image src={FlowerLine} alt="logo" />
      </Box>

      <Box sx={{ margin: "220px 60px 240px 130px", display: "flex", justifyContent: "space-between", alignItems: "center  " }}>
        <Box sx={{ bgcolor: "", maxHeight: "460px" }}>
          {accordianData.map((item, index) => <Accordion
            key={index}
            title={item.title}
            data={item.data}
            open={index === openAccordionIndex}
            onClick={() => handleAccordionClick(index)}
          />
          )}
        </Box>
        <Image src={ExperienceImage} alt="image" />
      </Box>


    </Box >
  )
}

export default Experience;

function Accordion({ data, title, open, onClick }) {

  return (
    <Box>
      <details open={open} onClick={onClick}>
        <summary className={`${styles.summary}`}>{title}</summary>
        <Box>
          <Typography sx={{
            color: "#494949",
            fontSize: "16px",
            padding: "24px 0 0 24px",
            maxWidth: "370px"
          }}>{data}</Typography>
        </Box>
      </details>
    </Box>
  );
}