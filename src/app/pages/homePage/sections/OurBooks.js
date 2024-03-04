const { default: PrimaryHeading } = require("@/app/components/headings/PrimaryHeading")
const { Box } = require("@mui/material")
import Image from "next/image"
import styles from "./HomeSections.module.css"
import Book from "@/app/_assets/pngs/book1.png"

const OurBooks = () => {
  return (
    <Box
      sx={{ padding: "160px 0 110px" }}
      className={styles.bookBox}
    >
      <PrimaryHeading showStyle={true} heading="Our Books" color="#F3ECDA" />
      <Box>
        <Image src={Book} alt="image" className={styles.book}/>
      </Box>
    </Box>
  )
}
export default OurBooks