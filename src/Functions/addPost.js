export const addPost = async (body) => {
  const res = await fetch("http://localhost:5000/addtask", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};
