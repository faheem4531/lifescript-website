import { Box, Typography } from "@mui/material";
import styles from "./gift.module.css"
import PrimaryHeading from "@/app/components/headings/PrimaryHeading";

import LeftStyle from "@/app/_assets/pngs/left-style2.png"
import RightStyle from "@/app/_assets/pngs/right-style2.png"

const Gifting = () => {
  return (
    <Box sx={{
      minHeight: "100vh",
      alignItems: "center",
      textAlign: "center"
    }}
    >
      <PrimaryHeading showStyle={true} heading="What you can gift" left={LeftStyle} right={RightStyle} />
      <Typography sx={{ fontSize: "24px", margin: "40px 0 30px" }}>
        Give the gift of inspiration on their special day
      </Typography>
    </Box>
  )
}

export default Gifting;