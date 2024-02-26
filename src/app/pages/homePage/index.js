import NavBar from "@/app/components/navBar/NavBar";
import { Box } from "@mui/material";
import Introduction from "./sections/introduction/Introduction";
import Working from "@/app/components/working/Working";

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Introduction />
      <Working />
    </Box>
  )
}

export default HomePage;