import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./AboutUs.module.css"
import Button from "@/app/components/button/Button";

import NextIcon from '@/app/_assets/svgs/next.svg'
import Diversity from "@/app/_assets/svgs/values/diversity.svg"
import Family from "@/app/_assets/svgs/values/family.svg"
import Empathy from "@/app/_assets/svgs/values/empathy.svg"
import Growth from "@/app/_assets/svgs/values/growth.svg"
import Inspiration from "@/app/_assets/svgs/values/inspiration.svg"
import Power from "@/app/_assets/svgs/values/power.svg"

const Values = () => {
  const ValueData = [
    {
      title: "Empowerment & Accessibility:",
      detail: "We empower individuals with an accessible platform for capturing and celebrating unique life stories, designed for all ages and abilities.",
      icon: Power
    },
    {
      title: "Inspiration:",
      detail: " Personal stories are wellsprings of motivation, lessons, wisdom, and encouragement for others to navigate their own paths in life.",
      icon: Inspiration
    },
    {
      title: "Personal Growth: ",
      detail: "We champion self-discovery, self-reflection, and personal evolution that comes from revisiting and sharing life's moments.",
      icon: Growth
    },
    {
      title: "Family Legacy: ",
      detail: "We empower intergenerational connections through sharing and safeguarding personal stories, fostering a deeper family identity and sense of belonging.",
      icon: Family
    },
    {
      title: "Empathy & Insight:",
      detail: "Our journey into personal stories cultivates profound empathy and a richer human experience.",
      icon: Empathy
    },
    {
      title: "Inclusivity & Diversity:",
      detail: "Our platform honors and preserves the diversity of all life stories, ensuring each narrative is valued and celebrated.",
      icon: Diversity
    },
  ]
  return (
    <Box sx={{ margin: "180px 160px 150px 145px" }}>
      <Typography sx={{ fontSize: "52px", fontWeight: 500, paddingBottom: "20px", borderBottom: "1px solid #E1683B" }}>Our Values</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "1100px" }}>
        {ValueData.map((item, index) => <Value
          key={index}
          title={item.title}
          detail={item.detail}
          icon={item.icon}
        />)}
      </Box>
      <Box sx={{ margin: "30px 0 0 40px" }}>
        < Button
          title='Get Started'
          width='200px'
          height='55px'
          img2={NextIcon}
        />
      </Box>
    </Box>
  )
}

export default Values;


function Value({ title, icon, detail }) {
  return (
    <Box sx={{ maxWidth: "440px", display: "flex", columnGap: "15px", margin: "50px 0 0" }}>
      <Image src={icon} alt="icon" />
      <Box>
        <Typography sx={{ fontSize: "16px", fontWeight: 800, paddingBottom: "20px", }}>{title}</Typography>
        <Typography>{detail}</Typography>
      </Box>
    </Box>
  )
}