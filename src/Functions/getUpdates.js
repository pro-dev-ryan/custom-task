import { toast } from "react-toast";

export const getUpdate = async (id, body) => {
  try {
    const res = await fetch(
      `https://task-app-server-lyart.vercel.app/getpost/single/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    toast.error(error.message);
    console.error(error);
  }
};
