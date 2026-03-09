import Layout from "./components/Layout";
import { Route, Routes } from "react-router";
import AllMovies from "../src/pages/Allmovies";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMovies />} />
      </Routes>
    </Layout>
  );
};

export default App;
