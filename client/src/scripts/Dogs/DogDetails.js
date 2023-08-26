import { useEffect, useState } from "react";
import { getDogDetails } from "../../apiManager";
import { useParams } from "react-router-dom";

export const DogDetails = () => {
    const { dogId } = useParams()
    const [singleDog, setSingleDog] = useState({}) // returning a single object, so using curly braces instead of brackets

    const getDetails = async () => {
        const fetchedDog = await getDogDetails({ dogId })
        setSingleDog(fetchedDog)
    }

    useEffect(() => {
        getDetails()
    }, [])

    return (
        <>
            <div className="dogDetails">
                <h2 className="heading dogDetails-heading">Dog Details</h2>
                <div className="container">
                    <div>Name: {singleDog?.name}</div>
                    <div>City: {singleDog?.city?.name}</div>
                </div>
            </div>
        </>
    )
}
