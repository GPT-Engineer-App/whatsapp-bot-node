import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {};

  return (
    <>
      <Navbar />
      <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
        <VStack spacing={4} width="300px">
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" width="full" onClick={handleRegister}>
            Register
          </Button>
        </VStack>
      </Box>
    </>
  );
}

export default Register;
