import { Box, IconButton } from "@chakra-ui/react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" padding="1rem" backgroundColor="teal">
      <IconButton icon={<FaUser />} aria-label="Login" variant="ghost" color="white" onClick={() => navigate("/login")} />
      <IconButton icon={<FaUserPlus />} aria-label="Register" variant="ghost" color="white" onClick={() => navigate("/register")} />
    </Box>
  );
}

export default Navbar;
