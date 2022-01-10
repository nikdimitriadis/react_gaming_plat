import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AllGames from "../pages/AllGames";
import Recently from "../pages/Recently";
import Layout from "../components/UI/LayOut/Layout";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";
import ShowMore from "../pages/ShowMore";

const MainRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allg" element={<AllGames />} />
        <Route path="/recenadd" element={<Recently />} />
        <Route path="/showmore/:cat" element={<ShowMore />} />
        <Route path="/allg/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default MainRoutes;
