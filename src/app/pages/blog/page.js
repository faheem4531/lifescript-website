'use client'

import { Box } from "@mui/material";
import Footer from "@/app/components/footer/Footer";
import ContactFooter from "@/app/components/footer/ContactFooter";
import IntroductionBlog from "./sections/Introduction";
import Blogs from "./sections/Blog";

const BlogPage = () => {
  return (
    <Box>
      <IntroductionBlog />
      <Blogs />
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

export default BlogPage;