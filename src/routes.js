import { Navigate } from 'react-router-dom';
import DashbaordLayout from "./components/DashbaordLayout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import NotFound from "./pages/NotFound/NotFound";
const routes = [
    {
        path: 'app',
        element: <DashbaordLayout />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'userlist', element: <UserList /> },
            { path: 'user', element: <User /> },
            { path: 'newuser', element: <NewUser /> },
            { path: 'productlist', element: <ProductList /> },
            { path: 'product', element: <Product /> },
            { path: 'newproduct', element: <NewProduct /> }
        ]
    },
    {
        path: '/',
        element: <DashbaordLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'forgotpassword', element: <ForgotPassword /> },
            { path: '404', element: <NotFound /> },
            { path: '/', element: <Navigate to="login" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
];

export default routes;