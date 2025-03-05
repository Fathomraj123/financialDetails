import { Box, Text, Spinner} from "@chakra-ui/react";
import PersonCard from "@/components/card";
import usePeopleData from "@/hooks/usePeopleData";
import {Searching, Sorting} from "@/components/SearctAndSort";
import { useState } from "react";

const PersonalCard = () => {

  const {people } = usePeopleData();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [submitSearch, setSubmitSeaarch] = useState("");


  const handleSubmit = () => setSubmitSeaarch(search.trim());

  const filteredData = people.filter((item) => {

    return (
      item.name.toLowerCase().includes(submitSearch.toLowerCase()) 
    );
  });


  const sortedData = filteredData.sort((a, b) => {

    if (sort === "A-Z") {
      return a.name.localeCompare(b.name);
    } else if (sort === "Z-A") {
      return b.name.localeCompare(a.name);
    } else {
      return 0;
    }
  });

  const {loading, error } = usePeopleData();


    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="100%" p={4}>
  
        <Text fontSize="3xl" fontWeight="bold" color={"black"} mb={4}>Person Profile</Text>
        <Box display="flex" gap={4} justifyContent="space-between" mb={4} w="90%" maxW="1200px">
               <Sorting sort={sort} setSort={setSort} option= {["A-Z", "Z-A"]} />
               <Searching search = {search} setSearch = {setSearch} handleSubmit = {handleSubmit} placeholder = {"Search by name"}/>
               </Box>


        {loading && <Spinner color="white" />}
      {error && <Text color="red">Error: {error}</Text>}

      {!loading && !error && (
        <Box style={{ display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",gap: "20px"}} color = " black"overflowX="auto" w="90%" maxW="1200px">
          {sortedData.map((item, index) => (
            <PersonCard key={index} name={item.name} email={item.email} avatar={item.avatar} city={item.city} />
          ))}
        </Box>
      )}
        </Box>
    );
};

export default PersonalCard;
