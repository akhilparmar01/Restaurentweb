import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { IMG_CDN_URL } from "./contants";



const AppLayout = () => {
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
</>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDom.render(<h1>Hellow World!!</h1>,document.getElementById("root"));

root.render(<AppLayout />);


