import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./HomeSections.module.css"
import Button from "@/app/components/button/Button";
import Gift from "@/app/_assets/svgs/gift.svg"

const GifTab = () => {


  return (
    <Box sx={{
      width: "1200px",
      height: "255px",
      margin: " 220px auto 0",
      display: "flex",
      justifyContent: "space-between",
      padding: "100px 60px 40px 100px"
    }}
      className={styles.gifTabBox}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>

        <Typography sx={{
          fontSize: "32px", fontWeight: 500, width: "80%", fontFamily: "Besley"
        }}>
          Surprise your loved one with Lifescript and transform their memories into a keepsake book.
        </Typography>
        <Button
          title='Gift Now!'
          width='180px'
          height='55px'
          img1={Gift}
        />

      </Box>
    </Box >
  )
}


export default GifTab;