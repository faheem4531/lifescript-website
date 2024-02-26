import NavBar from "@/app/components/navBar/NavBar";
import { Box } from "@mui/material";
import Introduction from "./sections/introduction/Introduction";

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Introduction />
    </Box>
  )
}

export default HomePage;