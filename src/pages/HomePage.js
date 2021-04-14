import { useContext } from "react";
import FilmList from "../components/FilmList/FilmList";
import HomeSlick from "../components/Home-slick/HomeSlick";
import { FilmsContext } from "../Context/FilmsContext";




export default function HomePage() {
    const [Films] = useContext(FilmsContext);
    return (
        <>
            <HomeSlick />
            <FilmList title="Список фильмов" Films={Films.Data} />
        </>
    )

}