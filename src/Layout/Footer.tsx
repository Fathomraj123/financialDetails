import { Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box
    position="absolute"
    bottom={0}
    left={0}
    right={0}
    as="footer"
    p={4}
    textAlign="center"
    bg="purple.900"
    mt={6}
    boxShadow="md"
  >
    <Text>&copy; {new Date().getFullYear()} My App</Text>
  </Box>
);

export default Footer;
