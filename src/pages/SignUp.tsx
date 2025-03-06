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
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/\d/, "Must include at least one number")
    .matches(/[@$!%*?&]/, "Must include at least one special character"),
});

const SignUp = () => {
  const method = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const {
    getValues,
    handleSubmit,
    register,
    formState: { errors },
  } = method;

  const handleSignUp = () => {
    const { username, email, password } = getValues();

    localStorage.setItem("user", JSON.stringify({ username, email, password }));
    localStorage.setItem("isAuthenticated", "true");

    alert("Registration successful! Please log in to access your account.");
    navigate("/SignIn");
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
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
          Sign Up
        </Heading>
        <VStack spacing="4">
          <FormControl isInvalid={!!errors.username}>
            <Input
              {...register("username")}
              placeholder="Enter Username"
              bg="white"
              color="black"
            />
            <FormErrorMessage color="red.500" fontSize="sm">
              {errors.username?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <Input
              {...register("email")}
              placeholder="Enter Email"
              bg="white"
              color="black"
            />
            <FormErrorMessage color="red.500" fontSize="sm">
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <Input
              type="password"
              {...register("password")}
              placeholder="Enter Password"
              bg="white"
              color="black"
            />
            <FormErrorMessage color="red.500" fontSize="sm">
              {errors.password?.message}
            </FormErrorMessage>
          </FormControl>

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
