import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useDisclosure } from "@chakra-ui/react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSignOut = () => {
    localStorage.setItem("isAuthenticated", "False"); //removing auth status
    navigate("/SignIn"); //redirect to signIn page
    onClose();
    // window.location.href = "/SignIn";
    window.location.reload();
  };

  return (
    <Flex
      as="nav"
      p={4}
      justify="space-between"
      align="center"
      bg="purple.900"
      boxShadow="md"
    >
      <Box display={"flex"} gap={4}>
        <IoMenu onClick={onOpen} size="50px" />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="grey.100">
            <DrawerHeader bgColor="purple.900">
              <Link to="/">
                {" "}
                <Image
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/qualtech-consultants-pvt.jpg"
                  alt="QualTech"
                  boxSize="50px"
                  width="1500px"
                  fallback={
                    <Text fontSize="xl" fontWeight="bold">
                      QualTech
                    </Text>
                  }
                />
              </Link>
            </DrawerHeader>

            <DrawerBody bgColor="white">
              <Box display="grid" gap="4">
                <Button
                  as={Link}
                  to="/personalCard"
                  onClick={onClose}
                  colorScheme={
                    location.pathname === "/personalCard" ? "blue" : "purple"
                  }
                  variant={
                    location.pathname === "/personalCard" ? "solid" : "outline"
                  }
                >
                  Person
                </Button>
                <Button
                  as={Link}
                  to="/FinancialInfo"
                  onClick={onClose}
                  colorScheme={
                    location.pathname === "/FinancialInfo" ? "blue" : "purple"
                  }
                  variant={
                    location.pathname === "/FinancialInfo" ? "solid" : "outline"
                  }
                >
                  Finance
                </Button>
              </Box>
            </DrawerBody>

            <DrawerFooter bgColor="white">
              <Button
                colorScheme="blue"
                variant="outline"
                mr={3}
                onClick={handleSignOut}
              >
                SignOut
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Box>
          <Link to="/">
            <Image
              src="https://static.ambitionbox.com/alpha/company/photos/logos/qualtech-consultants-pvt.jpg"
              alt="QualTech"
              boxSize="50px"
              width="150px"
              fallback={
                <Text fontSize="xl" fontWeight="bold">
                  QualTech
                </Text>
              }
            />
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
