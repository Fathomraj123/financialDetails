import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  Link,
  VStack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const defaultValues = {
  emailOrUsername: "",
  password: "",
};

const validation = yup.object().shape({
  emailOrUsername: yup.string().required("Email or Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const method = useForm({
    resolver: yupResolver(validation),
    defaultValues: defaultValues,
  });

  const navigate = useNavigate();
  const {
    getValues,
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = method;

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    if (!storedUser) {
      setError("emailOrUsername", {
        type: "manual",
        message: "User not found.Please sign up first.",
      });
      return;
    }

    const { emailOrUsername, password } = getValues();
    const isEmailOrUsernameValid =
      storedUser.email === emailOrUsername ||
      storedUser.username === emailOrUsername;

    const isPasswordValid = storedUser.password === password;

    if (isEmailOrUsernameValid && isPasswordValid) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/Home");
      window.location.reload();
    } else if (!isEmailOrUsernameValid) {
      setError("emailOrUsername", {
        type: "manual",
        message: "Invalid email or username",
      });
      clearErrors("password");
    } else if (!isPasswordValid) {
      setError("password", {
        type: "manual",
        message: "Invalid password",
      });
      clearErrors("emailOrUsername");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
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
          <FormControl isInvalid={!!errors.emailOrUsername}>
            <Input
              {...register("emailOrUsername")}
              type="text"
              placeholder="Enter Username or Email"
              color="black"
              borderColor="gray.300"
              _focus={{ borderColor: "blue.500" }}
            />
            <FormErrorMessage>
              {errors.emailOrUsername?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <Input
              {...register("password")}
              type="password"
              placeholder="Enter Password"
              color="black"
              borderColor="gray.300"
              _focus={{ borderColor: "blue.500" }}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

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
