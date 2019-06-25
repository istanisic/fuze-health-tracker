import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddWeightForm } from "./components/AddWeightForm/AddWeightForm";
import { AddMealForm } from "./components/AddMealForm/AddMealForm"
import { List } from "./components/List/List";
import { OrderByDate } from "./components/OrderByDate/OrderByDate";
import Instructions from "./Instructions";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

const initialRecords = [{id: 1, type:"meal", desc: "Spaghetti", date: Date.now() }, {id: 2, type:"weight", desc: "100", date: Date.now() }]

function App() {
  const [records, setRecords] = useState(initialRecords);
  const [order, setOrder] = useState("newest");

  const onAddMeal = meal => {
    setRecords([...records, {id: records.length + 1, type:"meal", desc: meal, date: Date.now() }]);
  };

  const onAddWeight = weight => {
    setRecords([...records, {id: records.length + 1, type:"weight", desc: weight, date: Date.now() }]);
  };

  const onOrderBy = order => {
    setOrder(order);
  }

  return (
    <div className="App">
      <Instructions />
      <h2>Health Tracker</h2>
      <div className="container">
        <div className="row">
          <div>
            <AddMealForm onAddMeal={onAddMeal} />
          </div>
          <div>
            <AddWeightForm onAddWeight={onAddWeight} />
          </div>
          <div>
            <OrderByDate onOrderBy={onOrderBy} />
          </div>
        </div>
      </div>
      <List records={records} orderBy={order}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
