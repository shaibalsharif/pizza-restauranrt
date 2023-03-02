import Home from "../components/Pages/Home"
import Outlets from "../components/Pages/Outlets"
import Login from "../components/Pages/Login"
import Register from "../components/Pages/Register"
import Category from "../components/Pages/Category"
import Items from "../components/Pages/Items"
import Order from "../components/Pages/Order"
import Cart from "../components/Pages/Cart"
import Payment from "../components/Pages/Payment"





const createRoute = (path, Element) => {
    return { path: path, element: Element }
}

export const routes = [
    createRoute('/', <Home />),
    createRoute('/places', <Outlets />),
    createRoute('/login', <Login />),
    createRoute('/register', <Register />),
    createRoute('/items', <Category />),

    createRoute('/menu', <Items />),
    createRoute('/order', <Order />),
    createRoute('/cart', <Cart />),
    createRoute('/payment', <Payment />),




]