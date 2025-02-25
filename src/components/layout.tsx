import { Box } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

import Header from "./design/header";
import Footer from "./design/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minH="100vh" bgGradient="linear(to-b, purple.800, black)" color="white">
      <Header />
        <Box as="main" p={6}>
          {children}
        </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
