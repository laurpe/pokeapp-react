import { Link, Outlet } from "react-router-dom";
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
