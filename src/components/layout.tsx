import { Box } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
  }, []);
  return (
    <Box minH="100vh" bg="grey.100" color="white">
      {isAuthenticated && <Header />}
      <Box as="main" minHeight="80vh" p={6}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
