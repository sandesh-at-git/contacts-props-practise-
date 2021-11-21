import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Contact from "./contacts";
ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App
      name={Contact[0].name}
      img={Contact[0].imgURL}
      phone={Contact[0].phone}
      email={Contact[0].email}
    />
    <App
      name={Contact[1].name}
      img={Contact[1].imgURL}
      phone={Contact[1].phone}
      email={Contact[1].email}
    />
    <App
      name={Contact[2].name}
      img={Contact[2].imgURL}
      phone={Contact[2].phone}
      email={Contact[2].email}
    />
    <App
      name={Contact[3].name}
      img={Contact[3].imgURL}
      phone={Contact[3].phone}
      email={Contact[3].email}
    />
    <App
      name={Contact[4].name}
      img={Contact[4].imgURL}
      phone={Contact[4].phone}
      email={Contact[4].email}
    />
    <App
      name={Contact[5].name}
      img={Contact[5].imgURL}
      phone={Contact[5].phone}
      email={Contact[5].email}
    />
    <App
      name={Contact[6].name}
      img={Contact[6].imgURL}
      phone={Contact[6].phone}
      email={Contact[6].email}
    />

  </div>,
  document.getElementById("root")
);
