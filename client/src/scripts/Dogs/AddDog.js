import { useEffect, useState } from "react";
import { getCities, getDogs, postDog } from "../../apiManager";
import { useNavigate } from "react-router-dom";

const dogs = await getDogs();
const cities = await getCities();


export const AddDog = () => {
    const navigate = useNavigate()
    const [dogs, setDogs] = useState([])
    const [cities, setCities] = useState([])
    const [dog, updateDog] = useState({
        name: "",
        cityId: 0,
        walkerId: 0
    })

    const getAllCities = async () => {
        const fetchedCities = await getCities()
        setCities(fetchedCities)
    }

    useEffect(() => {
        getAllCities()
    }, [])

    const getAllDogs = async () => {
        const fetchedDogs = await getDogs()
        setDogs(fetchedDogs)
    }

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()

        const dogToSendToAPI = {
            name: dog.name,
            cityId: dog.cityId,
            walkerId: 0
        }

        postDog(dogToSendToAPI)
            .then(() => {
                getAllDogs()
                navigate(`/`)
            })
    }

    return (
        <>
            <form>
                <input id="addDogInput" type="text" placeholder="Enter dog's name" value={dog.name} onChange={(evt) => {
                    const copy = { ...dog }
                    copy.name = evt.target.value
                    updateDog(copy)
                }} />

                <select id="citySelect" value={dog.cityId} onChange={(evt) => {
                    const copy = { ...dog }
                    copy.cityId = parseInt(evt.target.value)
                    updateDog(copy)
                }}>
                    <option value="0">Select dog's city</option>
                    {
                        cities.map((city) => {
                            return (
                                <option value={`${city.id}`} key={`city--${city.id}`}>{city.name}</option>
                            )
                        })
                    }
                </select>
                <button onClick={(evt) => {
                    handleSaveButtonClick(evt)
                }}>Submit</button>
            </form>

        </>
    )
}