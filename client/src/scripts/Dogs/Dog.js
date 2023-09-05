import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Dog = ({ id, name }) => {

    useEffect(() => {
    }, []);

    return <section className="dog" key={`dog--${id}`}>
        <div>
            Dog: <Link to={`/dogs/${id}`}>{name}</Link>
        </div>
    </section>
}