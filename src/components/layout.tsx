import { Box } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <Box minH="100vh" bg="grey.100" color="white">
      <Header />
        <Box as="main"  minHeight="80vh" p={6}>
          {children}
        </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
