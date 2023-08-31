export const getGreeting = async () => {
  const res = await fetch(`/api/hello`);
  return res.json();
};

// get all dogs
export const getDogs = async () => {
  const res = await fetch(`/api/home`);
  return res.json();
};

// get one dog's details
export const getDogDetails = async (id) => {
  const res = await fetch(`/api/dogs/${id}`);
  return res.json();
};

// add a dog with neighborhood
export const postDog = async (dogObject) => {
  const res = await fetch(`/api/dogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dogObject)
  })
};

// add a dog's walker - is this correct?
export const updateDog = async (dog) => {
  await fetch(`/api/updateDog/${dog.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog)
  });
}
// export const postDogWalker = async (dogId, dogObj) => {
//   const res = await fetch(`/api/dogs/${dogId}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(dogObj)
//   })
// }

// dogs by city
export const dogsByCity = async (cityId) => {
  const res = await fetch(`/api/DogsByCity/${cityId}`)
  return res.json();
}

// delete a dog
export const deleteDog = async (id) => {
  await fetch(`/api/dogs/${id}`, {
    method: 'DELETE',
  })
};

// get all cities
export const getCities = async () => {
  const res = await fetch(`/api/cities`);
  return res.json();
};

// get 1 city by id
export const getFilteredCity = async (id) => {
  const res = await fetch(`/api/cities/${id}`);
  return res.json();
}

// post a new city
export const postCity = async (cityObject) => {
  await fetch(`/api/cities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cityObject)
  });
};

// get walkerCities
export const getWalkerCities = async () => {
  const res = await fetch(`/api/walkercities`);
  return res.json();
};

// get walkers
export const getWalkers = async () => {
  const res = await fetch(`/api/walkers`);
  return res.json();
};

// get walker city list by walkerId
// export const getWalkerCityListByWalkerId = async (walkerId) => {
//   const res = await fetch(`/api/walkerCities/${walkerId}`);
//   return res.json();
// }