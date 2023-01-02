export const singlePost = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/getpost/single/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
