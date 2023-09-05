import { useEffect, useState, useSyncExternalStore } from "react"
import { useNavigate } from "react-router-dom";
import { addDog, getCities } from "../../apiManager";

export const DogForm = () => {
    const [cities, setCities] = useState([]);
    const [selectedCityId, setSelectedCityId] = useState(0);
    const [selectedWalkerId, setSelectedWalkerId] = useState(0);
    const [dogName, setDogName] = useState("");
    // const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const getAllCities = async () => {
            const fetchedCities = await getCities()
            setCities(fetchedCities)
        }
        getAllCities()

    }, []);

    // useEffect(
    //     () => {
    //         setIsValid(data ? true : false);
    //     }, [data]);

    const navigate = useNavigate();

    // city selector
    const handleCitySelect = (evt) => {
        setSelectedCityId(parseInt(evt.target.value));
    };

    // submit button to save new dog
    const handleSubmitButton = (evt) => {
        evt.preventDefault();

        const dogToSendToAPI = {
            name: dogName,
            cityId: selectedCityId
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
                    {/* {!isValid && <p>You must choose a city</p>} */}
                    <option value={"0"}>Select a City - Required</option>
                    {
                        cities.map((city) => <option value={city.id} key={city.id}>{city.name}</option>)
                    }
                </select>
            </label>
        </div>


        <button onClick={handleSubmitButton}>Submit Dog</button>
    </>
}