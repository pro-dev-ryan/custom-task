export const addPost = async (body) => {
  const res = await fetch("https://task-app-server-lyart.vercel.app/addtask", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};
