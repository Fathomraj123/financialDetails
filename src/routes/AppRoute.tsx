import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import routes from "./routes.config";



const AppRoute = () => {
  return (
    <div>
      <Layout>
        <Routes>
          {routes.map((url) => {
            {console.log(url.path, url)}
            <Route key={url.path} path={url.path} element={<url.element />} />
          })}
        </Routes>
      </Layout>
    </div>
  );
};

export default AppRoute;



{/* <Route path="/" element={<SignIn />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />

          <Route
            path="/personalCard"
            element={
              <PrivateRoute>
                <PersonalCard />
              </PrivateRoute>
            }
          />
          <Route
            path="/financialInfo"
            element={
              <PrivateRoute>
                <FinancialInfo />
              </PrivateRoute>
            }
          /> */}
