export const singlePost = async (id) => {
  try {
    const res = await fetch(
      `https://task-app-server-lyart.vercel.app/getpost/single/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
