import { createContext, useState } from "react"
import DataBase from "../data/data.json"

export const FilmsContext = createContext();


export const FilmsContextProvider = (props) => {

    const [Films, setFilms] = useState(
        {
            Data: JSON.parse(localStorage.getItem("Data")) ?? DataBase,
            favourite: JSON.parse(localStorage.getItem("favourite")) ?? []
        }
    );

    const actions = {

        adddFilm: (props) => {

            const newFilm = [
                {
                    ID: Math.random(),
                    Title: props.title,
                    Year: props.year,
                    imdbRating: props.imdbRating,
                    Runtime: props.runtime,
                    Poster: props.poster,
                    Country: props.country,
                    Director: props.director,
                },
                ...Films.Data
            ]
            setFilms({
                Data: newFilm,
                favourite: Films.favourite
            })
            localStorage.setItem("Data", JSON.stringify(newFilm));
        },

        favouriteAction: (id) => {
            const temp = Films.favourite.filter(x => x.ID === id);
            if (temp.length > 0) {
                const newList = Films.favourite.filter(x => x.ID !== id);
                localStorage.setItem("favourite", JSON.stringify(newList));
                setFilms({ ...Films, favourite: newList });
            }
            else {
                const temp = Films.Data.find((x) => x.ID === id);
                const newList = [temp, ...Films.favourite]
                localStorage.setItem('favourite', JSON.stringify(newList))
                setFilms({ ...Films, favourite: newList })
            }
        }


    }

    return (
        <FilmsContext.Provider value={[Films, actions]}>
            {props.children}
        </FilmsContext.Provider>
    )
}