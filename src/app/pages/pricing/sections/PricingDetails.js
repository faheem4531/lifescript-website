import { Box, Typography } from "@mui/material";
import styles from "./Pricing.module.css"
import PrimaryHeading from "@/app/components/headings/PrimaryHeading";
import LeftStyle from "@/app/_assets/pngs/left-style2.png"
import RightStyle from "@/app/_assets/pngs/right-style2.png"
import Logo from "@/app/_assets/svgs/logo-footer.svg"
import StoryWorthy from "@/app/_assets/svgs/story-worthy-logo.svg"
import Image from "next/image";

const PricingDetails = () => {

  const cardData = [
    {
      header: "Benefits",
      bgColor: "#E1683B",
      data: [
        "Free trial",
        "Annual subscription with full-color hardcover book",
        "No additional cost for gift receiver",
        "Annual subscription with full-color hardcover book",
        "Free worldwide Shipping",
        "Language supported",
        "Book page limit",
        "Unlimited photo uploads",
        "Video tutorials and live chat support",
      ]
    },
    {
      logo: Logo,
      bgColor: "#30422E",
      data: [
        "Yes",
        "139$",
        "Yes",
        "39$ (up to 600 pages)",
        "Yes",
        "English and Spanish",
        "600",
        "Yes",
        "Yes",
      ]
    },
    {
      logo: StoryWorthy,
      bgColor: "#15372F",
      data: [
        "No",
        "139$ (initially 99$ but additional 40$ if you want full-color book)",
        "For a full-color book, 40$ additional. Cannot be prepaid by gifter",
        "79$ (up to 300 pages) ,99$ (up to 480 pages)",
        "No, only for US.",
        "English",
        "300 (480 if you pay 20$ additionally)",
        "Yes",
        "No"
      ]
    }
  ]
  return (
    <Box sx={{}} className={styles.pricingDetails}>
      <PrimaryHeading heading="Pricing and Book Details" showStyle={true} left={LeftStyle} right={RightStyle} />
      <Box sx={{ margin: "100px 0 100px ", display: "flex", justifyContent: "center", columnGap: "16px" }}>
        {cardData.map((item, index) => <DetailCard
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