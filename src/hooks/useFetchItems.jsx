import { useEffect, useState } from "react";

export const useFetchItems = (fetchAPI) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // TODO: get data from dashboard.service
    const fetchData = async () => {
      const data = await fetchAPI();
      setItems(data);
    };
    fetchData();
  }, [fetchAPI]);

  return items;
};