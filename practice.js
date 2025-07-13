// // function customRender(reactElement, Container){
// //   domElement = document.createElement(reactElement.type)
// //   domElement.innerHTML = reactElement.children
// //   domElement.setAttribute("href", reactElement.props.href)
// //   domElement.setAttribute("target", reactElement.props.target)
// // }

// // container.appendChild(domElement)


// domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.children
// for(const prop in reactElement.props){
//     if(prop == 'children'){
//         domElement.setAttribute(prop, reactElement.props[prop] )
//     }
//     mainContainer.appendChild(domElement)
// }











// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: " click me to visit google"
// }

// mainContainer = document.querySelector("#root")
// customRender(reactElement, mainCont)



// Hey 


// 02Counter practice::


// import { useState } from "react";



// function App(){
    


//     [counter, setCounter] = useState(15);

//     // let counter = 15;
    
//     addvalue = ()=> {
//         console.log("clicked", counter);
//         counter = counter + 1;
//         setCounter(counter);
//     }

//     removevalue = () => {
//         console.log("clicked", counter)
//         counter = counter - 1;
//         setCounter(counter);
//     }






    return(
    <>
    
    <h1>Chai aur code</h1>
    <h2>Counter value: {counter}</h2>    
    
    
    <button onClick={addvalue}
    >Add value</button>
    <button onclick={removevalue}
    >Remove value</button>
    </>
    )

}


