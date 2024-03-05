import { Box, Typography } from "@mui/material";

export function Content({ heading, subHeading, marginB, subWidth, width, align }) {
  return (
    <Box maxWidth={width || "500px"} marginBottom={marginB} textAlign={align} >
      <Typography sx={{ fontSize: "32px", fontWeight: 500, marginBottom: "20px", fontFamily: "Besley" }}>
        {heading}
      </Typography>
      <Typography sx={{ fontSize: "16px", fontFamily: "myfamily" }} maxWidth={subWidth}>
        {subHeading}
      </Typography>
    </Box>
  )
}

export default Content;