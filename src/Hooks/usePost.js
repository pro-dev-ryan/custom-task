import { useEffect, useState } from "react";
import { toast } from "react-toast";
export const usePost = (mail) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/getpost/${mail}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          setItem(data?.result);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [mail]);
  return item;
};
