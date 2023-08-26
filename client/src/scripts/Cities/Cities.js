import { useEffect, useState } from "react";
import { getCities, postCity } from "../../apiManager";


const cities = await getCities();

export const Cities = () => {
    const [cities, setCities] = useState([])
    const [city, updateCity] = useState({
        name: ""
    })

    const getAllCities = async () => {
        const fetchedCities = await getCities()
        setCities(fetchedCities)
    }

    useEffect(() => {
        getAllCities()
    }, [])

    const handleAddButtonClick = (event) => {
        event.preventDefault()

        const cityToSendToAPI = {
            name: city.name
        }

        postCity(cityToSendToAPI)
            .then(() => {
                getAllCities()
            })
    }

    return (
        <>
            {/* add a city */}
            <div className="addCity"><input id="addCityInput" type="text" placeholder="Enter city to add" value={city.name} onChange={(event) => {
                const copy = { ...city }
                copy.name = event.target.value
                updateCity(copy)
            }
            } />
                <button onClick={(clickEvent) => handleAddButtonClick(clickEvent)}>Add City</button>
            </div>

            {/* list of cities */}
            <div className="allCities">
                <h2 className="heading allCities-heading">All Cities:</h2>
                <div className="container allCities-container">
                    {cities.map((city) => {
                        return <h4 className="city" key={`city--${city.id}`}>
                            {city.name}
                        </h4>
                    })}
                </div>
            </div>
        </>
    )
}