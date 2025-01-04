import { useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = async (
    url,
    method = "GET",
    body = null,
    headers = {}
  ) => {
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
      console.log(responseData);
    } catch (err) {
      setError(error.message);
    }
  };
};
