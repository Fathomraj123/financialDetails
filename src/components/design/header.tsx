import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const Header = () => (
<Flex as="nav" p={4} justify="space-between" align="center" bg="purple.900" boxShadow="md">
        
        <Box>
          <Image src="https://static.ambitionbox.com/alpha/company/photos/logos/qualtech-consultants-pvt.jpg" alt="QualTech" boxSize="50px" width="50" fallback={<Text fontSize="xl" fontWeight="bold">QualTech</Text>} />
        </Box>

      
        <Flex gap={4}>
          <Button as={Link} to="/personalCard" colorScheme="purple" >Person</Button>
          <Button as={Link} to="/FinancialInfo" colorScheme="purple" >Finance</Button>
        </Flex>
      </Flex>)

export default Header;