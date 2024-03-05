'use client'

import { Box } from "@mui/material";
import Footer from "@/app/components/footer/Footer";
import ContactFooter from "@/app/components/footer/ContactFooter";
import FeaturesIntroduction from "@/app/components/Introduction/Introduction";
import Mission from "./sections/Mission";

const AboutUs = () => {
  return (
    <Box>
      <FeaturesIntroduction heading="Empowering people to create a timeless legacy, resonating across" width="75%" keyWorld=" generations." />
      <Mission />
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

export default AboutUs;