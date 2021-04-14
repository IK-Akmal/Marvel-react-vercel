import { useContext } from "react";
import { FilmsContext } from "../../Context/FilmsContext";

import "./FavouriteAndRating.css";


export default function FavouriteAndRating({ID, imdbRating, }) {
    const [Films, actions] = useContext(FilmsContext);
    const isFavourite = Films.favourite.filter(x => x?.ID === ID).length;
    return (
        <div className="right-top">
            <button className={`btn-heart ${isFavourite > 0 ? "bg-danger" : "bg-secondary"}`} onClick={() => actions.favouriteAction(ID)}>
                <i className="fas fa-heart"></i>
            </button>
            <div className="rating">{imdbRating}</div>
        </div>
    )
}