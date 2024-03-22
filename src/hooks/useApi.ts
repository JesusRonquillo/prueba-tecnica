import { useState } from "react";
import { get } from "../services/apiService";

const useApi = <T>(
  endpoint: string
): {
  data: T | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const responseData: T | null = await get(endpoint);
      console.log(responseData, "responsedata");
      if (responseData !== null) {
        setData(responseData);
      }
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useApi;
