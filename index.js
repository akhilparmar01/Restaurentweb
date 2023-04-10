import React from "react";
import ReactDOM from "react-dom/client";


/* <div class="header">
<ul>
    <li>About us </li>
    <li>Support </li>
    <li>Home</li>
</ul>
</div> */

// const heading =React.createElement(
// <h1 id="title" key="h2">Namatey react</h1>

// );
// const heading2=<h1 id="title" key="h2">Namstey React</h1>

// React component 
//- functional - new - i will use this most of the time.
// Name of the component start with the capital letter

// const HeaderComponent2 =() =>(
//      <div>
//      <h1>Nmaste React function 
//        componrent</h1>
//     <h2>How are you my friend</h2></div>

// );

const title =(
    <h1 id="title" key="h2">
Namstey Hero
    </h1>
);



const HeaderComponent  =  () => {
    return(
         <div>
         <h1>Nmaste React function componrent</h1>
    <h2>How are you my friend</h2>
    </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the element inside the the root 

// async defer
root.render(<HeaderComponent />);


// ReactDom.render(<h1>Hellow World!!</h1>,document.getElementById("root"));




