import { Link, Outlet } from "react-router-dom";
//no "/" before pokemon in link and outlet works when pokecard nested in routes inside pokelist
const Pokelist = () => {
    return (
        <div>
            Pokelist
            <Link to="pokemon">single pokemon</Link>
            <Outlet />
        </div>
    );
};

export default Pokelist;
