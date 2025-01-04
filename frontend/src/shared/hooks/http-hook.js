import { useCallback, useRef, useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrll = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrll);
      try {
        const response = await fetch(url, {
          method, // equivaut a method:method
          body,
          headers,
        });
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(response.message);
        }
        return responseData;
      } catch (err) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    []
  );
  const clearError = () => {
    setError(null);
  };
  return { isLoading, error, sendRequest, clearError }; // equivaut a isLoading:isLoading
};
