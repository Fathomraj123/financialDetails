import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validation = yup.object().shape({
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup.string().required("password is mandotry"),
  });
  const defaultvalue = {
    email: "",
    password: "",
  };

  const method = useForm({
    resolver: yupResolver(validation),
    defaultvalues: defaultvalue,
  });

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    if (!storedUser) {
      alert("User not found. Please sign up first.");
      return;
    }

    if (
      (storedUser.email === email || storedUser.username === username) &&
      storedUser.password === password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/Home");
      window.location.reload();
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <form onSubmit={method.handleSubmit(handleLogin)}>
      <Box
        maxW="400px"
        mx="auto"
        mt={10}
        p={6}
        boxShadow="lg"
        borderRadius="lg"
        bg="gray.50"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={4} color="black">
          Sign In
        </Heading>
        <VStack spacing={4}>
          <Input
            {...method.register("email")}
            type="text"
            color={"black"}
            placeholder="Enter Username or Email"
            mb={2}
            value={email || username}
            onChange={(e) =>
              e.target.value.includes("@")
                ? (setEmail(e.target.value), setUsername(""))
                : (setUsername(e.target.value), setEmail(""))
            }
          />
          {method.formstate.errors.email && (<p style={{color:"red"}}>{method.formstate.errors.email.message}</p>)}
          <Input
            type="password"
            {...method.register("password")}
            placeholder="Enter Password"
            value={password}
            color="black"
            onChange={(e) => setPassword(e.target.value)}
            focusBorderColor="blue.500"
          />
          {method.formstate.errors.password && (<p style={{color:"red"}}>{method.formstate.errors.password.message}</p>)}
          <Button type="submit" colorScheme="blue" width="full">
            Sign In
          </Button>
          <Text mt={2} color={"black"}>
            Don't have an account?{" "}
            <Link color="blue.500" onClick={() => navigate("/SignUp")}>
              Sign Up
            </Link>
          </Text>
        </VStack>
      </Box>
    </form>
  );
};

export default SignIn;
