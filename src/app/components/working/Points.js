import { Box, Typography } from "@mui/material";
import styles from "./Working.module.css"

const Points = ({ no, title, discription }) => {
  return (
    <Box sx={{
      padding: '20px 30px 40px',
      border: "1px dashed #F3ECDA",
      borderRadius: '4px',
      display: "inline-block",
      maxWidth: "335px",
      width: "100%"
    }}
    >
      <Typography sx={{
        color: "#E1683B",
        fontSize: "20px",
        fontWeight: 500,
        fontFamily: "Besley"
      }}>
        {no}
      </Typography>

      <Typography sx={{
        color: "#F3ECDA",
        fontSize: "28px",
        fontWeight: 500,
        lineHeight: "40px",
        height: "130px",
        fontFamily: "Besley"
      }}>
        {title}
      </Typography>

      <Typography sx={{
        color: "#F3ECDA",
        fontSize: "16px",
        marginTop: "20px"
      }}>
        {discription}
      </Typography>
    </Box>
  )
}

export default Points;