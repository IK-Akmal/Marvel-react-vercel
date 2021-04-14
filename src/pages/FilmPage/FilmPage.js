import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import FavouriteAndRating from "../../components/FavouriteAndRating/FavouriteAndRating";
import { FilmsContext } from "../../Context/FilmsContext";
import css from "./FilmPage.module.css";

export default function FilmPage() {

    const params = useParams();
    const [films] = useContext(FilmsContext);
    const selectFilm = films.Data.find(x => x.ID.toString() === params.id);
    const otherFilm = films.Data.filter(x => x.ID.toString() !== params.id);

    return(
        <section className="container mt-5">
            <div className={css.filmWrapper}>
                <div className={css.mainFilm}>
                    <div className={css.cardFilm}>
                        <FavouriteAndRating imdbRating={selectFilm.imdbRating} ID={selectFilm.ID} />
                        <img className={css.filmPoster} src={selectFilm.Poster} alt="Poster" />
                        <div className={css.wrapperDescription}>
                            <h4 className="card-title">{selectFilm.Title}</h4>
                            <ul className="film-description-list">
                                <li className="film-description">
                                    Год выпуска: {selectFilm.Year}
                                </li>
                                <li className="film-description">
                                    Длительность: {selectFilm.Runtime}
                                </li>
                                <li className="film-description">
                                    Страна: {selectFilm.Country}
                                </li>
                                <li className="film-description">
                                    Режиссер: {selectFilm.Director}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={css.otherInfo}>
                        <h4>Краткое описание</h4>
                        <p className="card-text text-bold">
                            {selectFilm.Plot}
                        </p>
                        <h5 className={"mt-4 mb-4"}>Дополнительная информация:</h5>
                        <ul className="film-description-list">
                            <li className="film-description">
                                <b>Оценки: </b>{selectFilm.Ratings?.map(({ Source, Value }) => <span key={Source}>{Source}: {Value}; </span>)}
                            </li>
                            <li className="film-description">
                                <b>Актеры: </b>{selectFilm.Actors}
                            </li>
                            <li className="film-description">
                                <b>Награды:</b> {selectFilm.Awards}
                            </li>
                            <li className="film-description">
                                <b>Кассовый сбор:</b> {selectFilm.BoxOffice}
                            </li>
                            <li className="film-description">
                                <b>DVD:</b> {selectFilm.DVD}
                            </li>
                            <li className="film-description">
                                <b>Продюссер:</b> {selectFilm.Director}
                            </li>
                            <li className="film-description">
                                <b>Жанр:</b> {selectFilm.Genre}
                            </li>
                            <li className="film-description">
                                <b>Языки:</b> {selectFilm.Language}
                            </li>
                            <li className="film-description">
                                <b>Производство:</b> {selectFilm.Production}
                            </li>
                            <li className="film-description">
                                <b>Рейтинг просмотра:</b> {selectFilm.Rated}
                            </li>
                            <li className="film-description">
                                <b>Дата выхода:</b> {selectFilm.Released}
                            </li>
                            <li className="film-description">
                                <b>Тип:</b> {selectFilm.Type}
                            </li>
                            <li className="film-description">
                                <b>Сценаристы:</b> {selectFilm.Writer}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={css.otherFilm}>
                    <h5 className={css.otherFilmTitle}>Другие фильмы:</h5>
                    {
                        otherFilm.map(x =>
                            <div key={x.ID} className={css.otherCard}>
                                <img className={css.otherCardPoster} src={x.Poster} alt=""/>
                                <div className={css.otherCardDescriptionWrapper}>
                                    <Link className={css.otherCardLink} to={`/film/${x.ID}`}>{x.Title}</Link>
                                    <p className={css.otherCardDescription}>Год выпуска: {x.Year}</p>
                                    <p className={css.otherCardDescription}>Длительность: {x.Runtime}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}