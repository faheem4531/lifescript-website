'use client'

import NavBar from "@/app/components/navBar/NavBar";
import { Box } from "@mui/material";
import Working from "@/app/components/working/Working";
import Introduction from "./sections/Introduction";
import Suggestion from "./sections/Suggestion";
import StoryTelling from "./sections/StoryTelling";
import Reviews from "./sections/Reviews";
import Experience from "@/app/components/experience/Experience";
import GifTab from "./sections/GifTab";
import Pricing from "@/app/components/pricing/Pricing";
import Footer from "@/app/components/footer/Footer";
import Testimonial from "./sections/Testimonial";
import ContactFooter from "@/app/components/footer/ContactFooter";
import OurBooks from "./sections/OurBooks";
import GotQuestions from "@/app/components/questions/GotQuestions";

import Shape from "@/app/_assets/svgs/input-shape.svg"
import Logo from "@/app/_assets/svgs/logo.svg"
import Gift from "@/app/_assets/svgs/gift.svg"

const HomePage = () => {

  const pointsArray = [
    {
      no: "01",
      title: "Answer questions weekly",
      discription: "Or as often as you like"
    },
    {
      no: "02",
      title: "Turn answers into a chapter with a click",
      discription: "No writing experience needed."
    },
    {
      no: "03",
      title: "Repeat for all chapters",
      discription: "As many as you like."
    },
    {
      no: "04",
      title: "Receive a beautiful hardcover book",
      discription: "With free shipping."
    }
  ]
  return (
    <Box>
      <NavBar logo={Logo} color="#3E4F3C" />
      <Introduction />
      <Working data={pointsArray} heading=" How it works" />
      <Suggestion />
      <GifTab
        heading="Surprise your loved one with Lifescript and transform their memories into a keepsake book."
        button="Gift Now!!"
        icon={Gift}
      />
      <StoryTelling />
      <Reviews />
      <Experience />
      <OurBooks />
      <Pricing />
      <Testimonial />
      <GotQuestions />
      <ContactFooter
        title="Missed the moment? set a reminder!"
        subTitle="Complete the form, and we'll send you a reminder as your loved one's special day approaches."
        input1="Your email address"
        input2="What’s the occasion?"
        input3="When it’s happening?"
        button="Remind Me"
        shape={Shape}
      />
      <Footer />
    </Box>
  )
}

export default HomePage;