import { useContext } from "react"
import { FilmsContext } from "../Context/FilmsContext"
import FilmList from "../components/FilmList/FilmList"

export default function FavouritePage() {
    const [Films] = useContext(FilmsContext);

    return (

        <FilmList title="Избранное" Films={Films.favourite} />

    )
}