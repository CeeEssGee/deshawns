import { useEffect, useState } from "react";
import { getCities, getDogs, postDog } from "../../apiManager";
import { Link, useNavigate } from "react-router-dom";

const dogs = await getDogs();

export const Dogs = () => {
    const navigate = useNavigate()
    const [dogs, setDogs] = useState([])
    const [dog, updateDog] = useState({
        name: "",
        cityId: 0,
        walkerId: 0
    })
    const [cities, setCities] = useState([])

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

                {/* Need a popup form? for adding a dog? */}
            </div>


            {/* Dog list */}
            <div className="allDogs">
                <h2 className="heading allDogs-heading">Dogs:</h2>
                <div className="container allDogs-container">
                    {dogs.map((dog) => {
                        return <h3 className="dog" key={`dog--${dog.id}`}>
                            <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
                        </h3>
                    })}
                </div >
            </div >
        </>
    )
};