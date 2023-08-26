import { useEffect, useState } from "react";
import { getDogDetails } from "../../apiManager";
import { useParams } from "react-router-dom";

export const DogDetails = () => {
    const { dogId } = useParams()
    const [singleDog, setSingleDog] = useState([])

    useEffect(() => {
        getDogDetails({ dogId })
            .then(response => response.json())
            .then((data) => {
                const singleDog = data[0]
                setSingleDog(singleDog)
            })
    }, [dogId])

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
