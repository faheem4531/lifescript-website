'use client'

import { Box } from "@mui/material";
import FeaturesIntroduction from "./sections/Introduction";
import FeaturesItems from "./sections/Features";

const Features = () => {
  return (
    <Box>
      <FeaturesIntroduction />
      <FeaturesItems />
    </Box>
  )
}

export default Features;