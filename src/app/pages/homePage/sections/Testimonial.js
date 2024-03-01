import PrimaryHeading from "@/app/components/headings/PrimaryHeading"
import { Box, Typography, colors } from "@mui/material";
import styles from "./HomeSections.module.css"

import Image from "next/image";
import Client from "@/app/_assets/pngs/client-1.png"

const Testimonial = () => {
  return (
    <Box>
      <PrimaryHeading showStyle={false} heading="Testimonials" />
      <Typography sx={{ color: "#495845", margin: "10px 0 100px", textAlign: "center" }}>
        Voices of appreciation: What our customers say
      </Typography>

      <Box>
        <ReviewCard />
      </Box>
    </Box>
  )
}

export default Testimonial

function ReviewCard() {
  return (
    <Box sx={{
      boxShadow: " 0px 4px 15px 0px rgba(0, 0, 0, 0.10)",
      borderRadius: "4px",
      padding: "25px 32px 35px 40px",
      maxWidth: "380px",
      bgcolor: "#F4F4F4"
    }}>
      <Box sx={{ paddingBottom: "15px", display: 'flex', columnGap: "15px", alignItems: "center", fontSize: "20px", borderBottom: "1px solid #BFC4B5" }}>
        <Image
          src={Client}
          alt="image"
          className={styles.clientImg}
        />
        <Box>
          <Typography sx={{ color: "#E1683B", fontWeight: 800 }}>James T.</Typography>
          <Typography sx={{ color: "#BFC4B5" }}>Novelist and Screenwriter</Typography>
        </Box>
      </Box>
      <Typography sx={{ padding: "20px 20px 0 10px", lineHeight: "26px", fontSize: "16px" }}>
        "Lifescript transformed the daunting task of documenting my life into a beautifully guided journey.
        Their intuitive platform made it easy to organize my thoughts, memories, and experiences into a
        narrative that truly feels like my own. I'm grateful for the chance to share my story with my family
        in such a meaningful way."
      </Typography>
    </Box >
  )
}