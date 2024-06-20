import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
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
  );
}

export default Login;
