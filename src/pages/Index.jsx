// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import Navbar from "../components/Navbar";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <>
      <Navbar />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.50" p={4}>
        <VStack spacing={6}>
          <Heading as="h1" size="2xl" color="teal.500">
            Your Blank Canvas
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Chat with the agent to start making edits.
          </Text>
          <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
      </Container>
    </>
  );
};

export default Index;
