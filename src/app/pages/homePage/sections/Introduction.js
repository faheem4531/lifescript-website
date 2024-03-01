'use client'

import Button from "@/app/components/button/Button";
import { Box, Typography } from "@mui/material";
import Pen from "@/app/_assets/svgs/writing-pen.svg"
import Book from "@/app/_assets/pngs/hero-book.png"
import Image from "next/image";
import styles from "./HomeSections.module.css"
import Typed from "typed.js";
import { useEffect } from "react";


const Introduction = () => {

  const color = { color: "#E1683B" }

  useEffect(() => {
    const element = document.querySelector(".multiple-text");
    if (element) {
      const typed = new Typed(element, {
        strings: ["Create.", "Gifts."],
        typeSpeed: 100,
        backSpeed: 100,
        delaySpeed: 100,
        loop: true,
        showCursor: false,
      });

      // Cleanup the typed instance when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <Box sx={{ margin: "90px 0 0 75px", position: "relative" }}>
      <Box sx={{ width: '55%' }}>
        <Typography
          sx={{ fontSize: '60px', lineHeight: '70px' }}
        >An Autobiography Book <br /> The Best Way To <span className="multiple-text" style={color}></span> </Typography>
        <Typography
          sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: 500, margin: '90px 0 30px', width: '70%' }}
        >An easy-to-use platform enabling people to preserve their memories, rediscover their roots, and
          create a deeper connection with themselves and their families.
        </Typography>
        <Button
          title='Start Writing for Free'
          width='230px'
          height='55px'
          img1={Pen}
        />
        <Typography
          sx={{ fontSize: '11px', lineHeight: '24px', fontWeight: 500, margin: '10px 0 150px' }}
        >No credit card required
        </Typography>
      </Box>
      <Image src={Book} alt="book" className={styles.bookImg} />
    </Box>
  )
}

export default Introduction;