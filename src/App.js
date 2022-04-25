import Layout from "./pages/Layout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </div>
    );
};

export default App;
