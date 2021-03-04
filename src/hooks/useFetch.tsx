import { useEffect, useState } from "react";

interface State {
  loading: boolean;
  data?: any;
  error?: string | null;
  hasMore?: boolean;
}

const useFetch = (url?: string): State => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (!url) {
      return;
    }

    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(process.env.REACT_APP_CORS_PROXY + url, {
          headers: {
            Origin: "http://localhost:3000/",
          },
          mode: "cors",
          signal: abortController.signal,
        });
        const data = await response.json();
        setData(data);
        data.length === 0 ? setHasMore(false) : setHasMore(true);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { loading, data, error, hasMore };
};

export default useFetch;
