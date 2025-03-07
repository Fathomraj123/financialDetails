import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import PersonalCard from "@/pages/personalCard";
import FinancialInfo from "@/pages/financialInfo";
import PageNotFound from "@/pages/PageNotFound";
import { NAVIGATION_ROUTES} from "@/routes/routes.constant"


 const routes: RouteProps[] = [
  { path: "/", 
    element: SignIn },

  { path:NAVIGATION_ROUTES.HOME ,
    element: Home },

  { path: NAVIGATION_ROUTES.SIGNIN,
    element: SignIn },

  { path: NAVIGATION_ROUTES.SIGNUP, 
    element: SignUp },

  { path:NAVIGATION_ROUTES.PERSONAL_CARD, 
    element: PersonalCard,
    private: true },

  { path: NAVIGATION_ROUTES.FINANCIAL_INFO, 
    element: FinancialInfo,
    private: true  },

  { path: NAVIGATION_ROUTES.PAGE_NOT_FOUND, 
    element: PageNotFound },
];


export default routes;