'use client'

import { Box } from "@mui/material";
import FeaturesIntroduction from "../../components/Introduction/Introduction";
import FeaturesItems from "./sections/Features";
import Footer from "@/app/components/footer/Footer";
import ContactFooter from "@/app/components/footer/ContactFooter";

const FeaturesPage = () => {
  return (
    <Box>
      <FeaturesIntroduction
        heading="We take care of "
        keyWorld="everything"
        subHeading="Crafting your narrative in a book is now faster and simpler than ever."
      />
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

export default FeaturesPage;