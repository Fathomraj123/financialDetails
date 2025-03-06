import { useState } from "react";
import usefetchRecord from "@/hooks/useFetchRecord";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { Searching, Sorting } from "@/components/SearctAndSort";

const FinancialInfo = () => {
  const { data, error, loading } = usefetchRecord();
  const [search, setSearch] = useState("");

  const [submittedSearch, setSubmittedSearch] = useState("");
  const [sort, setSort] = useState("");

  const handleSubmit = () => {
    setSubmittedSearch(search.trim());
  };

  const filteredData = data.filter((item) => {
    return (
      item.accountName.toLowerCase().includes(submittedSearch.toLowerCase()) ||
      item.accountNumber.toString().includes(submittedSearch) ||
      item.companyName.toLowerCase().includes(submittedSearch.toLowerCase())
    );
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sort === "A-Z ") {
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
    <Box
      display="flex"
      color="black"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      p={4}
    >
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Finance Data
      </Text>

      <Box
        display="flex"
        gap={4}
        justifyContent="space-between"
        mb={4}
        w="90%"
        maxW="1200px"
      >
        <Sorting
          sort={sort}
          setSort={setSort}
          option={["A-Z", "Z-A", "Low to High", "High to Low"]}
        />
        <Searching
          search={search}
          setSearch={setSearch}
          handleSubmit={handleSubmit}
          placeholder={"Search by Comapany name, account number or acount name"}
        />
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

export default FinancialInfo;
