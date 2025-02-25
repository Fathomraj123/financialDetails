
import { Routes, Route } from "react-router-dom";
import PeoplePage from "./pages/personalCard";
import Layout from "./components/layout";
import FinancialInfo from "./pages/financialInfo";

function App() {
  return (
 
      <Layout>

      <Routes>
        <Route path="/" element={<PeoplePage />} />
        <Route path="/personalCard" element={<PeoplePage />} />
        <Route path="/financialInfo" element={<FinancialInfo />} />
      </Routes>
      </Layout>

  
  );
}

export default App;
