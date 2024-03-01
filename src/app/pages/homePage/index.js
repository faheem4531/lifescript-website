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
      <Pricing />
      <Testimonial />
      <Footer />
    </Box>
  )
}

export default HomePage;