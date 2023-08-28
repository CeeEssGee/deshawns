import { useState } from "react";
import { getCities, getWalkers, getFilteredCity, getWalkerCities } from "../../apiManager";
import { useEffect } from "react";


const walkers = await getWalkers();
const cities = await getCities();

export const Walkers = () => {
    const [walkers, setWalkers] = useState([])
    const [cities, setCities] = useState([])
    const [filtered, setFiltered] = useState([])

    const getAllWalkers = async () => {
        const fetchedWalkers = await getWalkers()
        setWalkers(fetchedWalkers)
    }

    const getAllCities = async () => {
        const fetchedCities = await getCities()
        setCities(fetchedCities)
    }

    useEffect(() => {
        getAllWalkers()
        getAllCities()
        getFilteredCity()
    }, [])

    const handleSelectChange = (evt) => {
        getFilteredCity(evt.target.value)
            .then((data) => {
                setFiltered(data.walkers)
            })
    }

    return (
        <>
            {/* filter by city */}
            <div className="filterCity">
                <select id="FilterCity" onChange={(evt) => handleSelectChange(evt)}>
                    <option value="0">Filter by city</option>
                    {
                        cities.map((city) => {
                            return (
                                <option value={`${city.id}`} key={`city--${city.id}`}>{city.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            {/* list of walkers */}
            <div className="allWalkers">
                <h2 className="heading allWalkers-heading">Walkers:</h2>
                <div className="container allWalkers-container">
                    {walkers.map((walker) => {
                        return <h3 className="walker" key={`walker--${walker.id}`}>{walker.name}
                        </h3>
                    })}
                </div>
            </div>
        </>
    )
}