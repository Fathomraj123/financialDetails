import { SimpleGrid } from "@chakra-ui/react";
import Card from "../components/card";
import {generatePeople} from "../utils/fekarData";

const PeoplePage = () => {
  const people = generatePeople(12);

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      {people.map((person) => (
        <Card key={person.id} {...person} />
      ))}
    </SimpleGrid>
  );
};

export default PeoplePage;
