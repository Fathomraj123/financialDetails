import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

interface FinanceData {
  companyName: string;
  accountName: string;
  accountNumber: number;
  amount: number;
  transactionType: string;
  balance: number;
}

const useFetchRecord = () => {
  const [data, setData] = useState<FinanceData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true); 

    try {
      const response: FinanceData[] = Array.from({ length: 20 }, () => ({
        companyName: faker.company.name(),
        accountName: faker.finance.accountName(),
        accountNumber: parseInt(faker.finance.accountNumber(), 10) || 0, 
        amount: parseFloat(faker.finance.amount()), 
        transactionType: faker.finance.transactionType(),
        balance: parseFloat(faker.finance.amount())
      }));

      setData(response);
    //   console.log(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false); 
    }
  }, []); 

  return { data, error, loading };
};

export default useFetchRecord;
