import { Box, Typography } from "@mui/material";
import Logo from "@/app/_assets/svgs/logo.svg"
import Image from "next/image";
import styles from './NavBar.module.css'
import Button from "../button/Button";
import NextIcon from '@/app/_assets/svgs/next.svg'

const NavBar = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '64px 106px 0',
    }}>
      <Image src={Logo} alt="Logo" className={styles.logo} />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: 500,
      }}
      >
        <Typography sx={{ padding: ' 0 20px 10px', fontFamily: "myfamily" }} className={styles.underLine}>Home</Typography>
        <Typography sx={{ padding: ' 0 20px 10px', fontFamily: "myfamily" }}>Features</Typography>
        <Typography sx={{ padding: ' 0 20px 10px', fontFamily: "myfamily" }}>Blog</Typography>
        <Typography sx={{ padding: ' 0 20px 10px', fontFamily: "myfamily" }}>About Us</Typography>
        <Typography sx={{ padding: ' 0 20px 10px', fontFamily: "myfamily" }}>FAQ &apos; s</Typography>

        <Box sx={{ paddingBottom: '10px' }}>
          <Button
            title='Sign Up'
            width='140px'
            height='45px'
            img2={NextIcon}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar;