'use client'

import NavBar from "@/app/components/navBar/NavBar";
import { Box, Typography } from "@mui/material";
import styles from "./FeatureSection.module.css"
import PrimaryHeading from "@/app/components/headings/PrimaryHeading";
import Image from "next/image";
import Bg from "@/app/_assets/pngs/bg-feature.png"

const FeaturesIntroduction = () => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}
      className={styles.features}
    >
      <NavBar />
      <Box sx={{ textAlign: 'center', position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-40%)", width: "100%" }}>
        <PrimaryHeading showStyle={false} heading="We take care of everything" color="#F3ECDA" />
        <Typography sx={{ fontSize: "16px", color: "#F3ECDA", marginTop: "10px", opacity: ".8" }}>
          Crafting your narrative in a book is now faster and simpler than ever.
        </Typography>
      </Box>
    </Box >
  )
}

export default FeaturesIntroduction;