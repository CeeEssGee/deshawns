import { useState } from "react";
import { getCities, getWalkers, getFilteredCity, getWalkerCities } from "../../apiManager";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Walkers = () => {
    const [walkers, setWalkers] = useState([])
    const [cities, setCities] = useState([])
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const [walkerCities, setWalkerCities] = useState([])
    const [filteredCity, setFilteredCity] = useState("");

    useEffect(() => {
        getWalkers()
            .then((data) => {
                setWalkers(data)
            })
        getCities()
            .then((data) => {
                setCities(data)
            })
        getWalkerCities()
            .then((data) => {
                setWalkerCities(data)
            })
    }, []);

    const handleSelectChange = (evt) => {
        setFilteredCity(evt.target.value)
        taco(evt.target.value)
    }

    const taco = (cityId) => {
        let filteredWalkerCities = []
        // could use .filter method here
        walkerCities.map((wc) => {
            if (wc.cityId == cityId) {
                filteredWalkerCities.push(wc)
            }
        })
        let filteredWalkers = []
        for (const walker of walkers) {
            filteredWalkerCities.map((fwc) => {
                if (fwc.walkerId == walker.id) {
                    filteredWalkers.push(walker)
                }
            })
        }
        setFilteredWalkers(filteredWalkers)
    }

    return (
        <>
            {/* filter by city */}
            <div>
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
                }) : <div className="allWalkers">
                    <h2 className="heading allWalkers-heading">Walkers:</h2>
                    <div className="container allWalkers-container">
                        {walkers.map((walker) => {
                            return <h3 className="walker" key={`walker--${walker.id}`}><Link to={`/walkersedit/${walker.id}`}>{walker.name}</Link>
                            </h3>
                        })}
                    </div>
                </div>
            }

        </>
    )
}