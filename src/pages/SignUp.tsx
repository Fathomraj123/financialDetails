import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  // Checking for valid input and also check spaces.
  const isFormValid =
    username.trim() !== "" && isValidEmail(email) && isValidPassword(password);

  const handleSignUp = () => {
    if (isFormValid) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username, email, password })
      );
      localStorage.setItem("isAuthenticated", "true");
      alert("Sign-up successful! You can now log in.");
      navigate("/SignIn");
    }
  };
  return (
    <Box
      maxW="400px"
      mx="auto"
      mt="10"
      p="6"
      boxShadow="lg"
      borderRadius="md"
      bg="gray.100"
    >
      <Heading as="h2" size="lg" mb="4" textAlign="center" color={"black"}>
        Signup
      </Heading>
      <VStack spacing="4">
        <Input
          color={"black"}
          placeholder="Enter username"
          value={username}
          bg="white"
          onChange={(e) => setUsername(e.target.value)}
            />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          color="black"
          onChange={(e) => setEmail(e.target.value)}
          bg="white"
        />
        <Input color={"black"} type="password" placeholder="Enter password" value={password} bg="white"
        onChange={(e) => setPassword(e.target.value)} mb={2} borderColor={password && !isValidPassword(password) ? "red.500" : "gray.300"} />
        {password && !isValidPassword(password) && <Text color="red.500" fontSize="sm">Password must be 8+ chars, include uppercase, number, and special char.</Text>}
         <Button colorScheme="green" onClick={handleSignUp} w="full" >Register</Button>
        <Text mt={2} color={"black"}>Already have an account? <Link color="blue.500" onClick={() => navigate("/SignIn")}>Sign In</Link></Text>
        </VStack>
    </Box>
  );
};

export default SignUp;
