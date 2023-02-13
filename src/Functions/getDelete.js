export const deleteMe = async (id) => {
  const res = await fetch(
    `https://task-app-server-lyart.vercel.app/getpost?id=${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await res.json();
  return data;
};
