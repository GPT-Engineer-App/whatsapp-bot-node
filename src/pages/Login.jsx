import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
        <VStack spacing={4} width="300px">
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Enter your username" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="teal" width="full">
            Login
          </Button>
        </VStack>
      </Box>
    </>
  );
}

export default Login;
