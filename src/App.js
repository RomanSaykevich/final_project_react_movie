import {Routes, Route} from "react-router-dom";

import './App.css';
import {GenresPage, LatestPage, MoviesPage, SearchPage} from "./Containers";
import {Layout, MovieInfo, TvPage} from "./components";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>;
                    <Route index element={<MoviesPage/>}/>;
                    <Route path={'/latest'} element={<LatestPage/>}/>;
                    <Route path={'/genreList/:genreId'} element={<GenresPage/>}/>;
                    <Route path={'/tv'} element={<TvPage/>}/>;
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>;
                    <Route path={'/search'} element={<SearchPage/>}/>;
                </Route>
            </Routes>
        </div>
    );
}

export default App;