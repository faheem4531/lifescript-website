import { Box, Typography } from "@mui/material";
import PrimaryHeading from "../headings/PrimaryHeading";
import FlowerLine from "@/app/_assets/pngs/full-style.png"
import Image from "next/image";
import styles from "../ComponentsStyles.module.css"
import CustomizedAccordions from "./Accordion";


const Experience = () => {

  return (
    <Box sx={{ margin: '220px 0  120px' }}
    >
      <Box sx={{ textAlign: "center" }}>
        <PrimaryHeading lineHeight="60px" showStyle={false} heading=" Experience the LifeScript Advantage" />
        <Image src={FlowerLine} alt="logo" />
      </Box>

      <Box sx={{ margin: "220px 60px 240px 130px", display: "flex", justifyContent: "space-between", alignItems: "center  " }}>
        {/* <Box sx={{ bgcolor: "red", maxHeight: "460px" }}> */}
        <CustomizedAccordions />
        {/* </Box> */}
        {/* <Box sx={{ position: "relative" }}>
          <Image src={Narrative} alt="image" className={styles.gif} />
          <Image src={Bandage} alt="image" className={styles.bandage} />
        </Box> */}
      </Box>
    </Box >
  )
}

export default Experience;
