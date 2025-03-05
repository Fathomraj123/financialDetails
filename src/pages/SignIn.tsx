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
    emailOrUsername: yup.string().required("Email or Username is required"),
    password: yup.string().required("Password is mandatory"),
  });
  const defaultValues = {
    emailOrUsername: "",
    password: "",
  };

  const method = useForm({
    resolver: yupResolver(validation),
    defaultValues: defaultValues,
  });

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    if (!storedUser) {
      alert("User not found. Please sign up first.");
      return;
    }
    const { emailOrUsername, password } = method.getValues(); // getting value from react hook form 
    if (
      (storedUser.email === emailOrUsername || storedUser.username === emailOrUsername || storedUser.username === emailOrUsername) &&  
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
            {...method.register("emailOrUsername")}
            type="text"
            placeholder="Enter Username or Email"
            color={"black"}
          />
          {method.formState.errors.emailOrUsername && (
            <p style={{ color: "red" }}>
              {method.formState.errors.emailOrUsername.message}
            </p>
          )}
          <Input
            {...method.register("password")}
            type="password"
            placeholder="Enter Password"
            color={"black"}
          />
          {method.formState.errors.password && (
            <p style={{ color: "red" }}>
              {method.formState.errors.password.message}
            </p>
          )}
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
