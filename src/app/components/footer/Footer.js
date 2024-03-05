import { Box, Typography } from "@mui/material"
import Image from "next/image"

import Logo from "@/app/_assets/svgs/logo-footer.svg"
import Insta from "@/app/_assets/svgs/insta.svg"
import Fb from "@/app/_assets/svgs/fb.svg"
import Li from "@/app/_assets/svgs/li.svg"
import X from "@/app/_assets/svgs/x.svg"

const Footer = () => {
  return (
    <Box>

      <Box sx={{
        padding: "44px 55px 40px 100px",
        bgcolor: "#30422E",
        color: "#F3ECDA",
        display: 'flex',
        justifyContent: "space-between"
      }}>
        <Box>
          <Image src={Logo} alt="logo" />
          <Typography sx={{ width: "210px", fontSize: "16px", margin: "23px 0", fontFamily: "myfamily" }}>Echoes of the past, blueprint for the future.</Typography>
          <Box sx={{
            display: "flex",
            columnGap: "13px",
            alignItems: "center"
          }}>
            <Image src={Insta} alt="logo" />
            <Image src={Li} alt="logo" />
            <Image src={Fb} alt="logo" />
            <Image src={X} alt="logo" />
          </Box>
        </Box>

        <Box sx={{ display: "flex", columnGap: "45px" }}>
          <Box>
            <Typography sx={{ fontWeight: 800, marginBottom: "19px", fontFamily: "myfamily" }}>Company</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "myfamily" }}>About</Typography>
            <Typography sx={{ fontSize: "16px", fontFamily: "myfamily" }}>Features</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 800, marginBottom: "19px", fontFamily: "myfamily" }}>Help</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "myfamily" }}>Customer Suport</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "myfamily" }}>Delivery Details</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "myfamily" }}>Terms & Conditions</Typography>
            <Typography sx={{ fontSize: "16px", fontFamily: "myfamily" }}>Privacy Policy</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 800, marginBottom: "19px", fontFamily: "myfamily" }}>Resources</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "myfamily" }}>Free ebooks</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "myfamily" }}>Development Tutorial</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "myfamily" }}>How to -Blog</Typography>
            <Typography sx={{ fontSize: "16px", fontFamily: "myfamily" }}>Youtube Playlist</Typography>
          </Box>
        </Box>
      </Box >

      <Box sx={{ textAlign: "center", padding: "23px 0", fontFamily: "myfamily" }}>© Copyright  2024 LifeScript</Box>
    </Box>
  )
}

export default Footer