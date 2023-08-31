export const getGreeting = async () => {
  const res = await fetch(`/api/hello`);
  return res.json();
};

export const getDogs = async () => {
  const res = await fetch(`/api/home`);
  return res.json();
};

export const getDogDetails = async (id) => {
  const res = await fetch(`/api/dogs/${id}`);
  return res.json();
};

export const postDog = async (dogObject) => {
  const res = await fetch(`/api/dogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dogObject)
  })
};

export const deleteDog = async (id) => {
  await fetch(`/api/dogs/${id}`, {
    method: 'DELETE',
  })
};

export const getCities = async () => {
  const res = await fetch(`/api/cities`);
  return res.json();
};

export const getFilteredCity = async (id) => {
  const res = await fetch(`/api/cities/${id}`);
  return res.json();
}

export const postCity = async (cityObject) => {
  await fetch(`/api/cities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cityObject)
  });
};

export const getWalkerCities = async () => {
  const res = await fetch(`api/walkercities`);
  return res.json();
};

export const getWalkers = async () => {
  const res = await fetch(`/api/walkers`);
  return res.json();
};

export const getSingleWalker = async (id) => {
  const res = await fetch(`/api/walkers/${id}`);
  return res.json();
}

