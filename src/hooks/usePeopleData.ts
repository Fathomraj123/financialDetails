import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";


const usePeopleData = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      const response: Person[] = Array.from({ length: 20 }, () => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        city: faker.location.city(),
      }));
      // const data = generatePeople(count);
      setPeople(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  return { people, loading, error };
};

export default usePeopleData;
