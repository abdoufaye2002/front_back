import { useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = (url, method = "GET", body = null, headers = {}) => {
    fetch(url, {
      method, // equivaut a method:method
      body,
      headers,
    });
  };
};
