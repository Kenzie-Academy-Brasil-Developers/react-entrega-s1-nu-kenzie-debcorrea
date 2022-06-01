import "../../App.css";
import "../../css/reset.css";
import Header from "../../components/Header";
import Form from "../../components/Form";
import TotalMoney from "../../components/TotalMoney";
import Navigation from "../../components/Navigation";
import List from "../../components/List";
import EmptyCard from "../../components/EmptyCard";
import { useState } from "react";
import React from "react";

function Home() {
  const [listTransactions, setListTransactions] = useState([]);

  const [filter, setFilter] = useState("Todos");

  function id() {
    const ID = "id-" + Math.random().toString(16).slice(2);
    return ID;
  }

  const removeTransaction = (removeTrs) => {
    const removeItem = listTransactions.filter(
      (transaction) => transaction.id !== removeTrs.id
    );
    setListTransactions(removeItem);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="formContainer">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            id={id}
          />
          {listTransactions.length > 0 && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </div>
        <div className="navigationContainer">
          <Navigation setFilter={setFilter} />
          {listTransactions.length > 0 ? (
            <List
              listTransactions={listTransactions}
              filter={filter}
              removeTransaction={removeTransaction}
            />
          ) : (
            <EmptyCard />
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
