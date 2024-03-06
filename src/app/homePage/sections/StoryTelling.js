import FlowerLine from "@/app/_assets/pngs/full-style.png"
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./HomeSections.module.css"
import Content from "@/app/components/headings/Content";
import PrimaryHeading from "@/app/components/headings/PrimaryHeading";
import StoryImage1 from "@/app/_assets/pngs/story-1.png"
import StoryImage2 from "@/app/_assets/pngs/story-2.png"
import StoryImage3 from "@/app/_assets/pngs/story-3.png"
import StoryImage4 from "@/app/_assets/pngs/story-4.png"
import Button from "@/app/components/button/Button";
import NextIcon from '@/app/_assets/svgs/next.svg'

const StoryTelling = () => {


  return (
    <Box sx={{ margin: "180px 130px 250px" }}>
      <PrimaryHeading heading="Your storytelling journey is now:" />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ display: "flex", marginTop: "200px", columnGap: "100px", justifyContent: "space-between", alignItems: "center" }}>
          <Content heading="Easy and Time-saving" subHeading="Enjoy telling your story by simply answering thought-provoking
questions and have fun while you reflect along the way. Save
valuable time and avoid the hassle of years of writing, extensive
interviews, and proofreading for typos." />
          <Image src={StoryImage1} alt="image" className={styles.stroyImages} />
        </Box>
        <Box sx={{ display: "flex", marginTop: "100px", columnGap: "100px", justifyContent: "space-between", alignItems: "center" }}>
          <Image src={StoryImage2} alt="image" className={styles.stroyImages} />
          <Content heading="Supported" subHeading="Enjoy a stress-free experience with our support through live
chat, video tutorials, FAQs, and more. Our dedicated team
is here to guide you at every step of your storytelling
journey, ensuring you have the resources and assistance
needed to effortlessly bring your story to life." />
        </Box>
        <Box sx={{ display: "flex", marginTop: "100px", columnGap: "100px", justifyContent: "space-between", alignItems: "center" }}>
          <Content heading="Flexible" subHeading="Your story is unique, and so is the way you tell it. If you
don't feel like writing-speak your mind! Choose your
own pace down memory lane on any device, anytime,
anywhere." />
          <Image src={StoryImage3} alt="image" className={styles.stroyImages} />
        </Box>
        <Box sx={{ display: "flex", marginTop: "100px", columnGap: "100px", justifyContent: "space-between", alignItems: "center" }}>
          <Image src={StoryImage4} alt="image" className={styles.stroyImages} />
          <Box>
            <Content heading="Connected" subHeading="Every second person can’t name their great-grandparent. 
          Thanks to our Family Tree your family members won’t be part of this statistics. Create your family tree and 
          uncover your ancestry at the end of your book." />
            <Box sx={{ marginTop: "40px" }}>
              <Button
                title='Get Started'
                width='140px'
                height='45px'
                img2={NextIcon}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


export default StoryTelling;