import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/Home";
import CategoryPage from "./page/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./page/ErrorPage";
import SinglePortalView from "./page/SinglePortallView";
import GlobleCotext from "./contextApi/GlobleContex";




function App() {
  return (
    <>
    <GlobleCotext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Category" element={<CategoryPage/>}/>
          <Route path={`/SinglePortalView/:id`} element={<SinglePortalView/>} />
         

          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
      </GlobleCotext>
    </>
  );
}





export default App;
