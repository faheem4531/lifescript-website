'use client'

import { Box } from "@mui/material";
import Footer from "@/app/components/footer/Footer";
import ContactFooter from "@/app/components/footer/ContactFooter";
import NavBar from "@/app/components/navBar/NavBar";
import Logo from "@/app/_assets/svgs/logo-footer.svg"
import styles from "./sections/Pricing.module.css"
import Pricing from "@/app/components/pricing/Pricing";

const PricingPage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }} className={styles.pricingPage}>
      <NavBar color="#F3ECDA" logo={Logo} />

      <Box>
        <Pricing />
      </Box>
      <ContactFooter
        title="Still confused? Ask away!"
        subTitle="Contact us Now!!!"
        input1="Your name"
        input2="Your email address"
        input3="What’s on your mind?"
        button="Get in touch!"
      />
      <Footer />
    </Box>
  )
}

export default PricingPage;