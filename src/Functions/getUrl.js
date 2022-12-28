const api = process.env.REACT_APP_imgbb_key;
export const getImage = async (file) => {
  const formdata = new FormData();
  formdata.append("image", file, "taskimg");
  const res = await fetch(`https://api.imgbb.com/1/upload?key=${api}`, {
    method: "POST",
    body: formdata,
  });
  const data = await res.json();
  return data;
};
