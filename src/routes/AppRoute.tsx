
import { Routes, Route } from "react-router-dom";
import PersonalCard from "../pages/PersonalCard";
import Layout from "../components/Layout";
import FinancialInfo from "../pages/FinancialInfo";

const AppRoute = () => {
  return (
    <div>
      <Layout>
<Routes>
  <Route path="/" element={<PersonalCard/>} />
  <Route path="/personalCard" element={<PersonalCard/>} />
  <Route path="/financialInfo" element={<FinancialInfo />} />
</Routes>
</Layout>
    </div>
  )
}

export default AppRoute
