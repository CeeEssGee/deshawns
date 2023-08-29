import { useState } from "react";
import { getCities, getWalkers, getFilteredCity, getWalkerCities } from "../../apiManager";
import { useEffect } from "react";

export const Walkers = () => {
    const [walkers, setWalkers] = useState([])
    const [cities, setCities] = useState([])
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const [filteredCity, setFilteredCity] = useState("");

    const getAllWalkers = async () => {
        const fetchedWalkers = await getWalkers()
        setWalkers(fetchedWalkers)
    }

    const getAllCities = async () => {
        const fetchedCities = await getCities()
        setCities(fetchedCities)
    }

    const getFilteredCity = async () => {
        const fetchFiltered = await getFilteredCity()
        setFilteredCity(fetchFiltered)
    }

    useEffect(() => {
        getAllWalkers()
        getAllCities()
    }, [])

    useEffect(
        () => {
            setFilteredCity(cities)
        },
        [cities]
    )

    const handleSelectChange = (evt) => {
        setFilteredCity(evt.target.value)
        getWalkerCities(evt.target.value)
            .then((data) => {
                setFilteredWalkers(data)
            })
    }

    return (
        <>
            {/* filter by city */}
            <div className="filterCity">
                <select id="FilterCity" value={filteredCity} onChange={(evt) => handleSelectChange(evt)}>
                    <option value={"0"}>Filter by city</option>
                    {
                        cities.map((city) => {
                            return (
                                <option value={city.id} key={`city--${city.id}`}>{city.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            {
                filteredCity ? filteredWalkers.map((walker) => {
                    return <h3 className="walker" key={`walker--${walker.id}`}>{walker.name}</h3>
                }) : ""
            }

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