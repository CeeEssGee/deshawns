export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = async () => {
  const res = await fetch("/api/home");
  return res.json();
};

export const getCities = async () => {
  const res = await fetch("/api/cities");
  return res.json();
};