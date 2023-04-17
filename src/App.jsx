import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./router/Routers";
import { SavatContext } from "./context/savatContext";

function App() {
  const [filter, setFilter] = useState([]);
  const [savat, setSavat] = useState([])
  const [likes,setLikes] =useState([])
  return (

    <>
      <SavatContext.Provider value={{ savat, setSavat, filter, setFilter, likes ,setLikes}}>
        <Header />
        <Routers />
        <Footer />
      </SavatContext.Provider>
    </>
  );
}

export default App;
