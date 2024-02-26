import { Box, Typography } from "@mui/material";
import Logo from "@/app/_assets/svgs/logo.svg"
import Line from "@/app/_assets/svgs/under-line.svg"
import Image from "next/image";
import styles from './NavBar.module.css'


const NavBar = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: { xl: '64px 106px 0', lg: '50px 90px 0' },
    }}>
      <Image src={Logo} alt="Logo" className={styles.logo} />
      <Box sx={{
        display: 'flex',
        fontSize: '18px',
        fontWeight: 500,
      }}
      >
        <Typography sx={{ padding: ' 0 20px 10px' }} className={styles.underLine}>Home</Typography>
        <Typography sx={{ padding: ' 0 20px 10px' }}>Features</Typography>
        <Typography sx={{ padding: ' 0 20px 10px' }}>Blog</Typography>
        <Typography sx={{ padding: ' 0 20px 10px' }}>About Us</Typography>
        <Typography sx={{ padding: ' 0 20px 10px' }}>FAQ's</Typography>
      </Box>
    </Box>
  )
}

export default NavBar;