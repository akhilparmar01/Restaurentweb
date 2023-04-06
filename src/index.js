import React from "react";
import ReactDOM from "react-dom/client";


/* <div class="header">
<ul>
    <li>About us </li>
    <li>Support </li>
    <li>Home</li>
</ul>
</div> */

const heading =React.createElement(
    "h1",
    {
id:"title",
key:"h2",
    },
    "Namsatey React",

);
const heading2=<h1 id="title" key="h2">Namstey React</h1>


const HeaderComponenent = () =>{
    return <h1>Namate React Functional Componenent</h1>
};


const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the element inside the the root 

// async defer
root.render(heading);


// ReactDom.render(<h1>Hellow World!!</h1>,document.getElementById("root"));




