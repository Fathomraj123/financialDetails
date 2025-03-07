import { Box, Image, Text } from "@chakra-ui/react";


const Card = ({ name, email, avatar, city }: CardProps) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
    <Image src={avatar} borderRadius="full" boxSize="100px" />
    <Text fontWeight="bold">{name}</Text>
    <Text fontSize="sm">{email}</Text>
    <Text color="gray.500">{city}</Text>
  </Box>
);

export default Card;
