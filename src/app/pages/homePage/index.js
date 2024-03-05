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

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Introduction />
      <Working />
      <Suggestion />
      <GifTab />
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