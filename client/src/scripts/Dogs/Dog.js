import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCity, getWalker } from "../../apiManager"

export const Dog = ({ id, name, walkerId, cityId }) => {
    const [city, setCity] = useState({})
    const [walker, setWalker] = useState({})

    useEffect(() => {
        getCity(cityId)
            .then((data) => {
                setCity(data)
            })
        getWalker(walkerId)
            .then((data) => {
                setWalker(data)
            })
    }, []);

    return <section className="dog" key={`dog--${id}`}>
        <div>
            Dog: <Link to={`/dogs/${id}`}>{name}</Link>
            <p>City: {city.name}</p>
        </div>
    </section>
}