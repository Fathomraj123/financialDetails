import { faker } from "@faker-js/faker";

export const generatePeople = (count: number = 10) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    city: faker.location.city(),
  }));
};
