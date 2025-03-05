import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required")
      .test(
        "is-valid-email",
        "Invalid email format",
        (value) =>
          value?.includes(".") && (value.split(".").pop() || "").length > 1
      ),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must include at least one uppercase letter")
      .matches(/\d/, "Must include at least one number")
      .matches(/[@$!%*?&]/, "Must include at least one special character")
      .required("Password is required"),
  });

  const method = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSignUp = () => {
    const { username, email, password } = method.getValues();

    localStorage.setItem("user", JSON.stringify({ username, email, password }));
    localStorage.setItem("isAuthenticated", "true");

    alert("Registration successful! Please log in to access your account.");
    navigate("/SignIn");
  };
  return (
    <form onSubmit={method.handleSubmit(handleSignUp)}>
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
            {...method.register("username")}
            placeholder="Enter username"
            color="black"
            bg="white"
          />
          {method.formState.errors.username && (
            <Text color="red.500" fontSize="sm">
              {method.formState.errors.username.message}
            </Text>
          )}
          <Input
            {...method.register("email")}
            type="email"
            placeholder="Enter Email"
            color="black"
            bg="white"
          />
          {method.formState.errors.email && (
            <Text color="red.500" fontSize="sm">
              {method.formState.errors.email.message}
            </Text>
          )}
          <Input
            {...method.register("password")}
            type="password"
            placeholder="Enter Password"
            color="black"
            bg="white"
          />
          {method.formState.errors.password && (
            <Text color="red.500" fontSize="sm">
              {method.formState.errors.password.message}
            </Text>
          )}

          {/* Register Button  */}
          <Button type="submit" colorScheme="green" w="full">
            Register
          </Button>

          {/* Redirect to SignIn */}
          <Text mt={2} color={"black"}>
            Already have an account?{" "}
            <Link color="blue.500" onClick={() => navigate("/SignIn")}>
              Sign In
            </Link>
          </Text>
        </VStack>
      </Box>
    </form>
  );
};

export default SignUp;
