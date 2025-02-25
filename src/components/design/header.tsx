import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Flex as="nav" p={4} justify="space-between" align="center" bg="purple.900" boxShadow="md">
      <Box>
        <Image 
          src="https://static.ambitionbox.com/alpha/company/photos/logos/qualtech-consultants-pvt.jpg" 
          alt="QualTech" 
          boxSize="50px" 
          width="50" 
          fallback={<Text fontSize="xl" fontWeight="bold">QualTech</Text>} 
        />
      </Box>
      
      <Flex gap={4}>
        <Button 
          as={Link} 
          to="/personalCard" 
          colorScheme={location.pathname === "/personalCard" ? "blue" : "purple"} 
          variant={location.pathname === "/personalCard" ? "solid" : "outline"}
        >
          Person
        </Button>
        <Button 
          as={Link} 
          to="/FinancialInfo" 
          colorScheme={location.pathname === "/FinancialInfo" ? "blue" : "purple"} 
          variant={location.pathname === "/FinancialInfo" ? "solid" : "outline"}
        >
          Finance
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
