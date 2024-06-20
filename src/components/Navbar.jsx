import { Box, IconButton } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" padding="1rem" backgroundColor="teal">
      <IconButton icon={<FaUser />} aria-label="Login" variant="ghost" color="white" />
    </Box>
  );
}

export default Navbar;
