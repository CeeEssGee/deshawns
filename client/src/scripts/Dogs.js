import { useEffect, useState } from "react";
import { getDogs } from "../apiManager";
import { useNavigate } from "react-router-dom";
const dogs = await getDogs();

export const Dogs = () => {
    const [dogs, setDogs] = useState([])
    const navigate = useNavigate();

    const getAllDogs = async () => {
        const fetchedDogs = await getDogs()
        setDogs(fetchedDogs)
    }

    useEffect(() => {
        getAllDogs()
    }, [])

    return (
        <>
            <div className="allDogs">
                <h2 className="heading allDogs-heading">All Dogs:</h2>
                <div className="container allDogs-container">
                    {dogs.map((dog) => {
                        return <h3 className="dog" id="${dog.Id}">
                            {dog.name}
                        </h3>
                    })}
                </div>
            </div>
        </>
    )
};