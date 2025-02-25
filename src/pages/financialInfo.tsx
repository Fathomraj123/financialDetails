import { useState } from "react";
import usefetchRecord from "../hooks/useFetchRecord";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, Spinner, Select, Input, Button } from "@chakra-ui/react";

const financialInfo = () => {

  const { data, error, loading } = usefetchRecord();
  const [search, setSearch] = useState("");

  const [submittedSearch, setSubmittedSearch] = useState(""); 
  const [sort, setSort] = useState("");

  const handleSubmit = () => {
    setSubmittedSearch(search); 
  };

  const filteredData = data.filter((item) => {

    return (
      item.accountName.toLowerCase().includes(submittedSearch.toLowerCase()) ||
      item.accountNumber.toString().includes(submittedSearch) ||
      (item.companyName && item.companyName.toLowerCase().includes(submittedSearch.toLowerCase()))
    );
  });



  const sortedData = filteredData.slice().sort((a, b) => {

    if (sort === "A-Z") {
      return a.companyName.localeCompare(b.companyName);
    } else if (sort === "Z-A") {
      return b.companyName.localeCompare(a.companyName);
    } else if (sort === "Low to High") {
      return a.balance - b.balance;
    } else if (sort === "High to Low") {
      return b.balance - a.balance;
    }
    return 0;
  });


  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="100%" p={4}>

      <Text fontSize="3xl" fontWeight="bold" mb={4}>Finance Data</Text>

      <Box display="flex" gap={4} justifyContent="space-between" mb={4} w="90%" maxW="1200px">
        <Box w="250px">
          <Select value={sort} onChange={(e) => setSort(e.target.value)} bg="#202020" borderRadius="md" color="white">
            <option value="" style={{ backgroundColor: "#202020" }}>Sort By</option>
            <option value="A-Z" style={{ backgroundColor: "#202020" }}>A-Z</option>
            <option value="Z-A" style={{ backgroundColor: "#202020" }}>Z-A</option>
            <option value="Low to High" style={{ backgroundColor: "#202020" }}>Low to High</option>
            <option value="High to Low" style={{ backgroundColor: "#202020" }}>High to Low</option>
          </Select>
        </Box>


        <Input
          type="text"
          value={search}
          placeholder="Search by account name, company name, or account balance"
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
        <Box overflowX="auto" w="90%" maxW="1200px">
          <Table variant="simple" colorScheme="blue" size="lg">
            <Thead>
              <Tr>
                <Th>Company Name</Th>
                <Th>Account Name</Th>
                <Th>Account Number</Th>
                <Th isNumeric>Amount</Th>
                <Th>Transaction Type</Th>
                <Th isNumeric>Balance</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sortedData.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.companyName}</Td>
                  <Td whiteSpace="nowrap">{item.accountName}</Td>
                  <Td whiteSpace="nowrap">{item.accountNumber}</Td>
                  <Td isNumeric>{item.amount}</Td>
                  <Td whiteSpace="nowrap">{item.transactionType}</Td>
                  <Td isNumeric>{item.balance}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default financialInfo;
