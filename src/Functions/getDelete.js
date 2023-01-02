export const deleteMe = async (id) => {
  const res = await fetch(`http://localhost:5000/getpost?id=${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};