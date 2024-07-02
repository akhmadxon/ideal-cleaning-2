import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const routes = [
    {
        path: "/",
        content: "Asosiy",
        icon: <DashboardCustomizeIcon/>
    },
    {
        path: "/orders",
        content: "Buyurtmalar",
        icon: <ShoppingBasketIcon/>
    },
    {
        path: "/xizmatlar",
        content: "Xizmatlar",
        icon: <ViewStreamIcon/>
    },
]

export default routes