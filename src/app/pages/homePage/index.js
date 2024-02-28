import NavBar from "@/app/components/navBar/NavBar";
import { Box } from "@mui/material";
import Working from "@/app/components/working/Working";
import Introduction from "./sections/Introduction";
import Suggestion from "./sections/Suggestion";

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Introduction />
      <Working />
      <Suggestion />
    </Box>
  )
}

export default HomePage;