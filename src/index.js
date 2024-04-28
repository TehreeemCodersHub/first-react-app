import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // Correct import statement
import "./index.css";

// first-react-app;

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const data__value = {color:"red",fontSize:"120px"};
  // !we will also use styled component and then we have a css that really belong to single component

  const data__value = {};
  return (
    <div className="header">
      <h1 style={data__value}>Fat React Pizza CO.</h1>
    </div>
  );
}
function Menu() {
  // const pizzas = pizzaData;
  // const pizzas = [];

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* 3rdway to do that */}
      {/* we only want to render this list if we have pizza in menu  */}

      {/*!falsy statement  */}
      {/* {pizzas && (
        <ul className=" pizzas">
          {pizzas.map((pizza) => {
            return <Pizza pizzaobj={pizza} key={pizza.name} />;
          })}
        </ul>
      )} */}

      {/* conditionla rendering method two */}

      {pizzaData ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className=" pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaobj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p> We are still working on our menu Please come back later :) </p>
      )}

      {/* if else does not produce any values  */}

      {/* {pizzaData.map((pizza) => (
        // !2nd way to do that
        <Pizza
          name={pizza.name}
          ingridient={pizza.ingridient}
          price={pizza.price}
          photoName={pizza.photoName}
        />
      ))} */}
      {/* !1st way to do that */}
      {/* <Pizza
        name="Pizza spinaci"
        ingridient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={10}
      /> */}
      {/* <Pizza
        name="Focaccia"
        ingridient="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaobj }) {
  // if (pizzaobj.soldOut) return <h1> This Pizza has been sold out</h1>;
  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt="pizza" />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        {/* {pizzaobj.soldOut ? <span>SOLD OUT</span> : <span>pizzaobj.price</span>} */}
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
      </div>
    </li>
  );
}
function Footer(props) {
  //   return React.createElement(
  //     "footer",
  //     null,
  //     " Were open from 12:00 to 22:00. Come visit us or order online"
  //   );
  console.log("i am containg all the props of  " + props);
  const get__hour = new Date().getHours();
  console.log(get__hour);
  const open__hour = 8;
  const close__hour = 22;
  const isOpen = get__hour >= open__hour && get__hour <= close__hour;
  console.log("Is cafe is open: " + isOpen);

  //   if (get__hour >= open__hour && get__hour <= close__hour) {
  //     alert("we are currently open here");
  //   } else {
  //     alert("we are currently closed here");
  //   }

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} we are currently open */}
      {/* {isOpen && (
        <div className=" order">
          <p>
            we are open until {close__hour}: 00 Come Visit us or Order online
          </p>
          <button className="btn">Order</button>
        </div>
      )} 
      
 if true then 2nd value will be executed
*/}

      {isOpen > 0 ? (
        <Order closeHour={close__hour} openHour={open__hour} />
      ) : (
        <div>
          <p>
            {" "}
            We are happy to welcome you between {open__hour}:00 to {close__hour}
            :00{" "}
          </p>
        </div>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className=" order">
      <p>
        we are open until {closeHour}: 00 Come Visit us till {openHour} or Order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// denclose in the sturic mode in order to double check the
// it will render all component twice in order to check b ugs
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// !fregment
// !let us to make some group some elements without leaving any trace in the html tree

// !Component
// !components are the javascript functions so that we write any kind of javascript inside the component
// !building blocks of the user interface---render the view of each coimponent and make a user interface
// !every component has its own
// ! 1)data , logic and appearcnce
// !all react application made up of component

// !jsx
// !Behind the scene all the jsx is converted into many nested react function call
// !jsx is a declraive sytax  imparitive or declartive
//! imparitive?? ---> in this approach we tell the browser how to do things(meaning in vanila javascript when we try to build ui --slect mnually element --traverse the dom and attach the event handler then each time something happen in the app like click on the browser we give browser ste by stp instruction or doing all thing in complex data its treally difficult to do that why we are using react library)
// !declrtive ---> what we want to see on the screen(but not how to dio it step by step) that why react use declrative approach describe what should ui look all the time based on the current data(props and state) that is in the componnet(props) all the things ahppen with dom mainpulation no class list no event listner u i khud ba khud syncronize ho jati h data k sth
// !we can not add if else statement and for and switch statement
// !a piece of jsx produce a javascript expression(and jsx is just like javascript expression) -->jsx is simply converted to a create element function call
// !we can aslo write in the curly braces javascript expression
// !place the jsx in the other component

// !props
// !how we pass data between componnt from parent to child
// !pass the data from the parent compnment and received it to the child component
// !we imagine props as settings that can use to make a parent component control how its parent component look like and how it should work
// !props contain all the object data that we pass in even we did nort pass anynthing in it

// !state

// !react renders a component based on its data and that alwys ui kept in sync
// !state is internal component data that can be updated by component logic so by the componnt itself
// !while props is the data that is coming from the parent componrnt
// !props are immutable becaus the data has benn come from parent that can not be changes by its child
// !if u want to make mutate props u need to use the state (because state is for data that changes over time)

// !one way data flow  --->easier to understand, easy to debug,way more control ovwer data(two way less efficient and less performance)
// !pass state to the parent component

// !rendering lists
// !key list needed for performance optimization
//  !we have an array and we want to create component for each element of the array
// !1st method => simple componnt likh do
// !2nd method =>  whi sa item dot kr k baj do
// !3rd method => object return kr do or wo khud hi us ma sa nikal ly ga

// !==> Conditionla Rendering

// ! display somthing in the footer if the resturant is open render the component based on the condition
// !basicallky rendering somepiece of UI and the condition is only the resturant is ipen or not--and it only works becuse of short curcuting

// ! ===> short circuting Method
// !it will immediately return the first value and it did not even look to the second value
// !the end operator short circuits so when the first bvalue is false then it will immediatle return the first value
// !when the first value is true it will automatically  return the second operand
// !falsy value will be 0 , '',null,undefine

// ! && Operator
// ! ===> in && operator  fasly value k liya 1st value return krta h
// ! ===> in && operator  tuely value k liya 2nd value return krta h
// ! || Operator
// ! ===> in || operator  fasly value k liya 2nd value return krta h
// ! ===> in || operator  tuely value k liya 1st value return krta h
// ! && falsy__value: flase: true---> 1st value
// ! && truly__value: true: flase---> 2nd value
// !finally make our Component Do Something

console.log(true && "somthing with and opertaor return 1st value ");
console.log(true || "Something with tue value");

// ! ===> states Inroduction
// !How to Handel events in React and How to update user interface using teh extremely important concepts called states

// !Git Command
// ?it is the branch in your repository that you can use to store your built website
