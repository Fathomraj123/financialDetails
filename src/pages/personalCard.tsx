import { SimpleGrid, Box, Heading, Spinner, Text } from "@chakra-ui/react";
import PersonCard from "../components/card";
import usePeopleData from "../hooks/usePeopleData";

const PeoplePage = () => {
  const { people, loading, error } = usePeopleData(12);

  return (
    <Box p={4}>
      <Heading mb={4}>People Data</Heading>

      {loading && <Spinner size="xl" />}
      {error && <Text color="red.500">{error}</Text>}

      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {people.map((person) => (
          <PersonCard key={person.id} {...person} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PeoplePage;
