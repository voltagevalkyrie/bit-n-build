import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/Home";
import CategoryPage from "./page/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./page/ErrorPage";
import SingleHotelView from "./page/SingleHotelView";
import GlobleCotext from "./contextApi/GlobleContex";


// //chatgpt starts 
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './page/Home'; // Import your other components
// import Login from './login/login';// Import your Login component
// //chatgpt ends 



function App() {
  return (
    <>
    <GlobleCotext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Category" element={<CategoryPage/>}/>
          <Route path={`/SingleHotelView/:id`} element={<SingleHotelView/>} />
          {/* <Route path="/login" component={Login} /> */}

          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
      </GlobleCotext>
    </>
  );
}





// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/login" component={Login} />
//         {/* Add more routes for other pages */}
//       </Switch>
//     </Router>
//   );
// };



export default App;
