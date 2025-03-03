import { Box, Button, Input, Heading, Text, Link , VStack} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import {useNavigate } from "react-router-dom";


const SignIn = () =>{
    const [email, setEmail] = useState(""); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

   

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    
        if (!storedUser) {
            alert("User not found. Please sign up first.");
            return;
        }
    
        if ((storedUser.email === email || storedUser.username === username) && storedUser.password === password) {
            localStorage.setItem("isAuthenticated", "true"); 
            navigate("/");
            window.location.reload();
        } else {
            alert("Invalid credentials");
        }
    };       
    return (
        <Box maxW="400px" mx="auto" mt={10} p={6} boxShadow="lg" borderRadius="lg" bg="gray.50">
          <Heading as="h2" size="lg" textAlign="center" mb={4} color="black">
            Sign In
          </Heading>
          <VStack spacing={4}>
          <Input 
                    type="text"
                    color={"black"} 
                    placeholder="Enter Username or Email" mb={2} 
                    value={email || username}  
                    onChange={(e) => (e.target.value.includes("@") ? (setEmail(e.target.value), setUsername("")) : (setUsername(e.target.value), setEmail("")))} />
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              color="black"
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="blue.500"
            />
            <Button colorScheme="blue" width="full" onClick={handleLogin}>
              Sign In
            </Button>
            <Text mt={2} color={"black"}>
           Don't have an account? <Link color="blue.500" onClick={() => navigate("/SignUp")}>Sign Up</Link></Text>
          </VStack>
        </Box>
      );

};

export default SignIn;