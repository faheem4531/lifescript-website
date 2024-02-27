import FlowerLine from "@/app/_assets/pngs/full-style.png"
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../HomeSections.module.css"

function Content({ heading, subHeading }) {
  return (
    <Box sx={{ maxWidth: "500px", marginBottom: "25px" }}>
      <Typography sx={{ fontSize: "32px", fontWeight: 500, marginBottom: "20px" }}>
        {heading}
      </Typography>
      <Typography sx={{ fontSize: "16px" }}>
        {subHeading}
      </Typography>
    </Box>
  )
}

const Suggestion = () => {

  const content = [
    {
      title: "Give a truly meaningful gift",
      subTitle: "It is a heartfelt gesture to show that you care for the receiving part and a chance to learn about them. The result is not only a book but an unparalleled experience to be cherished for years to come."
    },
    {
      title: "Share your Story and Wisdom",
      subTitle: "From your earliest memories to the lessons of adulthood, every story you share matters. Let your triumphs and trials inspire and guide the generations after you."
    },
    {
      title: "Connect with your Family",
      subTitle: "Uncover the stories of those who hold a special place in your heart, revealing hidden treasures about your family and forging deeper connections through stories that bring you closer together."
    },
    {
      title: "Reflect on your journey",
      subTitle: "Documenting personal challenges, triumphs, and growth serves as a therapeutic journey, encouraging self-reflection and possibly igniting resilience and appreciation within you and your family."
    },
  ]

  return (
    <Box sx={{ margin: "100px 0 0" }}>
      {/* heading  */}
      <Box sx={{
        textAlign: "center",
        width: "100%",
        position: "relative",
      }}
      >
        <Typography sx={{ fontSize: "52px", fontWeight: 500 }}>
          Perfect for when you want to
        </Typography>
        <Image src={FlowerLine} alt="logo" className={styles.fullStyle} />
      </Box >
      <Box sx={{ margin: "160px 0 0 170px" }}>
        {/* left Section  */}
        <Box>
          {
            content.map((item) => <Content
              heading={item.title}
              subHeading={item.subTitle}
            />)
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Suggestion;