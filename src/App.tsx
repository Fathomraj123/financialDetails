import { Routes, Route, Link } from "react-router-dom";
import PeoplePage from "./pages/personalCard";
import { Container, Flex, Button } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl" py={6}>
      {/* Navigation Bar */}
      <Flex justify="center" mb={4} gap={4}>
        <Button as={Link} to="/" colorScheme="blue">People Page</Button>
        <Button as={Link} to="/finance" colorScheme="green">Finance Page</Button>
      </Flex>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<PeoplePage />} />
      </Routes>
    </Container>
  );
}

export default App;
