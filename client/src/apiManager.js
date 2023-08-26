export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = async () => {
  const res = await fetch(`/api/home`);
  return res.json();
};

export const getCities = async () => {
  const res = await fetch(`/api/cities`);
  return res.json();
};

export const postCity = async (cityObject) => {
  await fetch(`/api/cities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cityObject)
  });
};

export const getDogDetails = async (id) => {
  const res = await fetch(`/api/dogs/${id}`);
  return res.json();
};