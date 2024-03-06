'use client'

import { Box } from "@mui/material";
import Footer from "@/app/components/footer/Footer";
import ContactFooter from "@/app/components/footer/ContactFooter";
import HeroGifting from "./sections/Introduction";
import Gifting from "./sections/Gifting";
import Experience from "../components/experience/Experience";
import Working from "../components/working/Working";

const GiftingPage = () => {

  const pointsArray = [
    {
      no: "01",
      title: "Invite friends & family to contribute.",
      discription: "We’ll follow up to remind people to share."
    },
    {
      no: "02",
      title: "People share their memories.",
      discription: "You can review and reorganize everything in one place."
    },
    {
      no: "03",
      title: "Receive a beautiful keepsake book.",
      discription: "Professionally-designed cover styles, and books made to last."
    },
  ]

  return (
    <Box>
      <HeroGifting />
      <Gifting />
      <Experience />
      <Working data={pointsArray} heading=" How it works" />
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