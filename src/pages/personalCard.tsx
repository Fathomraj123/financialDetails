import { Box, Text, Spinner, Select, Input, Button } from "@chakra-ui/react";

import PersonCard from "../components/card";
import usePeopleData from "../hooks/usePeopleData";
import { useState } from "react";

const PeoplePage = () => {
  const { people, loading, error } = usePeopleData(12);
  const [search, setSearch] = useState("");
  
    const [submittedSearch, setSubmittedSearch] = useState(""); 
    const [sort, setSort] = useState("");

    const handleSubmit = () => {
      setSubmittedSearch(search); 
    };

    const filteredData = people.filter((item) => {
      return (
        item.name.toLowerCase().includes(submittedSearch.toLowerCase())
      );
    });

    const sortedData = filteredData.slice().sort((a, b) => {
      if (sort === "A-Z") {
        return a.name.localeCompare(b.name);
      } else if (sort === "Z-A") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="100%" p={4}>
  
        <Text fontSize="3xl" fontWeight="bold" mb={4}>Person Profile</Text>
  
        <Box display="flex" gap={4} justifyContent="space-between" mb={4} w="90%" maxW="1200px">
          <Box w="250px">
            <Select value={sort} onChange={(e) => setSort(e.target.value)} bg="#202020" borderRadius="md" color="white">
              <option value="" style={{ backgroundColor: "#202020" }}>Sort By</option>
              <option value="A-Z" style={{ backgroundColor: "#202020" }}>A-Z</option>
              <option value="Z-A" style={{ backgroundColor: "#202020" }}>Z-A</option>
            </Select>
          </Box>
  
  
          <Input
            type="text"
            value={search}
            placeholder="Search by name"
            onChange={(e) => setSearch(e.target.value)}
            bg="gray.800"
            color="white"
            fontWeight="500"
            borderRadius="md"
          />
  
          <Button colorScheme="purple" onClick={handleSubmit}>Submit</Button>
        </Box>
        {loading && <Spinner color="blue" />}
      {error && <Text color="red">Error: {error}</Text>}

      {!loading && !error && (
        <Box style={{ display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",gap: "20px"}} overflowX="auto" w="90%" maxW="1200px">
          {sortedData.map((item, index) => (
            <PersonCard key={index} name={item.name} email={item.email} avatar={item.avatar} city={item.city} />
          ))}
        </Box>
      )}
        </Box>
    );
};

export default PeoplePage;
