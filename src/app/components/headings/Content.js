import { Box, Typography } from "@mui/material";

export function Content({ heading, subHeading, marginB, subWidth }) {
  return (
    <Box sx={{ maxWidth: "500px" }} marginBottom={marginB}>
      <Typography sx={{ fontSize: "32px", fontWeight: 500, marginBottom: "20px", fontFamily: "Besley" }}>
        {heading}
      </Typography>
      <Typography sx={{ fontSize: "16px", fontFamily: "myfamily" }} width={subWidth}>
        {subHeading}
      </Typography>
    </Box>
  )
}

export default Content;