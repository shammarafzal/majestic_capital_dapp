import React from "react";
import Body from "./components/body/Body.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Mansions from "./components/mansions/Mansions";

const App = ()=>{
    return(
        <>
            <Header />
            <Mansions />
            <Footer />
        </>
    )
}
export default App