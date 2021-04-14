import "./FilmList.css"
import { Link } from "react-router-dom"


import FavouriteAndRating from "../FavouriteAndRating/FavouriteAndRating"

export default function FilmList({ title, Films }) {


    return (
        <section className="container">
            <h2 className="filmList-title">{title}</h2>
            {Films.length > 0 ?
                <div className="wrapper-cardFilms">
                    {Films.map(film =>
                        <div key={film.ID} className="card-film">
                            <FavouriteAndRating ID={film.ID} imdbRating={film.imdbRating} />
                            <img src={film.Poster} alt="Poster" className="film-img" />
                            <div className="block-description">
                                <h5 className="titleFilm"><Link className="titleFilm__link" to={`./film/${film.ID}`}>{film.Title}</Link></h5>
                                <ul className="film-description-list">
                                    <li className="film-description">
                                        Год выпуска: {film.Year}
                                    </li>
                                    <li className="film-description">
                                        Длительность: {film.Runtime}
                                    </li>
                                    <li className="film-description">
                                        Страна: {film.Country}
                                    </li>
                                    <li className="film-description">
                                        Режиссер: {film.Director}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                :
                <p className="list_empty">
                    Список пуст
                </p>

            }
        </section >
    )
}