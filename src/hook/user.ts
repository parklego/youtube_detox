import fetcher from "@/utils/fetcher";
import useSWR from "swr";

type User =
  | {
      count: number;
    }
  | any;

interface UseAllUserResponse {
  user: User;
  isLoading: boolean;
  isError: boolean;
}

export const useAllUser = (): UseAllUserResponse => {
  const { data, error, isLoading } = useSWR("/api/community", fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
