import useSWR from "swr";
import fetcher from "../lib/fetcher";

const usePayment = () => {
  const { data, error, isLoading } = useSWR("/api/payments", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default usePayment;
