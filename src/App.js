import {Routes, Route} from "react-router-dom";

import {GenresPage, LatestPage, MoviesPage, SearchPage} from "./Containers";
import {Layout, MovieInfo, SerialPage} from "./components";
import './App.css';


function App() {
    return (

        <div className="App">

            <Routes>

                <Route path={'/'} element={<Layout/>}>;
                    <Route index element={<MoviesPage/>}/>;
                    <Route path={'/latest'} element={<LatestPage/>}/>;
                    <Route path={'/genreList/:genreId'} element={<GenresPage/>}/>;
                    <Route path={'/tv'} element={<SerialPage/>}/>;
                    <Route path={'/tv/:id'} element={<MovieInfo/>} />
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>;
                    <Route path={'/search'} element={<SearchPage/>}/>;
                </Route>

            </Routes>

        </div>
    );
}

export default App;