'use client'

import { Box } from "@mui/material";
import Footer from "@/app/components/footer/Footer";
import ContactFooter from "@/app/components/footer/ContactFooter";
import HeroGifting from "./sections/Introduction";
import Gifting from "./sections/Gifting";

const GiftingPage = () => {
  return (
    <Box>
      <HeroGifting />
      <Gifting />
      <ContactFooter
        title="Still have any questions?"
        subTitle="Contact us Now!!!"
        input1="Your email address"
        input2="What’s the occasion?"
        input3="When it’s happening?"
        button="Get in touch!"
      />
      <Footer />
    </Box>
  )
}

export default GiftingPage;