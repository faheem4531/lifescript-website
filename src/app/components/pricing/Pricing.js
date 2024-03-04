import { Box, Typography } from "@mui/material";
import PricingCard from "./Card";
import styles from "../ComponentsStyles.module.css"

const Pricing = () => {

  const pricingCard = [
    {
      id: "basic",
      category: "Basic",
      price: "$139",
      card: "1"
    },
    {
      id: "standard",
      category: "Standard",
      price: "$179",
      card: "2"
    },
    {
      id: "primium",
      category: "Premium",
      price: "$239",
      card: "3"
    },
  ]

  return (
    <Box sx={{
      margin: ' 170px 95px',
    }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "60px" }}>
        <Typography sx={{ fontSize: "52px", fontWeight: 500 }}>Our Pricing Plan</Typography>
        <Box sx={{ fontSize: "24px", width: "60%" }}>
          Each package comes with a one-year Lifescript subscription,
          a premium full-color hardcover book, and <Typography sx={{ fontWeight: 900, display: "inline" }}>free shipping.</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", columnGap: "17px", justifyContent: "center" }} className={styles.cardsMain} >
        {pricingCard.map((item) => <PricingCard
          key={item.id}
          category={item.category}
          price={item.price}
          card={item.card}
        />)}
      </Box>
      <Typography sx={{ marginTop: "20px", fontSize: "20px", fontWeight: 900, color: "#495845", textAlign: "center" }}>30 days money back guarantee </Typography>

    </Box>
  )
}

export default Pricing;