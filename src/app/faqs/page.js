'use client'

import { Box } from "@mui/material";
import Footer from "@/app/components/footer/Footer";
import ContactFooter from "@/app/components/footer/ContactFooter";
import NavBar from "@/app/components/navBar/NavBar";
import styles from "./Faq.module.css"
import Faqs from "./Faqs";

import Logo from "@/app/_assets/svgs/logo-footer.svg"

const FaqPage = () => {

  return (
    <Box sx={{ minHeight: "100vh" }} className={styles.faqPage}>
      <NavBar color="#F3ECDA" logo={Logo} />
      <Faqs />
      <ContactFooter
        title="Still have any questions?"
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

export default FaqPage;