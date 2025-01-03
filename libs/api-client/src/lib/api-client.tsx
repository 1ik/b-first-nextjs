/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient, QueryClientProvider, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext } from "react";

interface Props {
  baseUrl: string;
  token: string;
  children: any;
  // any other props that come into the component, you don't have to explicitly define children.
}

export const ApiClientContext = createContext<any>({});

ApiClientContext.displayName = "Api Client Provider";

export const ApiClient: React.FC<Props> = ({ children, ...props }) => {
  const queryClient = new QueryClient({});
  return (
    <ApiClientContext.Provider value={{ ...props }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientContext.Provider>
  );
};

/**
 * Api Hook To Execute a Get Request
 */
export function useGet(uri: string, options?: any) {
  const { baseUrl, token } = useContext(ApiClientContext);

  const { isError, isSuccess, isPending, data, error, refetch } = useQuery({
    queryKey: [uri],
    queryFn: () =>
      axios.get(`${baseUrl}/${uri}`, {
        ...options,
        timeout: 5000, // Timeout of 5 seconds for the request
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      }),
    retry: 3,  // Retry failed requests up to 3 times
    retryDelay: attempt => Math.min(1000 * 2 ** attempt, 3000), // Exponential backoff, with a max of 3 seconds
  });

  return { isError, isSuccess, isPending, data: data?.data, error, refetch };
}

/**
 * Api Hook To Execute a Post Request
 */
export function usePost(uri: string) {
  const { baseUrl, token } = useContext(ApiClientContext);

  const {
    mutate: request,
    mutateAsync: requestAsync,
    isError,
    isSuccess,
    isPending,
    data,
    error,
  } = useMutation({
    mutationKey: [uri],
    mutationFn: (body: any) => {
      return axios.post(`${baseUrl}/${uri}`, body, {
        timeout: 5000,  // Timeout of 5 seconds for the request
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
    },
    retry: 3,  // Retry failed requests up to 3 times
    retryDelay: attempt => Math.min(1000 * 2 ** attempt, 3000), // Exponential backoff, with a max of 3 seconds
  });

  return { request, requestAsync, isError, isSuccess, isPending, data, error };
}

/**
 * Api Hook To Execute a Put Request
 */
export function usePut(uri: string) {
  const { baseUrl, token } = useContext(ApiClientContext);

  const {
    mutate: request,
    isError,
    isSuccess,
    isPending,
    data,
    error,
  } = useMutation({
    mutationFn: (payload: any) => {
      return axios.put(`${baseUrl}/${uri}`, payload, {
        timeout: 5000,  // Timeout of 5 seconds for the request
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
    },
    retry: 3,  // Retry failed requests up to 3 times
    retryDelay: attempt => Math.min(1000 * 2 ** attempt, 3000), // Exponential backoff, with a max of 3 seconds
  });

  return { request, isError, isSuccess, isPending, data, error };
}

/**
 * Api Hook To Execute a Delete Request
 */
export function useDelete(uri: string) {
  const { baseUrl, token } = useContext(ApiClientContext);

  const {
    mutate: request,
    isError,
    isSuccess,
    isPending,
    data,
    error,
  } = useMutation({
    mutationFn: () => {
      return axios.delete(`${baseUrl}/${uri}`, {
        timeout: 5000,  // Timeout of 5 seconds for the request
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
    },
    retry: 3,  // Retry failed requests up to 3 times
    retryDelay: attempt => Math.min(1000 * 2 ** attempt, 3000), // Exponential backoff, with a max of 3 seconds
  });

  return { request, isError, isSuccess, isPending, data, error };
}
