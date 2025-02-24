import { useState, useEffect } from "react";
import { generatePeople } from "../utils/fekarData";

interface Person {
  id: string;
  name: string;
  email: string;
  avatar: string;
  city: string;
}

const usePeopleData = (count: number) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const data = generatePeople(count);
      setPeople(data);
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  }, [count]);

  return { people, loading, error };
};

export default usePeopleData;
