
import PersonalCard from "./pages/PersonalCard";
import Layout from "./components/Layout";
import FinancialInfo from "./pages/FinancialInfo";
import { Routes, Route } from "react-router-dom";


function App() {
  return (

    <>
    <Layout>

    <Routes>
      <Route path="/" element={<PersonalCard/>} />
      <Route path="/personalCard" element={<PersonalCard/>} />
      <Route path="/financialInfo" element={<FinancialInfo />} />
    </Routes>
    </Layout>
    </>
  );
}

export default App;
