import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { addDog, getCities, getWalkers } from "../../apiManager";

export const DogForm = () => {
    const [cities, setCities] = useState([]);
    const [walkers, setWalkers] = useState([]);
    const [selectedCityId, setSelectedCityId] = useState(0);
    const [selectedWalkerId, setSelectedWalkerId] = useState(0);
    const [dogName, setDogName] = useState("");

    useEffect(() => {
        const getAllCities = async () => {
            const fetchedCities = await getCities()
            setCities(fetchedCities)
        }
        getAllCities()

        const getAllWalkers = async () => {
            const fetchedWalkers = await getWalkers()
            setWalkers(fetchedWalkers)
        }
        getAllWalkers()
    }, []);

    const navigate = useNavigate();

    // city selector
    const handleCitySelect = (evt) => {
        setSelectedCityId(parseInt(evt.target.value));
    };

    // walker selector
    const handleWalkerSelect = (evt) => {
        setSelectedWalkerId(parseInt(evt.target.value));
    };

    // submit button to save new dog
    const handleSubmitButton = (evt) => {
        evt.preventDefault();

        const dogToSendToAPI = {
            name: dogName,
            cityId: selectedCityId,
            walkerId: selectedWalkerId,
        }

        addDog(dogToSendToAPI)
        navigate("/")
    }

    return <>
        <input
            placeholder="Enter the dog's name"
            value={dogName}
            onChange={
                (evt) => {
                    let copy = dogName
                    copy = evt.target.value
                    setDogName(copy)
                }
            } />

        <div>
            <label>
                Select a City:
                <select onChange={handleCitySelect} placeholder="Select a City">
                    <option value={"0"}>Select a City - Required</option>
                    {
                        cities.map((city) => <option value={city.id} key={city.id}>{city.name}</option>)
                    }
                </select>
            </label>
        </div>

        <div>
            <label>
                <select onChange={handleWalkerSelect} placeholder="Select a Walker (Optional)">
                    <option value={"0"}>Select a Walker - Optional</option>
                    {
                        walkers.map((walker) => <option value={walker.id} key={walker.id}>{walker.name}</option>)
                    }
                </select>
            </label>
        </div>

        <button onClick={handleSubmitButton}>Submit Dog</button>
    </>
}