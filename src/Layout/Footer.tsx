import { Box, Text } from "@chakra-ui/react";




const Footer = () => (
<Box as="footer" p={4} textAlign="center" bg="purple.900" mt={6} boxShadow="md" >
        <Text>&copy; {new Date().getFullYear()} My App</Text>
      </Box>);

export default Footer;