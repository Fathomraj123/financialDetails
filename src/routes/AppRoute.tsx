import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import routes from "./routes.config";
import PrivateRoute from "@/routes/PrivateRoute"



const AppRoute = () => {
  return (
    <div>
      <Layout>
        <Routes>
          {routes.map((url) => {
            const isPrivate = url.private; // Assuming each route has a private property
             return <Route key={url.path} path={url.path} 
             element={isPrivate ? <PrivateRoute><url.element /></PrivateRoute> : <url.element />} />
          })}
        </Routes>
      </Layout>
    </div>
  );
};

export default AppRoute;
