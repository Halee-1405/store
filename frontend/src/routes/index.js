import Home from "../pages/Home/Home"
import Menu from "../pages/Menu/Menu"
import Discover from "../pages/Discover/Discover"
import AboutUs from "../pages/AboutUs/AboutUs"
import Login from "../pages/Login/Login"
import NotFound from "../pages/NotFound/NotFound"
import ProductDetails from "../pages/ProductDetails/ProductDetails"
import MenuCafe from "../pages/Menu/MenuCafe/MenuCafe"
import MenuFreeze from "../pages/Menu/MenuFreeze/MenuFreeze"
import MenuTea from "../pages/Menu/MenuTea/MenuTea"
import MenuCake from "../pages/Menu/MenuCake/MenuCake"
import MenuOther from "../pages/Menu/MenuOther/MenuOther"
import MenuSpecial from "../pages/Discover/MenuSpecial/MenuSpecial"
import MenuOriginal from "../pages/Discover/MenuOriginal/MenuOriginal"
import MenuFood from "../pages/Discover/MenuFood/MenuFood"
import MenuShip from "../pages/Discover/MenuShip/MenuShip"
import Service from "../pages/AboutUs/Service/Service"
import Source from "../pages/AboutUs/Source/Source"
import Job from "../pages/AboutUs/Job/Job"
import CartView from "../pages/CartView/CartView"
import PayMent from "../pages/PayMent/PayMent"
import Admin from "../pages/Admin/Admin"
import ProductManagement from "../pages/Admin/ProductManagement/ProductManagement"
import CustomersManagement from "../pages/Admin/CustomersManagement/CustomersManagement"
import OdersManagement from "../pages/Admin/OdersManagement/OdersManagement"
import InventoryManagement from "../pages/Admin/InventoryManagement/InventoryManagement"


export const routes = [
    {
        path: '/',
        page: Home,
        isShowHeader: true
    },
    {
        path: '/menu', 
        page: Menu,
        isShowHeader: true
    },
    {
        path: '/discover',
        page: Discover,
        isShowHeader: true
    },
    {
        path: '/aboutus',
        page: AboutUs,
        isShowHeader: true
    },
    {
        path: '/login',
        page: Login,
        isShowHeader: false
    },
    {
        path: '*',
        page: NotFound,
    },
    {
        path: '/menu/cafe', 
        page: MenuCafe,
        isShowHeader: true
    },
    {
        path: '/menu/freeze', 
        page: MenuFreeze,
        isShowHeader: true
    },
    {
        path: '/menu/tea', 
        page: MenuTea,
        isShowHeader: true
    },
    {
        path: '/menu/cake', 
        page: MenuCake,
        isShowHeader: true
    },
    {
        path: '/menu/other', 
        page: MenuOther,
        isShowHeader: true
    },
    {
        path: '/discover/food', 
        page: MenuFood,
        isShowHeader: true
    },
    {
        path: '/discover/original', 
        page: MenuOriginal,
        isShowHeader: true
    },
    {
        path: '/discover/special', 
        page: MenuSpecial,
        isShowHeader: true
    },
    {
        path: '/discover/ship', 
        page: MenuShip,
        isShowHeader: true
    },
    {
        path: '/aboutus/source',
        page: Source,
        isShowHeader: true
    },
    {
        path: '/aboutus/service',
        page: Service,
        isShowHeader: true
    },
    {
        path: '/aboutus/job',
        page: Job,
        isShowHeader: true
    },
    {
        path: '/productdetails/:productId',
        page: ProductDetails,
        isShowHeader: true
    },
    {
        path: '/cartview',
        page: CartView,
        isShowHeader: true
    },
    {
        path: '/payment',
        page: PayMent,
        isShowHeader: false
    },
    {
        path: '/admin',
        page: Admin,
        isShowHeader: false
    },
    {
        path: '/admin/products',
        page: ProductManagement,
        isShowHeader: false,
    },
    {
        path: '/admin/customers',
        page: CustomersManagement,
        isShowHeader: false,
    },
    {
        path: '/admin/oders',
        page: OdersManagement,
        isShowHeader: false,
    },
    {
        path: '/admin/inventories',
        page: InventoryManagement,
        isShowHeader: false,
    },
    

]
