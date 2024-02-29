import { Box } from "@mui/material";
import PrimaryHeading from "../headings/PrimaryHeading";
import styles from "./Working.module.css"
import Points from "./Points";

const Working = () => {

  const pointsArray = [
    {
      no: "01",
      title: "Answer questions weekly",
      discription: "Or as often as you like"
    },
    {
      no: "02",
      title: "Turn answers into a chapter with a click",
      discription: "No writing experience needed."
    },
    {
      no: "03",
      title: "Repeat for all chapters",
      discription: "As many as you like."
    },
    {
      no: "04",
      title: "Receive a beautiful hardcover book",
      discription: "With free shipping."
    }
  ]

  return (
    <Box sx={{ padding: '200px 25px', bgcolor: "#30422E" }}
      className={styles.workingBox}
    >
      <PrimaryHeading showStyle={true} heading=" How it works" color="#F3ECDA" />

      <Box sx={{ marginTop: "150px", display: "flex", columnGap: "17px" }}>

        {pointsArray.map((item, index) => <Points
          key={index}
          no={item.no}
          title={item.title}
          discription={item.discription}
        />)}
      </Box>
    </Box>
  )
}

export default Working;