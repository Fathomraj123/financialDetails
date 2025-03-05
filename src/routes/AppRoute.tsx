import { Routes, Route } from "react-router-dom";
import PersonalCard from "@/pages/personalCard"
import Layout from "@/components/layout";
import FinancialInfo from "@/pages/financialInfo";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import PrivateRoute from "@/routes/PrivateRoute";
import PageNotFound from "@/pages/PageNotFound";
import Home from "@/pages/Home";


const AppRoute = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
          
          <Route path="/personalCard" element={<PrivateRoute><PersonalCard /></PrivateRoute>} />
          <Route path="/financialInfo" element={<PrivateRoute><FinancialInfo /></PrivateRoute>} />
        </Routes>
      </Layout>
    </div>
  )
}

export default AppRoute
