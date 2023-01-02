import { toast } from "react-toast";

export const getUpdate = async (id, body) => {
  try {
    const res = await fetch(`http://localhost:5000/getpost/single/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    toast.error(error.message);
    console.error(error);
  }
};
