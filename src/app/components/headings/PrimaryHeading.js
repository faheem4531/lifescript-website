import { Box, Typography } from "@mui/material";
import LeftStyle from "@/app/_assets/pngs/left-style.png"
import RightStyle from "@/app/_assets/pngs/right-style.png"
import Image from "next/image";

const PrimaryHeading = ({ heading }) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image src={LeftStyle} alt="logo" />
      <Typography sx={{ color: '#F3ECDA', fontSize: "52px", fontWeight: 500, margin: "0 18px" }}>
        {heading}
      </Typography>
      <Image src={RightStyle} alt="logo" />

    </Box >
  )
}

export default PrimaryHeading;