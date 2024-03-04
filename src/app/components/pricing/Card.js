import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from '../ComponentsStyles.module.css'
import Button from "../button/Button";

import Check from "@/app/_assets/svgs/check.svg"
import Lock from "@/app/_assets/svgs/lock.svg"
import NextIcon from '@/app/_assets/svgs/next.svg'

const PricingCard = ({ price, category, card, id, handleHover }) => {

  const CheckArray = [
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Spelling and grammar assistance "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Automatic photo improvement "
    },

    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Text formatting features  "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Narrative Fusion "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Voice-to-text "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Family Tree"
    },
    {
      standardStatus: false,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Premium book covers"
    },
    {
      standardStatus: false,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Priority customer support"
    },
    {
      standardStatus: false,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Exclusive access to new features "
    },

  ]

  return (
    <Box sx={{
      borderRadius: "8px",
      width: "405px",
      position: "relative"
    }}
      backgroundColor={card == "2" ? "#30422E" : "#F4F4F4"}
      color={card == "2" && "#f4f4f4"}
      id={id}
      onMouseOver={() => handleHover(id)}
    >
      <Box sx={{ padding: "39px 45px 85px" }}>
        <Box sx={{
          borderRadius: "4px", backgroundColor: "#E7E7E7", padding: "4px 8px", display: "inline", color: "#3E4F3C"
        }}
        >
          {category}
        </Box>
        {category == 'Standard' && <Box sx={{
          borderRadius: "4px",
          backgroundColor: "#E1683B",
          padding: "4px 8px",
          color: "#F4F4F4",
          marginLeft: "6px",
          display: "inline"
        }}>
          Popular
        </Box>}
        <Box sx={{
          fontSize: "60px",
          fontWeight: "800",
          borderBottom: "1px solid #BFC4B5",
          padding: "10px 0",
          marginBottom: "34px"
        }}
          className={styles.price}
        >
          {price}
          <Typography sx={{ color: "#BFC4B5", fontSize: "12px", display: "inline" }}>
            / year
          </Typography>
        </Box>

        {category == 'Basic' && <Box>
          {
            CheckArray.map((item, index) => <Box
              sx={{
                display: "flex",
                columnGap: "25px",
                alignItems: "center",
                marginBottom: "24px"
              }}
              key={index}>
              <Image src={item.basicStatus ? Check : Lock} alt="check" />
              <Typography sx={{ fontSize: "15px" }}>{item.dis}</Typography>
            </Box>
            )}
        </Box>
          ||
          category == 'Standard' && <Box>
            {
              CheckArray.map((item, index) => <Box
                sx={{
                  display: "flex",
                  columnGap: "25px",
                  alignItems: "center",
                  marginBottom: "24px"
                }}
                key={index}>
                <Image src={item.standardStatus ? Check : Lock} alt="check" />
                <Typography sx={{ fontSize: "15px" }}>{item.dis}</Typography>
              </Box>
              )}
          </Box>
          ||
          category == 'Premium' && <Box>
            {
              CheckArray.map((item, index) => <Box
                sx={{
                  display: "flex",
                  columnGap: "25px",
                  alignItems: "center",
                  marginBottom: "24px"
                }}
                key={index}>
                <Image src={item.PrimuimStatus ? Check : Lock} alt="check" />
                <Typography sx={{ fontSize: "15px" }}>{item.dis}</Typography>
              </Box>
              )}
          </Box>
        }
      </Box>
      <Box sx={{ position: "absolute", bottom: "0", left: "0", right: "0" }}>
        <Button
          title='Get Started'
          width='100%'
          height='75px'
          fontSize="24px"
          borderRadius="0px 0px 8px 8px"
          img2={NextIcon}
        />
      </Box>
    </Box >
  )
}

export default PricingCard;
// className={card == '2' ? styles.midCard : card == "1" ? styles.sideCards1 : styles.sideCards}