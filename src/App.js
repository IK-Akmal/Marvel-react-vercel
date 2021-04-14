import './App.css';
import Layout from './hoc/Layout';
import { Redirect, Route, Switch } from 'react-router';
import HomePage from './pages/HomePage';
import FavouritePage from "./pages/FavouritePage"
import AboutPage from './pages/AboutPage/AboutPage';
import FilmPage from './pages/FilmPage/FilmPage';
import AddPage from './pages/AddFilms/AddFilms';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/favourite" component={FavouritePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/film/:id" component={FilmPage}/>
        <Route path="/addFilm" component={AddPage}/>
        <Redirect to="/"/>
      </Switch>
    </Layout>
  );
}

export default App;
