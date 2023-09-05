import { getDogs, getGreeting, removeDog } from "./apiManager";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Dog } from "./scripts/Dogs/Dog";

export default function Home() {
  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });
  const [dogs, setDogs] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    getGreeting()
      .then(setGreeting)
      .catch(() => {
        console.log("API not connected");
      });

    // get all dogs
    const getAllDogs = async () => {
      const fetchedDogs = await getDogs()
      setDogs(fetchedDogs)
    }
    getAllDogs()

  }, []);

  // event handler for add button
  const handleAddButton = (evt) => {
    evt.preventDefault()
    navigate("/addDog")
  }

  // event handler for remove button
  const handleRemoveButton = (evt, dogId) => {
    evt.preventDefault()
    removeDog(dogId)
      .then(
        getDogs()
          .then((data) => {
            setDogs(data)
          })
      )
  }

  return <>
    <p>{greeting.message}</p>
    <button onClick={handleAddButton}>Add a Dog</button>
    <section className="dogs">
      <p></p>
      {/* list of dogs */}
      {
        dogs.map((dog) => <>
          <Dog key={`dog--${dog.id}`}
            id={dog.id}
            name={dog.name}
            walkerId={dog.walkerId}
            cityId={dog.cityId}
          />
          <button onClick={(evt) => handleRemoveButton(evt, dog.id)}>Remove 👆</button>
          <p></p>
        </>
        )
      }
    </section>
  </>
}