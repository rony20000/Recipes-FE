import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./actions/recipes";

import "./index.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
