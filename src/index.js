import React from "react";
import ReactDOM from "react-dom/client";


/* <div class="header">
<ul>
    <li>About us </li>
    <li>Support </li>
    <li>Home</li>
</ul>
</div> */

// const title =(
//     <h1 id="title" key="h2">
// Namstey Hero
//     </h1>
// );


// cpmposing component
// const HeaderComponent  =  () => {
//     return(
//          <div>
         
//      {title}
//          <h1>Nmaste React function componrent</h1>
//     <h2>How are you my friend</h2>
//     </div>
//     );
// };

const Text =(
    <inpute type="text" placeholder="search.."  key="h3">
Namstey Hero
    </inpute>
);



const HeaderComponent  =  () => {
        return(
            
            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            
          </div>
        );
    };



const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDom.render(<h1>Hellow World!!</h1>,document.getElementById("root"));

root.render(<HeaderComponent />);


