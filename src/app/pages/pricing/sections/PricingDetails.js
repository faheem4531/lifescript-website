import { Box, Typography } from "@mui/material";
import styles from "./Pricing.module.css"
import PrimaryHeading from "@/app/components/headings/PrimaryHeading";
import Image from "next/image";

import RightStyle from "@/app/_assets/pngs/right-style2.png"
import LeftStyle from "@/app/_assets/pngs/left-style2.png"

const PricingDetails = ({ heading, cardsDetail }) => {

  return (
    <Box sx={{ bgcolor: "", margin: "150px 0" }} className={styles.pricingDetails}>
      <PrimaryHeading heading={heading} showStyle={true} left={LeftStyle} right={RightStyle} />
      <Box sx={{ margin: "100px 0 100px ", display: "flex", justifyContent: "center", columnGap: "16px" }}>
        {cardsDetail.map((item, index) => <DetailCard
          key={index}
          header={item.header}
          bgColor={item.bgColor}
          logo={item.logo}
          points={item.data}
        />)}
      </Box>
    </Box >
  )
}

export default PricingDetails;

function DetailCard({ header, logo, points, bgColor }) {
  return (
    <Box sx={{ maxWidth: "405px", width: "100%", bgcolor: "#F4F4F4", borderRadius: "8px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75px", textAlign: "center", fontSize: "20px", color: "#fff", fontWeight: 800, borderRadius: "8px 8px 0 0" }}
        bgcolor={bgColor}>
        {header}
        {logo && <Image src={logo} alt="logo" />}
      </Box>
      <Box
        sx={{ padding: "10px 20px" }}
        className={styles.cardBorder}
      >
        {points.map((item, index) => <Typography
          key={index}
          sx={{ padding: "20px 0", height: "58px", display: "flex", alignItems: "center", fontSize: "16px", fontWeight: 500, }}>
          {item}
        </Typography>)}


      </Box>

    </Box>
  )
}