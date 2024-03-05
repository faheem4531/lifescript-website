import { Box, Typography } from "@mui/material"
import Image from "next/image"
import styles from "../ComponentsStyles.module.css"
import Smily from "@/app/_assets/svgs/smily.svg"
import Button from "../button/Button"
import Input from "../input/Input"
import Shape from "@/app/_assets/svgs/input-shape.svg"

const ContactFooter = () => {
  return (
    <Box
      sx={{ padding: "70px 0 50px", display: "flex", flexDirection: "column", alignItems: "center", color: "#F3ECDA" }}
      className={styles.contactFooterBox}
    >
      <Typography sx={{ fontSize: "54px", fontWeight: 500, fontFamily: "Besley" }}>Missed the moment? set a reminder!</Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: 500, marginTop: "30px", fontFamily: "myfamily" }}>Complete the form, and we&apos;ll send you a reminder as your loved one&apos;s special day approaches.</Typography>

      <Box sx={{ display: "flex", columnGap: "8px", margin: "55px 0 40px", width: "100%", justifyContent: "center" }}>
        <Input
          placeHolder="Your email address"
        />
        <Input
          placeHolder="What&apos;s the occasion?"
        />
        <Input
          placeHolder="When it&apos;s happening?"
          img={Shape}
        />
      </Box>

      <Button
        title='Remind Me'
        width='200px'
        height='50px'
        backgroundColor="#30422E"
        img2={Smily}
      />
    </Box>
  )
}

export default ContactFooter