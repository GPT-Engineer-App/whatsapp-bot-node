import { Box, IconButton, Spacer } from "@chakra-ui/react";
import { FaUser, FaUserPlus, FaHome, FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" padding="1rem" backgroundColor="teal">
      <IconButton icon={<FaHome />} aria-label="Home" variant="ghost" color="white" onClick={() => navigate("/")} />
      <Spacer />
      <IconButton icon={<FaUser />} aria-label="Login" variant="ghost" color="white" onClick={() => navigate("/login")} />
      <IconButton icon={<FaUserEdit />} aria-label="Register" variant="ghost" color="white" onClick={() => navigate("/register")} />
    </Box>
  );
}

export default Navbar;
