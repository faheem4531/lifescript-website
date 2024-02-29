'use client'

import { Box, Typography } from "@mui/material";
import PrimaryHeading from "../headings/PrimaryHeading";
import FlowerLine from "@/app/_assets/pngs/full-style.png"
import Image from "next/image";
import styles from "../ComponentsStyles.module.css"
import Narrative from "@/app/_assets/gif/narrative.gif"
import { useState } from "react";
import Bandage from "@/app/_assets/pngs/bandage.png"
import CustomizedAccordions from "./Accordion";

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
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box sx={{ margin: '220px 0  120px' }}
    >
      <Box sx={{ textAlign: "center" }}>
        <PrimaryHeading lineHeight="60px" showStyle={false} heading=" Experience the LifeScript Advantage" />
        <Image src={FlowerLine} alt="logo" />
      </Box>

      <Box sx={{ margin: "220px 60px 240px 130px", display: "flex", justifyContent: "space-between", alignItems: "center  " }}>
        <Box sx={{ bgcolor: "red", maxHeight: "460px" }}>
          <CustomizedAccordions />
          {/* {accordianData.map((item, index) => <Accordion
            key={index}
            title={item.title}
            data={item.data}
            open={index === openAccordionIndex}
            onClick={() => handleAccordionClick(index)}
          />
          )} */}
        </Box>
        <Box sx={{ position: "relative" }}>
          <Image src={Narrative} alt="image" className={styles.gif} />
          <Image src={Bandage} alt="image" className={styles.bandage} />
        </Box>
      </Box>
    </Box >
  )
}

export default Experience;

function Accordion({ data, title, open, onClick }) {

  return (
    <Box sx={{ marginBottom: "30px" }}>
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