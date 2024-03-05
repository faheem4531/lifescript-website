'use client'

import { Box } from "@mui/material";
import FeaturesIntroduction from "./sections/Introduction";
import FeaturesItems from "./sections/Features";
import Footer from "@/app/components/footer/Footer";
import ContactFooter from "@/app/components/footer/ContactFooter";

const Features = () => {
  return (
    <Box>
      <FeaturesIntroduction />
      <FeaturesItems />
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

export default Features;