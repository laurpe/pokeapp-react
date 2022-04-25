import Home from "./Home";
import FavList from "./FavList";
import PokeList from "./PokeList";
import About from "./About";
import { Route, Routes } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favlist" element={<FavList />} />
                <Route path="/pokelist" element={<PokeList />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    );
};

export default Main;
