import { useEffect, useState } from "react"
import { getCities, getDogs, getWalkerCities, getWalkers, updateDog, getWalkerCityListByWalkerId, dogsByCity } from "../../apiManager"
import { useNavigate, useParams } from "react-router-dom"

export const WalkerAssignment = () => {
    const { walkerId } = useParams;

    const [walkers, setWalkers] = useState([]);
    const [walker, setWalker] = useState([]);
    const [dogs, setDogs] = useState([]);
    const [cities, setCities] = useState([]);
    const [walkerCities, setWalkerCities] = useState([]);
    const [walkerCitiesById, setWalkerCitiesById] = useState([]);
    const [availableDogs, setAvailableDogs] = useState([]);
    const [availableCities, setAvailableCities] = useState([]);
    const [dogsByCity, setDogsByCity] = useState([]);

    // const [dog, updateDog] = useState({
    //     name: "",
    //     cityId: 0,
    //     walkerId: 0
    // })

    const navigate = useNavigate()


    useEffect(() => {
        const getAllDogs = async () => {
            const fetchedDogs = await getDogs()
            setDogs(fetchedDogs)
        }
        getAllDogs() // may need an await, may need to move to the bottom

        const getAllWalkers = async () => {
            const fetchedWalkers = await getWalkers()
            setWalkers(fetchedWalkers)
        }
        getAllWalkers()

        const getAllCities = async () => {
            const fetchedCities = await getCities()
            setCities(fetchedCities)
        }
        getAllCities()

        const getAllWalkerCities = async () => {
            const fetchedWalkerCities = await getWalkerCities()
            setWalkerCities(fetchedWalkerCities)
        }
        getAllWalkerCities()

        // const getWalkerCitiesById = async (walkerId) => {
        //     const fetchedWalkerCitiesById = await getWalkerCityListByWalkerId()
        //     setAvailableCities(fetchedWalkerCitiesById)
        // }
        // getWalkerCitiesById(walkerId)

        // const getDogsByCity = async () => {
        //     const fetchedDogsByCity = await dogsByCity()
        //     setDogsByCity(fetchedDogsByCity)
        // }
        // getDogsByCity()

    }, []);

    useEffect(() => {
        setAvailableDogs(taco())
    }, [availableCities, dogs, walker])

    const handleAddButtonClick = (evt, dog) => {
        evt.preventDefault()

        dog.walkerId = walker.id

        updateDog(dog)

        navigate(`/dogs/${dog.id}`)

    }

    const taco = (walkersId) => {
        let matchedWalker = []
        let matchedWalkerCities = []
        let foundWalkerCities = []
        let unassignedDogs = []

        for (const dog of dogs) {
            if (dog.walkerId == null)
                unassignedDogs.push(dog)
        }

        // for (const walkerCity of walkerCities) {
        //     for (const walker of walkers) {
        //         if (walkerCity.id === walker.cityId) {
        //             foundWalkerCities.push(walkerCity)
        //         }
        //     }
        // }


        // for (const walker of walkers) {
        //     if (walker.id === walkersId)
        //         matchedWalker = walker
        // }

        // matchedWalkerCities = walkerCities.filter(
        //     (wc) => wc.walkerId === matchedWalker.Id
        // )

        // let cityIds = matchedWalkerCities.map((mwc) => mwc.cityId);


        // unassignedDogs = dogs.filter((dog) => cityIds.includes(dog.cityId))


        if (unassignedDogs.length > 0) {
            return (
                <>
                    <div className="unassignedDogs">
                        <div id="dog">
                            <option value="0">Select a dog to assign to the walker</option>
                            {
                                unassignedDogs.map((dog) => {
                                    return (
                                        <button onClick={evt => handleAddButtonClick(evt, dog)} key={`dog--${dog.id}`}>{dog.name}</button>
                                    )
                                })
                            }
                        </div>
                    </div >
                </>
            )

        }
        else {
            return (
                <>
                    <div>No dogs match the criteria</div>
                </>
            )
        }
    }


    return (
        <>
            <div>
                {
                    taco(walkerId)
                }
            </div>
        </>
    )
}