import { useEffect, useState } from "react";
import { getCities, getDogs, deleteDog } from "../../apiManager";
import { Link, useNavigate } from "react-router-dom";

const dogs = await getDogs();

export const Dogs = () => {
    const navigate = useNavigate()
    const [dogs, setDogs] = useState([])
    const [cities, setCities] = useState([])
    // const [selectedDog, deleteSelectedDog] = useState([])

    const getAllDogs = async () => {
        const fetchedDogs = await getDogs()
        setDogs(fetchedDogs)
    }

    const getAllCities = async () => {
        const fetchedCities = await getCities()
        setCities(fetchedCities)
    }

    useEffect(() => {
        getAllDogs()
    }, [])

    const handleAddButtonClick = (evt) => {
        navigate(`/dogs/add`)
    }


    return (
        <>
            {/* Add a dog */}
            <div className="addDog">
                <button className="addDogButton" onClick={(evt) => {
                    handleAddButtonClick()
                }}>Add Dog</button>
            </div>


            {/* Dog list */}
            <div className="allDogs">
                <h2 className="heading allDogs-heading">Dogs:</h2>
                <div className="container allDogs-container">
                    {dogs.map((dog) => {
                        return <h3 className="dog" value={dog.id} key={`dog--${dog.id}`}>
                            <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
                            <button className="removeDogButton" onClick={() => { deleteDog(dog.id).then(() => { getAllDogs() }) }}>Remove</button>
                        </h3>
                    })}
                </div >
            </div >
        </>
    )
};