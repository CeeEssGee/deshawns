import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDogDetails } from "../../apiManager"

export const DogDetails = () => {
    const { dogId } = useParams()

    const [singleDog, setSingleDog] = useState({})

    useEffect(() => {
        const getSingleDogDetails = async (dogId) => {
            const fetchedDog = await getDogDetails(dogId)
            setSingleDog(fetchedDog)
        }
        getSingleDogDetails(dogId)
    }, [])

    return <section className="dog" key={`dog--${singleDog.id}`}>
        <div>
            <p>Dog: {singleDog?.name}</p>
            <p>City: {singleDog?.city?.name}</p>
            <p>Walker: {singleDog?.walker?.name}</p>
        </div>
    </section>
}