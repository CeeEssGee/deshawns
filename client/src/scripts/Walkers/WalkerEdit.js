import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getSingleWalker, getWalkers } from "../../apiManager";


export const WalkerEdit = () => {
    const navigate = useNavigate();

    const [currentWalker, setCurrentWalker] = useState([]);

    const [getAllCities, setAllCities] = useState([]);
    const { walkerId } = useParams();


    useEffect(() => {
        const getCurrentWalker = async () => {
            const fetchedWalkers = await getSingleWalker(parseInt(walkerId))
            setCurrentWalker(fetchedWalkers)
        }
        getCurrentWalker()


    }, []);


    return (
        <>
            TEST
        </>
    )
}