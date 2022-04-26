import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FavList from "./components/FavList";
import PokeList from "./components/PokeList";
import About from "./components/About";
import PokeSingle from "./components/PokeSingle";
import Layout from "./pages/Layout";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="pokelist" element={<PokeList />} />
                        <Route
                            path="pokelist/:pokemon"
                            element={<PokeSingle />}
                        />
                        <Route path="favlist" element={<FavList />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
