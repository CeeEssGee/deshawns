import { useState } from "react";
import { getCities, getWalkers, getFilteredCity, getWalkerCities, getDogs } from "../../apiManager";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Walkers = () => {
    const [walkers, setWalkers] = useState([])
    const [cities, setCities] = useState([])
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const [walkerCities, setWalkerCities] = useState([])
    const [filteredCity, setFilteredCity] = useState("");
    const [dogs, setDogs] = useState([]);

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
        getDogs()
            .then((data) => {
                setDogs(data)
            })
        // console.log(dogs);
        // console.log(walkers);
        // console.log(cities);
        // console.log(walkerCities);
    }, []);

    const handleSelectChange = (evt) => {
        setFilteredCity(evt.target.value)
        citySelector(evt.target.value)
    }

    const citySelector = (cityId) => {
        let filteredWalkerCities = []
        // could use .filter method here
        walkerCities.map((wc) => {
            if (wc.cityId === cityId) {
                filteredWalkerCities.push(wc)
            }
        })
        let filteredWalkers = []
        for (const walker of walkers) {
            filteredWalkerCities.map((fwc) => {
                if (fwc.walkerId === walker.id) {
                    filteredWalkers.push(walker)
                }
            })
        }
        setFilteredWalkers(filteredWalkers)
    }

    // if dog's city Id matches walker's cities AND dog isn't already assigned to the walker, add dog to filteredDogs
    // const addDogButton = (walkerId) => {
    //     // find dogs who haven't been assigned a walker
    //     let unassignedDogs = []
    //     for (const dog of dogs) {
    //         if (dog.walkerId != null && dog.walkerId != walkerId) {
    //             unassignedDogs.push(dog)
    //         }
    //     }
    //     // // Filter matched cities
    //     // const matchedWalkerCities = []
    //     // for (const walker of walkers) {
    //     //     for (const walkerCity of walkerCities) {
    //     //         matchedWalkerCities = walkerCities.filter((wc) => wc.walkerId === walker.id)
    //     //     }
    //     // }
    //     // const cityIds = matchedWalkerCities.map((wc) => wc.cityId)

    //     // unassignedDogs.filter((dog) => cityIds.includes(dog.cityId))
    //     return (
    //         <>
    //             <div className="unassignedDogs">
    //                 <select className="listOfUnassignedDogs" value={unassignedDogs}>
    //                     <option value="0">Choose a dog to assign</option>
    //                     {
    //                         unassignedDogs.map((dog) => {
    //                             return (
    //                                 <option value={dog.id} key={`dog--${dog.id}`}>{dog.name}</option>
    //                             )
    //                         })
    //                     }
    //                 </select>
    //             </div>
    //         </>
    //     )
    // }

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
                }) : <div className="allWalkers">
                    <h2 className="heading allWalkers-heading">Walkers:</h2>
                    <div className="container allWalkers-container">
                        {walkers.map((walker) => {
                            return <h3 className="walker" key={`walker--${walker.id}`}>{walker.name}
                                <Link to={`/walkers/${walker.id}`}><button>Add Dog</button></Link></h3>
                        })}
                    </div>
                </div>
            }

        </>
    )
}