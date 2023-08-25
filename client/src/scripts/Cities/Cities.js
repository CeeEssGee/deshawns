import { useEffect, useState } from "react";
import { getCities } from "../../apiManager";


const cities = await getCities();

export const Cities = () => {
    const [cities, setCities] = useState([])

    const getAllCities = async () => {
        const fetchedCities = await getCities()
        setCities(fetchedCities)
    }

    useEffect(() => {
        getAllCities()
    }, [])

    return (
        <>
            <div className="allCities">
                <h2 className="heading allCities-heading">All Cities:</h2>
                <div className="container allCities-container">
                    {cities.map((city) => {
                        return <h3 className="city" key={`city--${city.id}`}>
                            {city.name}
                        </h3>
                    })}
                </div>
            </div>
        </>
    )
}