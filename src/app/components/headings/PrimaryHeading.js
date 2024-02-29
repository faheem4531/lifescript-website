import { Box, Typography } from "@mui/material";
import LeftStyle from "@/app/_assets/pngs/left-style.png"
import RightStyle from "@/app/_assets/pngs/right-style.png"
import Image from "next/image";
import Line from "@/app/_assets/pngs/under-line-long.png"

const PrimaryHeading = ({ heading, showStyle, color }) => {

  const styleLine = {
    width: "140px"
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      {showStyle && <Image src={LeftStyle} alt="logo" />}
      <Typography color={color} sx={{ fontSize: "52px", fontWeight: 500, margin: "0 18px", position: "relative" }}>
        {heading}
        <Box sx={{ position: "absolute", top: "20px", right: "0" }}>
          <Image src={Line} style={styleLine} alt="mark" />
        </Box>
      </Typography>
      {showStyle && <Image src={RightStyle} alt="logo" />}

    </Box >
  )
}

export default PrimaryHeading;