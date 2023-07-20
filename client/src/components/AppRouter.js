import {Routes, Route} from "react-router-dom";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import Main from "../pages/Main";
import CollectionPage from "../pages/CollectionPage";
import ItemPage from "../pages/ItemPage";
import UserPage from "../pages/UserPage";
const AppRouter = () => {
    const isAuth = false;
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/login" element={<Auth />}/>
            <Route path="/registration" element={<Auth />}/>
            <Route path="/user/:id" element={<UserPage />}/>
            <Route path="/collection/:id" element={<CollectionPage />}/>
            <Route path="/item/:id" element={<ItemPage />}/>
        </Routes>
    );
};

export default AppRouter;