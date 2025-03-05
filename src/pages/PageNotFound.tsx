import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";



const PageNotFound = () => {
  return (
    <>  
    <Box textAlign="center" mt={10}>
      <Heading size="2xl" color = "black" mb={4}>404</Heading>
      <Text fontSize="lg" color = "black" mb={6}>Oops! The page you are looking for does not exist.</Text>
      <Button as="a" href="/" colorScheme="blue">
        Go to Home
      </Button>
    </Box>
    </>
  );
};

export default PageNotFound;
