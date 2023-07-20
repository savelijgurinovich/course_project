import {Routes, Route} from "react-router-dom";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import Main from "../pages/Main";
import CollectionPage from "../pages/CollectionPage";
import ItemPage from "../pages/ItemPage";
import UserPage from "../pages/UserPage";
import NotFoundPage from "../pages/NotFoundPage";
import {useContext} from "react";
import {Context} from "../index";
const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/login" element={<Auth />}/>
            <Route path="/registration" element={<Auth />}/>
            <Route path="/user/:id" element={<UserPage />}/>
            <Route path="/collection/:id" element={<CollectionPage />}/>
            <Route path="/item/:id" element={<ItemPage />}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;