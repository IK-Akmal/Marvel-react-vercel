import { useContext, useState } from "react";
import { FilmsContext } from "../../Context/FilmsContext";

import "./AddFilms.css"


export default function AddPage() {

   const actions = useContext(FilmsContext)[1];
   const [title, setTitle] = useState("");
   const [year, setYear] = useState("")
   const [imdbRating, setImdbRating] = useState("")
   const [runtime, setRuntime] = useState("")
   const [poster, setPoster] = useState("");
   const [country, setCountry] = useState("");
   const [director, setDirector] = useState("");

   const inputHandler = (e, setAction) => {
      setAction(e.target.value);
   }

   const resetForm = () => {
      setTitle("");
      setYear("");
      setImdbRating("");
      setRuntime("");
      setPoster("");
      setCountry("");
      setDirector("");
   }
   const submitHadler = (e) => {
      e.preventDefault();
      actions.adddFilm({ title, year, imdbRating, runtime, poster, country, director })
      resetForm();
   }

   return (
      <section className="test container mt-5">
         <h2 className="mb-5">Добавление:</h2>

         <div className="Form-wrapper">

            <div>
               <h2 className="mb-2">Результат:</h2>
               <div className="card-addfilm">
                  <div className="right-top">
                     <button className="btn-heart bg-danger">
                        <i className="fas fa-heart"></i>
                     </button>
                     <div className="rating">{imdbRating.length > 0 ? imdbRating : 0}</div>
                  </div>
                  <img src={poster.length > 0 ? poster : 'http://dummyimage.com/450x300'} alt="Poster" className="addfilm-img" />
                  <div className="block-description">
                     <h5 className="titleFilm__link">{title}</h5>
                     <ul className="film-description-list">
                        <li className="film-description">
                           Год выпуска: {year}
                        </li>
                        <li className="film-description">
                           Длительность: {`${runtime} min`}
                        </li>
                        <li className="film-description">
                           Страна: {country}
                        </li>
                        <li className="film-description">
                           Режиссер: {director}
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <form onSubmit={submitHadler} className="formFilm">

               <div className="form-floating">
                  <input placeholder="Название фильма:" id="title" required className="form-control" value={title} onChange={(e) => inputHandler(e, setTitle)} type="text" />
                  <label htmlFor="floatingTitle">Название фильма:</label>
               </div>

               <div className="form-floating">
                  <input placeholder="Год выпуска" id="year" required className="form-control" value={year} onChange={(e) => inputHandler(e, setYear)} min={1895} max={new Date().getFullYear() + 1} type="number" />
                  <label htmlFor="floatingYear"> Год выпуска:</label>
               </div>

               <div className="form-floating">
                  <input placeholder="Рейтинг" id="imdbRating" className="form-control" value={imdbRating} onChange={(e) => inputHandler(e, setImdbRating)} min={0} max={10} type="number" />
                  <label htmlFor="imdbRating"> Рейтинг:</label>
               </div>

               <div className="form-floating">
                  <input placeholder="Длительность" id="runtime" required className="form-control" value={runtime} onChange={(e) => inputHandler(e, setRuntime)}  type="text" />
                  <label htmlFor="runtime"> Длительность:</label>
               </div>

               <div className="form-floating">
                  <input placeholder="Cтрана" id="country" required className="form-control" value={country} onChange={(e) => inputHandler(e, setCountry)} type="text" />
                  <label htmlFor="country" > Cтрана: </label>
               </div>

               <div className="form-floating">
                  <input placeholder="Режиссор" id="director" required className="form-control" value={director} onChange={(e) => inputHandler(e, setDirector)} type="text" />
                  <label htmlFor="director">Режиссор:</label>
               </div>

               <div className="form-floating">
                  <input placeholder="Ссылка на изображение:" id="poster" required className="form-control" value={poster} onChange={(e) => inputHandler(e, setPoster)} type="url" />
                  <label htmlFor="poster">Ссылка на изображение:</label>
               </div>

               <button className="btn btn-primary mt-3" type="submit">Отправить</button>
            </form>
         </div>
      </section>
   )
}


