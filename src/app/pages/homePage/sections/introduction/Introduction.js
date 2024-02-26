import Button from "@/app/components/button/Button";
import { Box, Typography } from "@mui/material";
import Pen from "@/app/_assets/svgs/writing-pen.svg"

const Introduction = () => {
  return (
    <Box sx={{ margin: "90px 0 0 75px" }}>
      <Box sx={{ width: '55%' }}>
        <Typography
          sx={{ fontSize: '60px', lineHeight: '70px' }}
        >The Best Way To Create An Autobiography Book</Typography>
        <Typography
          sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: 500, margin: '90px 0 30px', width: '70%' }}
        >An easy-to-use platform enabling people to preserve their memories, rediscover their roots, and
          create a deeper connection with themselves and their families.
        </Typography>
        <Button
          title='Start Writing for Free'
          width='230px'
          height='55px'
          img1={Pen}
        />
        <Typography
          sx={{ fontSize: '11px', lineHeight: '24px', fontWeight: 500, marginTop: '10px' }}
        >No credit card required
        </Typography>
      </Box>
    </Box>
  )
}

export default Introduction;