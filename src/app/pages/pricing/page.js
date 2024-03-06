'use client'

import { Box } from "@mui/material";
import Footer from "@/app/components/footer/Footer";
import ContactFooter from "@/app/components/footer/ContactFooter";
import NavBar from "@/app/components/navBar/NavBar";
import Logo from "@/app/_assets/svgs/logo-footer.svg"
import styles from "./sections/Pricing.module.css"
import Pricing from "@/app/components/pricing/Pricing";
import Working from "@/app/components/working/Working";
import Check from "@/app/_assets/svgs/check-square.svg"
import PricingDetails from "./sections/PricingDetails";

const PricingPage = () => {
  const pointsArray = [
    {
      icon: Check,
      title: "Autobiography, Not Just Q&A",
      discription: "Lifescript enables users to craft a book with chapters, reflecting their lives with depth and professionalism, all while keeping it simple and engaging."
    },
    {
      icon: Check,
      title: "Ease of Use and Support",
      discription: "Our platform is user-friendly and comes with comprehensive support like FAQs, instructional videos, and live chat. Our users spend less time proofreading and editing, zero time configuring photos, and plenty of time on the voice-to-text feature when they don't feel like typing."
    },
    {
      icon: Check,
      title: "Understanding Ancestry helo",
      discription: "If we know who we came from, we may better understand who we are. Lifescript helps users build their family tree with photos, names, and birthplaces, making it easy to see the connections between the different generations."
    },

  ]

  return (
    <Box sx={{ minHeight: "100vh" }} className={styles.pricingPage}>
      <NavBar color="#F3ECDA" logo={Logo} />

      <Pricing />
      <Working data={pointsArray} heading="How we’re different:" subHeading="Lifescript vs Storyworth" />
      <PricingDetails />
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